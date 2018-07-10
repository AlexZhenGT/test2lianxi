/*
* @Author: Administrator
* @Date:   2018-07-10 18:56:39
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-10 19:19:00
*/
var app = angular.module("app",[]);
app.run(["$rootScope",function($rootScope){
	$rootScope.collapsed = false;
	$rootScope.toggle = function(){
		$rootScope.collapsed = !$rootScope.collapsed;
	    var dds = document.querySelectorAll("dd");
		if($rootScope){
			for(var i = 0; i < dds.length; i++){
				dds[i].style.transitionDuration = (i + 1) * 0.15 + 's';
			    dds[i].style.transitionProperty = 'all';
			    dds[i].style.transitionDelay = '0.2s';
			    dds[i].style.transitionTimingFunction = 'ease-out';
			    dds[i].style.transform = 'translate(0)';
			};
		}else{
				dds[i].style.transitionDuration = (dds.length - i + 1) * 0.05 + 's';
			    dds[i].style.transitionProperty = 'all';
			    dds[i].style.transitionDelay = '';
			    dds[i].style.transitionTimingFunction = 'ease-out';
			    dds[i].style.transform = 'translate(-100%)';
			};
	};
}]);