// @flow
import * as courseAPI from '../../api/courseApi'

import {
  LOAD_COURSES_SUCCESS,
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS
} from '../constants/course.constants'

export const loadCourses = () => (dispatch: any) => {
  return courseAPI
    .getCourses()
    .then(courses => {
      dispatch({ type: LOAD_COURSES_SUCCESS, courses })
    })
    .catch(error => {
      throw error
    })
}

export const saveCourse = (course: { [key: string]: any }) => dispatch => {
  return courseAPI
    .saveCourse(course)
    .then(savedCourse => {
      dispatch({
        type: course.id ? UPDATE_COURSE_SUCCESS : CREATE_COURSE_SUCCESS,
        course: savedCourse
      })
    })
    .catch(error => {
      throw error
    })
}
