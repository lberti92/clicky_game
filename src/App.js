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
 
    this.setState({ score: newScore})
    const crystals = this.state.crystals;
    const crystalClicked = crystals.filter(crystal => crystal.id === id);

    console.log(`in handleClick ${id}  ${newScore}`);
    if (crystalClicked[0].clicked) {
   this.setState({ message:"You guessed incorrectly, Please try again." });

      for (let i = 0; i < crystals.length; i++) {
        crystals[i].clicked = false;
      }
      this.setState({ crystals, score: 0})


    }else {

      crystalClicked[0].clicked = true;
      this.setState({ message:"You guessed correctly" });


      if (this.score > newScore) {
        newScore = this.score;
        this.setState({newscore: newScore, score: 0, crystals})
      }
      this.shuffleCrystals(crystals)

    }

  }



  // handleClick = (id) => {
  //   let newScore = this.state.score + 1;
  //   this.setState({ score: newScore })
  //   // let guess = false;

  //   console.log(`in handleClick ${id}  ${newScore}`);

  //   if (this.state.score < 12) {
  //     const newArray = this.state.crystals.map(crystal => {
  //       if (crystal.id === id && !crystal.clicked) {
  //         crystal.clicked = true
  //         console.log("Clicked " + crystal.clicked === true)
  //       }
  //       else if (crystal.id === id && crystal.click) {
  //         alert ("you lost")
  //         this.setState({ score: 0, newscore: newScore })
  //         return crystal
  //       }
  //     })
  //     this.shuffleFriend(newArray)

  //   }
  // }


  // look at math.max for checking the topscore with the current score

  // if crystal clicked is false set to true,  add to score
  //   checked score if equal to less than 12
  //   if equal to 12 "you won" 

  // else if crystal clicked is true...you lose
  // check score if > topscore, if it is add newscore

  // out of if above reshuffle
  //when clicked set crystal to true and and add one to score 
  // 


  // handleClick = (id) => {
  //   let newScore = this.state.score + 1
  //   let crystals = [...this.state.crystals];


  //   const newArray = crystals.map(crystal => {
  //     if (crystal.id === id && crystal.clicked === false && newScore < 12) {
  //         crystal.clicked = true
  //         this.setState({ score: newScore, crystals })
  //     }
  //   })


  // }




  //     const newArray = crystals.map(crystal => {
  //       console.log(`in handleClick ${id} ${crystal.clicked} ${newScore}`);
  //       if (crystal.id === id && !crystal.clicked === true) {
  //         crystal.clicked = true
  //         this.setState({ score: newScore, crystals: newArray })

  //       }
  //       this.shuffleFriend(crystals)
  //   })


  // }
  // else {


  // if (crystal.id === id && !crystal.clicked === true) {
  //   alert("Congratulations you WON!!!!")
  //   this.setState({ topscore: newScore, crystals })
  //   crystal.clicked = true
  // }

  // }


  // if (crystal.id === id && crystal.clicked === true) {

  //   if (this.newscore >= newScore) {

  //     this.setState({ newScore: newScore, score: 0, crystals: crystals })
  //   }
  //   else {
  //     this.setState({ score: 0, crystals })
  // }

  // alert("Sorry you lost.  Please try again.")

  // }







  // the spread operator
  // if (newScore < this.state.target) {
  //   const newArray = crystals.map(crystal => {
  //     if (crystal.id === id && !crystal.clicked) {
  //       crystal.clicked = true
  //       console.log("Clicked " + crystal.clicked)
  //     }
  //     return crystal
  //   })
  //   this.setState({ crystals: newArray})
  //   this.shuffleFriend(newArray)


  // }
  // else if (guess === true && newScore < this.state.score) {

  //   this.setState({ score: 0, newscore: newScore })
  //   this.shuffleFriend();
  //   alert("You lost")
  // }
  // else {
  //   this.setState({ score: 0 })
  //   alert("you lost")
  // }

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
