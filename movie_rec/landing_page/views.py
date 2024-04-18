from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token 
from .serializers import UserLoginSerializer
from django.views.decorators.http import require_POST
from django.http import JsonResponse
import json
from django.contrib.auth import authenticate, login, logout, models
from django.db import IntegrityError
from .models import Movie, Genre

#Normal way of view
@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

#Using API view - post method for login
class UserLoginView(APIView):
    def post(self, request, format=None):
        data = request.data
        username = data['username']
        password = data['password']
        print(username)
        
        if username and password:
            user = authenticate(username=username, password=password)

            if user:
                token = Token.objects.create(user=user)
                # token = Token.objects.create(user=...)
                # print(token.key)
                return Response({'token': token.key})
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

class UserSignUpView(APIView):
    def post(self, request, format = None):
        # data = json.loads(request.body)
        # username = data.get('username')
        # password = data.get('password')

        data = request.data
        username = data['username']
        password = data['password']

        # print(username)
        if username is None or password is None:
            return Response({'detail': 'Please provide username and password.'}, status=status.HTTP_400_BAD_REQUEST)
            # return JsonResponse({'detail': 'Please provide username and password.'}, status=400)
        
        try:
            user = models.User.objects.create_user(
                    username = username,
                    password = password,
                    email=  username)
            user.save()

        except IntegrityError as e:
                return Response({'detail': 'Please enter a different email!'}, status=status.HTTP_400_BAD_REQUEST)
                # return JsonResponse({'detail': 'Please enter a different email!'}, status = 400)
    
        return Response({'detail':'Successfully registered'})
        # return JsonResponse({'detail':'Successfully registered'})

class returnAllUserView(APIView):
    def get(self, request, format=None):
        users = models.User.objects.all()
        users_data = [
        {
            'id' : user.id,
            'password': user.password,
            'email':user.email,
        }
        for user in users]

        # return JsonResponse({users_data}, status=200);
        return Response(users_data, status=status.HTTP_200_OK)
    
class returnMoviesFromGenreView(APIView):
    def get(self, request):
        # movies = models.Movie.objects.all()
        # print(request.body)
        data = json.loads(request.body)
        title = data.get('title')
        print(title)
        try:
            current_movie = Movie.objects.filter(title=title).first()
            genres = [genre.name for genre in current_movie.genre.all()]
            print(genres)
            movies = Movie.objects.all() 
            for genre in genres:
                movies = movies.filter(genre__name=genre)

            # Serialize movie data with genre details
            serialized_movies = []
            for movie in movies:
                movie_data = {
                    'title': movie.title,
                    'url':movie.poster,
                    'director': movie.director,
                    'imdb':movie.imdb,
                    'overview':movie.overview,
                    'year': movie.year,
                    'genres': [genre.name for genre in movie.genre.all()]  # Get genre names associated with the movie
                }
            serialized_movies.append(movie_data)
            return Response({'movies': serialized_movies}, status=status.HTTP_200_OK)
        
        except Movie.DoesNotExist:
            return Response({'error': 'Movie not found'}, status=status.HTTP_404_NOT_FOUND)
       
