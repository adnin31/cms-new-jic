const initialState = {
    roles: [],
    loading: true,
    totalRoles:0
  }
  
  
  export default function RoleReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_ROLES":
        const newRoles = action.payload
        return { ...state, products: newRoles, totalRoles: newRoles.length}
      case "SET_LOADING":
        return {...state, loading: action.payload}
      default:
        return state
    }
  }