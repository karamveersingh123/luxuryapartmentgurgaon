import React from 'react'

const HandpickedCollection = () => {

    const allcategory = [
        {
            id: 1,
            images: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/56-980x777.webp',
            category: 'New Launch',
            listings: '53 Listings',
            alt: 'new lunch'

        },

        {
            id: 2,
            images: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/56-980x777.webp',
            category: 'Under Construction',
            listings: '50 Listings',
            alt: 'new lunch'

        },

        {
            id: 3,
            images: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/56-980x777.webp',
            category: 'Dwarka Expressway',
            listings: '25 Listings',
            alt: 'new lunch'

        },

        {
            id: 4,
            images: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/56-980x777.webp',
            category: 'Sohna Road',
            listings: '25 Listings',
            alt: 'new lunch'

        },

        {
            id: 5,
            images: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/56-980x777.webp',
            category: 'Golf Course Extension Road',
            listings: '20 Listings',
            alt: 'new lunch'

        },

        {
            id: 6,
            images: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/56-980x777.webp',
            category: 'Southern Peripheral Road (SPR)',
            listings: '20 Listings',
            alt: 'new lunch'

        },


        {
            id: 7,
            images: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/56-980x777.webp',
            category: 'Central Park Flower Valley',
            listings: '40 Listings',
            alt: 'new lunch'

        },

        {
            id: 8,
            images: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/56-980x777.webp',
            category: 'Central Park Resort',
            listings: '30 Listings',
            alt: 'new lunch'

        }


    ]

    return (
        <div className="container my-5">
            {/* Section Heading */}
            <div className="text-center mb-4">
                <p className="text-uppercase text-muted mb-1 fw-semibold">
                    OUR PORTFOLIO
                </p>
                <h2 className="fw-bold">Handpicked Collection</h2>

                <div className="row mt-4">
                    {allcategory.map((item) => (

                        <div className="col-md-3 my-3 animation-cards" key={item.id}>
                            <div className="position-relative">
                                {/* Image */}
                                <img
                                    src={item.images}
                                    className="w-100 image-bg-layout"
                                    alt={item.alt}
                                />

                                {/* Overlay Content */}
                                <div
                                    className="position-absolute top-50 start-50 translate-middle text-center text-white category-btn-text"
                                >
                                    <h4 className=" mb-2 listing-text">{item.category}</h4>
                                    <button className="btn btn-light btn-sm listing-btn">
                                        {item.listings}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default HandpickedCollection
