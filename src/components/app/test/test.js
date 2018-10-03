import React, { Component } from 'react';
import i18n from "i18n-js";
import addPersonals from '../libs/test-redux/actions/actions-test'
import {
  TextField,
  Button
} from 'react-md';
import { connect } from 'react-redux'
import Header from './header'

import l from "../libs/langs/keys"

class Testing extends Component {
  constructor(props){
    super()
    this.state={
      counter:0,
      personalState:''
    }
  }
  handleChange =(val)=>{
    this.setState({personalState:val})
  }
  handleClick = ()=>{
    this.setState({counter:this.state.counter+1})
  }
  handleClickSave =()=>{
    const {personalState} = this.state
    const {addPersonalsProps} = this.props
    addPersonalsProps(personalState)
    this.setState({personalState:''})
  }
  render() {
    const { personals } =this.props
    const {counter,personalState} =this.state
    return (
      <div>
        <button onClick={this.handleClick}>cc</button>
        <Header counter={counter}/>
        <div>
          <h1>test redux</h1>
          <TextField
            id="floating-password"
            label="Enter your text"
            type="text"
            value={personalState}
            className="md-cell md-cell--bottom"
            onChange={this.handleChange}
          />
          <Button 
            flat 
            primary 
            swapTheming
            onClick={this.handleClickSave}
          >
            {i18n.t(l.addNewPersonalButton)}
          </Button>
          <h2>list of personals</h2>
          {
            personals&&personals.map((personal,index)=>{
              return (
                  <label key={index}>{personal}</label>
              )
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    personals: state.getAndAddList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addPersonalsProps: id => {
      dispatch(addPersonals(id))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Testing)
