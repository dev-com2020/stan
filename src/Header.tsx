import { authenticate } from './api/authenticate';
import { authorize } from './api/authorize';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from './store/store';
import {
  authenticateAction,
  authenticatedAction,
  authorizeAction,
  authorizedAction,
} from './store/userSlice';

export function Header() {
  const user = useSelector((state: RootState) => state.user.user);
  const loading = useSelector((state: RootState) => state.user.loading);
  const dispatch = useDispatch();

  async function handleSignInClick() {
    dispatch(authenticateAction());
    const authenticatedUser = await authenticate();
    dispatch(authenticatedAction(authenticatedUser));
    if (authenticatedUser !== undefined) {
      dispatch(authorizeAction());
      const authorizedPermissions = await authorize(authenticatedUser.id);
      dispatch(authorizedAction(authorizedPermissions));
    }
  }
  return (
    <header>
      {user ? (
        <span>{user.name} has signed in</span>
      ) : (
        <button
          onClick={handleSignInClick}
          disabled={loading}
        >
          {loading ? '...' : 'Zaloguj się'}
        </button>
      )}
    </header>
  );
}