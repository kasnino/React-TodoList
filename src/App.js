import React, { Component } from 'react';
import TodoItems from './TodoItems';
import {Grid, Cell} from 'react-mdl';
import './App.css';

class App extends Component {
  constructor(props){
    super(props); 

  
        this.state ={
            items: []
        };

/*aqui llamos a las funciones */
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  addItem(e){
        if (this._inputElement.value !== ""){
          var newItem = {
              text: this._inputElement.value,
              key: Date.now()
          };

          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });

        }

        this._inputElement.value = "";
        console.log(this.state.items);
        e.preventDefault();

  }

  deleteItem(key){

    console.log("aqui los keys: " + key);

    var filterredItems = this.state.items.filter(function(item){
        return(item.key !== key)

    }); 

  this.setState({
      items: filterredItems

  });


  }



  render() {
    return (
    <Grid className="grid_list" style={{marginLeft: '0'}}>
    <Cell col={6}>
       <div className="todolist_resumen">
       <h3>Resumen del Reto</h3>
       <p>Primer reto realizado con React y otras tecnologias.
       Todo list, crea y elimina.
       </p>
       <ul>
       <li><pre>React Js</pre></li>
       <li><pre>Estructura de una App React Js</pre></li>
       <li>react-mdl :  design</li>
       <li>react-flip-move</li>
       <li> HTML & Css (hover & transicions)</li>
       <li> font awesome</li>
        <a href="https://www.twitter.com/kasnino" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square fa-3x" aria-hidden="true" />
          </a>
              <a href="https://www.linkedin.com/in/kasnino/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://www.linkedin.com/in/kasnino/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square fa-3x" aria-hidden="true" />
          </a>
          <br/>
          <h5>Kristian Serrano</h5>
       </ul>
       </div>
     </Cell>
     <Cell col={6}>  
      <div className="todolist_main">
       
     
        <header className="App-header">
          <h1>
            Todo List
          </h1>
          <div className="contededor_dos">
          <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a}
                     placeholder="Comenta algo!" className="input_app"></input>
              <button className="button_app" tipe="submit"> Add </button>
          </form>
           <div className="todo_listaitems">
           <TodoItems entries={this.state.items}
                      delete={this.deleteItem}

            />
           </div>
       </div>

        </header>
         
      </div>
    </Cell>
    </Grid> 
    );
  }
}

export default App;
