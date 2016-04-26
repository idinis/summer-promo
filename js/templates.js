angular.module('templates-app', ['../dev/app/modules/category/category.tpl.html', '../dev/app/modules/faq/faq.tpl.html', '../dev/app/modules/navigationCart/navigationCart.tpl.html', '../dev/app/modules/product/product.tpl.html', '../dev/app/modules/products/products.tpl.html', '../dev/app/modules/shoppingCart/shoppingCart.tpl.html']);

angular.module("../dev/app/modules/category/category.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../dev/app/modules/category/category.tpl.html",
    "<div id=\"rituals\">\n" +
    "    <div class=\"ritual-description\" ng-bind-html=\"::categoryVm.category.description\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"products\">\n" +
    "    <article id=\"product-display-{{::product.sku}}\" class=\"product product-1 product-category-{{::product.categoryId}}\" ng-repeat=\"product in categoryVm.products\">\n" +
    "        <div ng-if=\"::product.isInPresales\" ng-bind=\"$root.translations.common.newProduct\"></div>\n" +
    "        <a ui-sref=\"app.shop.category.product({productId:'{{::product.sku}}', categoryId:'{{::product.categoryId}}'})\">\n" +
    "            <img ng-src=\"{{::product.urlImage}}\" alt=\"Product name\" class=\"product-image\">\n" +
    "        </a>\n" +
    "    </article>\n" +
    "</div>");
}]);

