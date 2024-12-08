import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-page">
      <header className="header">
        <h1>Hubungi Kami</h1>
        <p>Kami siap membantu Anda dengan pertanyaan tentang produk kami.</p>
      </header>
      
      <section className="contact-form-section">
        <div className="contact-info">
          <h2>Kontak</h2>
          <p>Email    : atasima.info@gmail.com</p>
          <p>Telepon  : 0821-7922-1009</p>
          <p>Alamat:<br /> 
            Jl. Raya PL Alun, Ruko Pondok Aren Plaza, Blok A4, 
            Kota Tangerang Selatan, Banten 15226
          </p>
          <p>Jam Buka: 
            <br />Monday - Friday: 9:00 - 18:00
            <br />Saturday - Sunday: 9:00 - 16:00
          </p>
        </div>

        <form className="contact-form">
          <label>Nama Lengkap</label>
          <input type="text" placeholder="Masukkan nama depan Anda" />

          <label>Nomor HP</label>
          <input type="tel" placeholder="Masukkan Nomor Telepon Anda" />

          <label>Pesan Anda</label>
          <textarea placeholder="Tuliskan pesan Anda di sini" />

          <button type="submit">Kirim Pesan</button>
        </form>
      </section>

      <section className="map-gallery-section">
        <iframe
          title="Map Location"
          src="https://www.google.com/maps/embed?pb=..."
          width="300"
          height="300"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      <footer className="footer">
        <div className="footer-contact">
          <h3>Kontak</h3>
          <p>Email : atasima.info@gmail.com</p>
          <p>Telepon : +62 821 7922 1009</p>
          <p>Alamat : Jl. Raya PL Alun, Ruko Pondok Aren Plaza...</p>
        </div>
        <div className="footer-subscription">
          <h3>Subscription</h3>
          <input type="email" placeholder="Masukkan email Anda" />
          <button type="submit">Kirim Pesan</button>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
