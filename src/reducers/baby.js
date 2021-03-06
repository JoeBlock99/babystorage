import { combineReducers } from 'redux';

import * as types from '../types/babys';


const order = (state = [], action) => {
  switch (action.type) {
    case types.BABY_ADDED: {
      return [...state, action.payload.id];
    }
    default: {
      return state;
    }
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.BABY_ADDED: {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const baby = combineReducers({
  byId,
  order,
});

export default baby;

export const getBaby = (state, id) => state.byId[id];
