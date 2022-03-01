# Match_fixture
Backend for a match fixture web app

## Built with
* Nodejs
* Express
* Mongodb
* Mongoose

## Endpoints
* No login endpoint yet.
* Basic CRUD operations for 
  * users
  * teams
  * sports
  * venues
  
## User
->"/user", to enter user route
#### POST
->"/user/add-details", to add details of user
#### GET
->"/user/list-details", to get details of all users
->"/user/find-by-name", to get user details by name
#### DELETE
->"/user/delete-by-id", to delete user by object id

## Team
->"/team", to enter teams route
#### POST
->"/team/add-details", to add details of a team
#### GET
->"/team/list-details", to get details of all teams
->"/team/find-by-team", to get team details by team 
#### DELETE
->"/team/delete-by-id", to delete team by object id

## Sport
->"/sport", to enter sport route
#### POST
->"/sport/add-details", to add details of sport
#### GET
->"/sport/list-details", to get details of all users
->"/sport/find-by-name", to get sport details by sport name
#### DELETE
->"/sport/delete-by-id", to delete sport by object id

## Venue
->"/venue", to enter venue route
#### POST
->"/venue/add-details", to add details of venue
#### GET
->"/venue/list-details", to get details of all venues
->"/venue/find-by-name", to get venue details by name
#### DELETE
->"/venue/delete-by-id", to delete venue by object id
