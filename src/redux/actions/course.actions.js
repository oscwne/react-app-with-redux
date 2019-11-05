// @flow
import * as courseAPI from '../../api/courseApi'
import { LOAD_COURSES_SUCCESS } from '../constants/course.constants'

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

export function createCourse(course: {
  [key: string]: any
}): { [key: string]: any } {
  return { type: 'CREATE_COURSE', course }
}
export function editCourse(course: {
  [key: string]: any
}): {
  [key: string]: any
} {
  return { type: 'EDIT_COURSE', course }
}
