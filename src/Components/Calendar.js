import { findByLabelText } from '@testing-library/react';
import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { motion } from "framer-motion";
import blood from '../blood.png';

// const sdStyle = { border: '2px solid currentColor' };
const sdStyle = { color: '#D17A89', backgroundColor: '#EFD5D9' };
const counterStyle = {
  display: "flex",
  flexDirection: "row",
  algnItems: "center",
  height: "5vh",
  marginLeft: "230px",
  height: "25px"
 
  
}


// npm 

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [],
      pCoins: 0
    };
    

  }
  
  handleDayClick(day, { selected }) {
    const selectedDays = this.state.selectedDays.concat();
    // const pCoins = this.state.pCoins;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
      // pCoins = pCoins + 10;
      this.setState({pCoins: this.state.pCoins + 10})
    }
    this.setState({ selectedDays });
   
  }

  render() {
    return (
      // <div style = {{display: 'flex'}}>
      // <div style={cStyle} >
      
      <div style={{transform: "scale(2.5)", marginLeft: '57%', marginTop: "18%"}}> 
      <div style = {counterStyle }>
      <img src = {blood} height = '17px'  />
      {this.state.pCoins} 
      <span>ℙ</span>
      </div>
        <DayPicker 
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}
          modifiers={{ sd: this.state.selectedDays }}
          modifiersStyles={{ sd: sdStyle }}
          

        />
        
       </div>
      
       
    );
}
}