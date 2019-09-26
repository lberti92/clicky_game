import React, { Component } from "react";
import MinionPics from "./components/MinionPictures";
import Scores from "./components/Scores";
import Header from "./components/Header"
import minions from "./minions.json";
import Wrapper from "./components/Wrapper"
import './App.css';

class App extends Component {
  state = {
    minions,
    newscore: 0,
    score: 0,
    message: ""
  }

  shuffleMinions = array => {
    const minions = array.sort(function (a, b) {
      return Math.random() - 0.5;
    })
    this.setState({ minions })
  }

  handleClick = (id) => {
    let newScore = this.state.score + 1;
    this.setState({ score: newScore })

    const minions = this.state.minions;
    const minionClicked = minions.filter(minion => minion.id === id);

    console.log(`in handleClick ${id}  ${newScore}`);

    if (minionClicked[0].clicked) {
      this.setState({ message: "You guessed incorrectly. Please try again." });

      for (let i = 0; i < minions.length; i++) {
        minions[i].clicked = false;
      }
      console.log("NEWSCORE", newScore);
      console.log("newscore", this.state.newscore)
      console.log(this.state.score)
      let updateScore =(this.state.score > this.state.newscore) ? this.state.score : this.state.newscore;
      this.setState({
        minions,
        newscore: updateScore,
        score: 0
      })
    } else {
      minionClicked[0].clicked = true;
      if (newScore <= 11){
        this.setState({ message: "You guessed correctly" });
      } else {
        if (newScore === 12)
        this.setState({ message: "Congratulations!!  You Won!!" });
        this.setState({
          minions,
          newscore: newScore,
          score: 0
        })
      }
    }
    this.shuffleMinions(minions)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Scores
          message={this.state.message}
          newscore={this.state.newscore}
          yscore={this.state.score} />
        <Wrapper>
          {this.state.minions.map(minion => (
            <MinionPics
              className="image"
              image={minion.picture}
              name={minion.name}
              id={minion.id}
              key={minion.id}
              score={this.handleClick}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}
export default App;
