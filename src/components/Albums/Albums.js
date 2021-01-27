import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAlbums, selectAlbum } from "../../redux/reducers/albums";
import { AlbumsStyled } from "../../styles/albums-styling";
import Slider from "../Slider";
import AlbumItem from "./AlbumItem";

const Albums = () => {
  const dispatch = useDispatch();
  const getAlbumsThunk = useCallback((id) => dispatch(getUserAlbums(id)), [
    dispatch,
  ]);
  const selectAlbumThunk = useCallback((id) => dispatch(selectAlbum(id)), [
    dispatch,
  ]);
  const albums = useSelector((state) => state.albums.albums);
  const activeUser = useSelector((state) => state.users.activeUser);

  useEffect(() => {
    getAlbumsThunk(activeUser);
  }, [getAlbumsThunk, activeUser]);

  useEffect(() => {
    if (albums.lenth) selectAlbumThunk(albums[0].id);
  }, [selectAlbumThunk, albums]);

  return (
    <AlbumsStyled>
      <h2>Albums</h2>
      <Slider>
        {albums.length
          ? albums.map((i) => <AlbumItem key={i.id} {...i} />)
          : "Loading..."}
      </Slider>
    </AlbumsStyled>
  );
};

export default Albums;
