import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import HomeOne from './Pages/HomeOne/HomeOne';
import HomeTwo from './Pages/HomeOne/HomeTwo';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeOne/>} />
          <Route path="/home-two" element={<HomeTwo/>} />
        </Routes>

        <ScrollToTop id="scrollTopButton" smooth top={200} component={ <span><i class="bi bi-chevron-up"></i></span> } />

      </BrowserRouter>
    </>
  );
}

export default App;
