import React, {Component} from 'react'
import {Link} from '../../node_modules/react-router-dom'


const CourseRow = ({course, deleteCourse, selectCourse}) =>

    <tr>
		<td>
			  <Link onClick={() => selectCourse(course)} to={`/course/${course.id}`}>
     			{course.title}
 			  </Link>
		</td>
		<td>
			{course.id}
		</td>
		<td>
			2019
		</td>
		<td>
			<a onClick={() => deleteCourse(course)}><i className="fa fa-trash"></i></a>    		
		</td>
    </tr>

export default CourseRow;