import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar w-7/8 mx-auto">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Products</a></li>
                                <li><a>Features</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>Testimonials</a></li>
                                <li><a>FAQ</a></li>
                            </ul>
                        </div>
                        <a className="text-purple-500 font-semibold text-2xl">DigiTools</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a className='hover:bg-white hover:shadow-none hover:text-purple-500'>Products</a></li>
                            <li><a className='hover:bg-white hover:shadow-none hover:text-purple-500'>Features</a></li>
                            <li><a className='hover:bg-white hover:shadow-none hover:text-purple-500'>Pricing</a></li>
                            <li><a className='hover:bg-white hover:shadow-none hover:text-purple-500'>Testimonials</a></li>
                            <li><a className='hover:bg-white hover:shadow-none hover:text-purple-500'>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-4">
                        <a className="btn rounded-full bg-white border-0 shadow-none hover:bg-purple-500 hover:text-white">Login</a>
                        <button class="btn rounded-full bg-purple-500 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;