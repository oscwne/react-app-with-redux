// @flow
import * as authorAPI from '../../api/authorApi'
import { LOAD_AUTHORS_SUCCESS } from '../constants/author.constants'

export const loadAuthors = () => (dispatch: any) => {
  return authorAPI
    .getAuthors()
    .then(authors => dispatch({ type: LOAD_AUTHORS_SUCCESS, authors }))
    .catch(error => {
      throw error
    })
}

export const createAuthor = () => (dispatch: any) => {
  dispatch()
}