angular.module("../dev/app/modules/faq/faq.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../dev/app/modules/faq/faq.tpl.html",
    "<h1>FAQ</h1>\n" +
    "<div ng-repeat=\"q in faqVm.questions\">\n" +
    "    <h3 ng-bind=\"q.question\"></h3>\n" +
    "    <span ng-bind=\"q.response\"></span>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../dev/app/modules/navigationCart/navigationCart.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../dev/app/modules/navigationCart/navigationCart.tpl.html",
    "<div id=\"cart-overview\">\n" +
    "    <!-- Products -->\n" +
    "    <div class=\"box product\" ng-repeat=\"product in navigationCartVm.products\">\n" +
    "\n" +
    "        <a ng-click=\"navigationCartVm.goToProduct(product)\" class=\"product-display\">\n" +
    "            <img ng-src=\"{{::product.urlImage}}\" alt=\"\">\n" +
    "        </a>\n" +
    "\n" +
    "        <div class=\"product-action\">\n" +
    "            <div class=\"quantity\">\n" +
    "                <button class=\"ctrl minus\" ng-class=\"{'disabled': product.quantity == 1}\" ng-click=\"navigationCartVm.cartSrv.decrementQuantityOfProduct(product)\">-</button>\n" +
    "                <span class=\"qty\" ng-bind=\"product.quantity\"></span>\n" +
    "                <button class=\"ctrl plus\" ng-click=\"navigationCartVm.cartSrv.incrementQuantityOfProduct(product)\">+</button>\n" +
    "            </div>\n" +
    "            <button class=\"add-to-cart\" ng-click=\"navigationCartVm.cartSrv.removeProduct(product)\" ng-bind=\"$root.translations.common.remove\"></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- PLACEHOLDERS -->\n" +
    "    <div class=\"box product placeholder\" ng-repeat=\"product in navigationCartVm.placeholders\">\n" +
    "    </div>\n" +
    "    <div class=\"box alert\" ng-if=\"navigationCartVm.products.length > 0 && navigationCartVm.products.length < 4\">\n" +
    "        <div ng-switch=\"navigationCartVm.products.length\">\n" +
    "            <div ng-switch-when=\"1\" ng-bind=\"$root.translations.common.cartInvitation1\"></div>\n" +
    "            <div ng-switch-when=\"2\" ng-bind=\"$root.translations.common.cartInvitation2\"></div>\n" +
    "            <div ng-switch-default dynamic=\"$root.translations.common.cartInvitation3\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../dev/app/modules/product/product.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../dev/app/modules/product/product.tpl.html",
    "<div id=\"products\" class=\"products-details\">\n" +
    "    <article id=\"product-display-{{::product.sku}}\" class=\"product product-idx-{{$index + 1}} product-{{::product.skuIndex + 1}} product-category-{{::product.categoryId}}\" ng-class=\"{selected: product.selected}\" ng-repeat=\"product in productVm.products | orderBy:['-selected', 'product.skuIndex']\">\n" +
    "\n" +
    "        <div ng-if=\"product.selected\" class=\"product-infos\">\n" +
    "            <h2 ng-bind=\"::product.name\"></h2>\n" +
    "            <div ng-if=\"::product.isInPresales\" ng-bind=\"$root.translations.common.newProduct\"></div>\n" +
    "            <div class=\"product-reduction\" ng-bind=\"::product.reduction\"></div>\n" +
    "            <div class=\"product-price\" ng-bind=\"::product.price | customCurrency\"></div>\n" +
    "            <div class=\"product-price\" ng-bind=\"::product.priceReduced | customCurrency\"></div>\n" +
    "            <div class=\"product-description\" ng-bind=\"::product.shortDescription\"></div>\n" +
    "            <div class=\"product-action\" ng-if=\"::!product.isOutOfStock\">\n" +
    "                <div class=\"quantity\">\n" +
    "                    <button class=\"ctrl minus\" ng-class=\"{'disabled': product.quantity == 1}\" ng-click=\"product.decrementQuantity()\">-</button>\n" +
    "                    <span class=\"qty\" ng-bind=\"product.quantity\"></span>\n" +
    "                    <button class=\"ctrl plus\" ng-click=\"product.incrementQuantity()\">+</button>\n" +
    "                </div>\n" +
    "                <button class=\"add-to-cart\" ng-click=\"productVm.cartSrv.addProduct(product)\" ng-bind=\"$root.translations.common.addToCart\"></button>\n" +
    "                <button ng-if=\"product.isInPresales\" ng-click=\"productVm.cartSrv.addAndCheckout(product)\" ng-bind=\"$root.translations.common.checkout\"></button>\n" +
    "            </div>\n" +
    "            <div class=\"product-links\">\n" +
    "                <button ng-click=\"productVm.displayLongDecription()\" ng-bind=\"$root.translations.common.moreInformations\"></button>\n" +
    "                <a ui-sref=\"app.shop.category({categoryId: '{{::product.categoryId}}'})\" ng-bind=\"$root.translations.common.ritual\"></a>\n" +
    "            </div>\n" +
    "            <div ng-class=\"{'hide': !productVm.showLongDecription}\">\n" +
    "                <div class=\"product-long-description\" ng-bind-html=\"product.longDescription\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <img ng-src=\"{{::product.urlImage}}\" alt=\"\" ng-if=\"product.selected\">\n" +
    "\n" +
    "        <a ng-click=\"productVm.goToProduct(product)\" class=\"product-display\" ng-if=\"!product.selected\">\n" +
    "            <!-- ui-sref=\"app.shop.category.product({productId:'{{::product.sku}}', categoryId:'{{::product.categoryId}}'})\" -->\n" +
    "            <!--            <div ng-if=\"::product.isInPresales\" ng-bind=\"$root.translations.common.newProduct\"></div>-->\n" +
    "            <span class=\"product-image\"><img ng-src=\"{{::product.urlImage}}\" alt=\"\"></span>\n" +
    "        </a>\n" +
    "\n" +
    "    </article>\n" +
    "</div>");
}]);

