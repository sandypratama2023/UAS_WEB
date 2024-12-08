import React from "react";
import "./Blog.css"; // Pastikan Anda menyesuaikan dengan desain CSS yang diperlukan

const Blog = () => {
  return (
    <div className="blog-container">
      {/* Header Blog */}
      <div className="blog-header">
        <h1>Blog <br /> Hypnosis Club Nusantara</h1>
      </div>

      {/* Daftar Artikel Blog */}
      <div className="blog-list">
        <div className="blog-item">
          <img src="src/image/ILUSTRASI MAG.JPG" alt="Blog Post" />
          <h2>Mengenal Penyakit Maag, Seperti Penyebab, Gejala dan Cara Mengatasinya</h2>
          <p>Gaya hidup yang kurang sehat, seperti pola makan yang buruk dan kebiasaan mengonsumsi makanan serta minuman yang tidak baik, sangat berpengaruh terhadap penyakit ini. Meskipun gastritis atau maag cukup banyak penderitanya di Indonesia, pengetahuan dan kesadaran mengenai penyakit ini di kalangan masyarakat masih sangat minim. Jika dibiarkan tanpa edukasi yang memadai, maag dapat menyebabkan komplikasi serius, karena kondisi ini bisa merusak fungsi lambung dan meningkatkan risiko kanker lambung hingga berujung pada kematian.</p>
          <a href="/blog-post">Baca Selengkapnya</a>
        </div>

        <div className="blog-item">
          <img src="src/image/SAN02776.JPG" alt="Blog Post" />
          <h2>Madu HCN, Cara Alami dan Efektif untuk Menyembuhkan Sakit Lambung</h2>
          <p>Apakah Anda sering mengalami gangguan lambung seperti maag, perut kembung, atau bahkan nyeri ulu hati? Kondisi ini bukan hanya mengganggu aktivitas sehari-hari, tetapi juga mempengaruhi kesehatan jangka panjang jika tidak ditangani dengan benar. Salah satu cara alami yang semakin populer dan efektif untuk membantu meredakan gejala lambung adalah dengan menggunakan Atasima Madu Herbal.</p>
          <a href="/blog-post">Baca Selengkapnya</a>
        </div>
      </div>

      {/* Footer */}
      <footer className="blog-footer">
        <p>&copy; 2024 Madu Asli HCN Manokwari. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
