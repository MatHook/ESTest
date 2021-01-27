import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAlbumPhotos, selectPhoto } from "../../redux/reducers/photos";
import PhotoItem from "./PhotoItem";
import Thumbnails from "../Thumbnails/Thumbnails";

const PhotosStyled = styled.div`
  min-height: 100vh;
  padding: 20px;
  background-color: #99b6f0;
`;

const Photos = () => {
  const dispatch = useDispatch();
  const getPhotosThunk = useCallback((id) => dispatch(getAlbumPhotos(id)), [
    dispatch,
  ]);
  const selectPhotoThunk = useCallback((id) => dispatch(selectPhoto(id)), [
    dispatch,
  ]);

  const photos = useSelector((state) => state.photos.photos);
  const activeAlbum = useSelector((state) => state.albums.activeAlbum);
  const activePhoto = useSelector((state) => state.photos.activePhoto);

  useEffect(() => {
    getPhotosThunk(activeAlbum);
  }, [getPhotosThunk, activeAlbum]);
  useEffect(() => {
    if (photos.length) selectPhotoThunk(photos[0].id);
  }, [selectPhotoThunk, photos]);

  return (
    <PhotosStyled>
      <h2>Photos</h2>
      <PhotoItem photo={photos.find((arr) => arr.id === activePhoto)} />
      <Thumbnails photos={photos} />
    </PhotosStyled>
  );
};

export default Photos;
