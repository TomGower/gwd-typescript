# gwd-typescript

A re-factor of my scoresheet for playing Geeks Who Drink-style pub quiz games as a tool to learn TypeScript.

The original is deployed at https://nameless-stream-40581.herokuapp.com/

Code for the original is available at https://github.com/TomGower/gwd-scoresheet

To run locally, 1. npm install, 2. npm run build-dev, 3. npm run start-dev. The site runs on localhost:2017

Known issues: it passes tslint (yes, I know it's deprecated), webpack successfully creates a bundle, and
the bundle appears after minor testing to run successfully. Webpack after creating a bundle then throws
a bunch of errors, which appear to be TS-checking complaints rather than functionality-related issues.
At least for now, I'm declaring myself content with establishing a working MVP and reserve the right to
potentially revisit this later.