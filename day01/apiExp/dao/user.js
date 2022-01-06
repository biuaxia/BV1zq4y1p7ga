import db from '../db.js';

export async function getAllPerson(req, res) {
    try {
        const [rows] = await db.query('SELECT `fd_id`, `fd_name`, `password` FROM `sys_org_element`');
        res.send({
            status: 0,
            message: 'success',
            data: rows,
        });
    } catch (e) {
        res.send({
            status: 1,
            message: 'failed',
            desc: e.message
        });
    }
}