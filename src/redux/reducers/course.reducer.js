// @flow
import {
  LOAD_COURSES_SUCCESS,
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS
} from '../constants/course.constants'

export default function courseReducer(
  state: Array<{ [key: string]: any }> = [],
  action: { [key: string]: any }
): Array<{ [key: string]: any }> {
  switch (action.type) {
    case CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }]
    case UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      )
    case LOAD_COURSES_SUCCESS:
      return action.courses
    default:
      return state
  }
}
