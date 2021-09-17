import React from "react";
import classes from './input.module.css';

const Input = (proprs, customClassName) => {
    return(
        <input {...proprs} className={classes[customClassName]}/>
    );
}

export default Input;