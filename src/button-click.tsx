import { useState } from "react";

function ButtonMeh() {
  const [isOpen, setIsOpen] = useState(false); // State to manage modal visibility

  return (
    <div>
      {/* Button to open the modal */}
      <button className="Button-text" onClick={() => setIsOpen(true)}>
        View Profile
      </button>

      {/* Modal UI */}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="profile-tre">Tre's Profile</h2>
            <ul>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><li>Instragram Link</li></a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><li>Discord Link</li></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><li>Youtube Link</li></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><li>FaceBook Link</li></a>
            </ul>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ButtonMeh;
