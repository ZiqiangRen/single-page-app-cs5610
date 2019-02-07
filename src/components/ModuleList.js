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
        "lessons": [
          {
            "id": 133,
            "title": "Lesson 3",
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
          {
            "id": 233,
            "title": "Lesson 4",
            "topics": [
              {
                "title": "DOM2",
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
                "title": "Tags2",
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
                "title": "Attributes2",
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
        "lessons": [
          {
            "id": 133,
            "title": "Lesson 3",
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
          {
            "id": 233,
            "title": "Lesson 4",
            "topics": [
              {
                "title": "DOM2",
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
                "title": "Tags2",
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
                "title": "Attributes2",
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
                className="btn btn-primary"><i className="fa fa-plus"></i></button>
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