from rest_framework import serializers
from .models import Task


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'day',
            'description',
        )
        model = Task