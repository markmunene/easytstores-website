// footer

import React from 'react';


const Footer = () => {
    return (
        <footer >
            <div className="row ">
                <div className="col-md-3">
                    <h3 style={{fontWeight:'800'}}>Easy stores</h3>
                    <p>automate stock monitoring and sales analysis in your business</p>

                </div>
                <div className="col-md-3 footer1">
                    <h3>Categories</h3>
                    <a href="#" className='footer-list'>product management</a><br />
                    <a href="#" className='footer-list'> Design / Creatives</a><br />
                    <a href="#" className='footer-list'>Marketing</a><br />
                    <a href="#" className='footer-list'>Development</a><br />
                    <a href="#" className='footer-list'>Business</a>

                </div>
                <div className="col-md-3 footer2">
                    <h3>About</h3>
                    <a href="#" className='footer-list'>About us</a><br />
                    <a href="#" className='footer-list'> The Team</a><br />
                    <a href="#" className='footer-list'>PartnerShips</a><br />
                    <a href="#" className='footer-list'>Finance Experts</a><br />
                    <a href="#" className='footer-list'>project Management</a>

                </div>
                <div className="col-md-3 footer3">
                    <h3>Follow us</h3>
                    <a href="#" className='footer-list'>Facebook</a><br />
                    <a href="#" className='footer-list'>twitter</a><br />
                    <a href="#" className='footer-list'>linkedin</a><br />
                    <a href="#" className='footer-list'>skype</a><br />
                   

                </div>
                
            </div>
            <div className="row w-100 bottom-banner">
                <div className="col-md-12">
                    <p className='text-center mt-2'>© 2021 Easy stores. All rights reserved</p>
                </div>
            </div>

        </footer>
    );
}
    
export default Footer;



