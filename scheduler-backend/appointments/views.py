from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework import serializers

from .models import Appointment
from .serializers import AppointmentSerializer

from datetime import timedelta

class AppointmentViewSet(viewsets.ViewSet):
    def list(self, request):
        appointments = Appointment.objects.all()
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = AppointmentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user_appointments = Appointment.objects.filter(user_id=serializer.validated_data['user_id'])
        date_format = '%Y-%m-%dT%H:%M:%SZ'
        request_start_datetime = serializer.validated_data['start_datetime']
        request_end_datetime = request_start_datetime + timedelta(serializer.validated_data['minutes'])

        for appointment in user_appointments.iterator():
            if not (appointment.end_datetime<=request_start_datetime or appointment.start_datetime>=request_end_datetime):
                raise serializers.ValidationError({"detail": "An appointment already exists during this time"})
        serializer.save() 
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def retrieve(self, request, pk=None):
        user_appointments = Appointment.objects.get(user_id=pk)
        serializer = AppointmentSerializer(user_appointments)
        return Response(serializer.data)