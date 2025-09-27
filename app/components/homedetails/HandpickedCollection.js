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
        {  allcategory.map((item) => (

                    <div className="col-md-3" key={item.id}>
                        <div className="position-relative">
                            {/* Image */}
                            <img
                                src={item.images}
                                className="w-100 rounded shadow"
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
