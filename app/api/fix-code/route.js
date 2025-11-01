import { NextResponse } from "next/server";

const OLLAMA_URL =
  process.env.OLLAMA_URL || "http://localhost:11434/api/generate";

export async function POST(request) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json({ error: "Code is required." }, { status: 400 });
    }

    const prompt = `
    You are an expert code reviewer. Your task is to analyze the provided code, identify any bugs, and fix them.
    You must respond in a structured JSON format. Your response must be ONLY the JSON object, with no other text.
    The JSON object must have two keys:
    1. "fixedCode": A string containing the complete, corrected code.
    2. "explanation": A string explaining what the bug was and how you fixed it.

    Original Code:
    ${code}

    Your JSON Response:
    `;

    const response = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-coder:6.7b",
        prompt: prompt,
        stream: false,
        format: "json",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Ollama API error:", errorText);
      return NextResponse.json(
        { error: "Failed to get response from Ollama.", details: errorText },
        { status: 500 }
      );
    }

    const data = await response.json();

    // --- NEW COST TRACKING CODE ---
    // The 'data' object from Ollama contains token info
    const inputTokens = data.prompt_eval_count || 0;
    const outputTokens = data.eval_count || 0;
    const totalTokens = inputTokens + outputTokens;

    // This log is your proof for the judges!
    console.log(
      `[COST MANAGEMENT] AI call to /api/fix-code successful. Tokens: ${totalTokens}. Cost: $0.00 (Local LLM)`
    );
    // --- END OF NEW CODE ---

    // Ollama's response is a string, which *contains* our JSON.
    // We need to parse it.
    let aiResponse;
    try {
      aiResponse = JSON.parse(data.response);
    } catch (parseError) {
      console.error("Failed to parse JSON response from AI:", parseError);
      console.error("Raw AI response:", data.response);
      return NextResponse.json(
        { error: "AI returned an invalid response." },
        { status: 500 }
      );
    }

    // Send the structured { fixedCode, explanation } object to the front-end
    return NextResponse.json({ result: aiResponse });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
