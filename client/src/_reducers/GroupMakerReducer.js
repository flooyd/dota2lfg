import {
  CHANGE_FIELD
} from '../_actions';

const initialState = {
  username: null,
  profilePic: null
};

export const GroupMakerReducer = (state=initialState, action) => {
  if(action.type === CHANGE_FIELD) {
    return Object.assign({}, state, {
      [action.field]: action.value
    })
  }

  return state;
}