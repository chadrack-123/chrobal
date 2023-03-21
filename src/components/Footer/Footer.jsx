import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: 20,
          }}
        >
          <div>
            <h3>Chrobal</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus id, a laborum eveniet necessitatibus perferendis alias
              nulla amet eum officia accusantium consequatur eos eius veniam
              tempora atque facilis provident quos?
            </p>
          </div>
          <nav>
            <h2>Useful Links</h2>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Packages</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div>Follow US </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
