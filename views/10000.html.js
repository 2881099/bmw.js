var $BMW__this = this;
var $BMW__sb = '';
var $BMW__blocks = {};
var $BMW__forc = null;
$BMW__blocks.__sb = $BMW__sb;$BMW__blocks.toString = function() { return this.__sb; };
var $BMW__out = function(a) {	$BMW__sb = $BMW__sb + (a===0?a:(a||''));
};
var print = $BMW__out;
if (typeof $BMW__importAs === 'undefined') $BMW__importAs = {};$BMW__sb = $BMW__sb + '<ul>\r\n	';
(function() {
	$BMW__forc = {};
	var $BMW__forarr = [];
	(function(){try{ $BMW__forarr = list; if(!$BMW__forarr.forEach)$BMW__forarr=[]; }catch(e1){}}).call(null);
	$BMW__forarr.forEach(function(item,$BMW__forarr_index) {
		$BMW__forc.item = item;
		$BMW__sb = $BMW__sb + '<li>';
(function(){try{ $BMW__out(item.index); }catch(e1){}}).call(null);
$BMW__sb.push('. 用户: ';
(function(){try{ $BMW__out(item.user); }catch(e1){}}).call(null);
$BMW__sb.push('/ 网站：';
(function(){try{ $BMW__out(item.site); }catch(e1){}}).call(null);
$BMW__sb.push('</li>';}); $BMW__forc = null;}).call(null); $BMW__sb = $BMW__sb + '\r\n</ul>';
return $BMW__blocks;