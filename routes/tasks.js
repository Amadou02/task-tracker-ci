const { Task } = require("../models");

const express = require("express");
const router = express.Router();

router.get(
  "/",
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */
  async (req, res) => {
    try {
      const tasks = await Task.findAll({});
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

module.exports = router;
