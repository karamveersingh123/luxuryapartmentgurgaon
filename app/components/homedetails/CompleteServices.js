import React from 'react';

const CategoryCard = ({ image, title, listings }) => {
    return (
        <div className="category-card d-flex align-items-center p-2 shadow-sm">
            <div className="category-image me-3">
                <img src={image} alt={title} />
            </div>
            <div className="category-info">
                <h6 className="mb-1">{title}</h6>
                <small className="text-muted">{listings} listings</small>
            </div>
        </div>
    );
};

const Categories = () => {
    const data = [
        {
            id: 1,
            image: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/56-980x777.webp',
            title: 'Apartment',
            listings: 68,
        },
        {
            id: 2,
            image: 'https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/08/imgi_2_cp-selene-1-e1756986950294-980x777.webp',
            title: 'Villa',
            listings: 25,
        },
        // add more categories here
    ];

    return (
        <div className="container my-5" >
            <div className="row g-3" style={{marginTop: '3rem'}}>
                {data.map((item) => (
                    <div className="col-md-3 " key={item.id}>
                        <CategoryCard
                            image={item.image}
                            title={item.title}
                            listings={item.listings}
                        />
                    </div>
                ))}
                <div className='col-md-6'>
                    <p>COMPLETE SERVICES</p>
                    <h3>Start with What You Need –
                        Apartment, Floors, or More.</h3>
                    <p>Our vision is to blend architectural elegance with practical living, offering homes where beauty and functionality meet in perfect harmony.</p>
              <button className='need-help-btn'>Need Help</button>
                </div>


            </div>

        </div>
    );
};

export default Categories;
