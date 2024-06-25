# ToDo Application [MERN STACK]

This project is a simple ToDo application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to manage their tasks by adding new tasks, viewing the list of tasks, and deleting tasks from the MongoDB database.

**Disclamier**: Make sure you install `npm libraries cors and multer` in the API directory and run `npm install` in frontend directory

## Application Demonstration

https://github.com/SathruwanCooray/Simple_To_Do_Application/assets/150252729/9922f6b2-cde3-4b87-99a7-01e7812ae75e

## Previews of the web application
![Adding note](https://imgur.com/7bQ8Nh7.png)
![Remove note](https://imgur.com/07saRTI.png)

## Database preview [MongoDB]
![Adding note](https://imgur.com/9Lrtl25.png)

## Features

### Functionality Overview

The ToDo application includes the following key functionalities:

- **Add Task**: Users can add a new task to their to-do list.
- **View Tasks**: Users can view the list of all tasks.
- **Delete Task**: Users can delete a task from their list.

### API Endpoints

To interact with the application, the following API endpoints are available:

1. **Add Task**
   - **Endpoint**: `/api/addnotes`
   - **Method**: POST
   - **Description**: Adds a new task to the to-do list.
   
2. **View Tasks**
   - **Endpoint**: `/api/getnotes`
   - **Method**: GET
   - **Description**: Retrieves the list of all tasks.

3. **Delete Task**
   - **Endpoint**: `/api/deletenotes/:id`
   - **Method**: DELETE
   - **Description**: Deletes a task from the to-do list.

## Getting Started

To run the ToDo application:

1. **Clone the Project**: Clone the repository into your local environment.
2. **Install Backend Dependencies**: Navigate to the backend directory and run `npm install` to install the necessary dependencies.
3. **Install Frontend Dependencies**: Navigate to the frontend directory and run `npm install` to install the necessary dependencies.
4. **Set Up MongoDB**: Ensure you have MongoDB installed and running.
5. **Start the Backend Server**: Navigate to the backend directory and run `node index.js` to start the backend server.
6. **Start the Frontend Server**: Navigate to the frontend directory and run `npm start` to start the frontend development server.
7. **Interact with the Application**: Open your browser and navigate to `http://localhost:3000` to use the ToDo application.

## Example Requests

### Add a Task
- Type your task
- Click on he add button

### Delete a Task
- Click on the delete button next to the task

## Author

[Sathruwa Hansith] - [20220659]

## License

This project is licensed under MIT License. Permission is hereby granted to use, modify, and distribute the software as per the terms of the license.

## Acknowledgments

Special thanks to everyone who helped build this web application.
