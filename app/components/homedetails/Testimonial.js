import React from 'react'
import { MdAddHomeWork } from "react-icons/md";
import { FaStar, FaRegStar } from "react-icons/fa"; // FaRegStar for empty star

const Testimonial = () => {
    const data = [
        {
            id: 1,
            icon: <MdAddHomeWork />,
            name: 'Siddharth Sharma',
            description: 'Very good experience taking services from Ashutosh and Gourav. Professional, responsive and committed throughout the process from searching house to deal closure to paper work. They went extra mile at times to deliver superior service. Fully recommended.',
            img: '',
            alt: 'testimonial1',
            rating: 4
        },
        {
            id: 2,
            icon: <MdAddHomeWork />,
            name: 'Manish Shokeen',
            description: 'Mr. Ashutosh Kumar is very knowledgeable about the Real Estate scenario in Gurgaon. He goes extra mile to help his clients get the best deals. I would definitely recommend Right Solutions to people who want to buy a property in Gurgaon.',
            img: '',
            alt: 'testimonial2',
            rating: 4
        },
        {
            id: 3,
            icon: <MdAddHomeWork />,
            name: 'Amit Sharma',
            description: 'It has been a very nice experience dealing with Right Solutions. I have invested in M3M Sierra, the overall services provided was very excellent, they provided me better discounts and offers that help me invest to my satisfaction. Thanks Right Solutions',
            img: '',
            alt: 'testimonial3',
            rating: 5
        }
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(i < rating ? <FaStar key={i} color="#ffc662" /> : <FaRegStar key={i} color="#ffc662" />);
        }
        return stars;
    }

    return (
        <div className='container' style={{ marginTop: '5rem' }}>
            <p style={{ margin: 'unset' }}>FEEDBACK FROM BUYERS</p>
            <h3>What our client says</h3>
            <div className='row'>
                {data.map((item) => (
                    <div className='col-md-4' key={item.id}>
                        <div className='choose-cards'>
                            <div className='choose-icon'>
                                <img src={item.img} alt={item.alt} />
                            </div>
                            <p className='text-center'>{renderStars(item.rating)}</p>
                            <p style={{ marginTop: '-11px' }} className='text-center'>{item.description}</p>
                            <p className='choose-name text-center'><b>{item.name}</b></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial
