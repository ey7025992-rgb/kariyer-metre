import { Link } from 'react-router-dom';

function Giris() {
    return (
        <div className="login-arkaplan">
            <div className="login-kutu">

                {/* Üst Kısım: Logo ve Başlık */}
                <div className="logo-alani">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2D1B4E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                    </svg>
                    <h2>Kariyer Metre</h2>
                </div>

                <h3 className="sayfa-alt-basligi">Giriş Yap</h3>

                {/* Form Alanı */}
                <div className="form-elemanlari">

                    <div className="input-grubu">
                        <label>E-posta Adresi</label>
                        <div className="input-kutusu">
                            <svg className="input-ikon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <input type="email" placeholder="ornek@email.com" />
                        </div>
                    </div>

                    <div className="input-grubu">
                        <label>Şifre</label>
                        <div className="input-kutusu">
                            <svg className="input-ikon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <input type="password" placeholder="Şifrenizi girin" />
                        </div>
                    </div>

                    {/* Ana Panele Yönlendiren Butonumuz */}
                    <Link to="/panel" className="giris-butonu" style={{ textDecoration: 'none' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10 17 15 12 10 7"></polyline>
                            <line x1="15" y1="12" x2="3" y2="12"></line>
                        </svg>
                        Giriş Yap
                    </Link>

                </div>

                {/* Alt Linkler */}
                <div className="alt-linkler">
                    <p>Hesabınız yok mu? <Link to="/kaydol">Kaydol</Link></p>
                    <Link to="/" className="ana-sayfa-link">Ana Sayfaya Dön</Link>
                </div>

            </div>
        </div>
    );
}

export default Giris;