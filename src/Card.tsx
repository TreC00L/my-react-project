import { useState } from "react";
import pifPic from "./assets/kokong 2x2.jpg";
import "./Card.css"; // Import the CSS file

function Card() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rotate, setRotate] = useState(0);

    // Handle mouse movement over the small profile image
    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse position inside the card
        const center = rect.width / 2;
        const rotateY = ((x - center) / center) * 10; // Adjust rotation angle

        setRotate(rotateY);
    };

    // Reset rotation when mouse leaves
    const resetRotation = () => {
        setRotate(0);
    };

    return (
        <>
            <div className="card">
                <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>
                    {/* Rotating profile image */}
                    <img
                        className="card-image"
                        src={pifPic}
                        alt="profile picture"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={resetRotation}
                        style={{
                            transform: `perspective(500px) rotateY(${rotate}deg) scale(1.05)`,
                            transition: "transform 0.2s ease-out",
                        }}
                    />
                </a>
                <h2 className="card-title">Tre Cool M. Madlos</h2>
                <p className="card-paragraph">
                    2nd Year Senior Highschool in Liceo De Cagayan University.
                </p>
            </div>

            {/* Modal for full-size image (NO rotation) */}
            {isModalOpen && (
    <div className="modal1-overlay" onClick={(e) => {
        if ((e.target as HTMLElement).classList.contains("modal1-overlay")) {
            setIsModalOpen(false);
        }
    }}>
        <img className="card-image-full" src={pifPic} alt="Full profile" />
        <button className="button1" onClick={() => setIsModalOpen(false)}>Close</button>
    </div>
)}

        </>
    );
}

export default Card;
