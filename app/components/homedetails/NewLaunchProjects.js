'use client'
import React, { useState } from "react";
import {
    Card,
    Container,
    Row,
    Col,
    Button,
    Carousel,
    Badge,
    Modal,
    Form
} from "react-bootstrap";
import { FaShareAlt, FaHeart, FaBuilding } from "react-icons/fa";

const NewLaunchProjects = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleEnquiryClick = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    // Share functionality
    const handleShare = (project) => {
        if (navigator.share) {
            navigator
                .share({
                    url: window.location.href, // You can replace with project-specific URL
                })
                .then(() => console.log("Shared successfully"))
                .catch((error) => console.error("Error sharing:", error));
        } else {
            // Fallback (copy link)
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    // Project Data Array
    const projects = [
        {
            id: 1,
            title: "AIPL Lake City",
            price: "₹ 3.6 Crore",
            description:
                "AIPL Lake City is a premium residential in Sector 103, Dwarka Expressway, Gurgaon.",
            units: "3 / 4 BHK",
            unitCount: "800 Nos",
            size: "2,200 - 6,000 Sq. Ft",
            towers: "4 Nos",
            category: "New Launch",
            images: [
                "https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/09/aipl-lake-city-image-525x328.webp",
                "https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/09/32-1.webp"
            ],
            whatsapp: "https://wa.me/"
        },
        {
            id: 2,
            title: "DLF Privana",
            price: "₹ 2.5 Crore",
            description:
                "DLF Privana is an ultra-luxury project located at Golf Course Extension Road, Gurgaon.",
            units: "3 / 4 BHK",
            unitCount: "600 Nos",
            size: "2,100 - 5,500 Sq. Ft",
            towers: "5 Nos",
            category: "Upcoming",
            images: [
                "https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/09/32-1.webp",
                "https://luxuryapartmentgurgaon.in/wp-content/uploads/2025/09/aipl-lake-city-image-525x328.webp"
            ],
            whatsapp: "https://wa.me/"
        }
    ];

    return (
        <div className="container my-5">
            {/* Section Heading */}
            <div className="text-center mb-4">
                <p className="text-uppercase text-muted mb-1 fw-semibold">
                    Gurgaon Real Estate
                </p>
                <h2 className="fw-bold">New Launch Projects</h2>
            </div>

            <Container>
                <Row>
                    {projects.map((project) => (
                        <Col md={4} key={project.id}>
                            <Card className="shadow-sm mb-4 border-0 rounded-3 overflow-hidden">
                                {/* Image Carousel with overlay */}
                                <div className="position-relative">
                                    <Carousel indicators={false} interval={null}>
                                        {project.images.map((img, idx) => (
                                            <Carousel.Item key={idx}>
                                                <Card.Img
                                                    variant="top"
                                                    src={img}
                                                    alt={`${project.title} image ${idx + 1}`}
                                                    className="project-img"
                                                />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>

                                    {/* Category Badge (Top-Left) */}
                                    <Badge
                                        bg="primary"
                                        className="position-absolute top-0 start-0 m-2 px-3 py-1 rounded-pill "
                                    >
                                        {project.category}
                                    </Badge>

                                    {/* Icons (Top-Right) */}
                                    <div className="position-absolute top-0 end-0 m-2 d-flex gap-2">
                                        <Button
                                            variant="light"
                                            size="sm"
                                            className="rounded-circle shadow-sm"
                                            onClick={() => handleShare(project)}
                                        >
                                            <FaShareAlt />
                                        </Button>
                                        <Button
                                            variant="light"
                                            size="sm"
                                            className="rounded-circle shadow-sm"
                                        >
                                            <FaHeart />
                                        </Button>
                                    </div>
                                </div>

                                {/* Content */}
                                <Card.Body>
                                    <Card.Title className="fw-bold fs-5 mb-2">
                                        {project.title}
                                    </Card.Title>
                                    <h6 className="text-success fw-semibold">{project.price}</h6>
                                    <Card.Text className="small text-muted mb-2">
                                        {project.description}
                                    </Card.Text>

                                    <ul className="list-unstyled small mb-3">
                                        <li>
                                            <FaBuilding /> {project.units}    <span className="mx-3"><b>Unit:</b> {project.unitCount}</span>
                                        </li>
                                        <li>
                                            <b>Size:</b> {project.size}  <span className="mx-3"><b>Tower:</b>
                                                {project.towers}</span>
                                        </li>
                                    </ul>

                                    <div className="d-flex justify-content-between">
                                        <Button
                                            size="sm"
                                            className="px-3 enquiry-btn"
                                            onClick={() => handleEnquiryClick(project)}
                                        >
                                            Enquiry
                                        </Button>
                                        <Button
                                            size="sm"
                                            className="px-3 whatsapp-btn"
                                            href={project.whatsapp}
                                            target="_blank"
                                        >
                                            WhatsApp
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Enquiry Modal */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Enquiry {selectedProject ? `- ${selectedProject.title}` : ""}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" placeholder="Enter your phone number" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Your message" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Submit Enquiry
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default NewLaunchProjects;
