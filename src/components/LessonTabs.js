import React, {Component} from 'react';
import TopicPills from './TopicPills';

const LessonTabs = ({lessons, selectedLesson, selectLesson}) =>
  <ul className="nav nav-tabs">
    {
      lessons.map(lesson =>
        <li key={lesson.id} className="nav-item" onClick={() => selectLesson(lesson)}>
        <a className={lesson===selectedLesson? "nav-link active":"nav-link"}>
        {lesson.title}</a>
        </li>
      )
    }
  </ul>
export default LessonTabs
