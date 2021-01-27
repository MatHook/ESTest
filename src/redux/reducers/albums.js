import { galleryAPI } from "../../utils/api";

const initialState = {
  albums: [],
  activeAlbum: 1,
  isFething: false,
  error: null,
};

const albums = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALBUMS":
      return {
        ...state,
        albums: action.albums,
      };
    case "SET_IS_FETCHING":
      return {
        ...state,
        isFetching: action.val,
      };
    case "SELECT_ALBUM":
      return {
        ...state,
        activeAlbum: action.val,
      };
    default:
      return state;
  }
};

const setAlbums = (val) => ({ type: "SET_ALBUMS", albums: val });
const setIsFetchingAlbums = (val) => ({ type: "SET_IS_FETCHING", val });

export const getUserAlbums = (id) => async (dispatch) => {
  dispatch(setIsFetchingAlbums(true));
  const data = await galleryAPI.getUserAlbums(id);
  dispatch(setAlbums(data));
  dispatch(setIsFetchingAlbums(false));
};

export const getCoverAlbum = (id) => () => {
  return galleryAPI.getAlbumCover(id);
};

export const selectAlbum = (val) => ({ type: "SELECT_ALBUM", val });

export default albums;
