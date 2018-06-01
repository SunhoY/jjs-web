import React, {Component} from 'react';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Radio} from "react-bootstrap";


export class ExperimentalForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            population: "",
            reliability: "",
            confidenceLevel: "",
            defectiveItem: "",
            hyperParameterA: 1,
            hyperParameterB: 1,
            maximumDefectItem: "",
            posteriorType: 'BETA_BINOMIAL',
            foundN: 10,
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="population">
                    <Col componentClass={ControlLabel} sm={2}>
                        Population
                    </Col>
                    <Col sm={5}>
                        <FormControl type="number" placeholder="Enter Population" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="reliability">
                    <Col componentClass={ControlLabel} sm={2}>
                        Reliability
                    </Col>
                    <Col sm={5}>
                        <FormControl type="number" placeholder="Enter Reliability" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="confidenceLevel">
                    <Col componentClass={ControlLabel} sm={2}>
                        Confidence Level
                    </Col>
                    <Col sm={5}>
                        <FormControl type="number" placeholder="Enter Confidence Level" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="defectiveItems">
                    <Col componentClass={ControlLabel} sm={2}>
                        Defective Items
                    </Col>
                    <Col sm={5}>
                        <FormControl type="number" placeholder="Enter Defective Items" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="hyperParameterA">
                    <Col componentClass={ControlLabel} sm={2}>
                        Hyper Parameter A
                    </Col>
                    <Col sm={5}>
                        <FormControl type="number" placeholder="Enter Hyper Parameter A" onChange={this.handleChange}
                            value={this.state.hyperParameterA} />
                    </Col>
                </FormGroup>
                <FormGroup controlId="hyperParameterB">
                    <Col componentClass={ControlLabel} sm={2}>
                        Hyper Parameter B
                    </Col>
                    <Col sm={5}>
                        <FormControl type="number" placeholder="Enter Hyper Parameter B" onChange={this.handleChange}
                        value={this.state.hyperParameterB}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="distribution" >
                    <Col componentClass={ControlLabel} sm={2}>
                        Distribution
                    </Col>
                    <Radio name="radioGroup" value="BETA_BINOMIAL" inline>Beta Binomial</Radio>{ ' ' }
                    <Radio name="radioGroup" valie="UNIFORM" inline>Uniform</Radio>
                </FormGroup>
                <Button onClick={this.onSubmit}>Submit</Button>

            </Form>
        )
    }

    onSubmit(e) {
        let {onFormSubmit} = this.props;

        onFormSubmit(this.state);
    }

    handleChange(e) {
        let key = e.target.id;
        let value = e.target.value;

        let state = {};
        state[key] = value;

        this.setState(state);
    }
}