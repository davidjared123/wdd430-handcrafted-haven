"use client";

import Link from 'next/link';

// Definimos una interfaz para las propiedades del componente para tener un tipado seguro.
interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ id, name, price, imageUrl }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '1rem',
        textAlign: 'left',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
      }}
      // Efecto hover simple para mejorar la UX
      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <img src={imageUrl} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
        <h3 style={{ marginTop: '1rem', fontSize: '1.2rem', color: 'var(--text-color)' }}>{name}</h3>
        <p style={{ color: 'var(--secondary-color)', fontSize: '1.1rem', fontWeight: 'bold' }}>
          ${price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}