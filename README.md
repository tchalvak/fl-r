# Falling Leaves
A react mockup site of the falling-leaves sketch.

## Available Scripts

In the project directory, you can run:

### `yarn start`

To run the the app in the development mode.<br>
Open the browser with `yarn browse` or for non-unix machines, 
open [http://localhost:7773](http://localhost:7773) to view it in the browser.


### `yarn test`

To run the basic sanity check tests in jest, it runs interactively so you can edit and test immediately as you go.

### `yarn build`

Builds the app for production to the `build` folder.<br>

### Deployment

Just create a pull request against master.  When it is merged, that is equivalent to a request to run tests and deliver.

The repository goes through continuous integration here: https://app.codeship.com/projects/351674 and as long as tests pass,
it gets deployed to an Amazon S3 bucket.  That bucket uses Amazon Cloudfront to serve an internationally-optimized CDN site.

The final production site is hosted at the subdomain [https://falling-leaves.royronalds.com](https://falling-leaves.royronalds.com)