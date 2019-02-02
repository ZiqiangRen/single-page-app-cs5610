import React, {Component} from 'react';
import TopicPills from './TopicPills';

import LessonItem from "./LessonItem";
import ReactDOM from "react-dom";

class LessonTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      update: 0,
        module:
          {
            id: 1,
            title: "New Lesson"
          },
      modules: this.props.lessons
    };

    // this.titleChanged = this.titleChanged.bind(this);
  }


  createModule = () => {
    if(this.state.update===0){
          let newModule = {
        id: (new Date()).getTime(),
        title: this.state.module.title,
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
          this.state.module.title = event.target.value? event.target.value:"New Lesson"

      }

    else{
      this.setState(
          {
            module: {
            id: updateID,
            title: update,
          }
        });

    }

  }


  render() {
    return(
      <div>
        <ul className="nav nav-tabs">
          {
            this.state.modules.map(
              (module) => {
                return (
                  <LessonItem
                    editModule = {this.editModule}
                    selectLesson={this.props.selectLesson}
                    selectedLesson={this.props.selectedLesson}
                    deleteModule={this.deleteModule}
                    titleChanged={this.titleChanged}
                    key={module.id}
                    module={module}/>
                )
              }
            )
          }
        <li className="nav-item">
            <div className="input-group">
            <input
              onChange={this.titleChanged}
              className="form-control"
              placeholder="New Lesson"/>
            <button
              onClick={this.createModule}
              className="btn btn-primary"><i class="fa fa-plus"></i></button>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}


export default LessonTabs;