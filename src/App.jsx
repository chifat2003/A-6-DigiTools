import './App.css'
import Navbar from './assets/component/navbar';
import Hero from './assets/component/hero';
import Stats from './assets/component/stats';
import UserStep from './assets/component/user-step';
import Package from './assets/component/package';
import Footer from './assets/component/footer';

function App() {

  return (
    <>
      {/* <div>
        <p>Setup Done</p>
        <p className='btn flex justify-center mt-5 p-2'>Tailwind working</p>

      </div> */}
      <Navbar />
      <Hero />
      <Stats />
      <UserStep />
      <Package />
      <Footer />


    </>
  )
}

export default App
