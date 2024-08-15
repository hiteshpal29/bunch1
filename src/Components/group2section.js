import React from 'react';
import Spoon from "../images/place_your_design_here_do_15.png"
 
function Group2Section() {
  return (
    <section className="group-2">
      <  >
      <div className="container" id='event' >
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="text-2">
              <p className="title-3">Indian traditional flavours</p>
              <p className="body-text">
              Indian traditional flavors burst with spices like cardamom, cumin, and turmeric, creating a symphony of taste that delights the senses.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <img className="place-your-design-here-double-click-to-edit" src={Spoon} alt="spoons" />
          </div>
        </div>
      </div>
      </  >
    </section>
  );
}

export default Group2Section;
