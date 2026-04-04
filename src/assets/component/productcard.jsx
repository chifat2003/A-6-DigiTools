// import React, { Component } from 'react';
// import { useState } from "react";


// class Productcard extends Component {
//     render({product}) {
//             const [isSubscribed, setIsSubscribed] = useState(false);


import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from "react";

function Productcard({ product, cartProduct, setCartProduct }) {
    const [isSubscribed, setIsSubscribed] = useState(false)
    const handleSubscribe = () => {
        setIsSubscribed(true);
        setCartProduct([...cartProduct, product]);
        toast("Item added to cart!");

    }

    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                <div className="flex justify-end">
                    <span className="badge badge-xs badge-warning">{product.tag}</span>
                </div>
                <img className='h-40 w-40 object-contain' src={product.icon} alt="" />
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <p className='text-black'>{product.description}</p>
                    <span className="text-xl">$</span>{product.price}{product.period}
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Unlimited AI generations</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>50+ writing templates</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Grammar & tone checker</span>
                    </li>
                </ul>

                <div className="mt-6">
                    <button onClick={handleSubscribe} className="btn bg-purple-500 text-white btn-block rounded-full ">
                        {isSubscribed ? 'Subscribed' : 'Subscribe Now'}
                        <ToastContainer />


                    </button>
                </div>
            </div>
        </div>


    );
}


export default Productcard;