import React from 'react'
import './Button.css'
import { Link } from 'gatsby';

const Button = props => (
        <Link className="Button" to={props.to}>{props.text}</Link>
)

export default Button