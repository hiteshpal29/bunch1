import React from "react";
import img9 from "../images/place_your_design_here_do_9.jpg";
import img10 from "../images/place_your_design_here_do_10.png";
import img11 from "../images/place_your_design_here_do_11.jpg";
import img12 from "../images/place_your_design_here_do_12.png";
import img13 from "../images/place_your_design_here_do_13.jpg";
import img14 from "../images/place_your_design_here_do_14.png";

function ImagesSection() {
  return (
    <section className="images" id="menu" >
      <>
        <div className="container111">
        <div class="title-7">
                <p class="title-8">India</p>
                <p class="title-9">on your plate</p>
              </div>
          <div className="row gridContainer">
            
            <div className="div1 grid text_grid "></div>
            <div className="div2 grid text_grid ">
             
            </div>
            <div className="div3 grid text_grid "></div>
            <div className="div4 grid text_grid "></div>
            <div className="div5 grid ">
              <img
                className="place-your-design-here-double-click-to-edit-6"
                src={img9}
                alt="img9"
              />
            </div>
            <div className=" div6 grid text_grid ">
              <div className="rectangle-holder">
                <div className="box-1">
                  <p className="title-10">Tikka chicken</p>
                  <p className="body-text-5">
                  Tikka chicken is a tantalizing dish, marinated in a rich blend of yogurt and spices, then grilled to perfection, offering mouthwatering flavor.
                  </p>
                  <p className="price">$14.95</p>
                </div>
              </div>
            </div>
            <div className="div7 grid ">
              <img
                className="place-your-design-here-double-click-to-edit-2"
                src={img10}
                alt="img10"
              />
            </div>
            <div className="div8 grid text_grid ">
              <div className="box-2">
                <p className="title-11">SPICY WEDges</p>
                <p className="body-text-6">
                Spicy wedges, a delectable treat, combine crispy potato wedges with a fiery kick of seasoning, perfect for those who crave heat and flavor.
                </p>
                <p className="price">$10.95</p>
              </div>
            </div>
            <div className=" div9 grid text_grid  ">
              <div className="box-3">
                <p className="title-13">chicken CURRY</p>
                <p className="body-text-8">
                Chicken curry is a classic dish that combines tender chicken pieces with a rich, aromatic sauce bursting with spices and flavors.
                </p>
                <p className="price">$14.95</p>
              </div>
            </div>
            <div className="div10 grid  ">
              <img
                className="place-your-design-here-double-click-to-edit-7"
                src={img11}
                alt="img11"
              />
            </div>
            <div className="div11 grid text_grid">
              <div className="rectangle-holder-2">
                <div className="box-4">
                  <p className="title-12">RED CURRY</p>
                  <p className="body-text-7">
                  Red curry is a Thai culinary masterpiece, known for its bold, spicy flavors and vibrant red hue, made with ingredients like red chilies and coconut milk.
                  </p>
                  <p className="price">$18.95</p>
                </div>
              </div>
            </div>
            <div className=" div12 grid ">
              <img
                className="place-your-design-here-double-click-to-edit-4"
                src={img13}
                alt="img13"
              />
            </div>
            <div className="div13 grid ">
              <img
                className="place-your-design-here-double-click-to-edit-5"
                src={img12}
                alt="img12"
              />
            </div>

            <div className="div14 grid text_grid ">
              <div className="box-5">
                <p className="title-15">SPICY VEGGIES</p>
                <p className="body-text-10">
                Spicy veggies are a fiery delight, combining various vegetables with zesty seasonings to create a sizzling and flavorful side or main dish.
                </p>
                <p className="price">$11.95</p>
              </div>
            </div>

            <div className="div15 grid ">
              <img
                className="place-your-design-here-double-click-to-edit-3"
                src={img14}
                alt="img14"
              />
            </div>

            <div className=" div16 grid text_grid ">
              <div className="box-6">
                <p className="title-14">SPICY MIX</p>
                <p className="body-text-9">
                A spicy mix is a tantalizing medley of ingredients, often featuring a variety of spicy elements like chili peppers and seasonings for a bold and exciting flavor explosion.
                </p>
                <p className="price">$11.95</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}

export default ImagesSection;
