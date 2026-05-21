import { Link } from 'react-router-dom';

function GecmisKayitlar() {
    // Arayüzü test etmek için oluşturduğumuz sahte geçmiş aday verileri
    const kayitlar = [
        { id: 1, isim: "Ahmet Yılmaz", deneyim: "3 Yıl", skor: 89.4, durum: "Uygun" },
        { id: 2, isim: "Ayşe Demir", deneyim: "1 Yıl", skor: 42.1, durum: "Red" },
        { id: 3, isim: "Mehmet Kaya", deneyim: "5 Yıl", skor: 95.0, durum: "Uygun" },
        { id: 4, isim: "Fatma Şahin", deneyim: "0 Yıl", skor: 38.5, durum: "Red" },
        { id: 5, isim: "Ali Can", deneyim: "2 Yıl", skor: 65.2, durum: "Uygun" }
    ];

    return (
        <div className="panel-arkaplan">

            {/* Üst Menü (Geçmiş Kayıtlar butonu aktif) */}
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

            </div>
        </div>
    );
}

export default GecmisKayitlar;