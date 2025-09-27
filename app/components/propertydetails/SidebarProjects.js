'use client'
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { Button, Card } from 'react-bootstrap'

const SidebarProjects = () => {
    const projects = [
        {
            id: 1,
            name: "AIPL Lake City",
            price: "₹3.6 Cr * Onwards",
            image: "https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/09/aipl-lake-city-image-150x150.webp",
            rera: true
        },
        {
            id: 2,
            name: "Elan Sector 49",
            price: "₹9 Cr * Onwards",
            image: "https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/09/aipl-lake-city-image-150x150.webp",
            rera: true
        },
        {
            id: 3,
            name: "Birla Estates Sector 71",
            price: "₹3 Cr * Onwards",
            image: "https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/09/aipl-lake-city-image-150x150.webp",
            rera: true
        },
        {
            id: 4,
            name: "Central Park 104",
            price: "₹2.85 Cr * Onwards",
            image: "https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/09/aipl-lake-city-image-150x150.webp",
            rera: true
        }
    ];

    return (
        <Card className="p-3 shadow-sm border-0 card-sidebar-layout" style={{ borderRadius: '12px' }}>
            <h6 className="fw-bold mb-3">Top Selling Projects</h6>

            {projects.map((project) => (
                <div
                    key={project.id}
                    className="d-flex align-items-center justify-content-between p-2 mb-2 bg-white rounded shadow-sm project-card">
                    <div className="d-flex align-items-center">
                        <img
                            src={project.image}
                            alt={project.name}
                            width={60}
                            height={60}
                            style={{ borderRadius: '2rem !important' }}
                            className='mx-2'
                        />
                        <div>
                            <h6 className="mb-1" style={{ fontSize: '14px' }}>{project.name}</h6>
                            <p className="mb-1 text-muted" style={{ fontSize: '13px' }}>{project.price}</p>
                            {project.rera && (
                                <span className="badge" style={{ fontSize: '11px', background: 'green' }}>
                                    <FaCheckCircle className="me-1" /> RERA
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Button */}
                    <Button size="sm" className='view-details-btn'>
                        View Details
                    </Button>
                </div>
            ))}
        </Card>
    )
}

export default SidebarProjects
