import "../styles/footer.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <h1>CINEMATOGRAPHER X CONTENT CREATOR</h1>
      <p>© {year} My App</p>
    </footer>
  );
};

export default Footer;
