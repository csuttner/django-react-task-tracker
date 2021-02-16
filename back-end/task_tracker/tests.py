from django.test import TestCase
from .models import Task


class TaskModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Task.objects.create(title='first todo')
        Task.objects.create(description='a description here')
        Task.objects.create(day='Feb 5th')

    def test_title_content(self):
        task = Task.objects.get(id=1)
        expected_object_name = f'{task.title}'
        self.assertEquals(expected_object_name, 'first todo')

    def test_description_content(self):
        task = Task.objects.get(id=2)
        expected_object_name = f'{task.description}'
        self.assertEquals(expected_object_name, 'a description here')
    
    def test_day_content(self):
        task = Task.objects.get(id=3)
        expected_object_name = f'{task.day}'
        self.assertEquals(expected_object_name, 'Feb 5th')