import React from 'react';
import './Slider.css';

const slider = (props) => {
    let sliderClassName = ['Slider-container'];
    if (props.disabled) {
        sliderClassName.push('Slider-container_non-active');
    }
    const labels = [props.min, props.max];
    const scales = labels.map((label, idx) => {
        return (
            <div className="Slider-scale"
                key={idx}>
                {label}
            </div>
        )
    });
    const array = [];
    for (let i = props.min; i < props.max; i++) {
        array.push(i);
    }
    const thumb = (
        <div 
            className="Slider-thumb">
        </div>
    );
    const slider_lines = array.map((el, idx) => {
        return (
            <div className="Slider-field"
                data-value={idx}
                key={idx}
                onClick={props.click}
                onMouseDown={props.click}>
                {props.value > idx 
                    ?   <div className="Slider-line Slider-line_selected"
                           data-value={idx}>
                        </div>
                    :   <div className="Slider-line"
                            data-value={idx}>
                         </div>
                }
                {props.value === idx ? thumb : null}
            </div>
        )
    });

    return (
        <div className={sliderClassName.join(' ')}>
            <div className="Slider-scales">
                {scales}
            </div>
            {slider_lines}
            <p>{props.value}</p>
         </div>
    )
}

slider.defaultProps ={
    min: 0,
    max: 100,
    value: 25
}

export default slider;