import React from 'react';
import './Switcher.css';

const switcher = (props) => {
    const classNameSwitcher = ['Switcher'];
    const classNameToggle = ['Toggle_button']

    if (props.checked) {
        classNameSwitcher.push('Switcher_toggleOn');
        classNameToggle.push('Toggle_button-right');
    }

    if (!props.active) {
        classNameSwitcher.push('Switcher_non-active')
    }
    
    return (
        <div className={classNameSwitcher.join(' ')}
             onClick={props.click}>
             <div className={classNameToggle.join(' ')}></div>
        </div>
    )
} 

export default switcher;