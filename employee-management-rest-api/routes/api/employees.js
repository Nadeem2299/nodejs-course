var express = require("express");
var router = express.Router();

// CRUD App

// 1. create employees - POST
// 2. listing employee - /api/employees - GET
// 3. Get Emplyee details by ID - GET
// 4. Update employee -PUT/PATCH
// 5. Delete employee [TODO:]

/* POST method employee create. /api/employees*/
router.post('/', function (req, res, next) {
  console.log(req);
  res.status(201).json({
    id: 999,
    ...req.body
  });
})

/* GET employees listing. /api/employees*/
router.get("/", function (req, res, next) {
  const employees = [
    {
      id: 1,
      name: "John",
      phone: 3453455656,
      email: "j@k.com",
    },
    {
      id: 2,
      name: "Steve",
      phone: 3453455656,
      email: "s@m.com",
    },
  ];
  res.json(employees);
});

/* GET employee details. /api/employees/*id */
// using url param
router.get('/:empId', (req, res, next) => {
  console.log(req.url);
  console.log(req.params);
  console.log(req.query)
  res.json({
    id: req.params.empId,
    name: 'John', 
    phone: 392394,
    email: 'j@k.com'
  });
})



module.exports = router;
