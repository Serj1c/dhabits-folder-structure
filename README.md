## Digital Habits entrance test
# App which makes api fetch request and displays result: folders structure

To start app locally: yarn start

Assumptions:

1. In the statement of work there was no requirement to add "Go Back" button --> therefore while navigating it is only possible to go deeper

2. Only one error is treated properly: api gives back results only if a requested source is a folder.
If it is not a folder the api answers with status 400 Bad Request and the app renders "Go back to root" button