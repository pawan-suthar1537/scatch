const express = require("express");
const Owner = require("../models/owner-model");
const router = express.Router();

if (process.env.ENV === "dev") {
  router.post("/create", async (req, res) => {
    try {
      const { fullname, email, password } = req.body;
      const existingOwner = await Owner.findOne();
      if (existingOwner) {
        return res
          .status(400)
          .send("Owner already exists. You cannot create another.");
      }

      const newOwner = new Owner({ fullname, email, password });
      await newOwner.save();

      return res.status(201).json({ newOwner });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  });
}

router.get("/", (req, res) => {
  res.send("hello from owners routes");
});

module.exports = router;
