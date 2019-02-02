import React from 'react'
import ModuleListItem from "./ModuleListItem";
import ReactDOM from "react-dom";

class ModuleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      update: 0,
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
    if(this.state.update===0){
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
    else{
      console.log(this.state.modules);
      console.log(this.state.module);
      var i = 0
      for(i=0;i<this.state.modules.length;i++){
        if(this.state.modules[i].id===this.state.module.id){
          this.state.modules[i] = this.state.module;
          break;
        }
      }
      this.setState(

      {
        modules: this.state.modules
      })

    }
    this.state.update = 0;

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


  editModule = (edmodule, titleChange) => {
    this.setState(
      {
        update: edmodule.id,
        module: edmodule
      }
    )
    titleChange(edmodule,edmodule.title, edmodule.id);
    const node = ReactDOM.findDOMNode(this);
    const child = node.querySelector('input');
    child.value = edmodule.title;
  }


  titleChanged = (event, update="",updateID=0) => {
    if(update===""){
          this.state.module.title = event.target.value? event.target.value:"New Module"

      }

  else{
    this.setState(
        {
          module: {
          id: updateID,
          title: update,
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

  }


  render() {
    return(
      <div>
        <h3>Module List</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="input-group">
              <input
                onChange={this.titleChanged}
                className="form-control"
                placeholder="New Module"/>
              <button
                onClick={this.createModule}
                className="btn btn-primary"><i class="fa fa-plus"></i></button>
            </div>
          </li>
          {
            this.state.modules.map(
              (module) => {
                return (
                  <ModuleListItem
                    editModule = {this.editModule}
                    selectModule={this.props.selectModule}
                    selectedModule={this.props.selectedModule}
                    deleteModule={this.deleteModule}
                    titleChanged={this.titleChanged}
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