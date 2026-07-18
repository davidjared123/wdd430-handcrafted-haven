import ProductCard from "@/ProductCard";

// Datos de ejemplo para nuestro catálogo. En el futuro, esto vendrá de una base de datos.
const mockProducts = [
  { id: 1, name: "Vaso de Terracota", price: 25.00, imageUrl: "https://images.unsplash.com/photo-1578941342949-8e3848f413f5?q=80&w=2070" },
  { id: 2, name: "Plato de Cerámica Verde", price: 35.50, imageUrl: "https://images.unsplash.com/photo-1610930148449-5agn5a4e45bf?q=80&w=2070" },
  { id: 3, name: "Juego de Cubiertos de Madera", price: 45.00, imageUrl: "https://images.unsplash.com/photo-1593203028891-1c54831a39ed?q=80&w=2070" },
  { id: 4, name: "Tabla de Cortar de Olivo", price: 55.00, imageUrl: "https://images.unsplash.com/photo-1620576628295-f536e8d7494a?q=80&w=2070" },
];

export default function Home() {
  return (
    <>
      {/* Sección del Hero */}
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>Welcome to Handcrafted Haven</h1>
        <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
          A virtual marketplace connecting talented creators with conscious consumers.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <button style={{
            backgroundColor: 'var(--primary-color)',
            color: 'var(--background-color)',
            border: 'none',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Browse Catalog
          </button>
        </div>
      </div>

      {/* Sección del Catálogo de Productos */}
      <div style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Products</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {mockProducts.map(product => (
            <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} />
          ))}
        </div>
      </div>
    </>
  );
}