# AI Resume Reviewer

A 5-minute AI-powered app that reviews resumes using Google AI Studio and Cloud Run.

## 🚀 What It Does

This app helps job seekers:
- Analyze resume content and structure
- Receive personalized feedback
- Understand strengths and weaknesses
- Compare their resumes against industry standards

## 🧠 Prompt Used

See [`prompt.txt`](./prompt.txt) for the exact prompt used in Google AI Studio.

## 🛠 Tech Stack

- **Google AI Studio** – For building and testing the AI prompt
- **Google Cloud Run** – For live deployment of the app

## 📂 Project Structure

```bash
.
├── components/
│   ├── Header.tsx
│   ├── icons.tsx
│   ├── ResumeInput.tsx
│   └── ReviewOutput.tsx
├── services/
│   └── geminiService.ts
├── .env.local
├── .gitignore
├── App.tsx
├── How long does it usually take you to.pptx
├── index.html
├── index.tsx
├── metadata.json
├── package.json
├── prompt.txt
├── README.md
├── tsconfig.json
└── vite.config.ts







