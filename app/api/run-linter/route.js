import { NextResponse } from "next/server";

const OLLAMA_URL =
  process.env.OLLAMA_URL || "http://localhost:11434/api/generate";

export async function POST(request) {
  try {
    const { code, guideline } = await request.json();

    if (!code || !guideline) {
      return NextResponse.json(
        { error: "Code and guideline are required." },
        { status: 400 }
      );
    }

    // --- THIS IS THE NEW "ANGRY" PROMPT ---
    // We are FORBIDDING the AI from giving a lazy answer.
    const prompt = `
    You are an extremely strict code reviewer. Your job is to find every single violation.
    Analyze the following code snippet against the "${guideline}" standard.
    
    You MUST find violations. This code is a test and is full of errors.
    DO NOT say "No violations found." That is a failed response.
    
    Go line-by-line and list every violation you see.

    Coding Standard: ${guideline}
    
    Code to Analyze:
    ${code}
    
    Violations List:
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
    let violations = data.response.trim();

    // Final check. If the AI still gives a lazy answer, override it.
    if (violations.toLowerCase().includes("no violations found")) {
      violations = "AI failed to find violations. This is a known issue.";
    }

    return NextResponse.json({ result: violations });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
