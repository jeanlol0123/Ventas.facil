from django.shortcuts import render
from .models import Usuarios

# Create your views here.
def home(request):
    listadoUsuarios = Usuarios.objects.all()
    return render(request, "index.html", {"usuarios": listadoUsuarios})