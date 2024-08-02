import React from "react";

function Header() {
  return (
    <header className="bg-dark mb-5 py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          
          { <h1 className="display-4" style={{ fontFamily: "Times New Roman" }}>Aravi Mart</h1> }
          {<h6 className="display-6" style={{ fontFamily: "Times New Roman" }}>Buy Healthy Stay Healthy</h6>}
        </div>
      </div>
    </header>
  );
}

export default Header;