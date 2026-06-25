from django.urls import path
from . import engine_api_views

urlpatterns = [
    path('chat/', engine_api_views.MessageCreate.as_view(), name="chat")
]