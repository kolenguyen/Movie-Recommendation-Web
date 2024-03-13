from django.urls import path
from . import views
from .views import UserLoginView, UserSignUpView

urlpatterns = [
    path('test/', views.hello_world, name='hello_world'),
    path('login/', UserLoginView.as_view(), name="login"),
    path('signup/', UserSignUpView.as_view(), name='signup')
]