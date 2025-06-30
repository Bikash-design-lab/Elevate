import { GoogleGenerativeAI } from '@google/generative-ai';

// const apiKey = import.meta.env.REACT_APP_GEMINI_API_KEY || import.meta.env.REACT_APP_GEMINI_API_KEY;
// console.log("API KEY:", apiKey); // Debug
const genAI = new GoogleGenerativeAI("AIzaSyBEOkJTeTuythXHRsFOoDpM9V-jB3Op12s");

export async function getSummary(text) {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
    Summarize the following text into 3–5 concise bullet points.
    Return it as a JSON array like:
    [ "Point 1", "Point 2", "Point 3" ]

    TEXT: ${text}
  `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const output = response.text();

    try {
        return JSON.parse(output);
    } catch {
        return ["Could not parse AI response", output];
    }
}
