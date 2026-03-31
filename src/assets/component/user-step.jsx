import React, { Component } from 'react';

class UserStep extends Component {
    render() {
        return (
            <div className='bg-base-200 py-16'>
                <div className=' w-4/5 mx-auto'>
                    <h2 className='text-3xl font-bold text-center mb-3'>Get Started in 3 Steps</h2>
                    <p className='text-center text-gray-700 mb-8'>Start using premium digital tools in minutes, not hours.</p>



                    <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
                        <div className="card w-96 bg-base-100 shadow-sm m-4">
                            <div className="card-body">
                                <div className="flex justify-end">
                                    <span className="py-2 px-3 rounded-full text-white items-center text-center bg-purple-500 ">01</span>
                                </div>
                                <div className='flex justify-center'>
                                    <img src="/src/assets/user.png" alt='User' className='bg-gray-200 rounded-full p-4 w-20 h-20 mb-4' />
                                </div>
                                <div className="text-center pb-8">
                                    <p className='font-bold text-center text-xl'>Create Account</p>
                                    <p className='text-center text-gray-700'>Sign up for free in seconds. No credit card required to get started.</p>
                                </div>
                            </div>
                        </div>




                        <div className="card w-96 bg-base-100 shadow-sm m-4">
                            <div className="card-body">
                                <div className="flex justify-end">
                                    <span className="py-2 px-3 rounded-full text-white items-center text-center bg-purple-500 ">02</span>
                                </div>
                                <div className='flex justify-center'>
                                    <img src="/src/assets/package.png" alt='User' className='bg-gray-200 rounded-full p-4 w-20 h-20 mb-4' />
                                </div>
                                <div className="text-center pb-8">
                                    <p className='font-bold text-center text-xl'>Choose Products</p>
                                    <p className='text-center text-gray-700'>Browse our catalog and select the tools that fit your needs.</p>
                                </div>
                            </div>
                        </div>





                        <div className="card w-96 bg-base-100 shadow-sm m-4">
                            <div className="card-body">
                                <div className="flex justify-end">
                                    <span className="py-2 px-3 rounded-full text-white items-center text-center bg-purple-500 ">03</span>
                                </div>
                                <div className='flex justify-center'>
                                    <img src="/src/assets/rocket.png" alt='User' className='bg-gray-200 rounded-full p-4 w-20 h-20 mb-4' />
                                </div>
                                <div className="text-center pb-8">
                                    <p className='font-bold text-center text-xl'>Start Creating</p>
                                    <p className='text-center text-gray-700'>Download and start using your premium tools immediately.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default UserStep;