# Generated by Django 5.0.6 on 2024-05-19 04:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appsistem', '0007_alter_seccion_seccion_estudiante'),
    ]

    operations = [
        migrations.AddField(
            model_name='proyecto',
            name='cedula',
            field=models.TextField(null=True),
        ),
    ]
