const initialState = {
    user: {},
    loading: true
  }
  
  
  export default function UserReducer(state = initialState, action) {
    switch (action.type) {
      case "SET_USER":
        return {...state, user: action.payload}
      case "SET_LOADING":
        return {...state, loading: action.payload}
      case "USER_LOGOUT":
        return initialState
      default:
        return state
    }
  }