angular.module("../dev/app/modules/products/products.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../dev/app/modules/products/products.tpl.html",
    "<div id=\"products\" class=\"overview\" ng-class=\"{promo: product.selected}\">\n" +
    "    <article id=\"product-display-{{::product.sku}}\" class=\"product product-{{$index+1}} product-category-{{::product.categoryId}}\" ng-repeat=\"product in productsVm.products\">\n" +
    "        <a ng-click=\"productsVm.goToProduct(product)\" class=\"product-display\">\n" +
    "            <!-- ui-sref=\"app.shop.category.product({productId:'{{::product.sku}}', categoryId:'{{::product.categoryId}}'})\"  -->\n" +
    "            <!--            <div ng-if=\"::product.isInPresales\" ng-bind=\"$root.translations.common.newProduct\"></div>-->\n" +
    "            <span class=\"product-image\"><img ng-src=\"{{::product.urlImage}}\" alt=\"\"></span>\n" +
    "        </a>\n" +
    "        <div class=\"product-menu\">\n" +
    "            <a ng-click=\"productsVm.goToProduct(product)\" ng-bind=\"$root.translations.common.viewProduct\"></a>\n" +
    "            <a ui-sref=\"app.shop.category({categoryId: '{{::product.categoryId}}'})\" ng-bind=\"$root.translations.common.discoverRitual\"></a>\n" +
    "        </div>\n" +
    "    </article>\n" +
    "</div>");
}]);

angular.module("../dev/app/modules/shoppingCart/shoppingCart.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../dev/app/modules/shoppingCart/shoppingCart.tpl.html",
    "<!-- HEADER -->\n" +
    "<header id=\"main-header\">\n" +
    "    <button id=\"cart-toggle\" ng-click=\"shoppingCartVm.displayCart()\">\n" +
    "        <span ng-bind=\"$root.translations.common.basket\"></span> (<span class=\"num-product\" ng-bind=\"shoppingCartVm.totalQuantity\"></span>)\n" +
    "    </button>\n" +
    "</header>\n" +
    "\n" +
    "<!-- BODY -->\n" +
    "<div id=\"cart\" ng-class=\"{'hide': !shoppingCartVm.showCart}\">\n" +
    "    <div class=\"row\" ng-repeat=\"product in shoppingCartVm.products\">\n" +
    "        <a ui-sref=\"app.shop.category.product({productId:'{{::product.sku}}', categoryId:'{{::product.categoryId}}'})\">\n" +
    "            <img ng-src=\"{{::product.urlImage}}\" alt=\"Product name\" class=\"product-image\">\n" +
    "        </a>\n" +
    "        <div class=\"infos\">\n" +
    "            <div class=\"product-name\" ng-bind=\"::product.name\"></div>\n" +
    "            <div class=\"product-price\" ng-bind=\"::product.sku\"></div>\n" +
    "            <div class=\"product-price\" ng-bind=\"::product.price | customCurrency\"></div>\n" +
    "            <div class=\"product-price\" ng-bind=\"::product.priceReduced | customCurrency\"></div>\n" +
    "            <div class=\"product-reduction\" ng-bind=\"::product.reduction\"> </div>\n" +
    "            <div class=\"product-actions\">\n" +
    "                <button ng-click=\"shoppingCartVm.cartSrv.removeProduct(product)\" ng-bind=\"$root.translations.common.remove\"></button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"quantity\">\n" +
    "            <button ng-class=\"{'disabled': product.quantity == 1}\" ng-click=\"shoppingCartVm.cartSrv.decrementQuantityOfProduct(product)\">-</button>\n" +
    "            <span ng-bind=\"product.quantity\"></span>\n" +
    "            <button ng-click=\"shoppingCartVm.cartSrv.incrementQuantityOfProduct(product)\">+</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div>Total: <span ng-bind=\"shoppingCartVm.totalPrice | customCurrency\"></span></div>\n" +
    "    <button ng-class=\"{'disabled': !mainVm.canBuyPromoProducts}\" ng-click=\"shoppingCartVm.redirectToCheckout()\" ng-bind=\"$root.translations.common.checkout\"></button>\n" +
    "</div>");
}]);
