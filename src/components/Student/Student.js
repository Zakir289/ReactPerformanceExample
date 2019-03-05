import React, {Component } from 'react';
import './Student.css'


// class Student extends  PureComponent()    You can use PureComponenet as it will check all the checks for you 
class Student extends Component{

shouldComponentUpdate(nextProps,nextState){
        // console.log('should Compoent update')
        if(nextProps.content !== this.props.content){

            return true
        }
        else{
            return false;
        }
}


    deleteStudent = (index) => ()=> {
        this.props.deleteStudent(index)
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.editStudent(this.props.index, this.textInput.value);
        this.textInput.value = "";
    }

 render(){
        console.log('student render ')
     return(
         <div className='student-container'>
             <div>
                 Index: {this.props.content.ID}
             </div>
             <div>Name: {this.props.content.Name}</div>
             <button onClick={this.deleteStudent(this.props.index)}>delete</button>
             <form >
             <input type="text"  ref={(input) => this.textInput = input} />
                 <button type='submit' onClick={this.handleSubmit}>Submit</button>
             </form>
         </div>
     )
    }
}

export default Student;