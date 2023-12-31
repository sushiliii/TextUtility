import React from 'react'

export default function Alert(props) {
    const toupper=(word)=>{
    let tolowe=word.toLowerCase();
    return tolowe.charAt(0).toUpperCase()+tolowe.slice(1)
    }
  return (
    
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{toupper(props.alert.type)}</strong> {props.alert.msg}

  </div>
  )
}
