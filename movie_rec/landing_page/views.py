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
                print(token.key)
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
            return JsonResponse({'detail': 'Please provide username and password.'}, status=400)
        
        try:
            user = models.User.objects.create_user(
                    username = username,
                    password = password,
                    email=  username)
            user.save()

        except IntegrityError as e:
                return JsonResponse({'detail': 'Please enter a different email!'}, status = 400)
    
        return JsonResponse({'detail':'Successfully registered'})
