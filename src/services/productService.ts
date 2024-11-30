import { supabase } from '../lib/supabase';

export async function getProducts() {
  const { data, error } = await supabase
    .from('digital_store.products')
    .select('*');
  
  if (error) throw error;
  return data;
}

export async function createOrder(customerId: number, items: Array<{ productId: number; quantity: number; price: number }>) {
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const { data: order, error: orderError } = await supabase
    .from('digital_store.orders')
    .insert([
      { customer_id: customerId, total_amount: totalAmount }
    ])
    .select()
    .single();

  if (orderError) throw orderError;

  const orderItems = items.map(item => ({
    order_id: order.id,
    product_id: item.productId,
    quantity: item.quantity,
    price: item.price
  }));

  const { error: itemsError } = await supabase
    .from('digital_store.order_items')
    .insert(orderItems);

  if (itemsError) throw itemsError;

  return order;
}