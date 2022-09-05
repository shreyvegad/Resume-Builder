import React from 'react'
import styles from "../InputControl/InputControl.module.css";
function InputControl({label, ...props}) {
  return (
    <div className={styles.container}>
        {label && <label>{label}</label>}
        <input type="text" {...props} placeholder="Enter section title"/>
    </div>
  )
}

export default InputControl