import React, { Component } from 'react';

class Package extends Component {
    render() {
        return (
            <div>
                <div className='w-4/5 mx-auto py-16'>
                    <h2 className='text-3xl font-bold text-center mb-3'>Choose Your Package</h2>
                    <p className='text-center text-gray-700 mb-8'>Select the perfect plan to access our premium digital tools and boost your productivity.</p>

                    <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>

                        <div className="card w-96 bg-base-100 shadow-sm">
                            <div className="card-body">
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-bold">Starter</h2>
                                    <span className="text-xl">$0/mo</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Access to 10 free tools</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Basic templates</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Community support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>1 project per month</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="btn btn-primary btn-block">Subscribe</button>
                                </div>
                            </div>
                        </div>





                        <div className="card w-96 bg-purple-500 shadow-sm">
                            <div className="card-body">
                                <span className="badge badge-xs badge-warning">Most Popular</span>
                                <div className="flex justify-between">
                                    <h2 className="text-3xl  text-white font-bold">Premium</h2>
                                    <span className="text-xl text-white">$29/mo</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className=' text-white'>High-resolution image generation</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className=' text-white'>Customizable style templates</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className=' text-white'>Batch processing capabilities</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className=' text-white'>AI-driven image enhancements</span>
                                    </li>
                                    <li className="opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="line-through  text-white">Seamless cloud integration</span>
                                    </li>
                                    <li className="opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="line-through  text-white">Real-time collaboration tools</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="btn bg-white text-purple-500 btn-block">Subscribe</button>
                                </div>
                            </div>
                        </div>





                        <div className="card w-96 bg-base-100 shadow-sm">
                            <div className="card-body">
                                <div className="flex justify-between">
                                    <h2 className="text-3xl font-bold">Enterprise</h2>
                                    <span className="text-xl">$99/mo</span>
                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>High-resolution image generation</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Customizable style templates</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Batch processing capabilities</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>AI-driven image enhancements</span>
                                    </li>
                                    <li className="opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="line-through">Seamless cloud integration</span>
                                    </li>
                                    <li className="opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="line-through">Real-time collaboration tools</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="btn btn-primary btn-block">Subscribe</button>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        );
    }
}

export default Package;