import React, { useState } from "react";
import emailjs from "emailjs-com";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Blog from "./Blog";
import "./App.css";
import Contact from "./contact";

const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <header className="header">
          <div className="container">
            <NavLink to="/" className="logo">
              <h1>Madu HCN Manokwari</h1>
            </NavLink>
            <nav className="nav">
              <NavLink to="/" exact activeClassName="active">
                Beranda
              </NavLink>
              <NavLink to="/blog" activeClassName="active">
                Blog
              </NavLink>
              <NavLink to="/kontak-kami" activeClassName="active">
                Kontak Kami
              </NavLink>
            </nav>
          </div>
        </header>

        {/* Routing */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/kontak-kami" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <TestimoniSection />
      <ContactSubscriptionSection />
    </>
  );
};

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Madu Asli HCN</h1>
          <p>
            <span className="highlight">Madu Asli HCN</span> adalah madu asli
            100% yang terbaik untuk mengatasi segala penyakit pada tubuh Anda.
          </p>
          <a
            href="https://wa.me/6281354093675?text=Halo,%20saya%20tertarik%20untuk%20memesan%20Atasima%20Madu%20Herbal!"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>Tentang Madu Asli HCN</h2>
          <p>
            Madu Asli dari HCN adalah produk madu yang 100% Asli tanpa campuran gula yang didistribusikan untuk membantu
            menjaga kesehatan dan memberikan manfaat alami terbaik. Kami
            berkomitmen untuk menyediakan produk berkualitas tinggi yang
            berasal dari sumber terpercaya.
          </p>
          <p>
            Dengan kandungan alami, Madu HCN dapat dipercaya sebagai solusi bagi Anda
            yang ingin hidup lebih sehat secara alami.
          </p>
        </div>
        <div className="about-image">
          <img src="src/image/SAN02826.JPG" alt="Tentang Atasima" />
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-title-box">
          <h2>Manfaat Madu Asli By HCN</h2>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <img src="src/image/SAN02832.JPG" alt="Khasiat 1" />
            <h3>Meningkatkan Sistem Kekebalan Tubuh</h3>
            <p>Madu mengandung antioksidan, vitamin, dan mineral yang dapat membantu meningkatkan daya tahan tubuh.</p>
          </div>
          <div className="benefit-card">
            <img src="src/image/SAN02818.JPG" alt="Khasiat 2" />
            <h3>Membantu Penyembuhan Luka dan Infeksi</h3>
            <p>Madu dikenal memiliki sifat antibakteri dan anti-inflamasi.</p>
          </div>
          <div className="benefit-card">
            <img src="src/image/SAN02774.JPG" alt="Khasiat 3" />
            <h3>Meningkatkan Kesehatan Pencernaan</h3>
            <p>Madu memiliki sifat prebiotik yang dapat membantu meningkatkan pertumbuhan bakteri baik di usus, sehingga baik untuk pencernaan.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimoniSection = () => {
  const testimonials = [
    {
      name: "Dian Daniela",
      comment: "Madu Atmasia sangat membantu saya meningkatkan energi harian!",
      image: "src/image/user1.jpg"
    },
    {
      name: "Sandy Fhizrah",
      comment: "Sudah 2 minggu minum madu dari HCN ini sangat membantu mengatasi sakit maag saya, aman dan terbukti tanpa campuran gula. Super Recomended! ",
      image: "src/image/SANDY 3.JPG"
    },
    {
      name: "Hilda Rahmawati",
      comment: "Madu dari HCN inilah yang mengubah semua derita sakit dalam kehidupan saya, seperti asam lambung saya sudah tidak pernah kumat lagi",
      image: "src/image/SAN0070.JPG"
    }
  ];

  return (
    <section className="testimoni-section">
      <div className="testimoni-container">
        <h2>Testimoni Pelanggan</h2>
        <div className="testimoni-box">
          <div className="testimoni-grid">
            {testimonials.map((testi, index) => (
              <div key={index} className="testimoni-card">
                <img src={testi.image} alt={testi.name} className="testimoni-image" />
                <h3>{testi.name}</h3>
                <p>{testi.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSubscriptionSection = () => {
  const [email, setEmail] = useState(""); // State untuk input email
  const [error, setError] = useState(""); // State untuk error message
  const [successMessage, setSuccessMessage] = useState(""); // State untuk sukses message

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError("Email tidak boleh kosong");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Masukkan email yang valid");
    } else {
      setError(""); // Hapus error message
      sendEmail();  // Panggil fungsi untuk mengirim email
    }
  };

  // Fungsi untuk mengirim email menggunakan EmailJS
  const sendEmail = () => {
    const templateParams = {
      user_email: email,  // Mengambil email dari input
    };

    emailjs
      .send(
        "service_vzwdw7g",  // Service ID dari EmailJS
        "template_fj3pdub",  // Template ID dari EmailJS
        templateParams,
        "jgvm52xkrayeB8Tlr"      // User ID dari EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setSuccessMessage("Terima kasih telah berlangganan! Email Anda berhasil dikirim.");
          setEmail(""); // Kosongkan input email setelah berhasil
        },
        (err) => {
          console.error("FAILED...", err);
          setError("Gagal mengirim email. Silakan coba lagi.");
        }
      );
  };

  return (
    <section className="contact-subscription">
      <div className="contact-subscription-container">
        
        {/* Bagian Kontak */}
        <div className="contact-box">
          <h3>Hubungi Kami</h3>
          <p>Alamat :<br /> Jl. Lembah Hijau Gang Sumsir Lorong 2 No. 19<br />
                      Desa / Kelurahan Wosi, Kecamatan Manokwari Barat,
                      <br />Kabupaten Manokwari, Provinsi Papua Barat 98312.</p>
          <p>Email : maduaslibyhcn@gmail.com</p>
          <p>Telepon : +62 813 5409 3675</p>
        </div>


        {/* Bagian Subscription */}
        <div className="subscription-box">
          <h3>Berlangganan</h3>
          <p>Dapatkan update terbaru seputar produk dan promo kami.</p>
          <form className="subscription-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="subscription-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  // Mengupdate state email
            />
            <button type="submit" className="subscription-button">
              Berlangganan
            </button>
          </form>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default App;