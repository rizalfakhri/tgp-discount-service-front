import React from "react";
import DiscountCode from './DiscountCode'

function Home(props) {
  return (
    <div>
      <h1>About Discount Service</h1>
      <p>This is the demo of the discount service front end. The goal is to decouple each module so it can be scaled independently.</p>
      <p>In eeal production Environment, This service is might be capable of things related to discount, such as <span style={{ borderBottom: '1px solid' }}>Generating Discount Code</span>, <span style={{ borderBottom: '1px solid' }}>Testing Discount Code</span>, & <span style={{ borderBottom: '1px solid' }}>Listing Discount Code</span> etc.</p>
    </div>
  );
}

export default Home;
