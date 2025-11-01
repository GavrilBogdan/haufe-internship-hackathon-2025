"use client";
import { useState } from "react";

export default function CodeFix() {
  const [code, setCode] = useState("");
  const [fixedCode, setFixedCode] = useState(""); // Replaces 'output' for the code
  const [explanation, setExplanation] = useState(""); // New state for the explanation
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Specific state for errors

  const handleSubmit = async () => {
    setLoading(true);
    setFixedCode(""); // Clear previous results
    setExplanation("");
    setError("");

    try {
      const res = await fetch("/api/fix-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Handle errors from our API
        throw new Error(data.error || "Error processing code.");
      }

      // data.result is now an object: { fixedCode: "...", explanation: "..." }
      if (data.result && data.result.fixedCode && data.result.explanation) {
        setFixedCode(data.result.fixedCode);
        setExplanation(data.result.explanation);
      } else {
        throw new Error("Received an invalid response from the AI.");
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="AI" className="my-[7rem]">
      <div className="max-w-3xl mx-auto p-5">
        <h2 className="text-2xl font-bold mb-4 text-white">Paste your code:</h2>
        <textarea
          rows={10}
          className="w-full p-3 border rounded-lg font-mono text-sm text-white shadow-[0_0_16px_5px_rgba(255,0,255,0.7)]"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
        <button
          onClick={handleSubmit}
          className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          {loading ? "Processing..." : "Fix Code"}
        </button>

        {/* --- NEW DISPLAY AREA --- */}

        {/* 1. Error Box */}
        {error && (
          <div className="mt-5 p-3 border rounded-lg bg-red-100 text-red-700 whitespace-pre-wrap">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* 2. Explanation Box (NEW!) */}
        {explanation && (
          <div className="mt-5 p-3 border rounded-lg bg-blue-50">
            <h3 className="text-lg font-semibold text-blue-800">
              AI Explanation:
            </h3>
            <p className="whitespace-pre-wrap">{explanation}</p>
          </div>
        )}

        {/* 3. Fixed Code Box (Upgraded) */}
        {fixedCode && (
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-white">Fixed Code:</h3>
            <pre className="p-3 border rounded-lg bg-gray-100 whitespace-pre-wrap font-mono text-sm">
              {/* We use <pre> for code formatting */}
              {fixedCode}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
