import React, { Component } from 'react';

class AddProjects extends Component {
  static defaultProps = {
      categories: ['Web design', 'Web Development', 'Moblie Development']
  }

  render() {
    let categoryOptions = this.props.categories.map(category =>{
        return <option key={category} value="category">{category}</option>
    });

    return (
      <div>
        <h3>Add Project</h3>
        <form>
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
        </form>
      </div>
    );
  }
}

export default AddProjects;
