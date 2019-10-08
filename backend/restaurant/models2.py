from django.db import models

class Trend(models.Model):
    restname = models.CharField(max_length=45, blank=True, null=False,primary_key=True)
    rating = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'trend'
