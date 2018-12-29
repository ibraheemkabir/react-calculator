import  React from 'react'

const result = (props) => {
    if(props.state==='initial'){
        return(
        
            <div className='result'>
                {props.initial}
            </div>
       
    )
    }else if(props.state===false){
        return(
        
            <div className='result'>
                {props.result}
            </div>
       
    )
    }else{
        return(
        
            <div className='result'>
                {props.value}
            </div>
      
    )
    }
   
}


export default result