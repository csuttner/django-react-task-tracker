from rest_framework import generics

from .models import Task
from .serializers import TodoSerializer


class ListTask(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TodoSerializer


class DetailTask(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TodoSerializer