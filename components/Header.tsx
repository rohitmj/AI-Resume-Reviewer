
import React from 'react';
import { BotIcon } from './icons';

const Header: React.FC = () => {
    return (
        <header className="bg-slate-900/70 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-10">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3">
                        <BotIcon className="h-8 w-8 text-cyan-400" />
                        <h1 className="text-2xl font-bold text-slate-100">AI Resume Reviewer</h1>
                    </div>
                    <p className="hidden md:block text-slate-400">Your personal career co-pilot</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
