[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# django-base
A Django web application with the boilerplate code already done for you.

Built with React, Django, Django REST Framework, and PostgreSQL.

Django Documentation: https://docs.djangoproject.com/en/2.1/

Currently a work in progress. 

## Environment
* Python 3.6+ - Install here: https://www.python.org/downloads/
* Django 2.1 - Install within virtual environment (See "Setup Guide") 
* more coming soon...

## Setup Guide
#### Create a repository for this project
```
$ mkdir django-base
$ cd django-base
```
#### Initialize a virtual environment (highly recommended)
```
$ pip install virtualenv
$ virtualenv venv
```
* This will create a virtual environment folder in your project directory called `venv/`.
#### Activate the virtual environment
* If you're using Windows:
```
$ venv\Scripts\activate
```
* If you're using Mac/Linux:
```
$ source venv/bin/activate
```
#### Install Django
```
pip install django
```
#### Clone the repo
```
$ git clone https://github.com/hack4impact-calpoly/django-base.git
$ cd django-base
```
#### Running the app
* Make sure you're in the root directory (the directory with `manage.py`)
* Run the server with:
```
$ python manage.py runserver
```
#### Now go to http://localhost:8000 to view the site!

## License
[MIT License](LICENSE.md)
