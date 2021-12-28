import React from "react";
import BenefitsItem from "./BenefitsItem/BenefitsItem";
import benefitsItems from "./constantsBenefits";

function BenefitsList () {
    return (
        <ul className="benefits-list">
            { benefitsItems?.map( ( benefit, key ) =>
                <BenefitsItem
                    key={ key }
                    title={ benefit.title }
                    describe={ benefit.describe } />
            ) }
        </ul>
    );
}

export default BenefitsList;