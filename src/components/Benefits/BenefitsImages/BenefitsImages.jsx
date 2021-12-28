import React from "react";
import image1 from "../images/rounded_rectangle_1.jpg";
import image2 from "../images/rounded_rectangle_2.jpg";
import image3 from "../images/rounded_rectangle_3.jpg";

function BenefitsImages () {
    return (
        <div className="benefits-images">
            <div className="benefits-images__layout-bottom">
                <img src={ image1 } alt="image" />
                <img src={ image2 } alt="image" />
            </div>
            <div className="benefits-images__layout-top">
                <img src={ image3 } alt="image" />
            </div>
        </div>
    );
}

export default BenefitsImages;