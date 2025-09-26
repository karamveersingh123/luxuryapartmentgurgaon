'use client';
import React from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { FaUser } from "react-icons/fa";


const Header = () => {
    return (
        <header>
            {/* Top Social Bar */}
            <div className="text-white d-flex justify-content-end">
                <a href="#" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white mx-2"><i className="fab fa-whatsapp"></i></a>
                <a href="#" className="text-white mx-2"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
            </div>

            {/* Main Navbar */}
            <Navbar bg="light" expand="lg" className="shadow-sm">
                <Container>
                    {/* Logo */}
                    <Link href="/" className="navbar-brand d-flex align-items-center">
                        <img src="/images/logo.png" alt="Logo" height="50" className="me-2" />
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* Centered Navigation */}
                        <Nav className="mx-auto fw-medium fs-6">
                            <Link href="/" className="nav-link mx-2">Home</Link>
                            <Link href="/about-us" className="nav-link mx-2">About Us</Link>
                            <Link href="/projects" className="nav-link mx-2">Projects</Link>
                            <Link href="/developers" className="nav-link mx-2">Developers</Link>
                            <Link href="/contact" className="nav-link mx-2">Contact Us</Link>
                            <Link href="/locations" className="nav-link mx-2">Locations</Link>
                        </Nav>

                        {/* User Dropdown */}
                        <Dropdown align="end">

                            <FaUser size={24} />

                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
