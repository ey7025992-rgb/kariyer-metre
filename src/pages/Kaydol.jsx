import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Kaydol() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleKaydolSubmit = async (e) => {
        e.preventDefault();

        if (!email || !username || !password) {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        try {
            // Kevin'ın /api/kaydol backend kapısına tam uyuşan isimlerle istek atıyoruz
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

            const data = await response.json();

            if (response.ok && data.durum === 'başarılı') {
                alert("Kayıt başarılı! Giriş ekranına yönlendiriliyorsunuz.");
                navigate('/giris'); // Başarılıysa giriş ekranına at
            } else {
                alert(data.mesaj || "Kayıt sırasında bir hata oluştu!");
            }
        } catch (error) {
            alert("Backend sunucusuna bağlanılamadı. app.py açık mı?");
        }
    };

    return (
        <div className="login-arkaplan">
            <div className="login-kutu">
                <div className="logo-alani">
                    <h1 className="logo-metin">Kariyer Metre</h1>
                </div>
                <p className="kutu-altbaslik">Yeni Hesap Oluştur</p>

                <form onSubmit={handleKaydolSubmit} className="form-alanlari">
                    <div className="input-grubu">
                        <label>E-posta Adresi</label>
                        <input type="email" placeholder="ornek@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-grubu">
                        <label>Kullanıcı Adı</label>
                        <input type="text" placeholder="kullanici_adi" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-grubu">
                        <label>Şifre</label>
                        <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="giris-butonu" style={{ border: 'none', cursor: 'pointer' }}>Kayıt Ol</button>
                </form>

                <div className="alt-linkler">
                    <span className="kayit-metni">Zaten hesabınız var mı? <Link to="/giris" className="kayit-linki">Giriş Yap</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Kaydol;