import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
  
  state ={
    arrClass:[
      {id: '1', name:'a', room:'101'},
      {id: '2', name:'b', room:'201'}, 
      {id: '3', name:'c', room:'301'},            
    ]
  }

addNewClass = (cla) => {
  console.log('Check  from parent', cla)
  this.setState({
    arrClass: [...this.state.arrClass, cla]
  })
}

deleteCla=(cla) =>{
  let currenCla = this.state.arrClass;
  currenCla = currenCla.filter(item => item.id !== cla.id);
  this.setState({
    arrClass:currenCla
  })
}



  render() {
    console.log('>>> call render: ', this.state);
    return (
      <>
        <AddComponent 
        addNewClass={this.addNewClass}
        
        />

        <ChildComponent
         arrClass={this.state.arrClass}
         deleteCla={this.deleteCla}
        />

      </>
    );
  }
}

export default MyComponent;
