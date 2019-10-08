
from django.urls import path,include
from django.contrib import admin

# from .views import (
#     FoodsListView,
#     FoodsDetailView,
#     RestaurantsListView,
#     RestaurantsDetailView
#     # ArticleCreateView,
#     # ArticleUpdateView,
#     # ArticleDeleteVie w
# )
from .views import (
    # FoodsListView,
    # FoodsDetailView,
    RestaurantsListView,
    RestaurantsDetailView,
    RestaurantsCreateView,
    RestaurantsUpdateView,
    RestaurantsDeleteView,
    TrendingListView
    # ArticleCreateView,
    # ArticleUpdateView,
    # ArticleDeleteView
)

urlpatterns = [
    # path('Foods', FoodsListView.as_view()),
    # path('', RestaurantsListView.as_view()),
    # path('Foods', FoodsListView.as_view()),
    path('Restaurants', RestaurantsListView.as_view()),
    path('Trending/', TrendingListView.as_view()),
    # path('login', LoginView.as_view()),
    path('Restaurants/create/', RestaurantsCreateView.as_view()),
    # path('creat  e/', ArticleCreateView.as_view()),
    # path('<pk>', FoodsDetailView.as_view()),
    path('Restaurants/<pk>', RestaurantsDetailView.as_view()),
    path('Restaurants/<pk>/update/', RestaurantsUpdateView.as_view()),
    path('Restaurants/<pk>/delete/', RestaurantsDeleteView.as_view()),
    # path('admin/', admin.site.urls),
    # path('create/', ArticleCreateView.as_view()),
    # path('<pk>', FoodsDetailView.as_view()),
    # path('<pk>/update/', ArticleUpdateView.as_view()),
    # path('<pk>/delete/', ArticleDeleteView.as_view())
]
