import React from 'react'
import CourseCard from '../components/CourseCard'
import NewCourseCard from "../components/NewCourseCard"

const CourseGrid = ({courses, deleteCourse, addCourse}) =>
  <div className="card-deck">
    {
        courses.map(course =>
          <CourseCard
            deleteCourse={deleteCourse}
            course={course}
            key={course.id}/>
        )
    }
    <NewCourseCard
      addCourse={addCourse}/>
  </div>

export default CourseGrid