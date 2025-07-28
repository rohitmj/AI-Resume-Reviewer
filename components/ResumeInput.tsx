
import React from 'react';
import { SparklesIcon, LoaderIcon } from './icons';

interface ResumeInputProps {
    resumeText: string;
    setResumeText: (text: string) => void;
    onReview: () => void;
    isLoading: boolean;
}

const ResumeInput: React.FC<ResumeInputProps> = ({ resumeText, setResumeText, onReview, isLoading }) => {
    return (
        <div className="bg-slate-800 rounded-lg p-1 shadow-lg flex flex-col flex-grow">
            <textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your resume content here..."
                className="w-full h-full flex-grow bg-slate-800 text-slate-300 p-4 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow"
                disabled={isLoading}
                rows={20}
            />
            <div className="p-3 mt-auto border-t border-slate-700">
                <button
                    onClick={onReview}
                    disabled={isLoading || !resumeText}
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
                >
                    {isLoading ? (
                        <>
                            <LoaderIcon className="animate-spin -ml-1 mr-3 h-5 w-5" />
                            Analyzing...
                        </>
                    ) : (
                        <>
                            <SparklesIcon className="-ml-1 mr-2 h-5 w-5" />
                            Review My Resume
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ResumeInput;
