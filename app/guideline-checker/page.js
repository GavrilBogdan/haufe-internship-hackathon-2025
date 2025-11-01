"use client";
import { useState } from "react";
import Link from "next/link";

export default function GuidelineChecker() {
  const [code, setCode] = useState("");
  const [guideline, setGuideline] = useState("PEP8 (Python)"); // Default guideline
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setOutput("");
    setError("");

    try {
      const res = await fetch("/api/run-linter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, guideline }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error processing code.");
      }
      setOutput(data.result);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="guideline-checker" className="my-[7rem]">
      <div className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl font-bold mb-4 text-white text-center">
          Code Guideline Analyzer
        </h1>

        {/* Guideline Selector */}
        <label
          htmlFor="guideline"
          className="block text-lg font-medium text-white mb-2"
        >
          Select Coding Standard:
        </label>
        <select
          id="guideline"
          value={guideline}
          onChange={(e) => setGuideline(e.target.value)}
          className="w-full p-3 border rounded-lg text-black mb-4 bg-indigo-600"
        >
          <option>PEP8 (Python)</option>
          <option>Google Style Guide (JavaScript)</option>
          <option>Airbnb Style Guide (JavaScript)</option>
          <option>Microsoft C# Coding Conventions</option>
        </select>

        {/* Code Input */}
        <h2 className="text-2xl font-bold mb-4 text-white">Paste your code:</h2>
        <textarea
          rows={15}
          className="w-full p-3 border rounded-lg font-mono text-sm text-white shadow-[0_0_16px_5px_rgba(0,255,255,0.7)]"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>

        <div className="flex space-x-4">
          <button
            onClick={handleSubmit}
            className="mt-3 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition"
          >
            {loading ? "Analyzing..." : "Check Violations"}
          </button>
          <Link
            href="/"
            className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Back to main page
          </Link>
        </div>

        {/* --- Output Area --- */}
        {error && (
          <div className="mt-5 p-3 border rounded-lg bg-red-100 text-red-700 whitespace-pre-wrap">
            <strong>Error:</strong> {error}
          </div>
        )}
        {output && (
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-white">
              Analysis Results:
            </h3>
            <pre className="p-3 border rounded-lg bg-gray-100 whitespace-pre-wrap font-mono text-sm">
              {output}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
