import React from 'react'
import CourseCard from '../components/CourseCard'
import {Link} from 'react-router-dom'
import NewCourseCard from "../components/NewCourseCard"
import CourseService from "../services/CourseService"

const CourseGrid = ({courses, deleteCourse, addCourse, selectCourse}) =>
  <div>
  <Link className="btn btn-success" to="/table">To Table View</Link>
  <div className="card-deck">
    {
        courses.map(course =>
          <CourseCard
            selectCourse={selectCourse}
            deleteCourse={deleteCourse}
            course={course}
            key={course.id}/>
        )
    }
    <NewCourseCard
      addCourse={addCourse}/>
  </div>
 </div>
export default CourseGrid;