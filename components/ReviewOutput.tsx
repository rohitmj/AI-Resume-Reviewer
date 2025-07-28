
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { LoaderIcon, AlertTriangleIcon, ClipboardCheckIcon } from './icons';

interface ReviewOutputProps {
    review: string;
    isLoading: boolean;
    error: string;
}

const ReviewOutput: React.FC<ReviewOutputProps> = ({ review, isLoading, error }) => {
    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="flex flex-col items-center justify-center h-full text-slate-400">
                    <LoaderIcon className="h-10 w-10 animate-spin text-cyan-400 mb-4" />
                    <p className="text-lg font-medium">Analyzing your resume...</p>
                    <p className="text-sm">This may take a few moments.</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="flex flex-col items-center justify-center h-full text-red-400">
                    <AlertTriangleIcon className="h-10 w-10 mb-4" />
                    <p className="text-lg font-semibold">An Error Occurred</p>
                    <p className="text-center max-w-md">{error}</p>
                </div>
            );
        }

        if (review) {
            return (
                 <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none prose-h2:text-cyan-400 prose-h2:border-b prose-h2:border-slate-600 prose-h2:pb-2 prose-strong:text-slate-100 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-ul:list-disc prose-li:my-1"
                >
                    {review}
                </ReactMarkdown>
            );
        }

        return (
            <div className="flex flex-col items-center justify-center h-full text-slate-500">
                <ClipboardCheckIcon className="h-12 w-12 mb-4" />
                <h3 className="text-lg font-medium">Your resume feedback will appear here.</h3>
                <p className="text-sm text-center max-w-sm">
                    Paste your resume on the left and click "Review My Resume" to get started.
                </p>
            </div>
        );
    };

    return (
        <div className="bg-slate-800 rounded-lg shadow-lg p-6 h-full overflow-y-auto">
            {renderContent()}
        </div>
    );
};

export default ReviewOutput;
