from django.db import models


class Conversation(models.Model):

    user = models.ForeignKey("users.CustomUser", on_delete=models.CASCADE, blank=True, null=True)
    title = models.CharField(max_length=200, default="New chat")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Message(models.Model):

    ROLE_CHOICES = [
        
        ('user', 'User'),
        ('assistant', 'Assistant')
    ]

    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE, null=True, blank=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    content = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content


class Generation(models.Model):
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE, null=True, blank=True)

    raw_prompt = models.TextField()
    final_prompt = models.TextField()

    audio_url = models.URLField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.raw_prompt