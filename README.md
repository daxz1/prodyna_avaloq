# Avaloq

##### Project Task

###### Assignment

During the assignment you will build an application which manages bookmarks.

1. Scaffold the application with Angular 8, using the following libraries: NGRX for managing the state, Angular material for the user interface.
2. Define the store for the application. Each bookmark should have the following properties: Name, URL, Group (work / leisure/ personal / ...)
3. Create the user interface for displaying the bookmarks groupped by the "group" property.
4. Enhance the existing application by adding the following new features: Add new bookmarks using a form, Delete bookmarks by clicking in the list

###### Setup Basic Part 1

The project assumes you have the latest node and npm installed, alongside angular CLI installed. If not please follow the instructions found below:

[Node/NPM](https://nodejs.org/en/docs/)

[Angular CLI](https://cli.angular.io/)

###### Setup Basic Part 2

From this point on it is assumed NPM is being used.

Install project dependencies using the below command:

`npm i `

Start project frontend using the below command:

`ng serve -o`

Start project backend simple json server using the command below:

`npm run server`

###### Screenshots

![Homepage](/screenshots/shot_1.png)
Bookmark Manager, home screen. Bookmarks are group by their respective group.
![Add Bookmark](/screenshots/shot_2.png)
Book Manager, add screen.

###### Improvements & Points of Discussions

- If this was a production project, I would write tests and try to maintain a near 100% code coverage. Here is an example of a personal project that has 100% test coverage written in react/redux [MyNextRoll](https://bitbucket.org/nim_sathi/mynextroll/src/master/)
- React vs Angular

###### Sources

As this was my first time using angular, I had to use several sources, these are listed below:

[Simple Angular app using ngrx 8+ store and effects factory methods](https://medium.com/@RupaniChirag/simple-angular-app-using-ngrx-8-store-and-effects-factory-methods-f3423b9f6d3b)

[Angular](https://angular.io/)

[NgRx](https://ngrx.io/docs)

[Pipe Function in JavaScript](https://medium.com/@venomnert/pipe-function-in-javascript-8a22097a538e)

[JSONPlaceholder](http://jsonplaceholder.typicode.com/)
