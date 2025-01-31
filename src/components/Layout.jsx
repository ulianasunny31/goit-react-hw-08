/* eslint-disable react/prop-types */
import { Suspense } from 'react';
import AppBar from './AppBar/AppBar';
import Loader from './Loader/Loader';

const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default Layout;
