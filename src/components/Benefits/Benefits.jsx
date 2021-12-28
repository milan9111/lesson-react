import React from "react";
import BenefitsDescription from "./BenefitsDescription/BenefitsDescription";
import BenefitsImages from "./BenefitsImages/BenefitsImages";
import './style.css';

function Benefits () {
    return (
        <div className="benefits">
            <BenefitsDescription />
            <BenefitsImages />
        </div>
    );
}

export default Benefits;