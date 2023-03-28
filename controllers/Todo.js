const Todo = require("../model/Todo");

const getTodos = (req, res) => {
    /* Todo.find((err, todos) => {
    if (err) {
        res.send(err);
    }
    res.json(todos);
    }); */
    // remplacé par ce qui suit pour rendre la function async
    Todo
    .find()
    .then((todo) => {
        res.json(todo);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
};

const createTodo = (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
    });

    /* todo.save((err, todo) => {
        if (err) {
            res.send(err);
        }
        res.json(todo);
    }); */
    // remplacé par ce qui suit pour rendre la function async
    todo
    .save()
    .then((todo) => {
        res.json(todo);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
};

const updateTodo = (req, res) => {
    /* Todo.findOneAndUpdate(
    { _id: req.params.todoID },
    {
        $set: {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,
        },
    },
    { new: true },
    (err, Todo) => {
        if (err) {
        res.send(err);
        } else res.json(Todo);
    }
    ); */
    // remplacé par ce qui suit pour rendre la function async
    Todo
    .findOneAndUpdate(
        { _id: req.params.todoID },
        {
            $set: {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed,
            },
        },
        { new: true },
    )
    .then((Todo) => {
        res.json(Todo);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
};

const deleteTodo = (req, res) => {
    Todo.deleteOne({ _id: req.params.todoID })
        .then(() => res.json({ message: "Todo Deleted" }))
        .catch((err) => res.send(err));
};


module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
};

