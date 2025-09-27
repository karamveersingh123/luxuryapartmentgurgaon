import React from 'react'
import { MdAddHomeWork } from "react-icons/md";

const WhyChoose = () => {

    const choosecards = [
        {
            id: 1,
            icon: <MdAddHomeWork/>,
            para: 'Best Real Estate Consuting',
            description: 'Expert real estate consulting to help you find the perfect property and make smart investments with trusted guidance every step of the way.'
        },

         {
            id: 2,
            icon:  <MdAddHomeWork/>,
            para: 'Home Loan Assisstance',
            description: 'Get expert home loan assistance with quick approvals, best interest rates, and hassle-free guidance to make your dream home a reality.'
        },

           {
            id: 3,
            icon:  <MdAddHomeWork/>,
            para: 'Post-Purchase Support',
            description: 'Seamless after-sales assistance with documentation, possession support, and continued guidance to ensure a stress-free property ownership journey.'
           },

            {
            id: 4,
            icon:  <MdAddHomeWork/>,
            para: 'Vastu Guidance',
            description: 'Expert Vastu consultation to align your home or office with positive energy, prosperity, and harmony for a balanced lifestyle.'
           },

            {
            id: 5,
            icon:  <MdAddHomeWork/>,
            para: 'Legal Paper Work',
            description: 'Hassle-free legal paperwork support for property registration, agreements, and compliance to ensure secure and smooth real estate transactions.'
           },

            {
            id: 6,
            icon:  <MdAddHomeWork/>,
            para: 'Property Management',
            description: 'End-to-end property management with tenant support, maintenance, and oversight to safeguard your investment and maximize returns hassle-free.'
           },
    ]
    return (
        <div className='container my-2'>
            <h3>Why Choose Us ?</h3>
            <div className='row'>
                {choosecards.map((item)=> (
                <div className='col-md-4'>
                    <div className='choose-cards'>
                        <div className='choose-icon '>
                        {item.icon}
                        </div>
                        <p className='choose-para'><b>{item.para}</b></p>
                       <p style={{    marginTop: '-11px'}} className='text-center'>{item.description}</p> 
                    </div>
                </div>
               ))}

            </div>
        </div>
    )
}

export default WhyChoose
