from django.shortcuts import render, redirect
from django.contrib.auth import logout, login
from django.contrib import messages
from .forms import SignUpForm, UserForm
from .backend import authenticate
from django.views import View
from django.contrib.auth.decorators import login_required
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

class LoginView(View):

    def get(self, request, *args, **kwags):
        if request.user.is_authenticated:
            return redirect('/')
        return render(request, 'main/login.html')

    def post(self, request, *args, **kwargs):
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            messages.error(
                request, 'Failed to sign in! Please check your name and PIN', extra_tags='danger')
            return redirect('/login')


@login_required
def logout_view(request):
    logout(request)
    return redirect('/login')


def index(request):
    user = request.user
    context = {
        'user': user,
    }
    return render(request, 'main/home.html', context)


def about(request):
    return render(request, 'main/about.html')