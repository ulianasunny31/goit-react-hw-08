import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  function handleLogOut() {
    console.log('clicked');
    dispatch(logoutUser());
  }

  return (
    <div className={css.usermenu}>
      <p>Welcome, {user.name}!</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default UserMenu;
