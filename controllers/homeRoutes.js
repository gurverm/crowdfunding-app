const router = require('express').Router();

const Project = require('../models/Project');
const User = require('../models/User');

router.get('/', async (req, res) => {
  const projectData = await Project.findAll().catch((err) => {
    res.json(err);
  });
  const projects = projectData.map((project) => project.get({ plain: true }));
  res.render('homepage', { projects });
});

module.exports= router;