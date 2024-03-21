import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

const Popup = () => {
  useEffect(() => {
    // seconds ON
    const showPopup = setTimeout(() => {
      document.getElementById("popup-container").style.display = "block";
    }, 7000);

    // seconds OFF
    const closePopup = setTimeout(() => {
      document.getElementById("popup-container").style.display = "none";
    }, 18000);

    return () => {
      clearTimeout(showPopup);
      clearTimeout(closePopup);
    };
  }, []);

  return (
    <div id="popup-container">
      <span
        id="close-btn"
        onClick={() => {
          document.getElementById("popup-container").style.display = "none";
        }}
      >
        <i className="fa-solid fa-circle-xmark text-secondary"></i>
      </span>
      {/* <img
        src="https://hcbyachts.com/wp-content/uploads/2023/11/48-Campeon-Layout-scaled.jpg"
        alt=""
        className="img-fluid"
      /> */}

      <div
        class="card m-0 border-0 bg-transparent"
        style={{ maxWidth: "840px" }}
      >
        <div class="row g-0 p-2">
          <div class="col-lg-6">
            <img
              src="https://hcbyachts.com/wp-content/uploads/2024/03/48-sunrise-scaled.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-lg-6">
            <div class="card-body">
              <small class="text-primary">
                <span>FOR THE BOLD</span>
              </small>
              <h5 class="card-title">
                NEW HCB CAMPEON WINS PRESTIGIOUS INNOVATION AWARD!
              </h5>
              <p class="card-text mb-1">
                “The build quality and attention to detail overshadowed entrants
                in the category.”
              </p>
              {/* <p class="card-text">
                Contact us for special pricing and details.
              </p> */}
              <button type="button" class="btn custom-contact-btn btn-sm">
                <Link to={`/48-campeon`} className=" text-white ">
                  EXPLORE NOW{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
