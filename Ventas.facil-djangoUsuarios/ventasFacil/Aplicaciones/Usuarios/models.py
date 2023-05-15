import random
import string
from django.db import models

#La siguiente funcion genera un numero aleatorio de 6 digitos
def numeroRandom():

    return ''.join(random.choices(string.digits, k=6))


# Create your models here.
class Usuarios(models.Model):
    codigo = models.CharField(max_length=6, primary_key=True, default=numeroRandom)
    nombre = models.CharField(max_length=30)
    identificacion = models.PositiveIntegerField(max_length=25)
    direccion = models.CharField(max_length=50)
    telefono = models.CharField(max_length=15)
    usuario = models.CharField(max_length=50)
    contrasena = models.CharField(max_length=25)
    correo = models.EmailField()
    fechaNacimiento = models.DateField()
    
    GENERO_CHOICES = (
        ('M', 'Masculino'),
        ('F', 'Femenino'),
        ('O', 'Otro')
    )
    genero = models.CharField(max_length=1, choices=GENERO_CHOICES)
    
    TIPO_USUARIO_CHOICES = (
        ('A', 'Administrador'),
        ('V', 'Vendedor')
    )
    tipoUsuario = models.CharField(max_length=1, choices=TIPO_USUARIO_CHOICES)

    def __str__(self):
        texto ="Nombre: {0} , Usuario: {2}"
        return texto.format(self.nombre, self.identificacion, self.usuario)

    def save(self, *args, **kwargs):
        if not self.codigo:
            self.codigo = numeroRandom()
        super().save(*args, **kwargs)