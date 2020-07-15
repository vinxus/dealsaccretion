import React from "react";

export default function Home() {
    return (
      <div>
        <h4>Home</h4>
        {/** Add carousel here */}
        <div className="carousel">
            <div className="carousel-item">
                Health Care
            </div>
            <div className="carousel-item">
                Security
            </div>
            <div className="carousel-item">
                Retail Sector
            </div>
            <div className="carousel-item">
                Construction
            </div>
        </div>
        
      </div>
      
    );
  }