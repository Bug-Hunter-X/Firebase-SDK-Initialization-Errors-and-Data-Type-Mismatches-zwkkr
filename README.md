# Firebase SDK Errors and Data Type Issues

This repository demonstrates common errors encountered when using the Firebase SDK, specifically focusing on initialization problems and data type mismatches in the Realtime Database.

## Bug Description

The `firebaseBug.js` file shows code examples where incorrect configuration and data types lead to unexpected results, including silent failures and unexpected data transformations in Realtime Database. The solution is presented in `firebaseBugSolution.js`

## How to Reproduce

1.  Clone this repository.
2.  Follow the Firebase setup instructions to initialize your project correctly (including setting the `google-services.json` file).
3.  Run `firebaseBug.js`. Observe the errors.
4.  Run `firebaseBugSolution.js`. Observe the correct behavior.

## Bug Solution

The `firebaseBugSolution.js` demonstrates the corrected code, addressing configuration issues and using proper data types.