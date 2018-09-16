import React from 'react';
import Slider from './Slider/Slider';
import './Sliders.css';

const sliders = (props) => (
    <div className="Sliders">
        <label>
            1. Enabled
            <Slider min={props.min}
                    max={props.max}
                    click={props.click}
                    value={props.value} />
        </label>
        <label>
            2. Disabled
            <Slider disabled/>
        </label>
        
    </div>
)

export default sliders;