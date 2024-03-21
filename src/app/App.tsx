import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../pages/layout';
import Home from '../pages/home';
import Post from '../pages/post';
import './style/index.css'
function App() {
  return (
    <div className="main new">
      <Routes>
        <Route path={'/'} element={ <Layout/> }>
          <Route path={'home'} element={ <Home /> } />
          <Route path={`post/:id`} element={ <Post/> } />
          <Route path={`post`} element={ <Post/> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
