import { useState } from "react";
import pifPic from "./assets/kokong 2x2.jpg";
import "./Card.css";

function Card() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rotate, setRotate] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const center = rect.width / 2;
        const rotateY = ((x - center) / center) * 10;

        setRotate(rotateY);
    };

    const resetRotation = () => setRotate(0);

    return (
        <>
            <div className="card">
                <a 
                    href="#" 
                    onClick={() => { 
                        e.preventDefault(); 
                        setIsModalOpen(true); 
                    }}
                    aria-label="View full profile picture" // Better accessibility
                >
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

            {isModalOpen && (
                <div className="modal1-overlay">
                    <div className="modal1-content">
                        <img className="card-image-full" src={pifPic} alt="Full profile" />
                        <button 
                            className="button1" 
                            onClick={() => setIsModalOpen(false)}
                            aria-label="Close modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Card;