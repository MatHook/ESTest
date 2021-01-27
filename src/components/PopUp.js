import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openPopUp, selectPhoto } from "../redux/reducers/photos";
import { Close, OverlayStyled, PopUpStyled } from "../styles/popup-styling";

const PopUp = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const activePhoto = useSelector((state) => state.photos.activePhoto);
  const isOpenPopUp = useSelector((state) => state.photos.openPopUp);
  let photo = photos.find((arr) => arr.id === activePhoto);
  let photoId = photos.findIndex((arr) => arr.id === activePhoto) + 1;
  const overlay = useRef(null);

  const closePopUp = (event) => {
    return event.target === overlay.current ? dispatch(openPopUp(false)) : null;
  };

  return (
    <OverlayStyled ref={overlay} isOpenPopUp={isOpenPopUp} onClick={closePopUp}>
      <PopUpStyled>
        {photo ? (
          <>
            <img src={photo.url} alt="popup" />
            {photoId === 1 ? (
              <span className={"leftArr disable"}>&#8656;</span>
            ) : (
              <span
                className={"leftArr"}
                onClick={() => dispatch(selectPhoto(activePhoto - 1))}
              >
                &#8656;
              </span>
            )}
            {photoId === photos.length ? (
              <span className={"rightArr disable"}>&#8658;</span>
            ) : (
              <span
                className={"rightArr"}
                onClick={() => dispatch(selectPhoto(activePhoto + 1))}
              >
                &#8658;
              </span>
            )}
            <span className={"title"}>
              {activePhoto} : {photo.title}
            </span>
          </>
        ) : (
          "Loading..."
        )}
      </PopUpStyled>
      <Close onClick={() => dispatch(openPopUp(false))}>X</Close>
    </OverlayStyled>
  );
};

export default PopUp;
