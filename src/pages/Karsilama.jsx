import { Link } from 'react-router-dom';

function Karsilama() {
    return (
        <div className="login-arkaplan karsilama-merkez">
            <div className="karsilama-icerik">
                <div className="karsilama-logo-alani">
                    {/* Beyaz Logo */}
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                    </svg>
                    <h1>Kariyer Metre</h1>
                </div>
                <p className="karsilama-alt-baslik">Yapay Zeka Destekli Aday Değerlendirme Sistemi</p>

                <div className="karsilama-butonlar">
                    <Link to="/giris" className="karsilama-btn beyaz-btn">Giriş Yap</Link>
                    <Link to="/kaydol" className="karsilama-btn mor-btn">Kaydol</Link>
                </div>
            </div>

            <div className="karsilama-footer">
                © 2026 Kariyer Metre - Tüm hakları saklıdır
            </div>
        </div>
    );
}

export default Karsilama;