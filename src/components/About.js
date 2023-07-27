import React from "react";

function About() {
  return (
    <div>
      <h1>About Us...</h1>
      <div className="header-row">
        <div className="container">Need Help?</div>
      </div>

      <div className="middle-row">
        <div className="col-content">
          <p>
            If you have inquiries or need assistance, do not hesitate to chat
            with us. We're available from Monday to Sunday, between 8am and 8pm.
          </p>
        </div>

        <div className="col-img">
          <img
            src={"https://ke.jumia.is/cms/2023/W08/CTO/CallCenter_Lady.png"}
            alt="good"
            className="img"
          />
        </div>

        <div className="col-content">
          <p>
            You can also reach us on 0711011011 from Monday to Friday, between
            8am and 8pm; and on weekends and holidays from 8am to 7pm
          </p>
        </div>
      </div>

      <div className="online-content">
        <h1>Our Online Services</h1>
        <div>
          <div className="accordion-qn">
            <button className="accordion">
              <img
                src={
                  "https://ke.jumia.is/cms/2023/W08/CTO/place-track-order.png"
                }
                alt="Awsome"
                className="img-cart"
              />
              <p>How to track your order?</p>
              ::after
            </button>
            <div className="panel">
              <ul className="answer-list">
                <li>
                  Click the drop-down arrow beside your name and select Orders.
                </li>
                <li>
                  Click SEE DETAILS in front of the order you want to track.
                </li>
                <li>
                  Click TRACK MY ITEM button in front of the order you wish to
                  track.
                </li>
                <li>Delivery history is displayed.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
