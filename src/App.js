import React, { Component } from "react";
import Card from "./components/Card"
// import Wrapper from "./components/Wrapper";
// import Score from "./components/Score";
import sus from "./cards.json";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  // Setting this.state.scary to the cards json array
  state = {
    sus,
    clickedScaryIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the scary cards in the browser
  shuffleScoreCard = id => {
    console.log("click!");
    let clickedScaryIds = this.state.clickedScaryIds;

    if(clickedScaryIds.includes(id)){
      this.setState({ clickedScaryIds: [], score: 0, status:  "Who will kill you next.." });
      return;
    }else{
      clickedScaryIds.push(id)

      if(clickedScaryIds.length === 8){
        this.setState({score: 8, status: "Saved yoself this time...", clickedScaryIds: []});
        console.log('Youve Escaped');
        return;
      }

      for (let i = sus.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [sus[i], sus[j]] = [sus[j], sus[i]];
      }

      this.setState({ sus, clickedScaryIds, score: clickedScaryIds.length, status: " " });

    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Are You Scared Yet?</h1>
          <p className="App-intro">
            Don't click on the same buddy twice
          </p>
        </header>
        {/* <Score total={this.state.score}
               goal={8}
               status={this.state.status}
(               />
)        <Wrapper> */}
          {this.state.sus.map(scary => (
            <Card
              div className="Card-body"

              shuffle={() => this.shuffleScoreCard(scary.id)}
              id={scary.id}
              key={scary.id}
              image={scary.image}  
            /> 
          ))}
        {/* </Wrapper> */}
    </div>
    );
  }
}

export default App;