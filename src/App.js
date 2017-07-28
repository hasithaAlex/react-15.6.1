import React, { Component } from 'react';
import Projects from './Components/Projects'; 
import AddProjects from './Components/AddProject';
import './App.css';


class App extends Component {
  constructor()
  {
    super();
    this.state = {
      projects:[]

    }
  }
  
  componentWillMount(){
    this.setState({
      projects:[{
          title:'Business Website',
          category:'Business Website'
        },
        {
          title:'Social App',
          category:'Mobile Development'
        },
        {
          title:'Ecommerce Shopping Cart',
          category:'Web Development'
        }]
    });
  }
  
  render() {
    return (
      <div className="App">
        My App

        <AddProjects/>

        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
