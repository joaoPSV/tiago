const express = require("express");
const service = require("../services/user.service");

const router = express.Router();

router.post("", async (req, res) => {
  const { id, name } = req.body;
  try {
    await service.create(id, name);
    res.status(201).json({
      id,
      name,
    });
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:id", async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  try {
    await service.updateById(id, name);
    res.status(200).json({
      id,
      name,
    });
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("", async (req, res) => {
  try {
    const users = await service.findAll();
    res.status(200).json({ users });
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await service.findById(id);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await service.deleteById(id);
    res.status(200).json({
      message: "Usuário deletado!",
    });
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
