import  React from 'react'
import Button from './buttons'

   const content = (props) => {
        return(
            <Button click={props.click} values={props.values} button={props.button}/>       
                
        )
        
    }

export default content