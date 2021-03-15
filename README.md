# gwd-typescript

A re-factor of my scoresheet for playing Geeks Who Drink-style pub quiz as a tool to learn TypeScript.

The original is deployed at <https://nameless-stream-40581.herokuapp.com/>

Code for the original is available at <https://github.com/TomGower/gwd-scoresheet>

To run locally, 1. npm install, 2. npm run build-dev, 3. npm run start-dev. The site runs on localhost:2017

This repository has been updated to GWD's current 7-round format as of March 2, 2021. All known TS-related issues were resolved with that update.

In consideration of the [the issues with React.FC](https://github.com/typescript-cheatsheets/react#function-components), and in accordance with the guidance of [this Kent C. Dodds article](https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript), all uses of React.FunctionComponent have been removed.
