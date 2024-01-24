const { execute } = require('../database/querywapper')

async function tablelist(req, res) {
      try {
            const query = `SELECT * FROM emp_details`;
            const result = await execute(query, []);
            if (!result.length) {
                  return res.status(200).send({ data: [] });
            } else {
                  return res.status(200).send({ data: result });
            }
      } catch (error) {
            console.error("Error handle", error);
            return res.status(500).send({ error: 'interval server' });
      }
}

module.exports = { tablelist };