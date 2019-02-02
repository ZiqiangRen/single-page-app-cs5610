import React from 'react'

const LessonItem = ({module, selectPill, selectedPill, editModule, deleteModule, titleChanged}) =>
    <li className="nav-item">
      <a onClick={() => selectPill(module)} className={module === selectedPill?"nav-link active":"nav-link"}>{module.title}
      <a className = "float-right" onClick={() => editModule(module, titleChanged)}><i className="fa fa-edit"></i></a>
      <a className = "float-right" onClick={() => deleteModule(module)}><i className="fa fa-trash"></i></a>
      </a>
    </li>

export default LessonItem;