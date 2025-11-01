"use client";
import { useState } from "react";
import Link from "next/link";

// Mock data to show a "real" review
const mockReview = {
  id: 1,
  fileName: "src/utils/helpers.js",
  aiFeedback:
    "The 'find_item' function has a logic error. It returns 'False' inside the loop, so it only checks the first item. The 'return False' should be moved outside the loop.",
  comments: [
    { user: "Human Reviewer", text: "Good catch, AI. This is a critical bug." },
  ],
};

export default function Dashboard() {
  // We will store the comments in state just for the demo
  const [comments, setComments] = useState(mockReview.comments);
  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = (e) => {
    e.preventDefault();
    // Add the new comment to our state
    const commentToAdd = { user: "Me", text: newComment };
    setComments([...comments, commentToAdd]);
    setNewComment(""); // Clear the input box
  };

  return (
    <section id="dashboard" className="my-[7rem]">
      <div className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl font-bold mb-4 text-white text-center">
          Code Review Dashboard
        </h1>

        {/* The Review Block */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            File: {mockReview.fileName}
          </h2>

          {/* AI Feedback */}
          <div className="p-4 border border-blue-500 rounded-lg bg-blue-900 bg-opacity-30">
            <h3 className="text-lg font-semibold text-blue-300">
              🤖 AI Feedback:
            </h3>
            <p className="whitespace-pre-wrap">{mockReview.aiFeedback}</p>
          </div>

          {/* --- This is your Comment/Reply feature --- */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Discussion:
            </h3>

            {/* List of comments */}
            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <strong className="text-indigo-300">{comment.user}:</strong>
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>

            {/* Reply Form */}
            <form
              onSubmit={handleSubmitComment}
              className="mt-5 flex space-x-3"
            >
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Type your reply..."
                className="w-full p-3 border rounded-lg font-mono text-sm text-black"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                Reply
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
