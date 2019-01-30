import React from 'react';
import ModuleList from '../components/ModuleList'
import LessonTabs from '../components/LessonTabs'
import TopicPills from '../components/TopicPills'
import CourseService from "../services/CourseService"
import WidgetList from "../components/WidgetList"

class CourseEditor extends React.Component {
  constructor(props) {
    super(props)
    this.courseService = new CourseService()
    const courseId = parseInt(props.match.params.id)
    const course = this.courseService.findCourseById(courseId)
    this.state = {
      course: course,
      module: course.modules,
      selectedModule: course.modules[0]
    }
  }


  
  selectModule = module =>
    this.setState({
      selectedModule: module
    })


  selectLesson = lesson =>
   this.setState({
       selectedLesson: lesson,
       //selectedTopic: lesson.topics[0]
   })



 render() { 
 	return(
      <div>
        <h2>Course Editor: {this.state.course.title}</h2>
        <div className="row">
          <div className="col-4">
            <ModuleList
              selectedModule={this.state.selectedModule}
              selectModule={this.selectModule}
              modules={this.state.module}/>
          </div>
          <div className="col-8">
            <LessonTabs
              selectLesson={this.selectLesson}
              selectedLesson={this.state.selectedLesson}
              lessons={this.state.selectedModule.lessons}/>
            <TopicPills/>
            <WidgetList/>
          </div>
        </div>
      </div>

);
}}



export default CourseEditor