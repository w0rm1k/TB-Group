import React from 'react';
import './Slider.css';

const slider = (props) => {
    let sliderClassName = ['Slider'];
    if (props.disabled) {
        sliderClassName.push('Slider_inactive');
    }
    const labels = [props.min, props.max];
    const scales = labels.map((label, idx) => {
        return (
            <div className="Slider__scale"
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
            className="Slider__thumb">
        </div>
    );
    const widthSliderField = String(100 / (props.max - props.min)) + '%';
    const slider_fields = array.map((_, idx) => {
        return (
            <div className="Slider__field"
                data-value={idx}
                key={idx}
                onClick={props.change}
                onMouseDown={props.start}
                onMouseUp={props.end}
                style={{width: widthSliderField}}>
                {props.value > idx 
                    ?   <div className="Slider__line Slider__line_selected"
                        data-value={idx}>
                        </div>
                    :   <div className="Slider__line"
                            data-value={idx}>
                        </div>
                }
                {props.value === idx ? thumb : null}
            </div>
        )
    });

    return (
        <div className={sliderClassName.join(' ')}>
            <div className="Slider__scales">
                {scales}
            </div>
            <div className="Slider__fields">
                {slider_fields}
            </div>
            <p>{props.value}</p>
        </div>
    )
}

slider.defaultProps ={
    min: 0,
    max: 50,
    value: 20
}

export default slider;