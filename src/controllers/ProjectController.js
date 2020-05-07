const knex = require("../database");

module.exports = {
  async index(req, res, next) {
    try {
      const { user_id } = req.query;

      const query = knex("projects");

      if (user_id) {
        // ('user_id', user_id) || ({user_id : user_id})
        query
          .where({ user_id })
          .join("users", "users.id", "=", "projects.user_id")
          .select("projects.*", "users.username");
      }

      const results = await query;

      return res.json(results);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const { user_id, title } = req.body;

      await knex("projects").insert({ user_id, title });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
};
