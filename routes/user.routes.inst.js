const express = require("Express");
const router = express.Router();
const User = require("../models/user.model");

// rota de todos os usuarios
router.get("/api/users", async (req, res, next) => {
  try {
    // ! verificar o que se trata payload
    const currentUser = req.payload;
    console.log("currentUser :>> ", currentUser);

    const user = await User.findById(currentUser._id);

    res.status(200).json(user);
  } catch (error) {
    // ! verificar o uso next
    // ! next(error);
    res.status(500).json(error);
  }
});

/// rota para editar o usuario
router.put("api/users", async (req, res, next) => {
  try {
    const currentUser = req.payload;
    const { email, password, username, birthday, phone, name, profileImg } =
      req.body;

    const updatedUser = await User.findByIdAndUpdate(
      currentUser._id,
      {
        email,
        password,
        username,
        birthday,
        phone,
        name,
        profileImg,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("api/users/:userId", async (req, res, next) => {
  try {
    // ! estudar descontruction
    const { currentUserId } = req.params;
    await User.findIdAndDelete(currentUserId);

    res.status(200).json(currentUserId);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("api/users/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const oneUser = await User.findById(userId);

    res.status(200).json(oneUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
