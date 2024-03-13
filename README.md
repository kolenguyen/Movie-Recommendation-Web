# Movie-Recommendation-Web

# Project Description 

Movies and TV series are two of the most common and enjoyable forms of entertainment. With the rise of streaming services, such as Netflix, Disney+, etc, it has increased in popularity and thus, creating a new problem: content discovery. The vast libraries and genre can easily overwhelm users and make it difficult to find films that align with their individual taste and preference. Our project, the movies and series recommendation system, aims to resolve this issue by using machine learning models along with web development to tailor movie suggestions for users as a product. In addition, due to the increasing recognition of artificial intelligence as products, a recommendation system would be a good experience and reference for future employers. 

# Technology (Tentative)

* Front-end: ReactJS or VueJS
* Back-end: Python Django
* Database: PostgreSQL/ mySQL/ AWS DynamoDB
* Testing: Postman
* Deployment/ Hosting: Heroku 
* Version Control: GitHub

# For Team Members:

Before running anything, please activate virtual environment 
* myenv\Scripts\activate on Windows
* source myenv/bin/activate

This is helpful because if you install any Python dependencies, you can export it to requirements.txt and everyone can update accordingly. 

For your information: 
* movie_rec is the backend Django directory. Inside, we have an app called landing_page, which is responsible for any functionality for landing page. To run backend server, change directory to movie_rec and run python manage.py runserver. 
** cors_headers is installed
** djangorestframework is installed
** api is not created
** views and urls are not updated
* react_app is the frontend directory. To run it, change directory to react_app and run npm start