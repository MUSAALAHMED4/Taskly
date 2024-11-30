from django.db import models

# Create your models here.


class Task(models.Model):


    TASK_CATEGORY = [
        ('Personal', 'Personal'),
        ('Work', 'Work'),
        ('Others', 'Others'),
    ]
    
    PRIORITY = [
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'High'),
    ]

    STATUS = [
        ('Not Started', 'Not Started'),
        ('In Progress', 'In Progress'),
        ('Completed', 'Completed'),
    ]
    task_title = models.CharField(max_length=200)
    task_category = models.CharField(max_length=200 , choices=TASK_CATEGORY , default='Personal')
    task_category_name = models.CharField(max_length=200, blank=True, null=True)
    start_date = models.DateTimeField('start date')
    due_date = models.DateTimeField('due date')
    priority = models.CharField(max_length=200 , choices=PRIORITY , default='Low')
    status = models.CharField(max_length=200 , choices=STATUS , default='In Progress')
    description = models.TextField()


    def __str__(self):
        return self.task_title