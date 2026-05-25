import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function GecmisKayitlar() {
    const [kayitlar, setKayitlar] = useState([]);
    const [yukleniyor, setYukleniyor] = useState(true);

    // Sayfa açıldığında Kevin'ın Flask backend'inden gerçek geçmiş verileri çekiyoruz
    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/gecmis')
            .then(res => res.json())
            .then(data => {
                setKayitlar(data);
                setYukleniyor(false);
            })
            .catch(err => {
                console.error("Veri çekilemedi:", err);
                setYukleniyor(false);
            });
    }, []);

    return (
        <div className="panel-arkaplan">
            {/* Üst Menü */}
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
                    <Link to="/panel" className="nav-btn">+ Yeni Analiz</Link>
                    <Link to="/gecmis" className="nav-btn aktif-btn">Geçmiş Kayıtlar</Link>
                    <Link to="/" className="nav-btn cikis-btn">Çıkış</Link>
                </div>
            </nav>

            {/* İçerik Alanı: Tablo */}
            <div className="gecmis-karti">
                <h2 className="kart-baslik">Geçmiş Aday Analizleri</h2>

                {yukleniyor ? (
                    <p style={{ textAlign: 'center', color: '#583C87', padding: '20px' }}>Veritabanından kayıtlar yükleniyor...</p>
                ) : kayitlar.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#666', padding: '20px' }}>Henüz hiç analiz kaydı bulunmuyor.</p>
                ) : (
                    <table className="gecmis-tablo">
                        <thead>
                            <tr>
                                <th>Aday Adı</th>
                                <th>Deneyim Yılı</th>
                                <th>Teknik Skor</th>
                                <th>Yapay Zeka Kararı</th>
                            </tr>
                        </thead>
                        <tbody>
                            {kayitlar.map((kayit) => (
                                <tr key={kayit.id}>
                                    <td style={{ fontWeight: 'bold' }}>{kayit.isim}</td>
                                    <td>{kayit.deneyim}</td>
                                    <td>%{kayit.skor}</td>
                                    <td>
                                        <span className={`durum-etiket ${kayit.durum === 'Uygun' ? 'etiket-uygun' : 'etiket-red'}`}>
                                            {kayit.durum}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default GecmisKayitlar;