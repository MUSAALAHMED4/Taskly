from rest_framework_simplejwt.views import TokenObtainPairView
from allauth.account.views import PasswordChangeView, PasswordSetView
from django.urls import reverse_lazy
from .serializers import MyTokenObtainPairSerializer, CreateUserSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User


class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = [AllowAny]
