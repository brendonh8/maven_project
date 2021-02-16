How to run app:
1.
open one terminal and cd into scheduler-backend and run: 
    docker-compose up
    (make sure nothing is running on port 8000)

This will run a django server on port 8000 connected to a mysql database.
If you want to connect to the db, it is running on port 33066 (outside container)
The logic for the scheduler is located in appointments/views.py

2.
open another terminal and cd into react-scheduler and run:
npm start

This will pull up a simple UI at http://localhost:3000/ to interact with the API
(I just used a template from https://getbootstrap.com/docs/5.0/examples/dashboard/ and edited it a bit)

## The search endpoint is not used in the UI, to test this you can use postman and simply enter a user id
after the url in a GET request with postman: http://localhost:8000/api/appointments/1

To test posting appointments, POST to http://localhost:8000/api/appointments with the following body:
{
    "start_datetime": "YYYY-MM-DD HH:mm",
    "user_id": <integer>,
    "minutes": <integer>
}


TO DO: 
-Unit and integration testing:
    Simple unit tests should be put together to verify that the date overlap logic in the API works as intended.
    Since there is a front and backend, integration tests should be used between the two

-Add in search functionality to the UI

-Display an error message in the UI when an appointment overlaps