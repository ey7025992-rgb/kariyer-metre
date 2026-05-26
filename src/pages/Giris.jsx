import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Giris() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleGirisSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        try {
            // Kevin'ın /api/giris backend kapısına kontrol isteği atıyoruz
            const response = await fetch('http://127.0.0.1:5000/api/giris', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok && data.durum === 'başarılı') {
                navigate('/panel'); // Veritabanında VARSA içeri al
            } else {
                alert(data.mesaj || "Hatalı kullanıcı adı, e-posta veya şifre!");
            }
        } catch (error) {
            alert("Backend sunucusuna bağlanılamadı. app.py çalışıyor mu?");
        }
    };

    return (
        <div className="login-arkaplan">
            <div className="login-kutu">
                <div className="logo-alani">
                    <h1 className="logo-metin">Kariyer Metre</h1>
                </div>
                <p className="kutu-altbaslik">Yapay Zeka Destekli İşe Alım Paneli</p>

                <form onSubmit={handleGirisSubmit} className="form-alanlari">
                    <div className="input-grubu">
                        <label>Kullanıcı Adı veya E-posta</label>
                        <input type="text" placeholder="username veya mail" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-grubu">
                        <label>Şifre</label>
                        <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="giris-butonu" style={{ border: 'none', cursor: 'pointer' }}>Giriş Yap</button>
                </form>

                <div className="alt-linkler">
                    <span className="kayit-metni">Hesabınız yok mu? <Link to="/kaydol" className="kayit-linki">Kayıt Ol</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Giris;