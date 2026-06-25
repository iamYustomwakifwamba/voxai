from django.contrib import admin
from .models import Conversation, Message, Generation


all_tables = [
    Conversation,
    Message,
    Generation
]

for table in all_tables:
    admin.site.register(table)
