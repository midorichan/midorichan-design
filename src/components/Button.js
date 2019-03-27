import React from 'react'
import './Button.css'

const Button = props => (
        <a className="Button" href={props.to}>{props.text}</a>
)

export default Button