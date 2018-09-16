import React, { Component } from 'react';
import './App.css';
import Switchers from './Switchers/Switchers';
import Sliders from './Sliders/Sliders';

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
      toggleOnFirst: false,
      toggleOnSecond: true,
      min: 0,
      max: 100,
      currentValue: 0
    }
    
	}
	
	handleClickFirstToggled = () => {
		const toggleOnFirst = this.state.toggleOnFirst;
		this.setState({toggleOnFirst: !toggleOnFirst})
  }
  
  handleClickSecondToggled = () => {
		const toggleOnSecond = this.state.toggleOnSecond;
		this.setState({toggleOnSecond: !toggleOnSecond})
  }

  handleClickSlider = (e) => {
    const currentValue = +e.target.dataset.value;
    if (isNaN(currentValue)) {
      return;
    }
    this.setState({currentValue: currentValue})
  }

  render() {
    return (
      <div className="App">
        <h2>Switchers:</h2>
        <Switchers clickFirst={this.handleClickFirstToggled}
                  clickSecond={this.handleClickSecondToggled}
                  toggleOnFirst={this.state.toggleOnFirst}
                  toggleOnSecond={this.state.toggleOnSecond}/> 
        <h2>Sliders:</h2>  
        <Sliders min={this.state.min}
                max={this.state.max}
                click={this.handleClickSlider}
                value={this.state.currentValue}/>
      </div>
    );
  }
}

export default App;
