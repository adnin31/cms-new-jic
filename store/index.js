import { createStore, combineReducers, applyMiddleware,compose } from 'redux'
import RoleReducer from './roleReducer'
import UserReducer from './userReducer'
import thunk from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'

const reducer = combineReducers({
  UserReducer,
  RoleReducer
})
let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = () => createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))

export const wrapper = createWrapper(store)