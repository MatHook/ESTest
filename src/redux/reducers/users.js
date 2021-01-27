import { galleryAPI } from "../../utils/api";

const initialState = {
  users: [],
  activeUser: 1,
  isFetching: false,
  errors: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.users,
      };
    case "SET_IS_FETCHING":
      return {
        ...state,
        isFetching: action.val,
      };
    case "SELECT_USER":
      return {
        ...state,
        activeUser: action.val,
      };
    default:
      return state;
  }
};

const setUsers = (val) => ({ type: "SET_USERS", users: val });
const setIsFetchingUsers = (val) => ({ type: "SET_IS_FETCHING", val });

export const getUsers = () => async (dispatch) => {
  dispatch(setIsFetchingUsers(true));
  const data = await galleryAPI.getUsers();
  dispatch(setUsers(data));
  dispatch(setIsFetchingUsers(false));
};

export const selectUser = (val) => ({ type: "SELECT_USER", val });

export default users