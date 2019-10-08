
from rest_framework import permissions
from rest_framework import viewsets
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from restaurant.models import Restaurants
from restaurant.models2 import Trend
from .serializers import RestaurantsSerializer
from .serializers import TrendingSerializer
# from restaurant.models import Foods
# from .serializers import FoodsSerializer



# class FoodsListView(ListAPIView):
#     queryset = Foods.objects.all()
#     serializer_class = FoodsSerializer
#     permission_classes = (permissions.AllowAny,)
#
# class FoodsDetailView(RetrieveAPIView):
#     queryset = Foods.objects.all()
#     serializer_class = FoodsSerializer
#     permission_classes = (permissions.AllowAny,)





class RestaurantsListView(ListAPIView):
    queryset = Restaurants.objects.all()
    # queryset = Restaurants.objects.filter(restname = "Azabu")
    serializer_class = RestaurantsSerializer
    permission_classes = (permissions.AllowAny,)



class RestaurantsDetailView(RetrieveAPIView):
    queryset = Restaurants.objects.all()
    # queryset = Restaurants.objects.filter(restname = "Azabu")
    serializer_class = RestaurantsSerializer
    permission_classes = (permissions.AllowAny,)

class RestaurantsCreateView(CreateAPIView):
    queryset = Restaurants.objects.all()
    serializer_class = RestaurantsSerializer
    permission_classes = (permissions.AllowAny,)

class RestaurantsUpdateView(UpdateAPIView):
    queryset = Restaurants.objects.all()
    serializer_class = RestaurantsSerializer
    permission_classes = (permissions.AllowAny,)

class RestaurantsDeleteView(DestroyAPIView):
    queryset = Restaurants.objects.all()
    serializer_class = RestaurantsSerializer
    permission_classes = (permissions.AllowAny,)

class TrendingListView(ListAPIView):
    queryset = Trend.objects.all()
    serializer_class = TrendingSerializer
    permission_classes = (permissions.AllowAny,)
