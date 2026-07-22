import { createClient } from '@supabase/supabase-js'

// Es importante que las variables de entorno que se usan en el navegador
// (lado del cliente) empiecen con NEXT_PUBLIC_.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)