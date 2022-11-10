import { RouterProvider, useRoutes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
  ]);

  return (
    <>
      <Header />
      {routes}
    </>
  );
}

export default App;
