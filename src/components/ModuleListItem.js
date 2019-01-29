import React from 'react'

const ModuleListItem = ({module, selectModule, selectedModule}) =>
    <li onClick={() => selectModule(module)} className={module === selectedModule?"list-group-item active":"list-group-item"}>
      {module.title}
    </li>

export default ModuleListItem;
