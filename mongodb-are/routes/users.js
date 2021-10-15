import express from "express";
const router = express.Router();

import passport from "passport";
import users from "../models/users.js";

const userList = {
  u_id: "nana",
  u_pw: "nanana",
  u_email: "nananana",
  u_name: "na",
  u_nickname: "naa",
  u_role: 00,
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/test", async (req, res) => {
  res.json(userList);
  console.log(userList);
});

router.get("/test/:query", (req, res) => {
  let { query } = req.params;
  console.log(query);

  const tmpUserList = { ...userList, u_nickname: query };
  console.table(tmpUserList);
  // userList = [...userList, u_nickname=query]
  res.json(tmpUserList);
});
router.post("/", (req, res) => {
  console.log("user", users);
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("랄라라라라라랄");
  console.log("login", req.user);

  const login = res.json({
    u_id: req.user.u_id,
    u_pw: req.user.u_pw,
  });

  console.log("login id,pw", login);
});

router.post("/join", (req, res) => {
  console.log("join", users);
});

export default router;
