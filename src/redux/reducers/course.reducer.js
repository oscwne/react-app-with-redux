// @flow
import {
  CREATE_COURSE,
  LOAD_COURSES_SUCCESS
} from '../constants/course.constants'

export default function courseReducer(
  state: Array<{ [key: string]: any }> = [],
  action: { [key: string]: any }
): Array<{ [key: string]: any }> {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }]
    case LOAD_COURSES_SUCCESS:
      return action.courses
    default:
      return state
  }
}
