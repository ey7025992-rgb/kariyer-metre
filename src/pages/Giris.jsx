import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Giris() {
    // Backend'in beklediği etiket olan 'username' ismini kullanıyoruz.
    // Kullanıcı buraya ister e-posta ister kullanıcı adı yazabilir.
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const girisYapClick = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert("Lütfen giriş bilgilerinizi ve şifrenizi doldurun.");
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/api/giris', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Canan'ın backend'inin tam olarak beklediği etiketler: username ve password
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            if (response.ok) {
                const data = await response.json();

                // Canan'ın backend'inden gelen gerçek kullanıcı adını hafızaya kaydediyoruz.
                // Eğer backend'den isim gelmezse, formdaki değeri (ya da e-postanın @'ten önceki kısmını) kullanıyoruz.
                let eklenecekIsim = data.username || username;
                if (eklenecekIsim.includes('@')) {
                    eklenecekIsim = eklenecekIsim.split('@')[0];
                }

                localStorage.setItem('kullaniciAdi', eklenecekIsim);
                navigate('/panel');
            } else {
                alert("Hatalı e-posta/kullanıcı adı veya şifre!");
            }
        } catch (error) {
            alert("Sunucuya bağlanılamadı. Flask uygulamasının çalıştığından emin olun.");
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

                <h3 className="sayfa-alt-basligi">Giriş Yap</h3>

                <form className="form-elemanlari" onSubmit={girisYapClick}>

                    <div className="input-grubu">
                        <label>E-posta veya Kullanıcı Adı</label>
                        <div className="input-kutusu">
                            <svg className="input-ikon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            {/* DİKKAT: type="email" yerine "text" yapıldı. Böylece düz isim yazılınca tarayıcı kızmaz. */}
                            <input
                                type="text"
                                placeholder="E-posta veya kullanıcı adı"
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
                                placeholder="Şifrenizi girin"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="giris-butonu" style={{ border: 'none', cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                            <polyline points="10 17 15 12 10 7"></polyline>
                            <line x1="15" y1="12" x2="3" y2="12"></line>
                        </svg>
                        Giriş Yap
                    </button>

                </form>

                <div className="alt-linkler">
                    <p>Hesabınız yok mu? <Link to="/kaydol">Kaydol</Link></p>
                    <Link to="/" className="ana-sayfa-link">Ana Sayfaya Dön</Link>
                </div>

            </div>
        </div>
    );
}

export default Giris;