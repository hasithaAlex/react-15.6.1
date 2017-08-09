import React, { Component } from 'react';
import uuid from 'uuid';
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
            id:uuid.v4(), 
            title:'Business Website',
            category:'Business Website'
          },
          {
            id:uuid.v4(),
            title:'Social App',
            category:'Mobile Development'
          },
          {
            id:uuid.v4(),
            title:'Ecommerce Shopping Cart',
            category:'Web Development'
          }     
        ]
    });
  }
  
  handleAddProject(project){
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index =projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        My App
        <AddProjects addProject={this.handleAddProject.bind(this)}/>
        <Projects onDelete={this.handleDeleteProject.bind(this)}  projects={this.state.projects}/>
      </div>
    );
  } 
}

export default App;
