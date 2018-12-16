import React from 'react';
import './card.css'

const Card = props => {
    let style = `color: ${props.colors}`
    const { colors, quote } = props;
    console.log(props.colors)
    return (
        <div className="wrapper">
        <h1 style={{color: `${colors}`}}>{props.data.quote}</h1>
        <h6 style={{color: `${colors}`}}>{props.data.author}</h6>
        </div>
    )
} 

export default Card;