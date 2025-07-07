// It's my path:- src/hooks/useGemini.js
import { GoogleGenerativeAI } from '@google/generative-ai';
let VITE_GEMINI_API_KEY = "AIzaSyCbj-VZ1hTGZI7iThtMGBUZPn7IyvLg83Q"
const genAI = new GoogleGenerativeAI(VITE_GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY);

export const getBookRecommendations = async (title, author) => {
    const prompt = `Suggest 3 books similar to "${title}" by ${author}. Return in JSON format with title and author.`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    try {
        // this Finds the first '[' and the last ']'
        const jsonStart = text.indexOf('[');
        const jsonEnd = text.lastIndexOf(']') + 1;

        const jsonString = text.slice(jsonStart, jsonEnd);
        const json = JSON.parse(jsonString);
        return json;
    } catch (err) {
        console.error("Failed to parse Gemini response:", err, text);
        return [];
    }
};
