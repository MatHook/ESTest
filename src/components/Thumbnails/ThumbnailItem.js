import { useSelector, useDispatch } from "react-redux";
import loading from "../../assets/loading.gif";
import { selectPhoto } from "../../redux/reducers/photos";
import { Thumbnail, ThumbnailItemStyled } from "../../styles/thumbnail-styling";

const ThumbnailItem = (props) => {
  const dispatch = useDispatch();
  const activePhoto = useSelector((state) => state.photos.activePhoto);

  return (
    <ThumbnailItemStyled
      bg={loading}
      className={activePhoto === props.id ? "active" : null}
      id={props.id}
      onClick={() => dispatch(selectPhoto(props.id))}
    >
      <Thumbnail src={props.img} />
    </ThumbnailItemStyled>
  );
};

export default ThumbnailItem;
