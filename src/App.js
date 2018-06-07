import React, {Component} from 'react';
import {ExperimentalForm} from "./component/experimental-form";
import './App.css';
import axios from "axios/index";
import {Label, PageHeader} from "react-bootstrap";

class App extends Component {
    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            foundN: "0"
        }
    }

    render() {
        return (
            <div className="App">
                <div>
                    <PageHeader></PageHeader>
                    <ExperimentalForm onFormSubmit={this.onFormSubmit}></ExperimentalForm>
                    <h1>
                        n: <Label>{this.state.foundN}</Label>
                    </h1>
                </div>
            </div>
        );
    }

    onFormSubmit(data) {
        axios.post('/api/v1/posterior', data).then(({data}) => {
            console.log(data);
            this.setState({foundN: data})
        });
    }
}

export default App;
