
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import ResumeInput from './components/ResumeInput';
import ReviewOutput from './components/ReviewOutput';
import { reviewResume } from './services/geminiService';

const App: React.FC = () => {
    const [resumeText, setResumeText] = useState<string>('');
    const [review, setReview] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleReviewRequest = useCallback(async () => {
        if (!resumeText.trim()) {
            setError('Please paste your resume content before reviewing.');
            return;
        }

        setIsLoading(true);
        setError('');
        setReview('');

        try {
            const result = await reviewResume(resumeText);
            setReview(result);
        } catch (e) {
            const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
            setError(`Failed to get review. ${errorMessage}`);
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }, [resumeText]);

    return (
        <div className="min-h-screen bg-slate-900 font-sans flex flex-col">
            <Header />
            <main className="flex-grow p-4 md:p-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                        <div className="flex flex-col">
                           <h2 className="text-xl font-semibold text-slate-200 mb-4">Your Resume</h2>
                            <ResumeInput 
                                resumeText={resumeText} 
                                setResumeText={setResumeText} 
                                onReview={handleReviewRequest} 
                                isLoading={isLoading} 
                            />
                        </div>
                        <div className="flex flex-col">
                           <h2 className="text-xl font-semibold text-slate-200 mb-4">AI Feedback</h2>
                           <ReviewOutput review={review} isLoading={isLoading} error={error} />
                        </div>
                    </div>
                </div>
            </main>
            <footer className="text-center p-4 text-slate-500 text-sm">
                <p>Powered by Google Gemini. For educational and demonstrative purposes only.</p>
            </footer>
        </div>
    );
};

export default App;
