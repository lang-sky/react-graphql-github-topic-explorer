import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TopicPage from './pages/topic';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="topic" element={<TopicPage />} />
        <Route path="*" element={<Navigate to="/topic?name=react" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
