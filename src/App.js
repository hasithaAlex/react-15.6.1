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
      projects:[
          {
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
          }     ]
    });
  }
  
  handleAddProject(project){
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        My App
        <AddProjects addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  } 
}

export default App;
