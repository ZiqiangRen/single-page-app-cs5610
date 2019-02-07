import React, {Component} from 'react';
//import TopicPills from './TopicPills';

import LessonItem from "./LessonItem";
import ReactDOM from "react-dom";

class LessonTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      update: 0,
        module:
          {
            id: 1,
            title: "New Lesson",
            "topics": [
              {
                "title": "DOM",
                "id": 321,
                "widgets": [
                  {
                    "id": 3214,
                    "type": "HEADING",
                    "size": 1,
                    "text": "The Document Object Model"
                  },
                  {
                    "id": 5432,
                    "type": "PARAGRAPH",
                    "text": "This topic introduces the DOM"
                  },
                  {
                    "id":9867,
                    "type": "LIST",
                    "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                  },
                  {
                    "id":7654,
                    "type": "IMAGE",
                    "src": "https://picsum.photos/200"
                  },
                  {
                    "id": 8763,
                    "type": "LINK",
                    "title": "The DOM",
                    "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                  }
                ]
              },
              {
                "title": "Tags",
                "id": 654,
                "widgets": [
                  {
                    "id": 3214,
                    "type": "HEADING",
                    "size": 1,
                    "text": "The Document Object Model"
                  },
                  {
                    "id": 5432,
                    "type": "PARAGRAPH",
                    "text": "This topic introduces the DOM"
                  },
                  {
                    "id":9867,
                    "type": "LIST",
                    "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                  },
                  {
                    "id":7654,
                    "type": "IMAGE",
                    "src": "https://picsum.photos/200"
                  },
                  {
                    "id": 8763,
                    "type": "LINK",
                    "title": "The DOM",
                    "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                  }
                ]
              },
              {
                "title": "Attributes",
                "id": 987,
                "widgets": [
                  {
                    "id": 3214,
                    "type": "HEADING",
                    "size": 1,
                    "text": "The Document Object Model"
                  },
                  {
                    "id": 5432,
                    "type": "PARAGRAPH",
                    "text": "This topic introduces the DOM"
                  },
                  {
                    "id":9867,
                    "type": "LIST",
                    "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                  },
                  {
                    "id":7654,
                    "type": "IMAGE",
                    "src": "https://picsum.photos/200"
                  },
                  {
                    "id": 8763,
                    "type": "LINK",
                    "title": "The DOM",
                    "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                  }
                ]
              }
            ]
          },
      modules: this.props.lessons
    };
  }

  componentWillReceiveProps(nextProps) {
      this.setState({modules: nextProps.lessons});
  }


  createModule = () => {
    if(this.state.update===0){
          let newModule = {
        id: (new Date()).getTime(),
        title: this.state.module.title,
        "topics": [
              {
                "title": "DOM",
                "id": 321,
                "widgets": [
                  {
                    "id": 3214,
                    "type": "HEADING",
                    "size": 1,
                    "text": "The Document Object Model"
                  },
                  {
                    "id": 5432,
                    "type": "PARAGRAPH",
                    "text": "This topic introduces the DOM"
                  },
                  {
                    "id":9867,
                    "type": "LIST",
                    "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                  },
                  {
                    "id":7654,
                    "type": "IMAGE",
                    "src": "https://picsum.photos/200"
                  },
                  {
                    "id": 8763,
                    "type": "LINK",
                    "title": "The DOM",
                    "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                  }
                ]
              },
              {
                "title": "Tags",
                "id": 654,
                "widgets": [
                  {
                    "id": 3214,
                    "type": "HEADING",
                    "size": 1,
                    "text": "The Document Object Model"
                  },
                  {
                    "id": 5432,
                    "type": "PARAGRAPH",
                    "text": "This topic introduces the DOM"
                  },
                  {
                    "id":9867,
                    "type": "LIST",
                    "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                  },
                  {
                    "id":7654,
                    "type": "IMAGE",
                    "src": "https://picsum.photos/200"
                  },
                  {
                    "id": 8763,
                    "type": "LINK",
                    "title": "The DOM",
                    "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                  }
                ]
              },
              {
                "title": "Attributes",
                "id": 987,
                "widgets": [
                  {
                    "id": 3214,
                    "type": "HEADING",
                    "size": 1,
                    "text": "The Document Object Model"
                  },
                  {
                    "id": 5432,
                    "type": "PARAGRAPH",
                    "text": "This topic introduces the DOM"
                  },
                  {
                    "id":9867,
                    "type": "LIST",
                    "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                  },
                  {
                    "id":7654,
                    "type": "IMAGE",
                    "src": "https://picsum.photos/200"
                  },
                  {
                    "id": 8763,
                    "type": "LINK",
                    "title": "The DOM",
                    "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                  }
                ]
              }
            ]
      }
    this.setState({
        modules: [
          ...this.state.modules,
          newModule
        ]})

    this.props.addLesson(newModule);

    }
    else{
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
              className="btn btn-primary"><i className="fa fa-plus"></i></button>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}


export default LessonTabs;