from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListUsers.as_view()),
    path('<int:pk>/', views.DetailUser.as_view()),
    #path('', views.index, name='index'),
    path('about/', views.about, name='about'),
]