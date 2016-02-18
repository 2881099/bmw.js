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
};$BMW__sb = '<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\r\n<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\r\n<title>' + (function(){var ret;try{ret=title;}catch(e1){}return $BMW__exp(ret);}).call(null) + '</title>\r\n\r\n</head>\r\n<body>\r\n\r\n';
for (var a = 0; a < 100; a++) print(a);
; $BMW__sb = $BMW__sb + '\r\n\r\n';
$BMW__sb = $BMW__sb + (function() {
	var $BMW__sb;
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	var $BMW__block = $BMW__blocks["body"] = [$BMW__blocks.toString().length, 0];
	$BMW__sb = '\r\n\r\n这是body\r\n';$BMW__block[1] = $BMW__sb.length; return $BMW__sb;}).call(null);
$BMW__sb = $BMW__sb + '\r\n\r\n' + $BMW__include.call(null, "../header.html", null) + '\r\n\r\n';
for (var a = 0; a < 100; a++) print(a);
; $BMW__sb = $BMW__sb + '\r\n\r\n';
$BMW__sb = $BMW__sb + (function() {
	var $BMW__sb;
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	var $BMW__block = $BMW__blocks["body2"] = [$BMW__blocks.toString().length, 0];
	$BMW__sb = '\r\n\r\n这是body2\r\n';$BMW__block[1] = $BMW__sb.length; return $BMW__sb;}).call(null);
$BMW__sb = $BMW__sb + '\r\n\r\n' + $BMW__include.call(null, "footer.html", null) + '\r\n\r\n\r\n';
$BMW__sb = $BMW__sb + (function() {
	var $BMW__sb;
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	var $BMW__block = $BMW__blocks["body3"] = [$BMW__blocks.toString().length, 0];
	$BMW__sb = '\r\n\r\n这是body3\r\n';$BMW__block[1] = $BMW__sb.length; return $BMW__sb;}).call(null);
$BMW__sb = $BMW__sb + '\r\n\r\n\r\n' + (function() {
	var $BMW__sb = '';
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	$BMW__forc = {};
	var $BMW__forstart = forstart;
	var tmp_forend = forend;
	for (var $BMW__for_index = $BMW__forstart; $BMW__for_index < tmp_forend; $BMW__for_index++) {		var a = $BMW__forc.a = $BMW__for_index;
		$BMW__sb = $BMW__sb + '\r\n' + (function(){var ret;try{ret=a;}catch(e1){}return $BMW__exp(ret);}).call(null) + '\r\n' + $BMW__include.call(null, "../header.html", null) + '\r\n  ' + (function() {
	var $BMW__sb = '';
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	var $BMW__forstart = 100;
	var tmp_forend = 104;
	for (var $BMW__for_index = $BMW__forstart; $BMW__for_index < tmp_forend; $BMW__for_index++) {		var b = $BMW__forc.b = $BMW__for_index;
		$BMW__sb = $BMW__sb + '\r\n    ' + (function(){var ret;try{ret=b;}catch(e1){}return $BMW__exp(ret);}).call(null) + '\r\n  ';}; return $BMW__sb;}).call(null) + 
'\r\n';}; $BMW__forc = null; return $BMW__sb;}).call(null) + 
'\r\n\r\n' + (function() {
	var $BMW__sb = '';
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	if (title === 'aaa' || (title === 'abc')) { $BMW__sb = '\r\naaaaaa\r\n  ' + (function() {
	var $BMW__sb = '';
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	if (false) { $BMW__sb = '\r\n    cccc\r\n  ';} return $BMW__sb;}).call(null) + 
'\r\n';
	} else { $BMW__sb = '\r\nbbbbbb\r\n';} return $BMW__sb;}).call(null) + 
'\r\n\r\n</body>\r\n</html>';
return $BMW__blocks;