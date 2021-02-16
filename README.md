# Task Tracker (Django + React)

Builds off of tutorials from Traversy Media for front end portion and William Vincent for Django portion.

Integrates two tutorials with GET functionality, but will soon build out POST, PUT, and DELETE.

Setup (Mac OS):

1. Clone repo:
```
git clone https://github.com/csuttner/task-tracker.git
```
2. Add superuser:
```
cd task-tracker/back-end
source env/bin/activate
python manage.py createsuperuser
```
3. Start backend:
```
python manage.py runserver
```
4. Add data:
Navigate to http://localhost:8000/admin
Log in with your superuser credentials
Add tasks

3. Start frontend:
(Open new terminal window or tab)
```
cd task-tracker/front-end
npm start
```
Browser should open app and display tasks you added
Double clicking should toggle display of task description
