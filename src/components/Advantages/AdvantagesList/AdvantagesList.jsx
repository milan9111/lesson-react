import React from "react";
import advantagesItems from "../constantsAdvantages";
import AdvantagesItem from "./AdvantagesItem";

function AdvantagesList () {
    return (
        <div className="advantages-list">
            { advantagesItems?.map( ( advantage, key ) =>
                <AdvantagesItem
                    key={ key }
                    title={ advantage.title }
                    describe={ advantage.describe }
                    image={ advantage.image } />
            ) }
        </div>
    );
}

export default AdvantagesList;