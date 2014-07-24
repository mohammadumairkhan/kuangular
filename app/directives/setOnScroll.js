'use strict';

angular.module('kuangular').directive('kuScroll', function(){
    return function (scope, elem, attrs){
        var updateVar = attrs.setOnScrollComplete;
        var checkScrollHeight = function(childElement){
            var elem = childElement["currentTarget"];
            if((elem.scrollTop + elem.offsetHeight) >= elem.scrollHeight)
            {
                scope.$apply(function(){
                    scope[updateVar] = true;
                })
            }
        };
        angular.element(elem).bind("scroll", checkScrollHeight);       
    }
});
