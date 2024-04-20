from django.db import models

# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=50, null=True)

    def __str__(self):
        return self.name

class Movie(models.Model):
    poster = models.CharField(max_length=100, null=True)
    title = models.CharField(max_length=100)
    year = models.IntegerField(null=True)
    certificate = models.CharField(max_length=50, null=True)
    runtime = models.CharField(max_length=50, null=True)
    genre = models.ManyToManyField(Genre)
    imdb = models.FloatField(null=True)
    overview = models.TextField(null=True)
    meta_score = models.IntegerField(null=True)
    director = models.CharField(max_length=100, null=True)
    actor1 = models.CharField(max_length=100, null=True)
    actor2  = models.CharField(max_length=100, null=True)
    actor3 = models.CharField(max_length=100, null=True)
    actor4 = models.CharField(max_length=100, null=True)
    votes = models.IntegerField(null=True)
    gross = models.IntegerField(null=True)
    
    def __str__(self):
        return self.title
