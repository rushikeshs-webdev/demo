import React, { useState } from "react";
import "./Styles/App.css";

const Images = [
  "./Images/tshirt1.jpg",
  "./Images/tshirt3.jpg",
  "./Images/tshirt4.jpg",
];

function App() {
  const [currIndex, setCurrIndex] = useState(0);

  const handleClick = (index) => {
    setCurrIndex(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Shirt is added to Cart!");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="left-container">
          <div className="shirts">
            {Images.map((image, index) => {
              return (
                <img
                  key={index}
                  onClick={() => handleClick(index)}
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{
                    border: currIndex === index ? "2px solid indigo" : "none",
                    width: "60px",
                    height: "60px",
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
          <img
            src={Images[currIndex]}
            alt={`Preview Image`}
            className="preview"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="right-container">
          <a href="www.example.com" className="polo">
            POLO RALPH
          </a>
          <h2>Custom Fit Polo Bear Oxford Shirt</h2>
          <p>Blue polo with a classic cut. Made of smooth and soft cotton.</p>
          <h2>$99.50</h2>
          <br />
          <button
            type="submit"
            className="btn"
            onClick={(e) => handleSubmit(e)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
