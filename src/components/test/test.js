import React, { Component } from 'react';
import i18n from "i18n-js"
import {
  MenuButton,
  ListItem,
  ExpansionList,
  ExpansionPanel,
  Slider
} from 'react-md';
import cn from 'classnames';


import l from "../../libs/langs/keys"

class Test extends Component {
  constructor(props){
    super()
    this.state={
      counter:0
    }
  }
  handleClick = ()=>{
    this.setState({counter:this.state.counter+1})
  }
  render() {
    const {counter} =this.state
    return (
      <div>
        <button onClick={this.handleClick}>cc</button>
        <Header counter={counter}/>
      </div>
    );
  }
}
class Header extends Component {
  constructor(props){
    super()
    this.state={
      childCounter:1
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
export default Test;