import { useState } from "react";
import { getSummary } from "../useGemini";

function TextSummarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState([]);

  const handleSummarize = async () => {
    const result = await getSummary(text);
    setSummary(result);
  };

  return (
    <div className="p-4 max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Text Summarizer</h1>
      <textarea
        className="w-full border p-2 rounded"
        rows={6}
        placeholder="Paste your long text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={handleSummarize}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Summarize
      </button>

      <ul className="mt-4 list-disc ml-5">
        {summary.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default TextSummarizer;
