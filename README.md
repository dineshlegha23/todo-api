## Prerequisites

##### you need MongoDB account to get MongoDB Atlas URI and add it to `.env` file

- [MongoDB](https://www.mongodb.com/products/platform/atlas-database)

## Getting Started

```
# Clone this project to your local.
git clone https://github.com/dineshlegha23/todo-api.git my-project

# Change directory
cd my-project

# Install package dependencies
npm install

# Start your app
npm start
```

## Configuration

You have to add file `.env` to change configuration

### Note: You have to add your MongoDB URI in the `MONGODB_URI` field in `.env` file

```
MONGODB_URI=YOUR MONGODB URI

PORT=3000

JWT_SECRET=supersecret

JWT_LIFETIME=15d

NODE_ENV=development
```

# Task app API

REST API project using NodeJS(ExpressJS) and MongoDB.

## Features

- Authentication using Email and Password (Login and Register)
- REST API: Create, update, get, list, delete task
- JWT based authentication and Bcrypt for password hasing

## Task APIs

| Description       | URL               | METHOD | PAYLOAD                                  | EXAMPLES                                                                          |
| ----------------- | ----------------- | ------ | ---------------------------------------- | --------------------------------------------------------------------------------- |
| List of all tasks | /api/v1/tasks     | GET    |                                          | GET /api/v1/tasks                                                                 |
| Create a new task | /api/v1/tasks     | POST   | data:{title: String,description:String}  | POST /api/v1/tasks data:{title:'first task',description:'first task description'} |
| Delete a task     | /api/v1/tasks/:id | DELETE | params-{id:String}                       | DELETE api/v1/tasks/123                                                           |
| Update task       | /api/v1/tasks/:id | PUT    | data:{status:String}, params-{id:String} | PUT /api/v1/tasks/123 data:{status:'completed'}                                   |
| Get single task   | /api/v1/tasks/:id | GET    | params-{id:String}                       | GET /api/v1/tasks/123                                                             |

## Auth APIs

| Description | URL                   | METHOD | PAYLOAD                                         |
| ----------- | --------------------- | ------ | ----------------------------------------------- |
| Register    | /api/v1/auth/register | POST   | {email: String, password: String, name: String} |
| Login       | /api/v1/auth/login    | POST   | {email: String,password: String}                |
| Logout      | /api/v1/auth/logout   | GET    |                                                 |
