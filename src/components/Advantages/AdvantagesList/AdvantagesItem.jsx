import React from "react";

function AdvantagesItem ( props ) {
    const { title, describe, image } = props;

    return (
        <div className="advantages-item">
            <div className="advantages-item__img" >
                <img src={ image } alt="icon" />
            </div>
            <div className="advantages-item__title">{ title }</div>
            <div className="advantages-item__describe">{ describe }</div>
        </div>
    );
}

export default AdvantagesItem;