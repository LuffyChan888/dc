(function () {
	var _p = _p || [];
	_p.push(['_setAccount', 'your_project_name']);
	var _x = {};
        _x.st = new Date().getTime();
        _x.getParams = function(e){
    	var params = {};
    	params.st=_x.st;
		if(document) {
			params.domain = document.domain || '';  
			var tmp = (document.URL || '').split('?');
			params.url=tmp[0]
			params.uparam= tmp.length>1? tmp[1]:'';
			params.title = document.title || ''; 
			params.referrer = document.referrer || ''; 
		}   
		if(window && window.screen) {
			params.sh = window.screen.height || 0;
			params.sw = window.screen.width || 0;
			params.cd = window.screen.colorDepth || 0;
		}   
		if(navigator) {
			params.lang = navigator.language || ''; 
		}
		if(e){
			params.event = e.type;
			if(e.type ==='unload'){
				params.timespent = new Date().getTime() - _x.st;
				_x.st=0; 
			}else{
				params.timespent='';
			}
		}
		if(_p) {
			for(var i in _p) {
				switch(_p[i][0]) {
					case '_setAccount':
						params.account = _p[i][1];
						break;
					default:
						break;
				}   
			}   
		}  
		var args = ''; 
		for(var i in params) {
			if(args != '') {
				args += '&';
			}   
			args += i + '=' + encodeURIComponent(params[i]);
		}
		return args;
    }

    window.addEventListener('load',function(e){
		var args = _x.getParams(e);
		var img = new Image(1, 1); 
		img.src = 'http://server:port/1.gif?' + args;
	})

	window.addEventListener('unload',function(e){
		var args = _x.getParams(e);
		var img = new Image(1, 1); 
		img.src = 'http://server:port/1.gif?' + args;
	})

})();

