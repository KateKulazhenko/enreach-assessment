# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Enreach - Front End Development Assessment

## Handling data

Given [an array of person objects](persons.json), you should get an array of all persons aged 35 and older, with their names formatted as:

```
{lastname}, {firstname}
```

After that, you need to make an HTTP call for each person to get their income. To simulate these HTTP calls, you need to implement a function called `api` which receives the person object as the only argument and returns a Promise that resolves with a value after a random time between 500ms and 1000ms. The `api` function should reject with an error if one occurs.

This random time is the value the Promise should resolve with (so if the Promise is resolved after 567ms, the returned value for the income is also 567). In case an error occurs in any of these HTTP calls it should be logged to the console.

These HTTP calls must be executed in parallel and after that you have to calculate the average income of these persons and log it to the console.

## Displaying data

Based on the functions you'll have created, you should list the persons and their incomes using the [index file](index.html) and the `template` you will find in it.

After that, you should format that list in such a way it appears on a three-column grid if the viewport is at least `1024px` wide. The columns should be equally wide, evenly spaced. You are supposed to add CSS code of your own instead of changing the existing one in the [index file](index.html).

## Final dispositions

-   Unit tests are highly regarded, but not mandatory.
-   You can turn in this assignment by uploading it to a Git-based code-sharing cloud platform (e.g. [Github](https://github.com/)) and sending the link to the email address you received this assessment from.
