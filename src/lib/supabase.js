import { createClient } from '@supabase/supabase-js';

// Get environment variables - these are injected by Vite during build
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Debug: Log environment variable status (only in development)
if (import.meta.env.DEV) {
  console.log('Supabase URL configured:', Boolean(supabaseUrl));
  console.log('Supabase Key configured:', Boolean(supabaseAnonKey));
}

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables!');
  console.error('Please check your .env file and ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.');
  console.error('In production, ensure these are set in Vercel environment variables.');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl && supabaseAnonKey);
};
