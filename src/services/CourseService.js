import courses from './courses.json'



class CourseService {

  constructor() {
    this.courses = courses;

  }

  createWidget = (topicId, widget) => {
    if(widget===null){
      widget={
                    "id": (new Date()).getTime(),
                    "type": "HEADING",
                    "size": 1,
                    "text": "The Document Object Model"
      };
    }
    for (var i = 0; i < this.courses.length; i++) {
        var curModules = this.courses[i].modules;
        for (var j = 0; j < curModules.length; j++){
          var curLessons = curModules[j].lessons;
          for (var k = 0; k < curLessons.length; k++){
            var curTopics = curLessons[k].topics;
            for (var l = 0; l < curTopics.length; l++){
              if(curTopics[l].id===topicId){
                this.course[i].modules[j].lessons[k].topics[l].widgets.push(widget);
                return this.courses;
              }
            }
          }
        }
    }
    return this.courses;
}
  findWidgets = (topicId) => {
    for (var i = 0; i < this.courses.length; i++) {
        var curModules = this.courses[i].modules;
        for (var j = 0; j < curModules.length; j++){
          var curLessons = curModules[j].lessons;
          for (var k = 0; k < curLessons.length; k++){
            var curTopics = curLessons[k].topics;
            for (var l = 0; l < curTopics.length; l++){
              if(curTopics[l].id===topicId){
                return curTopics[l].widgets;
              }
            }
          }
        }
    } 
    return null;   
  }

  findWidget = (widgetId) => {
    for (var i = 0; i < this.courses.length; i++) {
        var curModules = this.courses[i].modules;
        for (var j = 0; j < curModules.length; j++){
          var curLessons = curModules[j].lessons;
          for (var k = 0; k < curLessons.length; k++){
            var curTopics = curLessons[k].topics;
            for (var l = 0; l < curTopics.length; l++){
                for(var p=0; p<curTopics[l].widgets.length; p++){
                  if (curTopics[l].widgets[p].id===widgetId){
                    return curTopics[l].widgets[p];
                  }
                }
            }
          }
        }
    } 
    return null;   
  }


  updateWidget = (widgetId, widget) => {
    for (var i = 0; i < this.courses.length; i++) {
        var curModules = this.courses[i].modules;
        for (var j = 0; j < curModules.length; j++){
          var curLessons = curModules[j].lessons;
          for (var k = 0; k < curLessons.length; k++){
            var curTopics = curLessons[k].topics;
            for (var l = 0; l < curTopics.length; l++){
                for(var p=0; p<curTopics[l].widgets.length; p++){
                  if (curTopics[l].widgets[p].id===widgetId){
                    this.course[i].modules[j].lessons[k].topics[l].widgets[p] = widget;
                    return this.courses;
                  }
                }
            }
          }
        }
    }
    return this.courses;     
  }


  deleteWidget = (widgetId) => {
        for (var i = 0; i < this.courses.length; i++) {
        var curModules = this.courses[i].modules;
        for (var j = 0; j < curModules.length; j++){
          var curLessons = curModules[j].lessons;
          for (var k = 0; k < curLessons.length; k++){
            var curTopics = curLessons[k].topics;
            for (var l = 0; l < curTopics.length; l++){
                for(var p=0; p<curTopics[l].widgets.length; p++){
                  if (curTopics[l].widgets[p].id===widgetId){
                       this.course[i].modules[j].lessons[k].topics[l].widgets = this.course[i].modules[j].lessons[k].topics[l].widgets.filter(
                            widget => widget.id !== widgetId)
                      return this.courses;                   
                  }

                }
            }
          }
        }
    }
    return this.courses;
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