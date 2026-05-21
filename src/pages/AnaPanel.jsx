import { useState } from 'react';
import { Link } from 'react-router-dom';

function AnaPanel() {
    const [yetenekSayisi, setYetenekSayisi] = useState(0);

    // Analizin durumunu hafızada tutar: 'bekliyor', 'hesaplaniyor', 'uygun', 'red'
    const [analizDurumu, setAnalizDurumu] = useState('bekliyor');

    const analiziBaslatClick = () => {
        // Önce yükleme ekranını (dönen çemberi) aç
        setAnalizDurumu('hesaplaniyor');

        // 2 saniye bekliyoruz (Simülasyon - Burayı şu an silmiyoruz!)
        setTimeout(() => {
            // Şimdilik sadece Frontend'deki kırmızı ÇARPI ekranını test etmek için 
            // sonucu 'red' (uygun değil) olarak el yazısıyla ayarlayalım.
            // Yeşil ekranı test etmek istersen burayı 'uygun' yapabilirsin.
            setAnalizDurumu('red');
        }, 2000);
    };

    return (
        <div className="panel-arkaplan">

            {/* Üst Menü (Navbar) */}
            <nav className="navbar">
                <div className="nav-sol">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                    </svg>
                    <span className="nav-logo-metin">Kariyer Metre</span>
                    <span className="nav-hosgeldin">Hoş geldin, Elif Sude</span>
                </div>
                <div className="nav-sag">
                    <Link to="/panel" className="nav-btn aktif-btn">+ Yeni Analiz</Link>
                    <Link to="/gecmis" className="nav-btn">Geçmiş Kayıtlar</Link>
                    <Link to="/" className="nav-btn cikis-btn">Çıkış</Link>
                </div>
            </nav>

            {/* İçerik Alanı */}
            <div className="panel-icerik">

                {/* SOL KART: Aday Formu */}
                <div className="kart form-karti">
                    <h2 className="kart-baslik">Aday Bilgileri</h2>

                    <div className="panel-input-grubu"><label>Ad Soyad</label><input type="text" placeholder="Örn: Ahmet Yılmaz" className="panel-input" /></div>
                    <div className="panel-input-grubu"><label>Deneyim Yılı</label><input type="number" min="0" placeholder="0" className="panel-input" /></div>
                    <div className="panel-input-grubu">
                        <label>Eğitim Seviyesi</label>
                        <select className="panel-input"><option>Önlisans</option><option>Lisans</option><option>Yüksek Lisans</option><option>Doktora</option></select>
                    </div>
                    <div className="panel-input-grubu">
                        <label>Yetenek (Skill) Sayısı: <span style={{ color: '#583C87', fontSize: '15px' }}>{yetenekSayisi}</span></label>
                        <input type="range" min="0" max="15" value={yetenekSayisi} onChange={(e) => setYetenekSayisi(e.target.value)} className="panel-slider" />
                    </div>
                    <div className="panel-input-grubu"><label>Teknik Test Skoru</label><input type="number" min="0" max="100" placeholder="0" className="panel-input" /></div>

                    <button className="analiz-btn" onClick={analiziBaslatClick}>
                        {analizDurumu === 'hesaplaniyor' ? 'Hesaplanıyor...' : 'Analiz Başlat'}
                    </button>
                </div>

                {/* SAĞ KART: Dinamik Sonuç Alanı */}
                <div className="kart sonuc-karti">
                    <h2 className="kart-baslik">Analiz Sonucu</h2>
                    <div className="sonuc-icerik-alani">

                        {/* 1. Bekleme Durumu */}
                        {analizDurumu === 'bekliyor' && (
                            <div className="durum-merkez">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" /></svg>
                                <p className="gri-metin">Veri bekleniyor...</p>
                                <p className="kucuk-metin">Analizi başlatmak için formu doldurun</p>
                            </div>
                        )}

                        {/* 2. Yükleme Durumu (Dönen Çember) */}
                        {analizDurumu === 'hesaplaniyor' && (
                            <div className="durum-merkez"><div className="yukleniyor-cemberi"></div><p className="mor-metin">Yapay Zeka Modeli Değerlendiriyor...</p></div>
                        )}

                        {/* 3. UYGUN SONUÇ EKRANI (YEŞİL TİK) */}
                        {analizDurumu === 'uygun' && (
                            <div className="sonuc-raporu">
                                <div className="basari-ikonu">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <h3 className="sonuc-basligi">Aday İşe Uygun</h3>
                                <div className="sonuc-skor-kutu"><span className="skor-etiket">Uygunluk Skoru</span><span className="skor-deger">%89.4</span></div>
                                <p className="sonuc-aciklama">Model tahminine göre bu aday kriterleri karşılamaktadır.</p>
                                <button className="yeni-aday-btn" onClick={() => setAnalizDurumu('bekliyor')}>Yeni Aday Değerlendir</button>
                            </div>
                        )}

                        {/* 4. İŞTE EKLEDİĞİMİZ KIRMIZI ÇARPI EKRANI */}
                        {analizDurumu === 'red' && (
                            <div className="sonuc-raporu">
                                <div className="red-ikonu">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </div>
                                <h3 className="sonuc-basligi-red">Aday Uygun Değil</h3>
                                <div className="sonuc-skor-kutu"><span className="skor-etiket">Uygunluk Skoru</span><span className="skor-deger" style={{ color: '#EF4444' }}>%38.5</span></div>
                                <p className="sonuc-aciklama">Model tahminine göre bu aday kriterlerin altında kalmaktadır.</p>
                                <button className="yeni-aday-btn" onClick={() => setAnalizDurumu('bekliyor')}>Yeni Aday Değerlendir</button>
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
}

export default AnaPanel;