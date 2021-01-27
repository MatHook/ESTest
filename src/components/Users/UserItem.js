import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/users";
import { UserItemStyled } from "../../styles/user-styling";

const UserItem = (props) => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.users.activeUser);

  return (
    <UserItemStyled
      className={activeUser === props.id ? "active" : null}
      onClick={() => dispatch(selectUser(props.id))}
    >
      <div>{props.name}</div>
      <div>{props.username}</div>
      <div>{props.address.city}</div>
      <div>{props.company.name}</div>
    </UserItemStyled>
  );
};

export default UserItem;
