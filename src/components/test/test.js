import React, { Component } from 'react';
import i18n from "i18n-js";
import addPersonals from '../../libs/test-redux/actions/actions-test'
import {
  MenuButton,
  ListItem,
  ExpansionList,
  ExpansionPanel,
  Slider,
  TextField,
  Button
} from 'react-md';
import cn from 'classnames';
import { connect } from 'react-redux'


import l from "../../libs/langs/keys"

class Test extends Component {
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
            personals&&personals.map(personal=>{
              return (
                <div>
                  <label>{personal}</label>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}
class Header extends Component {
  constructor(props){
    super()
    this.state={
      childCounter:1,
    }
  }
  handleClick=()=>{
    const {childCounter} = this.state
    this.setState({childCounter:childCounter+1})
  }
  handleLanguage =event=>{
    const lang = event.target.textContent
    switch (lang){
      case "English" :
        localStorage.setItem('language', 'en')
        window.location.reload(); break
      case "French"  :
        localStorage.setItem('language', 'fr')
        window.location.reload();break
      default :return null;
    }
  }
  render(){
    if(this.props.personals)console.log(this.props.personals)
    const {counter} = this.props
    const {childCounter} = this.state
    return(
      <div>
        {childCounter}{counter}
        <button onClick={this.handleClick}>
          {i18n.t(l.addCounterButton)}
        </button>
        <MenuButton
          onMenuClick={this.handleLanguage}
          id="menu-button-2"
          icon
          menuItems={[
            <ListItem key={1} primaryText="English" />,
            <ListItem key={2} primaryText="French" />,
          ]}
          listInline
          centered
          anchor={{
            x: MenuButton.HorizontalAnchors.CENTER,
            y: MenuButton.VerticalAnchors.CENTER,
          }}
        >
          more_vert
        </MenuButton>
        <button onClick={this.handleLanguage}>
          Fr
        </button>
        <div>
        <ExpansionList className={cn({ 'md-cell md-cell--12': 5 })}>
          <ExpansionPanel label="Main label" secondaryLabel="Secondary label" defaultExpanded>
            <p>Any content can go in here. This will be visible when it has been expanded.</p>
            <Slider id="expansion-slider" />
          </ExpansionPanel>
          <ExpansionPanel label="Another label">
            <p>wdwdwdwdwd</p>
          </ExpansionPanel>
          <ExpansionPanel label="Once More!" secondaryLabel="Okie dokie. If you insist">
            <p>wdwdwdwdwd</p>
            <p>rhrhrhrhrh</p>
          </ExpansionPanel>
        </ExpansionList>
        </div>
      </div>
    )
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
export default connect(mapStateToProps,mapDispatchToProps)(Test)
