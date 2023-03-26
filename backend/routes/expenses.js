const router = require('express').Router();
const Expense = require('../models/expense.model');

router.route('/').get((req,res)=>{
    Expense.find()
        .then(expenses=>res.json(expenses))
        .catch(e => res.status(400).json('Error: '+ e));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const cost = req.body.cost;
    const date = Date.parse(req.body.date);

    const newExpense = new Expense({
        username,
        description,
        cost,
        date,
    });

    newExpense.save()
        .then(() => res.json('Exercise added!'))
        .catch(e => res.status(400).json('Error: ' + e));
});

router.route('/:id').get((req,res)=>{
    Expense.findById(req.params.id)
        .then(expense => res.json(expense))
        .catch(e => res.sendStatus(400).json('Error: ' + e));
});

router.route('/:id').delete((req,res)=>{
    Expense.findByIdAndDelete(req.params.id)
        .then(() => res.json('Expense Deleted...'))
        .catch(e => res.sendStatus(400).json('Error: ' + e));
});

router.route('/update/:id').post((req,res) => {
    Expense.findById(req.params.id)
        .then(expense => {
            expense.username = req.body.username;
            expense.description = req.body.description;
            expense.cost = Number(req.body.cost);
            expense.date = Date.parse(req.body.date);

            expense.save()
                .then(() => res.json('Exercise updated!'))
                .catch(e => res.status(400).json('Error: '+ e));
        })
        .catch(e => res.status(400).json('Error: '+ e));
});


module.exports = router;
