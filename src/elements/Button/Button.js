import React from 'react'

const Button = (props) => {
   const {children, ...button} = props;
    return(
        <button {...button}> {children} </button>
    )
}

export default Button;