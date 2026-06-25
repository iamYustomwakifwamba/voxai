from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .ai_serializers import MessageSerializer
from .models import Message, Conversation
from .utils.prompt_cleaner import process_prompt, generate_title
from django.shortcuts import get_object_or_404


class MessageCreate(APIView):

    def post(self, request):

        
        content = request.data.get("content")

        
        conversation_id = request.data.get("conversation_id")

        if conversation_id:
            conversation = Conversation.objects.get(id=conversation_id)
        else:
            
            title = generate_title(content)

            conversation = Conversation.objects.create(
                # user=user,
                title=title
            )

        
        message = Message.objects.create(
            conversation=conversation,
            role="user",
            content=content
        )

        
        result = process_prompt(content)

        
        return Response({
            "conversation_id": conversation.id,
            "conversation_title": conversation.title,
            "message": {
                "id": message.id,
                "content": message.content
            },
            "ai_processing": result
        }, status=status.HTTP_201_CREATED)