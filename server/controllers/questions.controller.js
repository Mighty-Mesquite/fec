// const TOKEN = require('../../Questions/config.js');
// const axios = require('axios');
// const API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

// const options = {
//   headers: {
//     Authorization: TOKEN
//   }
// };


// const readQuestions = (req, res) => {
//   let id = req.query.product_id;
//   let page = req.query.page || 1;
//   let count = req.query.count || 5;
//   let query = API + req.path + `?product_id=${id}&page=${page}&count=${count}`;

//   axios.get(query, options)
//   .then(answers => {
//     res.status(200).send(answers.data);
//   })
//   .catch(err => {
//     console.log(err);
//     res.sendStatus(500);
//   })
// };

// const readAnswers = (req, res) => {
//   let id = req.params.question_id;

//   axios.get(API + req.path, options)
//   .then(answers => {
//     res.status(200).send(answers.data);
//   })
//   .catch(err => {
//     console.log(err);
//     res.sendStatus(500);
//   })
// };

// const createQuestions = (req, res) => {
//   axios.post(API + req.path, req.body, options)
//     .then(() => {
//       res.sendStatus(201);
//     })
//     .catch(err => {
//       console.log(err);
//       res.sendStatus(500);
//     })

//   // res.send('I see you trying to POST a question.');
// };

// const createAnswers = (req, res) => {
//   axios.post(API + req.path, req.body, options)
//   .then(() => {
//     res.sendStatus(201);
//   })
//   .catch(err => {
//     console.log(err);
//     res.sendStatus(500);
//   })
//   // res.send('I see you trying to POST an answer.');
// };

// const updateHelpfulQ = (req, res) => {
//   axios.put(API + req.path, {} ,options)
//   .then(() => {
//     res.sendStatus(204);
//   })
//   .catch(err => {
//     console.log(err);
//     res.sendStatus(500);
//   })
//   // res.send('Let us PUT a pin on that helpful question');
// };

// const updateReportQ = (req, res) => {
//   axios.put(API + req.path, {} ,options)
//   .then(() => {
//     res.sendStatus(204);
//   })
//   .catch(err => {
//     console.log(err);
//     res.sendStatus(500);
//   })
//   // res.send('PUT your hands up! You are reported for a bad question!');
// };

// const updateHelpfulA = (req, res) => {
//   axios.put(API + req.path, {} ,options)
//   .then(() => {
//     res.sendStatus(204);
//   })
//   .catch(err => {
//     console.log(err);
//     res.sendStatus(500);
//   })
//   // res.send('Your answer was actually helpful so let\'s PUT that up.');
// };

// const updateReportA = (req, res) => {
//   axios.put(API + req.path, {} ,options)
//   .then(() => {
//     res.sendStatus(204);
//   })
//   .catch(err => {
//     console.log(err);
//     res.sendStatus(500);
//   })
//   // res.send('I don\'t have to PUT up with your lame answer!');
// };

// module.exports = {
//   readQuestions,
//   readAnswers,
//   createQuestions,
//   createAnswers,
//   updateHelpfulQ,
//   updateReportQ,
//   updateHelpfulA,
//   updateReportA
// };