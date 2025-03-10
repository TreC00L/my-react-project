import { useState, useEffect } from "react";
import "./Footer.css"; // Import updated CSS

const MyFooter: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <p className="time">
       &copy; {new Date().getFullYear()}  Liceo De Cagayan University | {currentTime}
      </p>
    </footer>
  );
};

export default MyFooter;
