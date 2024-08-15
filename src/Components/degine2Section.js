import React from "react";
import Object2 from "../images/vector_smart_object_2.png";
import Object1 from "../images/vector_smart_object.png";

function Design2Section() {
  return (
    <section className="design-2">
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <img className="vector-smart-object-2" src={Object2} alt="yy" />
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="text-4">
                <p className="title-16">Traditional cuisine made easy</p>
                <p className="body-text-11">
                Experience the rich tapestry of traditional cuisine made easy, where authentic flavors meet modern convenience
                </p>
                <div className="circles-3 no-space-between-inline-blocks clearfix">
                  <div className="ellipse-7"></div>
                  <div className="ellipse-8"></div>
                  <div className="ellipse-9"></div>
                </div>
                <div className="row-7-2  clearfix clearContainer ">
                  <p className="meals common  ">Meals</p>
                  <p className="spices common">Spices</p>
                  <p className="book common  ">Book</p>
                  <p className="gallery common ">Gallery</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <img className="vector-smart-object" src={Object1} alt="tt" />
            </div>
          </div>
        </div>
      </>
    </section>
  );
}

export default Design2Section;
