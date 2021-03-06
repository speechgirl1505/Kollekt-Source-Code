import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  // UPDATE_PROFILE,
  CLEAR_PROFILE
} from "../actions/types";

const initialState = {
  profile: null, 
  profiles: [],
  //for github repos we wont need
  repos: [],
  loading: true, 
  error: {}
};


export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      // case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_PROFILES:
      return { 
        ...state, 
        profiles: payload, 
        loading: false 
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false, 
        // the below code is in master code but was not in ours
        profile: null
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false
      };
    default:
      return state;
  }
}
