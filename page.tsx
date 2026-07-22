import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";

// Esta interfaz define las propiedades que Next.js pasará a nuestra página.
interface ProductDetailPageProps {
  params: {
    id: string; // El 'id' viene de la carpeta [id]
  };
}
 
export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { data: product } = await supabase
    .from('products')
    .select('*')
    .eq('id', params.id)
    .single();
 
  // Si el producto no se encuentra, muestra una página 404.
  if (!product) {
    notFound();
  }
 
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem', display: 'flex', gap: '2rem' }}>
      <div style={{ flex: 1 }}>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          style={{ width: '100%', borderRadius: '8px' }} 
        />
      </div>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--primary-color)' }}>{product.name}</h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--secondary-color)', fontWeight: 'bold', margin: '1rem 0' }}>
          ${product.price.toFixed(2)}
        </p>
        <p style={{ color: '#555' }}>{product.description || 'No description available.'}</p>
      </div>
    </div>
  );
}