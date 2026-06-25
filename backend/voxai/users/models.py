from django.db import models
from django.contrib.auth.models import BaseUserManager, UserManager, PermissionsMixin, AbstractBaseUser



class CustomUserManager(BaseUserManager):

    def _create_user(self, email, password, phonenumber=None, firstname=None, lastname=None, nation=None, **extra_fields):

        if not email:
            raise ValueError("Email must be set")
        
        email = self.normalize_email(email)

        user = self.model(
            email=email,
            phonenumber=phonenumber,
            firstname=firstname,
            lastname=lastname,
            nation=nation,
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_user(self, email, password, phonenumber=None, firstname=None, lastname=None, nation=None, **extra_fields):

        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        extra_fields.setdefault("role", "creator")

        if extra_fields.get("is_staff") == True:
            raise ValueError("creator can not be staff")
        
        if extra_fields.get("is_superuser") == True:
            raise ValueError("creator can not be superuser")
        
        return self._create_user(
            email=email,
            phonenumber=phonenumber,
            firstname=firstname,
            lastname=lastname,
            nation=nation,
            password=password,
            **extra_fields
        )
    
    def create_superuser(self, email, password, phonenumber=None, firstname=None, lastname=None, nation=None, **extra_fields):

        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("role", "super_admin")

        if extra_fields.get("is_staff") != True:
            raise ValueError("super admin must have staff access")
        
        if extra_fields.get("is_superuser") != True:
            raise ValueError("super admin must be a superuser")
        
        if extra_fields.get("role") != "super_admin":
            raise ValueError("super admin must be 'super_admin' role ")
        
        return self._create_user(
            email=email,
            phonenumber=phonenumber,
            firstname=firstname,
            lastname=lastname,
            nation=nation,
            password=password,
            **extra_fields
        )
    

class CustomUser(AbstractBaseUser, PermissionsMixin):

    PERMISION_ROLES = [

        ('creator', 'Creator'),
        ('super_admin', 'Super_admin'),
    ]

    email = models.EmailField(max_length=500, null=False, blank=False, unique=True)
    firstname = models.CharField(max_length=500, null=True, blank=True, unique=False)
    lastname = models.CharField(max_length=500, blank=True, null=True, unique=False)
    #password = models.CharField(max_length=50, null=False, blank=False, unique=False)
    phonenumber = models.CharField(max_length=20, null=True, blank=True, unique=True)
    nation = models.CharField(max_length=200, null=True, blank=True, unique=False)
    role = models.CharField(max_length=500, null=True, blank=True, unique=False, default='creator', choices=PERMISION_ROLES)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    #is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
    


        
