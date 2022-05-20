import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            <h3>Contact Details And Social Handles:</h3>
          </div>
          <div class="col">
            <form className="contactusform">
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input type="text" class="form-control" id="name" />
              </div>
              <div class="mb-3">
                <label for="phoneNumber" class="form-label">
                  Phone Number
                </label>
                <input type="Number" class="form-control" id="phoneNumber" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                ></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="callcheckbox"
                />
                <label class="form-check-label" for="contactcheckbox">
                  Want Help via E-mail
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="emailcheckbox"
                  checked
                />
                <label class="form-check-label" for="emailcheckbox">
                  Want Help via Call
                </label>
              </div>
              <button type="submit" class="btn submit">
                Submit
              </button>
            </form>
          </div>
          <div class="col">Column</div>
        </div>
      </div>
    </div>
  );
}
