// import { use } from "react";


const Cart = ({cartProduct, setCartProduct}) => {
    return (
        <div className="w-4/5 mx-auto border border-gray-300 p-6 rounded-lg">

        <h2 className="text-xl font-semibold mb-3">Your Cart</h2>

        {            cartProduct.map(item => 

                            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center gap-4">
                    
                    <div className="flex items-center gap-4">
                        <img className="h-16 w-16 object-contain" src={item.icon} alt={item.name} />
                        <div>
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="text-gray-600">${item.price}/mo</p>
                        </div>
                    </div>
                    <button onClick={() => setCartProduct(cartProduct.filter((_, i) => i !== cartProduct.indexOf(item)))} className="btn bg-red-500 text-white">Remove</button>
                </div>
            </div>
        )
        }

        <div className="flex justify-between">
            <p className="font-bold text-3xl my-4">Total: ${cartProduct.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
            <button onClick={()=> setCartProduct([])} className="btn bg-green-500 text-white mt-6">Proceed to Checkout</button>

        </div>





        </div>
    );
};


export default Cart;