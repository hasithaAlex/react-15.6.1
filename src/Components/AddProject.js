import React, { Component } from 'react';
import uuid from 'uuid';

class AddProjects extends Component {
  constructor(){
    super();
    this.state={
        newProject:{}
    };    
  }      
  
  static defaultProps = {
      categories: ['Web design', 'Web Development', 'Moblie Development']
  }

  handleSubmit(e){
    if (this.refs.title.value =='') {
        alert("Title is required");   
    } else{
        this.setState({
            newProject:{
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }        
        },
        //call back function
        function() {
            this.props.addProject(this.state.newProject);    
        }  
        );
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category =>{
        return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <lable> Title </lable>
                <input type="text" ref="title"/>
            </div>
            <div>
                <lable> Category </lable>
                <select ref="category">
                    {categoryOptions}
                </select>    
            </div>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

AddProjects.propTypes = {
    categories : React.PropTypes.array,
    addProject: React.PropTypes.func,    
}

export default AddProjects;
