import React, {Component} from 'react';

import PillItem from "./PillItem";
import ReactDOM from "react-dom";

class TopicPills extends Component {
  constructor(props) {
    super(props)
    const topics = [
          {
            id: 1,
            title: "Topic 1"
          },
          {
            id: 2,
            title: "Topic 2"
          },
          {
            id: 3,
            title: "Topic 3"
          },
      ]
    this.state = {
      update: 0,
      module:
        {
          id: 1,
          title: "New Topic"
        },
        modules : this.props.topics,
    };
  }


  componentWillReceiveProps(nextProps) {
      this.setState({modules: nextProps.topics});
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
    this.props.addTopic(newModule);
    }
    else{
      //console.log(this.state.modules);
      //console.log(this.state.module);
      var i = 0;
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
          this.state.module.title = event.target.value? event.target.value:"New Topic"

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
    //console.log(this.props.topics);
    return(
      <div>
        <ul className="nav nav-pills">
          {
            this.state.modules.map(
              (module) => {
                return (
                  <PillItem
                    editModule = {this.editModule}
                    selectPill={this.props.selectTopic}
                    selectedPill={this.props.selectedTopic}
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
              placeholder="New Topic"/>
            <span className="input-group-btn">
            <button
              onClick={this.createModule}
              className="btn btn-primary"><i className="fa fa-plus"></i></button>
            </span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}


export default TopicPills;



