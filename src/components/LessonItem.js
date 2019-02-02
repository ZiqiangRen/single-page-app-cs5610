import React from 'react'

const LessonItem = ({module, selectLesson, selectedLesson, editModule, deleteModule, titleChanged}) =>
    <li onClick={() => selectLesson(module)} className={module === selectedLesson?"nav-link active":"nav-link"}>
      {module.title}
      <a className = "float-right" onClick={() => editModule(module, titleChanged)}><i className="fa fa-edit"></i></a>
      <a className = "float-right" onClick={() => deleteModule(module)}><i className="fa fa-trash"></i></a>
    </li>

export default LessonItem;