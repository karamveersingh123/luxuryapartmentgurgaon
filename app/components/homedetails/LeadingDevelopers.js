'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const LeadingDevelopers = () => {
    const data = [
        { id: 1, logo: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/7-e1758282061947.png' },
        { id: 2, logo: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/7-e1758282061947.png' },
        { id: 3, logo: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/7-e1758282061947.png' },
        { id: 4, logo: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/7-e1758282061947.png' },
        { id: 5, logo: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/7-e1758282061947.png' },
        { id: 6, logo: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/7-e1758282061947.png' },
        { id: 7, logo: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/7-e1758282061947.png' },
        { id: 8, logo: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/7-e1758282061947.png' },
        { id: 9, logo: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/7-e1758282061947.png' },
        { id: 10, logo: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/7-e1758282061947.png' }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear",
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    return (
        <div className='container my-5'>
            <h3 className='text-center mb-4'>Leading Developers</h3>
            <Slider {...settings}>
                {data.map((item) => (
                    <div key={item.id} className="text-center">
                        <img
                            src={item.logo}
                            alt={`Developer ${item.id}`}
                            style={{ width: '8rem', margin: 'unset' }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default LeadingDevelopers
