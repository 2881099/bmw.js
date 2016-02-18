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
var mym = {};
(function() { var r = $BMW__include.call(null, "m.html", mym); if (typeof r === 'string') $BMW__sb = $BMW__sb + r; }).call(null);
$BMW__sb = $BMW__sb + '\r\n\r\n\r\n\r\n\r\n';
$BMW__sb = $BMW__sb + (function() {
	var $BMW__sb;
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	var $BMW__block = $BMW__blocks["body"] = [$BMW__blocks.toString().length, 0];
	$BMW__sb = '\r\n\r\n这是index.html两层模板的body\r\n\r\n\r\n' + (function() {
	var $BMW__sb = '';
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	if (1 == '1') { $BMW__sb = ' 111';} return $BMW__sb;}).call(null) + 
'\r\n\r\n\r\n' + (function(){var ret;try{ret=mym.aa(99999999998,1);}catch(e1){}return $BMW__exp(ret);}).call(null) + '\r\n这是index.html两层模板的body\r\n\r\n';$BMW__block[1] = $BMW__sb.length; return $BMW__sb;}).call(null);
$BMW__sb = $BMW__sb + '\r\n';
return (function() {
	var r = $BMW__lib.include($BMW__lib.path.join($BMW__dirname, "l2.html"), $BMW__this);
	if (typeof r === 'string') return r;
	var rstr = r.toString();
	var rstr_changed = false;
	for (var a in $BMW__blocks)
		if ($BMW__blocks[a].length === 2 && typeof $BMW__blocks[a][0] === 'number' && typeof $BMW__blocks[a][1] === 'number') {
			var sb2 = $BMW__sb.substr($BMW__blocks[a][0], $BMW__blocks[a][1]);
			if (r[a] && r[a].length === 2 && typeof r[a][0] === 'number' && typeof r[a][1] === 'number') {
				for (var b in r)
					if (r[b].length === 2 && typeof r[a][0] === 'number' && r[b][0] > r[a][0])
						r[b][0] = r[b][0] - r[a][1] + sb2.length;
				rstr = rstr.substr(0, r[a][0]) + sb2 + rstr.substr(r[a][0] + r[a][1]);
				r[a][1] = sb2.length;
				rstr_changed = true;
			}
		}
	if (rstr_changed) r.set__sb(rstr);
	return r;
}).call(null);