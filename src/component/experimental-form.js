import React, {Component} from 'react';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Radio} from "react-bootstrap";


export class ExperimentalForm extends Component {
    constructor(props) {
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
            isManual: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onMaximumDefectChange = this.onMaximumDefectChange.bind(this);
    }

    onMaximumDefectChange(value) {
        this.setState({maximumDefectItem: value});
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
                <FormGroup controlId="defectiveItem">
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
                                     value={this.state.hyperParameterA}/>
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
                <FormGroup controlId="distribution" style={{textAlign: 'left'}}>
                    <Col componentClass={ControlLabel} sm={2}>
                        Distribution
                    </Col>
                    <Col sm={3}>
                        <Radio name="posteriorType" value="BETA_BINOMIAL" onChange={this.handleRadioChange} inline>Beta
                            Binomial</Radio>
                    </Col>
                    <Col sm={3}>
                        <Radio name="posteriorType" value="UNIFORM" onChange={this.handleRadioChange}
                               inline>Uniform</Radio>
                    </Col>
                </FormGroup>
                <FormGroup controlId="maximumDefectItem" style={{textAlign: 'left'}}>
                    <Col componentClass={ControlLabel} sm={2}>
                        Maximum defects
                    </Col>
                    <Col sm={2}>
                        <Radio name="maximumDefectItem"
                               value={Math.floor(this.state.population * (1 - this.state.reliability))} onChange={e => {
                            this.handleRadioChange(e);
                            this.setState({isManual: true});
                        }} inline>Default</Radio>
                    </Col>
                    <Col sm={2}>
                        <FormControl type="number"
                                     value={Math.floor(this.state.population * (1 - this.state.reliability))}
                                     disabled={true}
                                     inline="true"/>
                    </Col>
                    <Col sm={2}>
                        <Radio name="maximumDefectItem" value={this.state.maximumDefectItem} onChange={e => {
                            this.setState({isManual: false});
                        }} inline>Manual</Radio>
                    </Col>
                    <Col sm={2}>
                        <FormControl type="number" disabled={this.state.isManual}
                                     value={this.state.maximumDefectItem} onChange={this.handleChange}
                                     inline="true"/>
                    </Col>
                </FormGroup>
                <Button onClick={this.onSubmit}>Submit</Button>

            </Form>
        )
    }

    handleRadioChange(e) {
        let {target: {name, value}} = e;

        let state = {};
        state[name] = value;

        this.setState(state);
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