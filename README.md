# IT Blog

A CMS-style blog site for tech enthusiasts to publish articles, blog posts, and share thoughts and opinions on various technical topics.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)

## Description

The IT Blog is a web application built using Node.js and Express.js that allows developers to publish and share their technical articles and blog posts. Users can sign up, log in, create new blog posts, comment on existing posts, and manage their own posts through a dashboard.

## Features

- User authentication: Users can sign up, log in, and log out securely.
- Create, read, update, and delete (CRUD) operations for blog posts.
- Commenting system: Users can leave comments on blog posts.
- Dashboard: Users have access to a dashboard where they can manage their blog posts.
- Responsive design: The application is responsive and works well on both desktop and mobile devices.

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL database
- Handlebars.js (templating engine)
- bcrypt (password hashing)
- express-session (authentication middleware)
- connect-session-sequelize (session store for Sequelize)
- dotenv (environment variables)

## Installation

To install the necessary dependencies, run the following command:

```node server.js```


## Usage

1. Set up the required environment variables by creating a `.env` file based on the provided `.env.example` file.
2. Create a MySQL database and update the `.env` file with your database credentials.
3. Run the application using the following ```command: node server.js```

4. Access the application in your web browser at `http://localhost:3000`.


## Questions

If you have any questions or need assistance, please feel free to contact the project owner or submit an issue.


