import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Karsilama from './pages/Karsilama';
import Giris from './pages/Giris';
import Kaydol from './pages/Kaydol';
import AnaPanel from './pages/AnaPanel';
import GecmisKayitlar from './pages/GecmisKayitlar'; /* 1. YENİ SAYFAYI ÇAĞIRDIK */
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Karsilama />} />
        <Route path="/giris" element={<Giris />} />
        <Route path="/kaydol" element={<Kaydol />} />
        <Route path="/panel" element={<AnaPanel />} />
        <Route path="/gecmis" element={<GecmisKayitlar />} /> {/* 2. ROTAYI EKLEDİK */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;