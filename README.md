# NY Times Most Popular Articles App

## Description
This is a simple React application that retrieves and displays the most popular articles from the NY Times API. Users can view a list of articles and navigate to detailed views for each article.

## Installation
1. Clone the repository to your local machine:
    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:
    ```bash
    cd ny-times-articles-app
    npm install
    ```

## Usage
1. Obtain an API key from the NY Times Developer Portal: [NY Times Developer Portal](https://developer.nytimes.com/get-started).
2. Create a `.env` file in the root directory of the project and add your NY Times API key:
    ```
    REACT_APP_NY_TIMES_BASE_URL=https://api.nytimes.com/svc/mostpopular/v2
    REACT_APP_NY_TIMES_API_KEY=your-api-key
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Test
To run tests, use the following command:
```bash
npm test
