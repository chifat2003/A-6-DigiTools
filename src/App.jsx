import './App.css'
import Navbar from './assets/component/navbar';
import Hero from './assets/component/hero';
import Stats from './assets/component/stats';
import UserStep from './assets/component/user-step';
import Package from './assets/component/package';
import Footer from './assets/component/footer';
import Newslater from './assets/component/newslater';
import Product from './assets/component/product';
import Cart from './assets/component/cart';
import { useState } from 'react';



const getProducts = async () => {
  const res = await fetch('/product.json');
  return res.json();
}

const promiseProducts = getProducts();



function App() {


  const [activeProducts, setActiveProducts] = useState("product");
  const [cartProduct, setCartProduct] = useState([]);





  return (
    <>
      <Navbar />
      <Hero />
      <Stats />

      <div className='flex justify-center items-center gap-4'>
        <div role="tablist" className="tabs tabs-box gap-4">
          {/* name of each tab group should be unique */}
          <div className="tabs tabs-box">
            <input onClick={() => setActiveProducts("product")} type="radio" name="my_tabs_1" className="tab px-10 rounded-full" aria-label="Product" defaultChecked />
            <input onClick={() => setActiveProducts("cart")} type="radio" name="my_tabs_1" className="tab px-10 rounded-full" aria-label="Cart" />
          </div>
        </div>
      </div>
      {activeProducts === "product" && <Product promiseProducts={promiseProducts} cartProduct={cartProduct} setCartProduct={setCartProduct} />}
      {activeProducts === "cart" && <Cart cartProduct={cartProduct} setCartProduct={setCartProduct} />}

      <UserStep />
      <Package />
      <Newslater />
      <Footer />



    </>
  )
}


export default App
