-- Membuat database
CREATE DATABASE IF NOT EXISTS IMPORTANT_MIDTEST_DB;

-- Menggunakan database
USE IMPORTANT_MIDTEST_DB;

-- Membuat tabel coffee
CREATE TABLE IF NOT EXISTS coffee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

-- Memasukkan menu kopi yang sedang populer
INSERT INTO coffee (name, description) VALUES
(
    'Kopi Susu Gula Aren',
    'Minuman berbahan dasar espresso, susu, dan gula aren yang memiliki rasa manis, creamy, serta menjadi salah satu menu favorit di coffee shop Indonesia.'
),
(
    'Dirty Latte',
    'Minuman yang terdiri dari susu dingin dengan espresso panas yang dituangkan di atasnya sehingga menciptakan tampilan berlapis.'
),
(
    'Es Kopi Susu',
    'Kopi susu dingin yang dibuat dari espresso, susu, dan pemanis dengan cita rasa ringan, creamy, serta menyegarkan.'
),
(
    'Cold Brew',
    'Kopi yang diseduh menggunakan air dingin selama beberapa jam sehingga menghasilkan rasa yang lembut, segar, dan tidak terlalu asam.'
),
(
    'Butterscotch Coffee',
    'Minuman kopi susu dengan tambahan sirup butterscotch yang memberikan rasa manis, buttery, dan aroma karamel.'
),
(
    'Cappuccino',
    'Cappuccino adalah kopi yang dibuat dari espresso, susu steamed, dan busa susu dengan perbandingan yang seimbang.'
),
(
    'Cold Brew',
    'Cold Brew adalah kopi yang diseduh menggunakan air dingin dalam waktu yang lama sehingga menghasilkan rasa yang lembut dan tidak terlalu asam.'
),
(
    'Macchiato',
    'Macchiato adalah espresso yang diberi sedikit busa atau susu steamed di atasnya, sehingga memiliki rasa kopi yang kuat.'
),
(
    'V60',
    'V60 adalah metode penyeduhan kopi menggunakan alat berbentuk kerucut dengan kertas filter, yang menghasilkan cita rasa kopi yang bersih dan ringan.'
),
(
    'Espresso',
    'Espresso adalah kopi pekat yang dibuat dengan mengekstraksi bubuk kopi menggunakan tekanan air panas.'
),
(
    'Americano',
    'Americano adalah campuran espresso dan air panas yang memiliki rasa lebih ringan dibandingkan espresso.'
),
(
    'Caffe Latte',
    'Caffe Latte adalah kopi yang dibuat dari espresso dan susu steamed dengan sedikit busa susu di bagian atas.'
),
(
    'Mocha',
    'Mocha adalah perpaduan espresso, susu, dan cokelat yang menghasilkan rasa kopi manis dan creamy.'
),
(
    'French Press',
    'French Press adalah metode penyeduhan kopi dengan merendam bubuk kopi di dalam air panas kemudian memisahkannya menggunakan penekan berbentuk saringan.'
),
(
    'Affogato',
    'Affogato adalah hidangan penutup berupa satu scoop es krim vanila yang disiram dengan espresso panas.'
);