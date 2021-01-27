import styled from "styled-components";

export const OverlayStyled = styled.div`
  display: ${(props) => (props.isOpenPopUp ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const PopUpStyled = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #282c34;
  cursor: auto;
  padding: 20px;
  width: 80vw;
  max-width: 800px;
  img {
    display: block;
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .leftArr,
  .rightArr {
    display: block;
    padding: 10px 15px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #282c34;
    color: #fff;
    font-size: 30px;
    line-height: 1.25;
    cursor: pointer;
  }
  .leftArr {
    left: 0;
  }
  .rightArr {
    right: 0;
  }
  .title {
    display: block;
    margin-top: 15px;
  }
  .disable {
    opacity: 0.4;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 0 20px;
    .leftArr,
    .rightArr {
      padding: 10px 10px;
      font-size: 24px;
    }
  }
`;

export const Close = styled.button`
  display: block;
  position: absolute;
  top: 5px;
  right: 5px;
  line-height: 0.7;
  font-size: 24px;
  padding: 10px;
  background: rgba(250, 235, 215, 0.7);
  opacity: 0.5;
  border: none;
  outline: none;
`;
