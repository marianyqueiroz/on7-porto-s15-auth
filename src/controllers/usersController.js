const users = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const create = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
    req.body.senha = senhaComHash;
    const users = new users(req.body);
  
    users.save(function(err) {
      if (err) {
        res.status(500).send({ message: err.message })
      }
  
      res.status(201).send(users.toJSON())
    })
  };
  
  const getAll = (req, res) => {
    users.find(function(err, users){
      if(err) {
        res.status(500).send({ message: err.message })
      }
      res.status(200).send(users);
    })
  };
  
  const login = (req, res) => {
    users.findOne({ email: req.body.email }, function(error, users) {
      if (!users) {
        return res.status(404).send(`Email ${req.body.email} does not macth`);
      }
  
      const senhaValida = bcrypt.compareSync(req.body.senha, users.senha);
  
      if (!senhaValida) {
        return res.status(403).send('Invalid password :(');
      }
  
      const token = jwt.sign({ email: req.body.email }, SECRET);
  
      return res.status(200).send(token);
    });
  }
  
  module.exports = {
    create,
    getAll,
    login
  }