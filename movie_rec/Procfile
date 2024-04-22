release: python manage.py migrate
web: gunicorn movie_rec.wsgi --log-file -
worker: python movie_rec/manage.py collectstatic --noinput