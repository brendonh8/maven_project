from django.db import models
from datetime import timedelta, datetime

class Appointment(models.Model):
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField(default=datetime.now())
    user_id = models.PositiveIntegerField()
    minutes = models.PositiveIntegerField(default=30)
    
    def save(self, *args, **kwargs):
        self.end_datetime = self.start_datetime + timedelta(minutes=self.minutes)
        super(Appointment, self).save(*args, **kwargs)
