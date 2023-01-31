# Note Down

Note Down is fully functional and robust notes taking app which allows user to store and access all notes and important information digitally, usually in a cloud based database storage system. React is used for fronted design,The authentication is powered by JWT and local storage is being implemented so that the user won't have login again and again and the Node.js and Express.js backend use MongoDB as database to save, delete and update the notes.

## Screenshorts

### Home
<img src ='https://github.com/abhi1506manu/Notes-App/blob/master/images/Screenshot%20(15).png' alt ='3' class = 'center'>

### Login and Register

<img src ='https://github.com/abhi1506manu/Notes-App/blob/master/images/Screenshot%20(14).png' alt ='2' class = 'center'>

### Add Note

<img src ='https://github.com/abhi1506manu/Notes-App/blob/master/images/Screenshot%20(16).png' alt ='1' class = 'center'>

### Edit Note
<img src ='https://github.com/abhi1506manu/Notes-App/blob/master/images/Screenshot%20(17).png' alt ='1' class = 'center'>

##QuickStart

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

- Create a ```.env``` file in the backend directory and add the following
```
PORT = 5000
DATABASE=<URI>
TOKEN_SECRET=<your-token>
```
# Connnect to your mongodb 
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
