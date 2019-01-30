import React from 'react'
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      module: {
        id: 1,
        title: "New Module",
        lessons: [
          {
            id: 1,
            title: "New Lesson 1"
          },
          {
            id: 2,
            title: "New Lesson 2"
          }
        ]
      },
      modules: this.props.modules
    };

    // this.titleChanged = this.titleChanged.bind(this);
  }


  createModule = () => {
    let newModule = {
        id: (new Date()).getTime(),
        title: this.state.module.title,
        lessons: [
          {
            id: 1,
            title: "New Lesson 1"
          },
          {
            id: 2,
            title: "New Lesson 2"
          }
        ]
      }
    this.setState(
      {
        modules: [
          ...this.state.modules,
          newModule
        ]
      }
    )
  }

  deleteModule = (delmodule) => {
    this.setState(
      {
        modules: this.state.modules.filter(
      module => module !== delmodule
      )
      }
    )
  }


  titleChanged = (event) => {
    this.setState(
      {
        module: {
        id: 1,
        title: event.target.value? event.target.value:"New Module",
        lessons: [
          {
            id: 1,
            title: "New Lesson 1"
          },
          {
            id: 2,
            title: "New Lesson 2"
          }
        ]
      }
      });
  }


  render() {
    return(
      <div>
        <h3>Module List</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <input
              onChange={this.titleChanged}
              className="form-control"
              placeholder="New Module"/>
            <button
              onClick={this.createModule}
              className="btn btn-primary btn-block">Add Module</button>
          </li>
          {
            this.state.modules.map(
              (module) => {
                return (
                  <ModuleListItem
                    selectModule={this.props.selectModule}
                    selectedModule={this.props.selectedModule}
                    deleteModule={this.deleteModule}
                    key={module.id}
                    module={module}/>
                )
              }
            )
          }
        </ul>
      </div>
    )
  }
}
export default ModuleList;