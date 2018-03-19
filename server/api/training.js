const router = require('express').Router()
const Sandbox = require('sandbox');
const Problem = require('../db/models/problem.js')

module.exports = router

router.get('/test/:id', (req, res, next) => {
  Problem.findById(req.params.id)
  .then(problems => res.json(problems.prompt))
})

router.post('/test/:id', (req, res, next) => {
  Problem.findById(req.params.id)
  .then(problem => problem.tests)
  .then(test => {
    const s = new Sandbox();
    s.run(`${req.body.code}; ${test}`, function(output){
      console.log('hey buddy', output)
      res.send(output.result)
    })
  })
})
