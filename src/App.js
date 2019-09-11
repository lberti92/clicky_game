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
  }

  shuffleFriend = array => {
    const crystals = array.sort(function (a, b) {
      return Math.random() - 0.5;
    })
    this.setState({ crystals })
  }

  handleClick = (id) => {
    let newScore = this.state.score + 1
    this.setState({ score: newScore })
    let guess = false;

    console.log(`in handleClick ${id} first ${guess} ${newScore}`);


    if (guess === false && newScore < this.state.target) {
      const newArray = this.state.crystals.map(crystal => {
        if (crystal.id === id && !crystal.clicked) {
          crystal.clicked = true
          console.log("Clicked " + crystal.clicked)
        }
        return crystal
      })
      this.shuffleFriend(newArray)

    }
    else if (guess === true && newScore < this.state.score) {

      this.setState({ score: 0, newscore: newScore })
      this.shuffleFriend();
      alert("You lost")
    }
    else {
      this.setState({ score: 0 })
      alert("you lost")
    }
  }


    handleClick = (id) => {
    let newScore = this.state.score + 1
    this.setState({ score: newScore })
    let guess = false;

    console.log(`in handleClick ${id} first ${guess} ${newScore}`);


    if (guess === false && newScore < this.state.target) {
      const newArray = this.state.crystals.map(crystal => {
        if (crystal.id === id && !crystal.clicked) {
          crystal.clicked = true
          console.log("Clicked " + crystal.clicked)
        }
        return crystal
      })
      this.shuffleFriend(newArray)

    }
    else if (guess === true && newScore < this.state.score) {

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
              score={this.handleClick}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}
export default App;
