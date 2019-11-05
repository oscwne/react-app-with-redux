// @flow
import {
  CREATE_AUTHOR_SUCCESS,
  LOAD_AUTHORS_SUCCESS
} from '../constants/author.constants'

export default function authorReducer(
  state: Array<{ [key: string]: any }> = [],
  action: { [key: string]: any }
): Array<{ [key: string]: any }> {
  switch (action.type) {
    case CREATE_AUTHOR_SUCCESS:
      return [...state, { ...action.author }]
    case LOAD_AUTHORS_SUCCESS:
      return action.authors
    default:
      return state
  }
}
