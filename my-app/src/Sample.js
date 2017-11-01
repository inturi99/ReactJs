import React,{Component} from 'react';
import Welcome from './Welcome'
function formateName(user){
    return user.firstName+' '+user.lastName;
  }
  const user = {
    firstName:'Krishnarao',
    lastName: 'Inturi'
  };
 
  const element = (
    <div>
    <h1>Hello, {formateName(user)}!</h1>
    <h1>It is {new Date().toLocaleTimeString()} </h1>
    <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  )

  class Sample extends Component{
      render(){
          return element
      }
  }
  
  export default Sample;
  