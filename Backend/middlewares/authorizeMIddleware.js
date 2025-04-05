const pool = require('../config/db');

const authorize = (requiredPermission) => {
    return async (req, res, next) => {
        try { 
            const userId = req.user.userId;
            const query = `
                select permission_name from users join roles on users.role_id=roles.id join role_permission on role_permission.role_id=roles.id join permissions on permissions.id =role_permission.permission_id where users.id=$1
            `;
            const result = await pool.query(query, [userId]);
            const permissions = result.rows.map(row => row.permission_name);

            if (!permissions.includes(requiredPermission)) {
                return res.status(403).json({ error: 'Access Denied' });
            }

            next();
        } catch (error) {
            res.status(500).json({ error: 'Authorization Error' });
        }
    };
};

module.exports = authorize;
