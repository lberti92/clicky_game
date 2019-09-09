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
    // guess: false
  }


  shuffleFriend = id => {
    const crystals = this.state.crystals.sort(function (a, b) {
      // return 0.5 - Math.random();
      return Math.random() - 0.5;
    })
    this.setState({ crystals })
  }



  // shuffle friend need to be called in handleClick
  // create the the attribute guessCorrectly = true or false
  // if clicked and is true end of game
  // if clicked and is false - reshuffle the deck
  // create a new array which include the updated click event  - remapping the deck with the new id that was clicked

  // userGuess = (id) => {
  //   if (this.state.guess = false)
  //   this.setState({ guess: true})
  // }


  // calculateScore = () => {
  //   let newTopScore = this.state.score
  //   // newTopScore === this.state.target
  //   if (guess === false) {
  //     this.setState({ score: 0, topscore: newTopScore })
  //     alert("Congratulations you pick all 12 correctly")
  //   } else {
  //     (newTopScore < this.state.target) {
  //       this.setState({ score: 0 })
  //       alert("Please try again")
  //     }
  //   }
  // }


  handleClick = (id) => {
    let newScore = this.state.score + 1
    this.setState({ score: newScore })
    let guess = false;

    console.log(`in handleClick ${id} ${guess} ${newScore}`);




    // if (guess === false && newScore === this.state.target) {
    //   this.setState({ score: 0, newscore: newScore })
    //   alert("congratulation you won")
    // }

    if (guess === false && newScore < this.state.target) {
      const newArray = this.state.crystals.map(crystal => {
        if (crystal.id === id && !crystal.clicked) {
          crystal.clicked = true
          console.log ("Clicked " + crystal.clicked)
          guess = true;
        }
        return crystal
      })
      this.setState({ crystals: newArray })
      this.shuffleFriend()

      console.log("guess " + guess)
    }
    // else if (guess === true && newScore < this.state.target) {
      else if (guess === true && newScore < this.state.target) {

      // if (this.state.guess === "true" && newScore < this.state.newscore) {
      this.setState({ score: 0, newscore: newScore })
      this.shuffleFriend();
      alert("You lost")
    }
    else {
      this.setState({ score: 0 })
      alert("you lost")
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Scores newscore={this.state.newscore} yscore={this.state.score} />
        <Wrapper>
          {this.state.crystals.map(crystal => (
            <CrystalPics
              className="image"
              image={crystal.picture}
              name={crystal.name}
              id={crystal.id}
              key={crystal.id}
              // value={this.state.value[crystal.id]}
              score={this.handleClick}
            // guess={this.state.guess}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}
export default App;
