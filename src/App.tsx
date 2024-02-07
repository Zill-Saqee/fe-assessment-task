import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ArticlesList from './pages/articles-list/ArticlesList';
import ArticleDetail from './pages/article-detail/ArticleDetail';
import { Provider } from 'react-redux';
import { store } from './store/store';

const router = createBrowserRouter([{
  path: '/',
  element: <ArticlesList />
},
{
  path: '/articles/:id',
  element: <ArticleDetail />
}
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
