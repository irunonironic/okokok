import React from "react";

const App: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.logo}>🐱 Happy</div>
        <div style={styles.navLinks}>
          <a style={styles.link}>Home</a>
          <a style={styles.link}>About</a>
          <a style={styles.link}>Cats</a>
          <a style={styles.link}>Menu</a>
          <a style={styles.link}>Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Happy cat cafe</h1>
        <p style={styles.subtitle}>Hug a cat and drink coffee</p>
        <button style={styles.button}>Meet the cats</button>

        {/* Cats illustration (simple placeholders) */}
        <div style={styles.catRow}>
          <div style={styles.cat}>🐱</div>
          <div style={styles.cat}>🐈</div>
          <div style={styles.cat}>🐱</div>
          <div style={styles.cat}>🐈</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div>Opening Hours: 11:00 – 17:00</div>
        <div>We are in Pune 📍</div>
      </footer>
    </div>
  );
};

export default App;

/* ------------------ STYLES ------------------ */

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "sans-serif",
    backgroundColor: "#f26b6b",
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "20px",
  },

  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },

  navLinks: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },

  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "14px",
    cursor: "pointer",
  },

  hero: {
    backgroundColor: "#f5efe6",
    borderRadius: "20px",
    padding: "40px 20px",
    textAlign: "center",
  },

  title: {
    fontSize: "clamp(28px, 5vw, 48px)",
    marginBottom: "10px",
    color: "#4b2e2e",
  },

  subtitle: {
    fontSize: "clamp(14px, 2vw, 18px)",
    marginBottom: "20px",
    color: "#6b4f4f",
  },

  button: {
    padding: "10px 20px",
    backgroundColor: "#ff6b6b",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },

  catRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },

  cat: {
    fontSize: "40px",
  },

  footer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    fontSize: "14px",
    color: "#fff",
  },
};