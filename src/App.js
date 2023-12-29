import React,{Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component  {

constructor(){
  super();
  this.state={
   monsters: [],
   searchFeild:''
    
  };

        // *******this binding is necessary to make `this` work in a callback
  // this.handleChange =this.handleChange.bind(this);

}

componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>this.setState({monsters: users}));
}


handleChange =(e)=>{                  /// //if we use arrow function here there is no need of bind()
                                        // this is lexical scoping 
  this.setState({searchFeild:e.target.value} );
}
render(){

const { monsters, searchFeild} = this.state;
// const monsters  = this.state.monsters;
const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchFeild.toLowerCase()));
  return (
    <div className="App">
    <h1>Monster Rolodex</h1>
    <SearchBox 
       placeholder='search monster'
       handleChange={ this.handleChange}
    />
      <CardList monsters={filteredMonsters}/>
      
    </div>

   
  );}

}

export default App;
