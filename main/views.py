from django.shortcuts import render, redirect
from django.contrib.auth import logout, login
from django.contrib import messages
from .forms import SignUpForm, UserForm
from .backend import authenticate
# Create your views here.

def signup(request):
    if request.method == 'POST':
        signup_form = SignUpForm(request.POST)
        if signup_form.is_valid():
            signup_form.save()
            username = signup_form.cleaned_data.get('username')
            raw_password = signup_form.cleaned_data.get('password1')
            user = authenticate(request, username=username,
                                password=raw_password)
            login(request, user)
            return redirect('/')
    else:
        signup_form = SignUpForm()
    return render(request, 'main/signup.html', {
        'signup_form': signup_form,
    })

def index(request):
    return render(request, 'main/home.html')


def about(request):
    return render(request, 'main/about.html')