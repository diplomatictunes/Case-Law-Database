# Legal Cases Database

This project is a web application designed to manage and search legal cases. It allows users to submit new cases, search existing cases, and view detailed information about individual cases.

## Features

- **Case Submission:** Users can submit new legal cases using a form.
- **Search Functionality:** The application provides a search feature that allows users to search for cases by various criteria, such as case name, citation, year, court, topic, and more.
- **Case Details:** Users can view detailed information about individual cases, including case name, citation, medium neutral, year, court, topic, ratio, notes, and more.
- **Medium Neutral Viewer:** For cases with medium neutral information, the application provides a viewer to display the corresponding website.

## Technologies Used

- **Node.js:** The backend of the application is built using Node.js, a JavaScript runtime environment.
- **Express.js:** Express.js is used as the web application framework for Node.js, providing features for routing, middleware, and more.
- **MySQL:** The application uses MySQL as the database management system to store and manage legal case data.
- **HTML/CSS/JavaScript:** The frontend of the application is built using HTML, CSS, and JavaScript for user interface and interaction.
- **EJS:** Embedded JavaScript (EJS) is used as the templating language to generate HTML with plain JavaScript.

## Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies:**
   ```bash
   cd legal-cases-database
   npm install
   ```

3. **Set Up the Database:**
   - Create a MySQL database and import the provided SQL schema file (`schema.sql`) to set up the necessary tables.

4. **Configure Environment Variables:**
   - Create a `.env` file in the root directory and configure environment variables such as database connection details.

5. **Run the Application:**
   ```bash
   npm start
   ```

6. **Access the Application:**
   - Open your web browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
