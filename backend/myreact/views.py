


from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    # CreateAPIView,
    # DestroyAPIView,
    # UpdateAPIView
)
from restaurant.models import Restaurants
from .serializers import RestaurantsSerializer
from restaurant.models import Foods
from .serializers import FoodsSerializer



class FoodsListView(ListAPIView):
    queryset = Foods.objects.all()
    serializer_class = FoodsSerializer
    permission_classes = (permissions.AllowAny,)

class FoodsDetailView(RetrieveAPIView):
    queryset = Foods.objects.all()
    serializer_class = FoodsSerializer
    permission_classes = (permissions.AllowAny,)





class RestaurantsListView(ListAPIView):
    queryset = Restaurants.objects.all()
    serializer_class = RestaurantsSerializer
    permission_classes = (permissions.AllowAny,)

class RestaurantsDetailView(RetrieveAPIView):
    queryset = Restaurants.objects.all()
    serializer_class = RestaurantsSerializer
    permission_classes = (permissions.AllowAny,)
