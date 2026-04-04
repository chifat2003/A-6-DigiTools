import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer sm:footer-horizontal bg-blue-950 text-base-content text-amber-50 p-10">
          <aside>
            <p className='text-3xl font-bold text-amber-50'>DigiTools</p>
            <p className='text-gray-300'>
              Premium digital tools for creators, professionals, and businesses. <br />
              Work smarter with our suite of powerful tools.
            </p>
          </aside>
          <nav className='text-white'>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className='text-white'>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className='text-white'>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav className='text-white'>
            <h6 className="footer-title">Social Links</h6>
            <div className='flex gap-4'>
              <img className='rounded-full h-10 w-10' src="/facebook.png" alt="Facebook Logo" />
              <img className='rounded-full h-10 w-10' src="/instagram.png" alt="Instagram Logo" />
              <img className='rounded-full h-10 w-10' src="/twiter.png" alt="Twitter Logo" />
            </div>
          </nav>
        </footer>
      </div>
    );
  }
}

export default Footer