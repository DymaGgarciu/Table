import React from 'react'
import classes from './Input.module.css'

export const Input = (props) => {
    const {name, onChange, ...input} =props;
    const handleInputChange = (event)=>{
        onChange(name,event.target.value)

    }
    
    return (<input onChange={handleInputChange} {...input} placeholder={name} />)
}
 
