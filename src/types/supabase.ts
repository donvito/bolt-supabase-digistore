export interface Database {
  digital_store: {
    Tables: {
      categories: {
        Row: {
          id: number;
          name: string;
          description: string | null;
          created_at: string;
        };
        Insert: {
          name: string;
          description?: string | null;
        };
        Update: {
          name?: string;
          description?: string | null;
        };
      };
      products: {
        Row: {
          id: number;
          name: string;
          description: string | null;
          price: number;
          category_id: number | null;
          created_at: string;
        };
        Insert: {
          name: string;
          description?: string | null;
          price: number;
          category_id?: number | null;
        };
        Update: {
          name?: string;
          description?: string | null;
          price?: number;
          category_id?: number | null;
        };
      };
      customers: {
        Row: {
          id: number;
          first_name: string;
          last_name: string;
          email: string;
          password_hash: string;
          created_at: string;
        };
        Insert: {
          first_name: string;
          last_name: string;
          email: string;
          password_hash: string;
        };
        Update: {
          first_name?: string;
          last_name?: string;
          email?: string;
          password_hash?: string;
        };
      };
      orders: {
        Row: {
          id: number;
          customer_id: number | null;
          order_date: string;
          total_amount: number;
        };
        Insert: {
          customer_id?: number | null;
          total_amount: number;
        };
        Update: {
          customer_id?: number | null;
          total_amount?: number;
        };
      };
      order_items: {
        Row: {
          id: number;
          order_id: number | null;
          product_id: number | null;
          quantity: number;
          price: number;
        };
        Insert: {
          order_id?: number | null;
          product_id?: number | null;
          quantity: number;
          price: number;
        };
        Update: {
          order_id?: number | null;
          product_id?: number | null;
          quantity?: number;
          price?: number;
        };
      };
    };
  };
}