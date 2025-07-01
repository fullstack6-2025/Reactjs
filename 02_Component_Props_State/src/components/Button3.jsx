import React from 'react'

const Button3 = (props) => {
    console.log(props); 

  return (
    <div>
        <button style={{color:props.color}}> {props.text} 버튼 </button>

    </div>
  )
}

export default Button3