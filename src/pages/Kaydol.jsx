import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Kaydol() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [hataMesaji, setHataMesaji] = useState('');

    const navigate = useNavigate();

    const kayitIsleminiBaslat = async (e) => {
        e.preventDefault();
        setHataMesaji('');

        if (password !== passwordConfirm) {
            setHataMesaji("Şifreler birbiriyle eşleşmiyor!");
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/api/kaydol', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password
                })
            });

            if (response.ok) {
                localStorage.setItem('kullaniciAdi', username);
                navigate('/panel');
            } else {
                setHataMesaji("Kayıt işlemi başarısız oldu. Bilgileri kontrol edin.");
            }
        } catch (error) {
            setHataMesaji("Sunucuya bağlanılamadı. Flask backend'in çalıştığından emin olun.");
        }
    };

    return (
        <div className="login-arkaplan">
            <div className="login-kutu">

                <div className="logo-alani">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2D1B4E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                    </svg>
                    <h2>Kariyer Metre</h2>
                </div>

                <h3 className="sayfa-alt-basligi">Hesap Oluştur</h3>

                {hataMesaji && <div style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{hataMesaji}</div>}

                <form className="form-elemanlari" onSubmit={kayitIsleminiBaslat}>

                    <div className="input-grubu">
                        <label>E-posta Adresi</label>
                        <div className="input-kutusu">
                            <svg className="input-ikon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <input
                                type="email"
                                placeholder="ornek@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-grubu">
                        <label>Kullanıcı Adı</label>
                        <div className="input-kutusu">
                            <svg className="input-ikon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <input
                                type="text"
                                placeholder="kullaniciadi"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-grubu">
                        <label>Şifre</label>
                        <div className="input-kutusu">
                            <svg className="input-ikon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <input
                                type="password"
                                placeholder="En az 6 karakter"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-grubu">
                        <label>Şifre Tekrar</label>
                        <div className="input-kutusu">
                            <svg className="input-ikon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <input
                                type="password"
                                placeholder="Şifrenizi tekrar girin"
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="giris-butonu" style={{ border: 'none', cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                        Kaydol
                    </button>

                </form>

                <div className="alt-linkler">
                    <p>Zaten hesabınız var mı? <Link to="/giris">Giriş Yap</Link></p>
                    <Link to="/" className="ana-sayfa-link">Ana Sayfaya Dön</Link>
                </div>

            </div>
        </div>
    );
}

export default Kaydol;