import React, { Component } from 'react';
import {ExperimentalForm} from "./component/experimental-form";
import './App.css';
import axios from "axios/index";
import {Badge} from "react-bootstrap";

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
          <div>
              N (u r looking for): <Badge>{this.state.foundN}</Badge>
          </div>
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
