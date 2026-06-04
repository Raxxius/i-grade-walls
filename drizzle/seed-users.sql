CREATE TABLE IF NOT EXISTS users_table (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  email TEXT NOT NULL UNIQUE
);

INSERT OR IGNORE INTO users_table (name, age, email)
VALUES
  ('Test User', 30, 'test@example.com'),
  ('Admin User', 35, 'admin@example.com');
