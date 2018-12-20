import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component{
	constructor(props){
		super(props);
	

		 this.createTasks = this.createTasks.bind(this);
	}


	createTasks(item){
		return <li onClick={() => this.delete(item.key)} 
		key={item.key}>{item.text}</li>
	}

	delete(key){
		this.props.delete(key);

	}

	render(){
		var todoEntries = this.props.entries;
		var ListItems = todoEntries.map(this.createTasks);


		return(
       
		<ul className="lalista">
		<FlipMove duration={250} easing="ease-out">
		   {ListItems}
		 </FlipMove>  
		</ul>
		
		);


	}
}

export default TodoItems;