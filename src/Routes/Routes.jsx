import { Routes, Route } from 'react-router-dom';

function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    );
  }