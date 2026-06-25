from rest_framework import serializers
from .models import Conversation, Message, Generation


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ["conversation", "role", "content"]