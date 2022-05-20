import React from "react";
import { Mailer } from "./Mailer";

export default function ContactUs() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Contact Details And Social Handles:</h3>
          </div>
          <div className="col">
           <Mailer/>
          </div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
  );
}
