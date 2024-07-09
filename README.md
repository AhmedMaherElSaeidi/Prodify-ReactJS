# Scandiweb Junior Developer Test Task - Frontend

Welcome to the **Scandiweb Junior Developer Test Task - Frontend** repository! This project is designed as part of the Scandiweb Junior Developer test assignment. It demonstrates skills in React.js for building a simple product management web application.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Backend repository](#backend-repository)
- [Deployment](#deployment)
- [Getting Started](#getting-started)
  - [Installation](#installation)

## Project Overview

This project consists of a React-based web application for managing products. It includes two main pages:

1. **Product List Page**: Displays a list of all products.
2. **Add Product Page**: Provides a form to add new products to the list.

The application adheres to the following requirements:

- **OOP principles** for PHP backend logic.
- React frontend with a focus on usability and functionality.
- Meets technical requirements as specified in the task description.

## Features

- **Dark/Light Theme**:
  - Providing a Theme Switcher button to switch between Dark and Light themes. The button will reflect the current theme, showing either a sun icon for the Light Theme or a moon icon for the Dark Theme.
  
- **Product List Page**:
  - Displays a list of products with SKU, Name, Price, and a product-specific attribute.
  - Includes a “MASS DELETE” feature with checkboxes.
  - “ADD” button to navigate to the "Add Product" page.

- **Add Product Page**:
  - Form with fields for SKU, Name, Price, and a product type switcher.
  - Dynamically changes the form based on the selected product type (DVD, Book, or Furniture).
  - Validates form inputs and displays error messages.
  - “Save” button to submit the form and return to the Product List page.
  - “Cancel” button to discard changes and return to the Product List page.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For client-side routing between pages.
- **Axios**: For making HTTP requests to the PHP backend.
- **SASS**: For advanced CSS styling.

## Backend repository 
Here's the [Repository](https://github.com/AhmedMaherElSaeidi/Prodify-PHP).

## Deployment
My app is deployed at [infinity free](https://prodify.lovestoblog.com).

## Getting Started

### Installation

To get started with the project, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/AhmedMaherElSaeidi/Prodify-ReactJS.git

2. **Install dependencies**:

   ```bash
   cd Prodify-ReactJS
   npm install

3. **Start the app**: Through clicking the `run_react_app.bat` to start the app or using `CMD`.

   ```bash
   npm start
