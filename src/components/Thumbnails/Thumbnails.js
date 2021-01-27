import styled from "styled-components";
import Slider from "../Slider";
import ThumbnailItem from "./ThumbnailItem";

const ThumbnailsStyled = styled.div`
  width: 100%;
  height: 150px;
`;

const Thumbnails = (props) => {
  return (
    <ThumbnailsStyled>
      <Slider>
        {props.photos
          ? props.photos.map((i) => (
              <ThumbnailItem key={i.id} img={i.thumbnailUrl} id={i.id} />
            ))
          : "Loading..."}
      </Slider>
    </ThumbnailsStyled>
  );
};

export default Thumbnails;
