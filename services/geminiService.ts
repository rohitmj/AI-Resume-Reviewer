
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getPrompt = (resumeText: string): string => `
You are a helpful and professional resume reviewer assistant. Your tone should be encouraging, constructive, and avoid being overly critical.

A user has provided their resume content below. Please perform a comprehensive review with the following structure. Use markdown for formatting.

**Resume Content to Review:**
---
${resumeText}
---

**Your Review:**

## 🌟 Strengths
*   [Highlight 2-3 key strengths from the resume. Be specific and tie them to potential job roles.]

## 🔍 Areas for Improvement
*   [Point out 2-3 areas for improvement. Examples: missing keywords for a target role, vague descriptions, lack of quantifiable impact (e.g., "managed projects" vs. "managed 5 projects with a total budget of $50k, resulting in a 15% increase in efficiency").]

## 💡 Modernization Tips (Tech Focus)
*   [Provide actionable tips to align the resume with modern job market trends, especially for tech roles. Suggest adding a "Skills" section with technologies, linking to a GitHub/Portfolio, or tailoring language for Applicant Tracking Systems (ATS).]

## ✍️ Formatting & Tone Suggestions
*   [Offer suggestions for improving formatting (e.g., using consistent verb tenses, using bullet points with action verbs) and professional tone.]

**Final Encouragement:**
[End with a brief, positive, and encouraging closing statement.]

Keep the entire review concise and highly actionable. Use bullet points for clarity and bold text for emphasis.
`;

export const reviewResume = async (resumeText: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: getPrompt(resumeText),
        });
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
            // Add more specific error messages if possible
            if (error.message.includes('API key not valid')) {
                throw new Error('The provided API key is not valid. Please check your configuration.');
            }
        }
        throw new Error('An unexpected error occurred while communicating with the AI service.');
    }
};
