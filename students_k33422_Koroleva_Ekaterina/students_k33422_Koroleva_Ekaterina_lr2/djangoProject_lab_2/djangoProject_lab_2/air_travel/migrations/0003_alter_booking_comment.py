# Generated by Django 4.2.7 on 2024-01-10 18:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('air_travel', '0002_remove_comments_user_booking_comment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='comment',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='air_travel.comments'),
        ),
    ]
