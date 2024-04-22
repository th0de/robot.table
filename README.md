# Basic outline for Robot Table workshop 


# Database
userTable 
-username
password(hashed)

# Robot Table A
name 
color 
UserId 

create 3 users with 3 robots per user (may use Faker if you’d like)

# Server Endpoints 
Authentication - handles username password credentials
	
	POST/auth/register- create a new user with provided creditials and return a token. 

	POST/auth/login- log in with the provided credentials and return a token accessed by anyone 

	GET /apit/v1/robots - get all robots
	Get/api/v1/robots/:iid- get a robot specified by an id

# Accesed if a valid token is provided in the request  header and sends back a 401 Status if the token is not provided 

	-POST /api/v1/robots- create a new robot as the currently logged in user 

	PUT/ apit/v1/robots?:id -update a robot only if it was created buy the currently logged in user. 