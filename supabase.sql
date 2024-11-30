CREATE TABLE
  dstore_products (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC NOT NULL,
    TYPE TEXT NOT NULL,
    thumbnail TEXT NOT NULL,
    categories TEXT[] NOT NULL
  );

INSERT INTO
  dstore_products (
    title,
    description,
    price,
    TYPE,
    thumbnail,
    categories
  )
VALUES
  (
    'Complete Web Development Guide 2024',
    'Master modern web development with this comprehensive guide covering React, Node.js, and more.',
    49.99,
    'pdf',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
    ARRAY['Web Development', 'Programming']
  ),
  (
    'Advanced JavaScript Patterns',
    'Deep dive into advanced JavaScript patterns and best practices with practical examples.',
    79.99,
    'video',
    'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=600',
    ARRAY['JavaScript', 'Programming']
  ),
  (
    'UI/UX Design Principles',
    'Learn essential UI/UX design principles and create beautiful user experiences.',
    39.99,
    'pdf',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600',
    ARRAY['Design', 'UI/UX']
  );