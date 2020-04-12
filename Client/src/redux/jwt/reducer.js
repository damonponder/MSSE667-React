import * as types from "./constants";
const initialState = {
  token: null,
  isAuthenticated: false,
  roles: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD:
      if (!action.token)
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          roles: null
        };
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
        roles: action.roles
      };
    case types.REMOVE:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        roles: null
      };
    case types.VERIFY:
    default:
      return { ...state };
  }
}
