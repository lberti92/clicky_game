import React from "react";

function CrystalPics(props) {
    return (
        <div className="card">
            <img className = "card-img-top" 
            src={props.image} 
            alt={props.className} 
            // value={props.value}
            guess={props.guess}
            onClick={() => props.score(props.id, props.guess)}
            />
        </div>
    )
}


export default CrystalPics;