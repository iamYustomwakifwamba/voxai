from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser
# from ai_engine.models import Conversation, Message, Generation


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):

    model = CustomUser

    list_display = ('id', 'email', 'phonenumber', 'firstname', 'lastname', 'role', 'is_staff', 'is_active')
    search_fields = ('email', 'firstname', 'lastname')
    ordering = ('id',)

    list_filter = ('is_active', 'is_staff')

    fieldsets = (
        ("Basic Info", {
            "fields": ("email", "password", "firstname", "lastname", "phonenumber")
        }),
        ("Permissions", {
            "fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")
        }),
        ("Dates", {
            "fields": ("last_login",)
        }),
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "firstname", "lastname", "phonenumber", "password1", "password2"),
        }),
    )

all_models = [
    # Conversation,
    # Message,
    # Generation
]

for table in all_models:
    admin.site.register(table)