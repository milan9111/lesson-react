import React from "react";
import BenefitsHeader from "./BenefitsHeader";
import BenefitsList from "./BenefitsList";

function BenefitsDescription () {
    return (
        <div className="benefits-description">
            <BenefitsHeader />
            <BenefitsList />
        </div>
    );
}

export default BenefitsDescription;