import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/reducers/users";
import Slider from "../Slider";
import UserItem from "./UserItem";
import { UsersStyled } from "../../styles/users-styling";

const Users = () => {
  const dispatch = useDispatch();
  const getUsersThunk = useCallback(() => dispatch(getUsers()), [dispatch]);
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.isFetching);
  // console.log("users: ", users);

  useEffect(() => {
    getUsersThunk();
  }, [getUsersThunk]);

  return (
    <UsersStyled>
      <h2>Swipe and choose user</h2>
      <Slider>
        {loading
          ? "Loading..."
          : users.map((i) => <UserItem key={i.id} {...i} />)}
      </Slider>
    </UsersStyled>
  );
};

export default Users;
