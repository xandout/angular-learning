This is a super simple intro project for learning Angular 7. 

 The end goal is to have an angular app that has the ability to create a "product" with a schema matching that of `backup.json`. 
 
 
  I would like the the attributes object to be freeform so that a user can dynamically add and remove "attributes" from the product. 

Currently the UI can display the data and allow for the edit of "productid"(this should be disabled on edit but isn't yet), "name" and the "attributes".  

Currently the go code defines an "Attribute" as `[]map[string]interface{}`, should probably be `map[string]interface{}` or something resembling a JSON `Object` like `{"string_key": "string"}`.  Inital tests show that the type of `value` could be expanded to hold arbitrary binary data such as images.  

The "edit" feature uses the same API resource as creating a product and uses mongodb's "upsert" behavior to allow a single method to create and update a record.

## To run
* This all assumes a dev environment

* need to update `src/app/productsvc.service.ts` to use the IP your go service.  IDK how to paramaterize the angular app.

### Mongo notes
Database: progomon

Collection: products

Indices: unique on `productid`

Not great design choices but functional

### Run the HTTP API
`go run main.go 192.168.X.X:27017`  

Will accept HTTP requests on `:8000`.  

CORS is configured to allow anyone to request anything regardless of port and origin but then again, maybe only on my laptop.


### Serve the angular app
`ng serve --host 0.0.0.0`  or `ng build && cd dist/webui && python -m SimpleHTTPServer 8080`

### Add a product
Click the plus in navbar, supply ID and Name. 

If you want attributes, you need to add them via the DB.  The code to add form fields dynamically is not complete.

### Delete a product
Click the trashcan icon on a card.  

There is no confirmation or dynamic updates to the UI.  Reload to see it go away.  Fortunate side effect is you can "undelete" before you reload by editing the deleted product and then clicking submit in the modal.

#### Edit a product
Click edit icon.  You cannot add attributes or delete them but you can edit them if they are present.


#### TODO

Cleanup

Fix form dynamic creation

2 way bind the data to avoid reloads.  Or implement a reload function :)

Add api endpoint for attributes.  All in one API resources are not that awesome.

Implement Search functionality

Figure out how to not spend 4 hours trying to submit a form.........just needed some `ngModel` added.

Determine if this has any usefulness beyond a learning excersize.  





# Generated

# Webui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
