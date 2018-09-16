import React from 'react';
import './Switchers.css';
import Switcher from './Switcher/Switcher';

const switchers = (props) => (
    <div className="Switchers">
        <label>
            1. Enabled, unchecked
            <Switcher 
                click={props.clickFirst}
                checked={props.toggleOnFirst} 
                active/>
        </label>
        <label>
            2. Enabled, checked
            <Switcher 
                click={props.clickSecond}
                checked={props.toggleOnSecond} 
                active/>
        </label>
        <label>
            3. Disabled, unchecked
            <Switcher 
                active={false}/>
        </label>
        <label>
            4. Disabled, checked
            <Switcher 
                checked
                active={false}/>
        </label>
    </div>
)

export default switchers;