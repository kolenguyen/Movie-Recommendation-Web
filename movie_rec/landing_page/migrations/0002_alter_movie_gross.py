# Generated by Django 5.0.3 on 2024-04-18 04:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("landing_page", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="movie",
            name="gross",
            field=models.IntegerField(null=True),
        ),
    ]