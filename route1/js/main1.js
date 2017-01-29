(function () {
	var main1 = {};
	// 页面初始化
	main1.init = function(){
		/*改变页面的代码*/
		alert("main1");
	}
	
	if (!window.lingxe) {
		window.lingxe = {};
	}
	window.lingxe.main1 = main1;
 
})();