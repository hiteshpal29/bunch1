import React from 'react';
import do4 from "../images/place_your_design_here_do_4.png";
import do3 from "../images/place_your_design_here_do_3.jpg";
import do2 from "../images/place_your_design_here_do_2.jpg"
 

function Design4Section() {
  return (
    <section className="design-4">
<  >
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="col-data-wrapper-4"  >
              <div className="main-title-2">
                <p className="title-34">Discover</p>
                <p className="title-35">our new menu</p>
              </div>
              <div className='menuContainer' >
                <div className='menuItem' >
                  <div className="square-1" >
                    <img className='menuItem_img'
                      src={do4}
                      alt=""
                    />
                    <div className="menuDetail">
                      <p className="menuItemDate">Food / 16th March, 2019</p>
                      <p className="menuItem_text">READ MORE</p>
                      <div className="rectangle-6"></div>
                    </div>
                  </div>
                </div>
                <div className='menuItem' >
                  <div className="square-2">
                    <img
                    className='menuItem_img'
                      src={do2}
                      alt=""
                    />
                    <div className="menuDetail">
                      <p className="menuItemDate">Spices / 16th March, 2019</p>
                      <p className="menuItem_text">READ MORE</p>
                      <div className="rectangle-6"></div>
                    </div>
                  </div>
                </div>
                <div className='menuItem' >
                  <div className="square-3">
                    <img className='menuItem_img'
                      src={do3}
                      alt=""
                    />
                    <div className="menuDetail">
                      <p className="menuItemDate">Chicken Curry / 16th March, 2019</p>
                      <p className="menuItem_text">READ MORE</p>
                      <div className="rectangle-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </  >
    </section>
  );
}

export default Design4Section;
