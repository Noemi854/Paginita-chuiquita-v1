-- Crear tabla de usuarios

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES
('John Doe', 'john.doe@example.com'),
('Jane Smith', 'jane.smith@example.com'),
('Alice Johnson', 'alice.johnson@example.com')
;

SELECT * FROM users;

-- Crear tabla de tareas

CREATE TABLE tareas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_limite DATE,
    completada BOOLEAN DEFAULT FALSE,
    prioridad INT DEFAULT 1 
);

INSERT INTO tareas (titulo, descripcion, fecha_limite, prioridad) VALUES
('Comprar comestibles', 'Comprar leche, pan y huevos', '2026-03-01', 2),
('Llamar al médico', 'Agendar cita para chequeo anual', '2026-07-05', 1),
('Terminar proyecto', 'Completar el informe final del proyecto', '2026-07-10', 3);

SELECT * FROM tareas;
