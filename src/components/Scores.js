import React from "react";

function Scores(props) {
    return (
        <div className="targetScoreValue">
        <h3>{props.message}</h3>
        <h3>Top Score: {props.newscore} | Your Score: {props.yscore} </h3>
        </div>
    )
}

export default Scores;