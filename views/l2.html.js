var $BMW__this = this;
var $BMW__sb;
var $BMW__blocks = {};
var $BMW__forc = null;
$BMW__blocks.toString = function() { return $BMW__sb; };
$BMW__blocks.set__sb = function(sb) { $BMW__sb = sb; };
var $BMW__exp = function(a) { return a===0?a:(a||''); };
var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
if (typeof $BMW__importAs === 'undefined') $BMW__importAs = {};$BMW__sb = '\r\n\r\n';
$BMW__sb = $BMW__sb + (function() {
	var $BMW__sb;
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	var $BMW__block = $BMW__blocks["body"] = [$BMW__blocks.toString().length, 0];
	$BMW__sb = '\r\n\r\n这是index.html的body\r\n';$BMW__block[1] = $BMW__sb.length; return $BMW__sb;}).call(null);
$BMW__sb = $BMW__sb + '\r\n\r\n';
$BMW__sb = $BMW__sb + (function() {
	var $BMW__sb;
	var print = function(a) { $BMW__sb = $BMW__sb + $BMW__exp(a); };
	var $BMW__block = $BMW__blocks["body2"] = [$BMW__blocks.toString().length, 0];
	$BMW__sb = '\r\n\r\n这是index.html的body222\r\n';$BMW__block[1] = $BMW__sb.length; return $BMW__sb;}).call(null);return (function() {
	var r = $BMW__lib.include($BMW__lib.path.join($BMW__dirname, "inc/layout.html"), $BMW__this);
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