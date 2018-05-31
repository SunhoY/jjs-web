import React, {Component} from 'react';
import {ExperimentalForm} from "./component/experimental-form";
import './App.css';
import axios from "axios/index";
import {Label} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      foundN: ""
    }
  }

  render() {
    return (
      <div className="App">
        <div>어서 오세요 종선의 세상에</div>
          <ExperimentalForm onFormSubmit={this.onFormSubmit}></ExperimentalForm>
          <h1>
              N (u r looking for): <Label>{this.state.foundN}</Label>
          </h1>
      </div>
    );
  }

  onFormSubmit(data){
      axios.post('/api/v1/posterior', data).then(({data}) => {
          console.log(data);
          this.setState({foundN: data})
      });
  }
}

export default App;
