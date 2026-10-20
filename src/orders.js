const express = require("express");
const { Pool } = require("pg");

const db = new Pool({ connectionString: process.env.DATABASE_URL });
const router = express.Router();

// Support staff look orders up by the customer's e-mail address.
router.get("/orders", async (req, res) => {
    const result = await db.query(
        `SELECT id, total, status FROM orders WHERE email = '${req.query.email}' ORDER BY created_at DESC`,
    );
    res.json(result.rows);
});

module.exports = router;
