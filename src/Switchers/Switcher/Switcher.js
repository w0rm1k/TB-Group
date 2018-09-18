import React from 'react';
import './Switcher.css';

const switcher = (props) => {
    const classNameSwitcher = ['Switcher'];
    const classNameToggle = ['Switcher__toggler']

    if (props.checked) {
        classNameSwitcher.push('Switcher_on');
        classNameToggle.push('Switcher__toggler_right');
    }

    if (!props.active) {
        classNameSwitcher.push('Switcher_inactive')
    }
    
    return (
        <div className={classNameSwitcher.join(' ')}
             onClick={props.click}>
             <div className={classNameToggle.join(' ')}></div>
        </div>
    )
} 

export default switcher;