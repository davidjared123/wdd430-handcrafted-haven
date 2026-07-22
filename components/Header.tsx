export default function Header() {
  return (
    <header style={{
      backgroundColor: 'var(--background-color)',
      padding: '1rem 2rem',
      borderBottom: '1px solid #ddd',
      textAlign: 'center'
    }}>
      <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--primary-color)' }}>Handcrafted Haven</h2>
    </header>
  );
}