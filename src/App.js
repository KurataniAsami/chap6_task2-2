import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogList from './Home/BlogList';
import PostDetail from './detail/PostDetail';
import { posts } from './data/Post';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogList posts={posts} />} />

        <Route path="/post/:id" element={<PostDetail posts={posts} />} />
      </Routes>
    </BrowserRouter>
  );
}
// 


