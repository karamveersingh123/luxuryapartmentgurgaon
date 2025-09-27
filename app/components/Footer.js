import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";


const Footer = () => {
  return (
    <>
    <footer className=" text-white pt-5" style={{background: '#000405'}}>
      <div className="container">
        <div className="row">

          {/* About Us */}
          <div className="col-md-4 mb-4">
            <h5>About Us</h5>
            <p style={{fontSize: '13px'}}>
              Luxury Apartment brings you a curated selection of premium
              properties, backed by trusted service, expert advice, and
              unmatched attention to detail.
            </p>

            {/* Social Links */}
            <div className="d-flex gap-3 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                <FaLinkedinIn />
              </a>
              <a href="https://wa.me/919717224411" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled" style={{fontSize: '13px'}}>
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/projects" className="text-white text-decoration-none">Projects</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled" style={{fontSize: '13px'}}>
              <li>Gurgaon, Haryana, India</li>
              <li><a href="tel:+919717224411" className="text-white text-decoration-none"><FaPhoneVolume />(+91) 9717-224-411</a></li>
              <li><a href="mailto:info@luxuryapartmentgurgaon.in" className="text-white text-decoration-none"><MdOutlineMail />
info@luxuryapartmentgurgaon.in</a></li>
            </ul>
          </div>

          {/* Recent Listings */}
          <div className="col-md-3 mb-4">
            <h5>Recent Listings</h5>
            <ul className="list-unstyled" style={{fontSize: '13px'}}>
              <li><a href="" className="text-white text-decoration-none">DLF The Arbour</a></li>
              <li><a href="" className="text-white text-decoration-none">M3M Golf Estate</a></li>
              <li><a href="" className="text-white text-decoration-none">Godrej Meridien</a></li>
              <li><a href="" className="text-white text-decoration-none">Emaar Palm Heights</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="text-center py-3 mt-4 " style={{background: '#244489'}}>
        <p className="mb-0">&copy; {new Date().getFullYear()} Luxury Apartment Gurgaon. All Rights Reserved.</p>
      </div>
    </footer>

    </>
  )
}

export default Footer
