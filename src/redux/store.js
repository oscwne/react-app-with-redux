import { createStore, applyMiddleware, compose } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers'

export default function configStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(reduxThunk, reduxImmutableStateInvariant())
    )
  )
}
