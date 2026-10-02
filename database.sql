-- Persona 5 Database Setup Script

CREATE TABLE persona5_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE persona5_cards (
    registry_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    arcana VARCHAR(50) NOT NULL,
    base_level INT NOT NULL,
    str INT NOT NULL,
    mag INT NOT NULL,
    end_stat INT NOT NULL,
    agi INT NOT NULL,
    luc INT NOT NULL
);

INSERT INTO persona5_cards (registry_id, name, arcana, base_level, str, mag, end_stat, agi, luc) VALUES
(101, 'Arsene', 'Fool', 1, 2, 2, 2, 3, 1),
(105, 'Pixie', 'Lovers', 2, 1, 3, 3, 4, 1),
(112, 'Jack-o''-Lantern', 'Magician', 2, 2, 3, 2, 3, 3),
(120, 'Bicorn', 'Hermit', 4, 5, 3, 3, 5, 3),
(135, 'Silky', 'Priestess', 6, 4, 7, 4, 5, 5),
(150, 'Kelpie', 'Strength', 6, 5, 5, 5, 6, 4),
(168, 'Slime', 'Chariot', 10, 9, 6, 11, 6, 5),
(180, 'Angel', 'Justice', 12, 7, 9, 7, 9, 11),
(200, 'Jack Frost', 'Magician', 11, 8, 9, 7, 9, 7),
(210, 'Izanagi', 'Fool', 20, 14, 13, 13, 14, 13);
