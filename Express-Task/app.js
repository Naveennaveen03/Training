const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.json()); // In-Built Middleware

// List all users
app.get('/users', async (req, res) => {
    try {
        const resultArray = await pool.query('SELECT * FROM User');
        const results = resultArray[0]
        

        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




// Add a user
app.post('/users', async (req, res) => {
    const { id, username, email, password, phone, status } = req.body;
    const sql = 'INSERT INTO User (id, username, email, password, phone, status) VALUES (?, ?, ?, ?, ?, ?)';
    
    try {
        await pool.query(sql, [id, username, email, password, phone, status]);
        
        res.status(201).json({ id, username, email, phone, status });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});




// Update a user
app.put('/users/:id', async (req, res) => {
    const { username, email, password, phone, status } = req.body;
    const sql = 'UPDATE User SET username = ?, email = ?, password = ?, phone = ?, status = ? WHERE id = ?';
    
    try {
        const [results] = await pool.query(sql, [username, email, password, phone, status, req.params.id]);
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User updated successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a user
app.delete('/users/:id', async (req, res) => {
    const sql = 'DELETE FROM User WHERE id = ?';
    
    try {
        const [results] = await pool.query(sql, [req.params.id]);
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
