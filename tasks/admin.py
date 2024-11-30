from django.contrib import admin
from .models import Task

admin.site.register(Task)

class TaskAdmin(admin.ModelAdmin):
    list_display = ('task_title', 'task_category', 'start_date', 'due_date', 'priority', 'status')
    search_fields = ('task_title', 'task_category', 'description')