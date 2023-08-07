# Note Down

Note Down is fully functional and robust notes taking app which allows user to store and access all notes and important information digitally, usually in a cloud based database storage system. React is used for fronted design,The authentication is powered by JWT and local storage is being implemented so that the user won't have login again and again and the Node.js and Express.js backend use MongoDB as database to save, delete and update the notes.

## Screenshorts

### Login and Register

![Imgur](https://imgur.com/H2TbCjE)

### Home
![Home](https://imgur.com/TMGfk0r)


### Add Note
![create-note](https://imgur.com/WWQFwdn)

### Edit Note
![edit-note](https://imgur.com/SZyFYzj)

<h2>QuickStart</h2>

- Open your terminal and run the command
```
 $ git clone https://github.com/abhi1506manu/Notes-App.git
 $cd Notes-App
```
- To install dependencies for backend
```
$ cd backend
$ npm install
```
- To install dependencies for frontend
```
$ cd frontend
$ npm install
```
- Create a `.env` file in the backend directory and add the following
```
PORT = 5000
DATABASE=<URI>
TOKEN_SECRET=<your-token>
```
<h3> To Connnect your mongodb</h3>
<h3> Run frontend and backend concurrently</h3>

- To run the backend  
```sh
$ cd backend/
$ npm run dev
```
To run the frontend  
```sh
$ cd frontend/
$ npm start
```
