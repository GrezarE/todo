import { Navigate, useLocation } from 'react-router-dom';

import { useSelector } from '../../redux/hooks';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useSelector((store) => store.todo);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
