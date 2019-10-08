from rest_framework import serializers

from restaurant.models import Foods, Restaurants
from restaurant.models2 import Trend



class FoodsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Foods
        fields = ('foodid', 'foodname', 'fooddesc','vegetarian','foodtype','restid')

class RestaurantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurants
        fields = ('restid', 'restname', 'countrycode','cityid','zip','content','img')

class TrendingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trend
        fields = ('restname', 'rating')
