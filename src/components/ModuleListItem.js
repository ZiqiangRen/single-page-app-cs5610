import React from 'react'

const ModuleListItem = ({module, selectModule, selectedModule, editModule, deleteModule, titleChanged}) =>
    <li onClick={() => selectModule(module)} className={module === selectedModule? "list-group-item active":"list-group-item"}>
      {module.title}
      <a className = "float-right" onClick={() => editModule(module, titleChanged)}><i className="fa fa-edit"></i></a>
      <a className = "float-right" onClick={() => deleteModule(module)}><i className="fa fa-trash"></i></a>
    </li>

export default ModuleListItem;

