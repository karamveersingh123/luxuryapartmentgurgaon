'use client'
import React from 'react'
import SearchBox from './SearchBox'

const HomeBanner = () => {


    return (
        <>
            <div className="hero-banner d-flex align-items-center text-white">
                <div className="overlay"></div>
                <div className="container position-relative text-center z-1">
                    <h1 className="banner-title">Find Your Dream Home</h1>
                    <p className="banner-subtitle">
                        Search from thousands of listings across cities.
                    </p>
                    <SearchBox />
                </div>
            </div>

        </>
    )
}

export default HomeBanner
