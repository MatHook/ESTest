import { useDispatch } from "react-redux";
import loading from "../../assets/loading.gif";
import { openPopUp } from "../../redux/reducers/photos";
import { Photo, PhotoItemStyled } from "../../styles/photo-styling";

const PhotoItem = (props) => {
  const dispatch = useDispatch();
  console.log(props);

  return (
    <PhotoItemStyled bg={loading} onClick={() => dispatch(openPopUp(true))}>
      {props.photo ? <Photo src={props.photo.url} /> : "Loading..."}
      <span role="img" aria-label="zoom">
        &#128269;
      </span>
    </PhotoItemStyled>
  );
};

export default PhotoItem;
