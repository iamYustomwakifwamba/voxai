from django.urls import path
from . import users_views


urlpatterns = [
    path('', users_views.demo_run, name="users")
]