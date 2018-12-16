import React from 'react';

const Card = props => {
    let style = `color: ${props.colors}`
    const { colors, quote } = props;
    console.log(props.colors)
    return (
        <div className="container">
        <h1 style={{color: `${colors}`}}>{props.data.quote}</h1>
        <h6>{props.data.author}</h6>
        </div>
    )
} 

export default Card;