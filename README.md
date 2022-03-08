# Match_fixture
Backend for a match fixture web app

## Built with
* Nodejs
* Express
* Mongodb
* Mongoose

## Endpoints
* Basic CRUD operations for 
  * users
  * teams
  * sports
  * venues
  
## User
* "/user", to enter user route
#### POST
* "/user/signup", to add details of user
#### GET
* "/user/list-details", to get details of all users
* "/user/find-by-id", to get user details by object id
#### DELETE
* "/user/delete-by-id", to delete user by object id
#### UPDATE
* "/user/update/:id", to update user by object id

## Team
* "/team", to enter teams route
#### POST
* "/team/add-details", to add details of a team
#### GET
* "/team/list-details", to get details of all teams
* "/team/find-by-id", to get team details by object id
#### DELETE
* "/team/delete-by-id", to delete team by object id
#### UPDATE
* "/team/update/:id", to update team by object id

## Sport
* "/sport", to enter sport route
#### POST
* "/sport/add-details", to add details of sport
#### GET
* "/sport/list-details", to get details of all users
* "/sport/find-by-id", to get sport details by object id
#### DELETE
* "/sport/delete-by-id", to delete sport by object id
#### UPDATE
* "/sport/update/:id", to update sport by object id

## Venue
* "/venue", to enter venue route
#### POST
* "/venue/add-details", to add details of venue
#### GET
* "/venue/list-details", to get details of all venues
* "/venue/find-by-id", to get venue details by object id
#### DELETE
* "/venue/delete-by-id", to delete venue by object id
#### UPDATE
* "/venue/update/:id", to update venue by object id
