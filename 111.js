var $BMW__this = this;
var $BMW__sb;
var $BMW__blocks = {};
var $BMW__forc = null;
$BMW__blocks.toString = function() { return $BMW__sb; };
var print = function(a) {	$BMW__sb = $BMW__sb + (a===0?a:(a||''));
};
if (typeof $BMW__importAs === 'undefined') $BMW__importAs = {};$BMW__sb = '\n  ' + (function() {
	var $BMW__sb = '';
	var print = function(a) { $BMW__sb = $BMW__sb + (a===0?a:(a||'')); };
	$BMW__forc = {};
	var $BMW__forstart = 1;
	var tmp_forend = 101;
	for (var $BMW__for_index = $BMW__forstart; $BMW__for_index < tmp_forend; $BMW__for_index++) {		var i = $BMW__forc.i = $BMW__for_index;
		$BMW__sb = $BMW__sb + '<div>\n    ' + (function() {
	var $BMW__sb;
	var print = function(a) { $BMW__sb = $BMW__sb + (a===0?a:(a||'')); };
	if (i === 50) { $BMW__sb = '' + (function() {
	var $BMW__sb = '';
	var print = function(a) { $BMW__sb = $BMW__sb + (a===0?a:(a||'')); };
	var $BMW__forstart = 1;
	var tmp_forend = 3;
	for (var $BMW__for_index = $BMW__forstart; $BMW__for_index < tmp_forend; $BMW__for_index++) {		var a = $BMW__forc.a = $BMW__for_index;
		$BMW__sb = $BMW__sb + '<p>条件成立' + (a) + '</p>';}; return $BMW__sb;}).call(null) + '\n    ';
	} else if ( i > 60) { $BMW__sb = '<p>一样条件 ' + (i) + '</p>\n    ';
	} else { $BMW__sb = '<p>默认输出 ' + (i) + '</p>';} return $BMW__sb;).call(null) + '\n  </div>';}; $BMW__forc = null; return $BMW__sb;}).call(null) + '\n';
return $BMW__blocks;