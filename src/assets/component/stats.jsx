import React, { Component } from 'react';

class Stats extends Component {
    render() {
        return (
            <div className='bg-purple-500 '>
                <div className="w-4/5 mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 py-10 text-white">
                    <div className="stat text-center">
                        <div className="stat-value">50K+</div>
                        <div className="stat-desc text-white text-lg">Active Users</div>
                    </div>
                    <div className="stat text-center">
                        <div className="stat-value">20+</div>
                        <div className="stat-desc text-white text-lg">Premium Tools</div>
                    </div>
                    <div className="stat text-center">
                        <div className="stat-value">4.9</div>
                        <div className="stat-desc text-white text-lg">Rating</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Stats;