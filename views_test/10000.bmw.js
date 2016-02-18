var $BMW__this = this;
var $BMW__sb;
var $BMW__blocks = {};
var $BMW__forc = null;
$BMW__blocks.toString = function() { return $BMW__sb; };
$BMW__blocks.set__sb = function(sb) { $BMW__sb = sb; };
var $BMW__exp = function(a) { return a===0?a:(a||''); };
var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
if (typeof $BMW__importAs === 'undefined') $BMW__importAs = {};$BMW__sb = '<ul>\r\n	' + (function() {
	var $BMW__sb = '';
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	$BMW__forc = {};
	var $BMW__forarr;
	(function(){try{$BMW__forarr=list;if(!$BMW__forarr.forEach)$BMW__forarr=[];}catch(e1){$BMW__forarr=[];}}).call(null);
	$BMW__forarr.forEach(function(item,$BMW__forarr_index) {
		$BMW__forc.item = item;
		$BMW__sb = $BMW__sb + '<li>' + (function(){var ret;try{ret=item.index;}catch(e1){}return $BMW__exp(ret);}).call(null) + '. 用户: ' + (function(){var ret;try{ret=item.user;}catch(e1){}return $BMW__exp(ret);}).call(null) + '/ 网站：' + (function(){var ret;try{ret=item.site;}catch(e1){}return $BMW__exp(ret);}).call(null) + '</li>';
	}); $BMW__forc = null;
	return $BMW__sb;
}).call(null) + '\r\n</ul>';
return $BMW__blocks;