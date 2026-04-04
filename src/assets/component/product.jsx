import { use } from 'react';
import Productcard from './productcard';

const Product = ({ promiseProducts, cartProduct, setCartProduct }) => {

    const products = use(promiseProducts)



    return (
        <div className='bg-base-200 py-16'>

            <div className='w-4/5 mx-auto bg-base-200'>
                <div className='flex flex-col justify-center'>
                    <h2 className='text-3xl font-bold text-center mb-3'>Our Products</h2>
                    <p className='text-center text-gray-700 mb-8'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                </div>

                <div>
                    <div className='my-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center'>
                            {products.map(product => (
                                <Productcard product={product} cartProduct={cartProduct} setCartProduct={setCartProduct} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default Product;