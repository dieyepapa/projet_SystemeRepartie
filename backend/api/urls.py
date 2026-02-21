from rest_framework.routers import DefaultRouter
from .views import UtilisateurViewSet, ProduitViewSet

router = DefaultRouter()
router.register('utilisateurs', UtilisateurViewSet)
router.register('produits', ProduitViewSet)

urlpatterns = router.urls
