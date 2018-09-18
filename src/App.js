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
  
  handleStart = () => {
    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('mouseup', this.handleEnd);
  };

  handleEnd = () => {
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleEnd);
  };

  handleDrag = e => {
    if (e.target.className !== 'Slider__field') return;
    if (e.target.className === 'Slider__field') {
        this.handleOnChangeSlider(e);
    }
  };

	handleClickFirstToggled = () => {
		const toggleOnFirst = this.state.toggleOnFirst;
		this.setState({toggleOnFirst: !toggleOnFirst})
  }
  
  handleClickSecondToggled = () => {
		const toggleOnSecond = this.state.toggleOnSecond;
		this.setState({toggleOnSecond: !toggleOnSecond})
  }

  handleOnChangeSlider = (e) => {
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
                change={this.handleOnChangeSlider}
                startMove={this.handleStart}
                endMove={this.handleEnd}
                value={this.state.currentValue}/>
      </div>
    );
  }
}

export default App;
