import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.usermenu}>
      <p>Welcome, {user.name}!</p>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </div>
  );
};

export default UserMenu;
