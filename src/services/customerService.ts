import { supabase } from '../lib/supabase';

export async function createCustomer(
  firstName: string,
  lastName: string,
  email: string,
  passwordHash: string
) {
  const { data, error } = await supabase
    .from('digital_store.customers')
    .insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        password_hash: passwordHash
      }
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getCustomerByEmail(email: string) {
  const { data, error } = await supabase
    .from('digital_store.customers')
    .select('*')
    .eq('email', email)
    .single();

  if (error) throw error;
  return data;
}