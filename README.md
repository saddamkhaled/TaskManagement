# Task Management App
![image](https://github.com/saddamkhaled/TaskManagement/assets/36507502/b1385701-1806-4ac3-9bb4-630ddf36490b)

Welcome to the Task Management App! This application helps you organize and manage your tasks efficiently.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
    1. [Local Setup](#local-setup)
    2. [Docker Setup](#docker-setup)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

Our task management application is designed to help individuals and teams manage their tasks and projects efficiently.

## Prerequisites

Before you begin, ensure that you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/) (version 18)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.io/cli) (installed globally)

If Angular CLI is not installed on your machine, you can install it using the following command:

```bash
npm install -g @angular/cli

## Installation

### Docker Setup

1. Make sure Docker is installed on your machine.

2. Build the Docker image:

    ```bash
    sudo docker buildx build -t taskmanagement:latest .
    ```

3. Run the Docker container:

    ```bash
    sudo docker run -p 8080:80 taskmanagement:latest
    ```

    The app will be accessible at [http://localhost:8080](http://localhost:8080) when running inside the Docker container.
### Local Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/task-management-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd task-management-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the app:

    ```bash
    ng serve
    ```

    The app will be accessible at [http://localhost:4200](http://localhost:4200).

```

## Usage

Use the app to create tasks for different projects.
Prioritize tasks based on urgency.
Mark tasks as complete when done.
Collaborate with team members by sharing projects.
## Contributing

Contributions are welcome! If you have suggestions, feature requests, or find issues, please create an issue or submit a pull request.
## License

This project is licensed under the MIT License.

Feel free to adjust the content further based on your specific needs.

