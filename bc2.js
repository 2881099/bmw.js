var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var startTime;
var endTime;
var r;
var arr = [];
var db = { list: [] };

for (var a = 1; a < 101; a++)
	db.list.push({
		index: a,
		user: '<strong style="color:red">糖饼</strong>',
		site: 'http://www.planeart.cn',
		weibo: 'http://weibo.com/planeart',
		QQweibo: 'http://t.qq.com/tangbin'
	});

var getContextArg = function (context) {
		var argkeys = [];
		var argvalues = [];
		for (var a in context) argkeys.push(a);
		argkeys = argkeys.sort();
		for (var b = 0; b < argkeys.length; b++) argvalues.push(context[argkeys[b]]);
		var argkey = argkeys.sort().join(', ');
		return { argkeys: argkeys, argvalues: argvalues, argkey: argkey };
	};
	
// add tests
suite
	.add('test', function() {
		getContextArg(db);
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
	var $BMW__forarr = db.list;
	if(!$BMW__forarr.forEach)$BMW__forarr=[];
	$BMW__forarr.forEach(function(item,$BMW__forarr_index) {
		$BMW__forc.item = item;
		$BMW__sb = $BMW__sb + '<li>' + $BMW__exp(item.index) + '. 用户: ' + $BMW__exp(item.user) + '/ 网站：' + $BMW__exp(item.site) + '</li>';}); $BMW__forc = null; return $BMW__sb;}).call(null) + 
'\r\n</ul>';
return $BMW__blocks;
	})
	/*
	.add('a = "" + "" + "" ...', function () {
		var a = "<li>" +
		db.list[0]++ +
		". 用户: " +
		"<strong style='color:red'>糖饼</strong>" + "/ 网站：" +
		"http://www.planeart.cn" +
		"</li>";
	})
	.add('a += ""', function () {
		var a = "<li>";
		a += db.list[0]++;
		a += ". 用户: ";
		a += "<strong style='color:red'>糖饼</strong>";
		a += "/ 网站：";
		a += "http://www.planeart.cn";
		a += "</li>";
	})
	.add('"".concat("", "", "" ...)', function () {
		var a = "<li>".concat(db.list[0]++, ". 用户: ", "<strong style='color:red'>糖饼</strong>", "/ 网站：", "http://www.planeart.cn", "</li>");
	})
	.add('array.join', function () {
		var arr = [];
		arr.push("<li>");
		arr.push(db.list[a]++);
		arr.push(". 用户: ");
		arr.push('<strong style="color:red">糖饼</strong>');
		arr.push("/ 网站：");
		arr.push("http://www.planeart.cn");
		arr.push("</li>");
		arr.join('');
	})
	*/
// add listeners
	.on('cycle', function (event) {
		console.log(String(event.target));
	})
	.on('complete', function () {
		console.log('Fastest is ' + this.filter('fastest').map('name'));
	})
// run async
	.run({ 'async': true });