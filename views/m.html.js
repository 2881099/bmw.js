var $BMW__this = this;
var $BMW__sb;
var $BMW__blocks = {};
var $BMW__forc = null;
$BMW__blocks.toString = function() { return $BMW__sb; };
$BMW__blocks.set__sb = function(sb) { $BMW__sb = sb; };
var $BMW__exp = function(a) { return a===0?a:(a||''); };
var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
if (typeof $BMW__importAs === 'undefined') $BMW__importAs = {};
var $BMW__include = function(file, $BMW__importAs) {
	var context_tmp = { };
	for (var a in $BMW__this) context_tmp[a] = $BMW__this[a];
	if (typeof $BMW__forc === 'object') for (var a in $BMW__forc) context_tmp[a] = $BMW__forc[a];
	if ($BMW__importAs) context_tmp.$BMW__importAs = $BMW__importAs;
	var view = $BMW__lib.path.join($BMW__dirname, file);
	return $BMW__lib.include(view, context_tmp);
};$BMW__sb = '\r\n\r\n';
$BMW__importAs.aa = function(a,b) {
	var $BMW__sb;
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	$BMW__sb = '\r\n这是什么?11' + (function(){var ret;try{ret=a+b;}catch(e1){}return $BMW__exp(ret);}).call(null) + '\r\n' + $BMW__include.call(null, "header.html", null) + 'qq\r\n'; return $BMW__sb;};
$BMW__sb = $BMW__sb + '\r\n\r\n\r\n';
$BMW__importAs.aa2 = function(a,b,c) {
	var $BMW__sb;
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	$BMW__sb = '\r\n这是什么?\r\n' + $BMW__include.call(null, "header.html", null) + '\r\n'; return $BMW__sb;};
$BMW__sb = $BMW__sb + '\r\n\r\n\r\n';
$BMW__importAs.aa3 = function(a,b,c,d) {
	var $BMW__sb;
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	$BMW__sb = '\r\n这是什么?\r\n' + $BMW__include.call(null, "header.html", null) + '\r\n'; return $BMW__sb;};return $BMW__blocks;