import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
import CourseEditor from "./CourseEditor";
class WhiteBoard extends Component {
  constructor(props) {
    super(props);
    this.courseService = new CourseService()
    const c = this.courseService.findAllCourses()
    this.state = {
      courses: c,
      selectedCourse: c[0]
    }
  }


  deleteCourse = (course) =>
    this.setState({
      courses: this.courseService.deleteCourse(course)
    })


  addCourse = () =>
    this.setState({
      courses: this.courseService.addCourse(null)
    })


  selectCourse = (course) =>
     this.setState({selectedCourse: course})


  render() {
    return (
      <div className="container-fluid">
        <h1>White Board</h1>
        <Router>
          <div>
            
            <Route path='/' 
                   exact
                   render={() =>
                     <CourseGrid
                       selectCourse={this.selectCourse}
                       addCourse={this.addCourse}
                       deleteCourse={this.deleteCourse}
                       courses={this.state.courses}/>}/>
            <Route path="/course/:id"
                   exact
                   component={CourseEditor}/>
            <Route path='/table'
                   render={() => 
                    <CourseTable 
                       selectCourse={this.selectCourse}
                       addCourse={this.addCourse}
                       deleteCourse={this.deleteCourse}
                       courses={this.state.courses}/>}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default WhiteBoard;