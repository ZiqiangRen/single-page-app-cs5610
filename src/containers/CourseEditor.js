import React from 'react';
import ModuleList from '../components/ModuleList'
import LessonTabs from '../components/LessonTabs'
import TopicPills from '../components/TopicPills'
import CourseService from "../services/CourseService"


import WidgetListContainer from '../containers/WidgetListContainer'
import widgetReducer from '../reducers/WidgetReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'





class CourseEditor extends React.Component {
  constructor(props) {
    super(props)
    this.courseService = new CourseService()



    this.store = createStore(widgetReducer);
    const courseId = parseInt(props.match.params.id)
    const course = this.courseService.findCourseById(courseId)
    this.state = {
      course: course,
      lesson: course.modules[0].lessons,
      topic: course.modules[0].lessons[0].topics,
      selectedModule: course.modules[0],
      selectedLesson: course.modules[0].lessons[0],
      selectedTopic: course.modules[0].lessons[0].topics[0],
    }
  }


  
  selectModule = module => {
    let action = {
      type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
      topicId: module.lessons[0].topics[0].id
    }
    this.store.dispatch(action);
    this.setState({
      selectedModule: module,
      selectedLesson: module.lessons[0],
      selectedTopic: module.lessons[0].topics[0],
      lesson: module.lessons,
      topic: module.lessons[0].topics
    });
  }



  selectLesson = lesson => {
   let action = {
      type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
      topicId: lesson.topics[0].id
    }
    this.store.dispatch(action);
   this.setState({
       selectedLesson: lesson,
       selectedTopic: lesson.topics[0],
       topic: lesson.topics
   })
}

  selectTopic = topic => {
   let action = {
      type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
      topicId: topic.id
    }
    this.store.dispatch(action);
       this.setState({
       selectedTopic: topic
   })
}

   addLesson = lesson => 
      this.setState({
       lesson: [ ...this.state.lesson,
                 lesson
       ]
   })

   addTopic = topic => 
      this.setState({
       topic: [ ...this.state.topic,
                 topic
       ]
   })

 render() { 
 	return(
      <div>
        <h2>Course Editor: {this.state.course.title}</h2>
        <div className="row">
          <div className="col-4">
            <ModuleList
              selectModule={this.selectModule}
              selectedModule={this.state.selectedModule}
              modules={this.state.course.modules}/>
          </div>
          <div className="col-8">
            <LessonTabs
              selectLesson={this.selectLesson}
              selectedLesson={this.state.selectedLesson}
              addLesson={this.addLesson}
              lessons={this.state.lesson}/>
            <br/>
            <TopicPills
              selectTopic={this.selectTopic}
              selectedTopic={this.state.selectedTopic}
              addTopic={this.addTopic}
              topics={this.state.topic}/>
            <br/>
            <Provider store={this.store}>
              <WidgetListContainer/>
            </Provider>
          </div>
        </div>
      </div>
    );
  }
}



export default CourseEditor