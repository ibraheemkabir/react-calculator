import  React, { Component } from 'react'
import Result from './result'
import Content from './content'

class container extends Component{

    state = {
        buttonvalues:[1,2,3,4,5,6,7,8,9,0,'*','/','+','-','=','CE'],
        buttons:[1,2,3,4,5,6,7,8,9,0],
        operators:['*','/','+','-'],
        value1:'',
        value2:'',
        value:'',
        initial:'0',
        result: '',
        active:'initial'
    }

    operation = (operator,val1,val2) => {  
        
        switch(operator){
            case '*':
            let res = (val1*val2)      
            return res
            case '+':
            res = (parseInt(val1,10)+parseInt(val2,10))      
            return res
            case '-':
            res = (val1-val2)      
            return res
            case '/':
            res = (val1/val2)      
            return res
            default:
        }
        
            
    }

    reset = () => {
        this.setState({
            value:'',      
        })
    }

    update = e => {
        if((this.state.buttons.includes(parseInt(e.target.value,10)) && (this.state.value!==''))){      
            this.reset()
            this.setState({ 
                value: [...e.target.value],
                active:true
            })   
        }else if(this.state.buttons.includes(parseInt(e.target.value,10))){
            
            this.setState({ 
                value: [...this.state.value,...e.target.value],
                active:true
            })   
        }else if(this.state.operators.includes(e.target.value)){
            let value=this.state.value;
            if(this.state.value1===''){
                this.setState({
                    active:true,
                    value1: value,
                    operator:e.target.value,
                })
            }
        }else if(e.target.value === '='){
            let values=this.state.value;
            let valus=this.state.result;
            let res = this.operation(this.state.operator,this.state.value1.join(''),values.join(''))
            this.setState({
                active:false,
                result:res,
                value2: valus,
                value1: values,
                value: res
            })
            this.reset()
        }else{
            this.reset()
            this.setState({
                value1:'',
                value2:'',
                value:'',
                initial:'0',
                result: '',
                active:'initial'
            })
        }
          
    }


    render(){
        
        return(
            
                <div className='container'>
                <p> React Calculator</p>
                    <Result  value={this.state.value} result={this.state.result} initial={this.state.initial} state={this.state.active}/>
                    <div className='content'>
                    {
                        this.state.buttonvalues.map(element=>
                            <Content key={element} click={this.update} reset={this.reset} button={element} values={this.state}/>
                        )
                       
                    }
                    </div>
                </div>
            
        )
    }
}

export default container