from django.shortcuts import render, redirect
from django.contrib.auth import logout, login
from django.contrib import messages
from .forms import SignUpForm, ProfileForm, UserForm
# Create your views here.

def index(request):
    return render(request, 'main/home.html')


def about(request):
    return render(request, 'main/about.html')