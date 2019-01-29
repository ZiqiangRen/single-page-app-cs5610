import courses from './courses.json'



class CourseService {

  constructor() {
    this.courses = courses;
  }



  addCourse = (course) => {
    if(course === null) {
      course = {
        id: (new Date()).getTime(),
        title: 'New Course',
        modules: [
      {
        id: 1,
        title: "jQuery",
        lessons: [
          {
            id: 1,
            title: "Lesson 1"
          },
          {
            id: 2,
            title: "Lesson 2"
          }
        ]
      },
      {
        id: 11,
        title: "json",
        lessons: [
          {
            id: 13,
            title: "Lesson 1"
          },
          {
            id: 22,
            title: "Lesson 2"
          }
        ]
      }
    ]
      }
    }
    this.courses.push(course)
    return this.courses
  }



  findCourseById = (courseId) =>
    this.courses = this.courses.find(
      course => course.id === courseId
    )



  findAllCourses = () =>
    this.courses;



  deleteCourse = (deleteCourse) =>
    this.courses = this.courses.filter(
      course => course.id !== deleteCourse.id
    )

}



export default CourseService