import React from "react";

function MinionPics(props) {
    return (
        <div className="card">
            <img className = "card-img-top" 
            src={props.image} 
            alt={props.className} 
              onClick={() => props.score(props.id)}
            />
        </div>
    )
}


export default MinionPics;