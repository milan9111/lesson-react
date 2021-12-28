import React from "react";
import BenefitsItemDescribe from "./BenefitsItemDescribe";
import BenefitsItemTitle from "./BenefitsItemTitle";

function BenefitsItem ( props ) {
    const { title, describe } = props;

    return (
        <li className="benefits-item">
            <BenefitsItemTitle title={ title } />
            <BenefitsItemDescribe describe={ describe } />
        </li>
    );
}

export default BenefitsItem;