import React from "react";
import "./SilverKrugerrands.css";
import { useNavigate } from "react-router-dom";
function SilverKrugerrands() {
    const navigate = useNavigate();
    const Privacy = () => navigate("/Privacy");
  return (
    <div className="app">
      <header className="header">
        <h1>Everything You Need to Know About Silver Krugerrands</h1>
      </header>

      <div className="container">
        <section>
          <h2 className="section-title">What is a Silver Krugerrand?</h2>
          <p className="section-content">
            The Silver Krugerrand is a bullion coin issued by the South African Mint. First introduced in 2017, this coin carries the same design as the popular Gold Krugerrand, which was first minted in 1967. The Silver Krugerrand is a one-ounce coin made from 99.9% pure silver and is legal tender in South Africa, though its value is primarily driven by its metal content.
          </p>
          <p className="section-content">
            The coin’s design features two iconic symbols of South Africa: the portrait of Paul Kruger, the former president of the South African Republic, and the springbok antelope, a symbol of South Africa’s wildlife.
          </p>
        </section>

        <section>
          <h2 className="section-title">Key Features of Silver Krugerrands</h2>
          <ul>
            <li><strong>Weight and Composition:</strong> 1-ounce coin made from 99.9% pure silver.</li>
            <li><strong>Legal Tender:</strong> Legal tender in South Africa with a face value of 1 South African Rand (ZAR).</li>
            <li><strong>Design:</strong> Features the portrait of Paul Kruger on the obverse and the springbok antelope on the reverse.</li>
            <li><strong>Finish:</strong> Brilliant uncirculated finish for a polished appearance.</li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">Year-by-Year Breakdown</h2>
          <p className="section-content">
            <strong>2017 (First Year of Issue):</strong> The first year the Silver Krugerrand was minted, this coin marked the 50th anniversary of the Gold Krugerrand. Its release was highly anticipated, and its popularity quickly soared.
          </p>
          <p className="section-content">
            <strong>2018:</strong> Continued to gain traction as collectors and investors recognized its value.
          </p>
          <p className="section-content">
            <strong>2019:</strong> Saw a surge in global interest, driving new sales records.
          </p>
          <p className="section-content">
            <strong>2020:</strong> Economic uncertainty due to the pandemic increased demand for silver as a hedge.
          </p>
          <p className="section-content">
            <strong>2021 and Beyond:</strong> Continued high demand, solidifying its status in the silver market.
          </p>
        </section>

        <section>
          <h2 className="section-title">Investing in Silver Krugerrands</h2>
          <p className="section-content">
            The Silver Krugerrand is not only a collectible but also an excellent investment option. As a widely recognized and trusted coin, it provides exposure to silver with a recognizable, iconic design. It’s perfect for those looking to add precious metals to their portfolio while owning a piece of South African history.
          </p>
        </section>

        <section>
          <h2 className="section-title">Why Choose Silver Krugerrands?</h2>
          <ul>
            <li><strong>Historical Significance:</strong> A coin linked to the legacy of the Krugerrand series, one of the most recognized in the world.</li>
            <li><strong>Trusted Minting:</strong> Produced by the South African Mint, ensuring quality and authenticity.</li>
            <li><strong>Affordable Investment:</strong> Silver is often more accessible for investors compared to gold, making it an excellent entry point into precious metals.</li>
          </ul>
        </section>

        <a href="#" className="button">Learn More</a>
      </div>
      <button onClick={Privacy}>Privacy Policy</button>

      <footer className="footer">
        <p>© 2025 Silver Krugerrands. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SilverKrugerrands;