# interview-exercise-rocio-pinedo

## Excercise Description and Requirements

### Description
TRUEXTEND is registering students for Internship program, and for this propose it is required to have a form to register students and also see the registered students state.

* There is a main view (HOME) that contains:
  * A Swicth that allows registering students into Internship program.
  * An input text for the student name that will be registered.
  * A button to register students.
* There is a component called "ClassRoom" that contains: 
  * Title (Students registration process state).
  * List of registered Students.

### Requirements 
* Switch should enable/disable Student registration
  * If disable then the input text and button should be disable.
* Title in ClassRoom component should behave according with switch state.
* Registered students should be stored in VUEX state.
* List of students in ClassRoom component should be retrieved from VUEX state.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
