#Note-Taker App
-This app can add notes using JSON as the "db" and files can be written to this JSON file.
-Routes included are "GET", "POST", and "DELETE" however delete wasnt finished upon submission.
-Note-Taker uses express js for the router functionality

#Future functionality
-I would like to clean up the code to utilize the router() function and have app() be called.
-I would like to get the DELETE code to work properly.


# Note Taker Starter Code

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column