import React, { Component } from "react";
import CrystalPics from "./components/CrystalPictures";
import Scores from "./components/Scores";
import Header from "./components/Header"
import crystals from "./crystals.json";

import Wrapper from "./components/Wrapper"
import './App.css';

class App extends Component {
  state = {
    crystals,
    target: 12,
    newscore: 0,
    score: 0,
    message: ""
  }

  shuffleCrystals = array => {
    const crystals = array.sort(function (a, b) {
      return Math.random() - 0.5;
    })
    this.setState({ crystals })
  }

  handleClick = (id) => {
    let newScore = this.state.score + 1;

    this.setState({ score: newScore })
    const crystals = this.state.crystals;
    const crystalClicked = crystals.filter(crystal => crystal.id === id);

    console.log(`in handleClick ${id}  ${newScore}`);
    if (crystalClicked[0].clicked) {
      this.setState({ message: "You guessed incorrectly, Please try again." });

      for (let i = 0; i < crystals.length; i++) {
        crystals[i].clicked = false;
      }
      this.setState({
        crystals,
        newscore: (this.state.newScore >= this.state.newscore) ? this.state.newScore : this.state.score,
        score: 0
      })


    } else {

      crystalClicked[0].clicked = true;
      if (newScore <= 11){
        this.setState({ message: "You guessed correctly" });

      }
      else {
        if (newScore === 12)
        this.setState({ message: "You won" });
        this.setState({
          crystals,
          newscore: newScore,
          score: 0
        })
      }
    }
    this.shuffleCrystals(crystals)

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
          {this.state.crystals.map(crystal => (
            <CrystalPics
              className="image"
              image={crystal.picture}
              name={crystal.name}
              id={crystal.id}
              key={crystal.id}
              score={this.handleClick}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}
export default App;
