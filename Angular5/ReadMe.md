# Angular 5


## Creating a new project
```
ng new my-app

Additional Flags
--style=scss    // utlize scss styling
--routing       // add routing to new project
```
Generates a new project with defualt settings


## Serving the Application
```
ng serve --open
```
Builds and launchs server on localhost:4200 by default.


## Development takes place in the src/app folder
## Generating new components for your app
```
ng generate component home
or
ng g c about
```

Every component will have a html, style, and typescript file when generated.
The base app component or root component can be found in src/app/app.component.html

## Styling
Using src/app/style.scss you can apply global styling thats is used across all files.
For individual styling you have to use the associated scss file for that component.