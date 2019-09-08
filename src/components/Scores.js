import React from "react";

function Scores(props) {
    return (
        <div className="targetScoreValue">
        <h3>Top Score: {props.topscore}</h3>
        <h3>Your Score: {props.yscore}</h3>
        </div>
    )
}

export default Scores;