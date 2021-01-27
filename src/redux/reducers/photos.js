import { galleryAPI } from "../../utils/api";

const initialState = {
  photos: [],
  activePhoto: 1,
  isFetching: false,
  openPopUp: false,
};

const photos = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PHOTOS":
      return {
        ...state,
        photos: action.photos,
      };
    case "SET_IS_FETCHING":
      return {
        ...state,
        isFetching: action.val,
      };
    case "OPEN_POPUP":
      return {
        ...state,
        openPopUp: action.val,
      };
    case "SELECT_PHOTO":
      return {
        ...state,
        activePhoto: action.val,
      };
    default:
      return state;
  }
};

const setPhotos = (val) => ({ type: "SET_PHOTOS", photos: val });
const setIsFetchingPhotos = (val) => ({ type: "SET_IS_FETCHING", val });

export const getAlbumPhotos = (id) => async (dispatch) => {
  dispatch(setIsFetchingPhotos(true));
  const data = await galleryAPI.getAlbumPhotos(id);
  dispatch(setPhotos(data));
  dispatch(setIsFetchingPhotos(false));
};

export const selectPhoto = (val) => ({ type: "SELECT_PHOTO", val });
export const openPopUp = (val) => ({ type: "OPEN_POPUP", val });

export default photos;
