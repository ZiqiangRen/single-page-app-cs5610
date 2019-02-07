import React from 'react'

const LessonItem = ({module, selectPill, selectedPill, editModule, deleteModule, titleChanged}) =>
    <li className="nav-item">
      <a onClick={() => selectPill(module)} className={module === selectedPill?"nav-link active":"nav-link"}>{module.title}
      <i className = "fa fa-edit float-right" onClick={() => editModule(module, titleChanged)}></i>
      <i className = "fa fa-trash float-right" onClick={() => deleteModule(module)}></i>
      </a>
    </li>

export default LessonItem;