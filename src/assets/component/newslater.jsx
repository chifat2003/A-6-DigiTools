import React, { Component } from 'react';

class Newslater extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="bg-purple-500 py-16">
                        <div className="w-4/5 mx-auto">
                            <h2 className="text-3xl font-bold text-white text-center mb-3">Ready to Transform Your Workflow?</h2>
                            <p className="text-center text-gray-300 mb-8">Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
                            <div className="flex justify-center">
                                <button className="btn bg-white text-purple-500 rounded-full">Explore Products</button>
                                <button className="btn bg-transparent text-white border border-white rounded-full ml-4">View Pricing</button>
                            </div>
                            <p className="text-center text-gray-300 py-2">14-day free trial • No credit card required • Cancel anytime</p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Newslater;