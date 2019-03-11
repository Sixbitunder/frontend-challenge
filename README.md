# FinCompare Front-end Challenge

We'll use the [Ergast API](http://ergast.com/mrd/) to create a single page application that
presents a list that shows the F1 world champions starting from 2005 until
2015. Clicking on an item shows the list of the winners for every race for
the selected year. We also request to highlight the row when the winner
has been the world champion in the same season.

### Prerequisites

[npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/en/)

### Installation

- Clone the project
- Run `npm install`

### Run the development server

- `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Stack

- [React](https://reactjs.org/)

Nothing fancy, the project is really simple and doesn't need any other framework to be realized.
Redux is overkilling for a project like this, a few handlers and some fetches got the work.
The app is totally responsive but no CSS framework was used, just CSS and breakpoints.

The user could select the seasons from 2005 to 2015 on an horizontal scrollbar (useful for both mobile and desktop version)
Then, when all the fetches are executed, a small hero with a few data of the championship winner are displayed and under that a table with a list of all the races and the relatives winners. The championship winner is highlighted also in the rows of the table as requested. 

