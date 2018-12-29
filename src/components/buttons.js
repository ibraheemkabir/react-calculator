import  React from 'react'

const result = (props) => {
            return(
                <button value={props.button} onClick={props.click}>{props.button}</button>         
            )
}


export default result