import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src="/src/assets/banner.png"
                            className="max-w-sm rounded-lg shadow-sm" alt='Tech Banner Image'
                        />
                        <div>
                            <div class="badge badge-soft badge-primary rounded-full my-4"><span className='h-2 w-2 bg-purple-900 rounded-full'></span>New: AI-Powered Tools Available</div>
                            <h1 className="text-5xl font-bold">Supercharge Your<br /> Digital Workflow</h1>
                            <p className="py-6 w-7/10 text-gray-700">
                                Access premium Al tools, design assets, templates, and productivity software-all in one place. Start creating faster today. Explore Products
                            </p>
                            <div className="flex gap-4">
                                <button className="btn bg-purple-500 text-white rounded-full">Get Started</button>
                                <button className="btn btn-outline text-purple-500 border-purple-500 hover:bg-purple-500 hover:text-white rounded-full">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;