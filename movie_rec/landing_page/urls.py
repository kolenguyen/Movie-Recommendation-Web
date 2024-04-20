from django.urls import path
from . import views
from .views import UserLoginView, UserSignUpView, returnAllUserView, returnMoviesFromGenreView

urlpatterns = [
    path('test/', views.hello_world, name='hello_world'),
    path('login/', UserLoginView.as_view(), name="login"),
    path('signup/', UserSignUpView.as_view(), name='signup'),
    path('getalluser/', returnAllUserView.as_view(), name='all_users'),
    path('movies/',views.returnMoviesFromGenreView.as_view(),name='movies'),
]