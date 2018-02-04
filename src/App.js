import React, { Component } from 'react';
import Header from "./components/Header.js";
import ListCharacters from "./components/ListCharacters.js";
import Input from "./components/Input.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoCharacters: [],
      valueInput: "",
      showOnlyStudents: false
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  fetchInfoCharacters() {
    const ENDPOINT = "http://hp-api.herokuapp.com/api/characters";
    fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        infoCharacters: data
      });
    });
  }

  componentDidMount() {
    this.fetchInfoCharacters();
  }

  handleOnChange(event) {
    this.setState({valueInput: event.target.value});
  }

  handleCheck() {
    this.setState((prevState) => {
      return {
        showOnlyStudents: !prevState.showOnlyStudents
      }
    })
  }

  render() {
      return (
      <div>
        <Header/>
        <main>
          <Input actionToPerfom={ this.handleOnChange } value={ this.state.valueInput } showOnlyStudents = {this.state.showOnlyStudents} actionToCheck={this.handleCheck}/>
          <ListCharacters infoCharacters={ this.state.infoCharacters } valueInput= { this.state.valueInput } showOnlyStudents={this.state.showOnlyStudents}/>
        </main>
      </div>
    );
  }
}

export default App;
