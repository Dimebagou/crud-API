<h1 align="center">Hi 👋, I'm Dimebagou</h1>
<h3 align="center">A passionate student fullstack developer from France</h3>

- I’m currently a student web dev learning and working on [Crud-API](https://github.com/Dimebagou/crud-API). Here I'm using Node.js to make an API from a MongoDB database I created.

<h2 align="left">1 - Install package needed for the projet via the terminal :</h3>

```bash
npm init -y
```
```bash
npm install mongoose express dotenv cors
```
```bash
npm install -D nodemon
```

<p>Inside the main folder, create a .env file and put your MongoDB url inside like this :</p>

```javascript
MONGODB_URL="Replace this by your own MongoDB Url"
```

<h2 align="left">2 - Run the script</h3>

```bash
npm start
```

<h2 align="left">3 - Test the script with Postman</h3>

<p>You can use the software Postman to CREATE, READ, UPDATE or DELETE </p>

<h3 align="left">Create</h2>
<p>Use the POST and use this url to CREATE one todo :</p>

```bash
localhost:8080/todos
```

<p>Here is an example of a todo you can post ("title" is required) :</p>

```js
{
    "title": "Title 1",
    "description": "Description 1",
    "completed": false
}
```

<h3 align="left">Read</h2>
<p>Use the GET and use this url to READ the list of all the todos :</p>

```bash
localhost:8080/todos
```
<h3 align="left">Update</h2>
<p>Use the PUT and use this url (replace `:todoID` by the id of the todo you want) to UPDATE one todo :</p>

```bash
localhost:8080/todos/:todoID
```

<p>Here is an example of an update you can post :</p>

```js
{
    "title": "No more Title 1",
    "description": "Description 1.1",
    "completed": false
}
```

<h3 align="left">Delete</h2>
<p>Use the DELETE and use this url (replace `:todoID` by the id of the todo you want) to DELETE one todo :</p>

```bash
localhost:8080/todos/:todoID
```

<h2 align="left">4 - Languages and Tools used:</h3>
<p align="left"> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>
