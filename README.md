# JWT Authentication with Node.js

A secure and scalable implementation of JSON Web Token (JWT) authentication using Node.js. This repository provides a boilerplate for managing user authentication in modern web applications.

## Features

- **Secure Authentication**: Utilizes JWT for robust and efficient user authentication.
- **Middleware Protection**: Provides middleware to protect specific API routes.
- **Customizable Tokens**: Configurable token expiry and secret keys.
- **Scalable Codebase**: Modular and easy to integrate into existing applications.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- A package manager like `npm` or `yarn`.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/omar41101/JWT-Auth.git
   cd JWT-Auth

## Install depandencies
  ```bash
   npm install


## Create a .env file in the root directory and configure the following environment variables:
PORT=3000
JWT_SECRET=your_secret_key
JWT_EXPIRY=1h
 
