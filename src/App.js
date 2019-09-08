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
    topscore: 0,
    score: 0,
    quess: false,
    value: 1
  }

  // componentDidMount=()=>{
  //   // this.handleClick()
  // }
  // update = () => {
  // let newTarget = 12
  // let newValue = this.state.values.map(x => (x = 
  // Math.floor(Math.random() * (12))+1))
  // this.setState({ target: newTarget })
  // }

  // class App extends Component {
  //   state = {
  //     friends,
  //     target: 12,
  //     score: 0,

  //   }


  shuffleFriend = id => {
    const crystals = this.state.crystals.sort(function (a, b) {
      return 0.5 - Math.random();
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

  handleClick = (id, value) => {
    console.log(`in handleClick ${id} ${value}`);

    let newScore = this.state.score + value

    let newTopScore = this.state.score
    if (this.state.guess === false && newTopScore === this.state.target) {
      this.setState({ score: 0, topscore: newTopScore })
      alert("congratulation you picked all 12 correctly")
    } else if
      (this.state.guess === false) {
      this.setState({ guess: true, score: newScore })
      this.shuffleFriend()
    } else {
     this.setState({ score: 0, topscore: newScore })
      alert("guess incorrectly")
    }
    
  }

  //if guess is equal to false
  //if score = 12 display you completed successfully
  //update topscore
  //reset score to 0

  //else if 
  //if guess is equal to false
  //increase score by 1
  //change quess to true
  //reshuffle the deck

  //else guess is equal to true
  //if topscore < score update topscore
  //reset score to 0
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Scores target={this.state.target} yscore={this.state.score} />
        <Wrapper>
          {this.state.crystals.map(crystal => (
            <CrystalPics
              className="image"
              image={crystal.picture}
              name={crystal.name}
              id={crystal.id}
              key={crystal.id}
              value={this.state.value[crystal.id]}
              score={this.handleClick}
              quess={this.state.quess}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}
export default App;
