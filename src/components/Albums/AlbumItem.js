import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoverAlbum, selectAlbum } from "../../redux/reducers/albums";
import { AlbumItemStyled } from "../../styles/album-styling";
import loading from "../../assets/loading.gif";

const AlbumItem = (props) => {
  const [cover, setCover] = useState();
  const dispatch = useDispatch();
  const activeAlbum = useSelector((state) => state.albums.activeAlbum);
  const getCover = useCallback((id) => dispatch(getCoverAlbum(id)), [dispatch]);

  useEffect(() => {
    getCover(props.id).then((data) => setCover(data));
  }, [getCover, props.id]);

  return (
    <AlbumItemStyled
      bg={cover ? cover.thumbnailUrl : loading}
      className={activeAlbum === props.id ? "active" : null}
      onClick={() => dispatch(selectAlbum(props.id))}
    ></AlbumItemStyled>
  );
};

export default AlbumItem;
