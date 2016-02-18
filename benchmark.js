var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var startTime;
var endTime;
var r;
var db = {
	//title: '10000行测试',
	//description: '10000行测试描述',
	list: []
};
for (var a = 1; a < 101; a++)
	db.list.push({
		index: a,
		user: '<strong style="color:red">糖饼</strong>',
		site: 'http://www.planeart.cn',
		weibo: 'http://weibo.com/planeart',
		QQweibo: 'http://t.qq.com/tangbin'
	});

var bmw = require('./bmw');
startTime = new Date().getTime();
r = bmw.renderFile(__dirname + '/views_test/10000.bmw', db);
endTime = new Date().getTime();
//console.log(r);
console.log('首次执行时间bmwjs：' + (endTime - startTime) + 'ms');

var jade = require('jade');
startTime = new Date().getTime();
r = jade.renderFile(__dirname + '/views_test/10000.jade', db);
endTime = new Date().getTime();
//console.log(r);
console.log('首次执行时间jade：' + (endTime - startTime) + 'ms');

startTime = new Date().getTime();
var ejs = require('ejs').compile(`<ul>
	<% for (var a = 0; a < locals.list.length; a++) {
		var item = locals.list[a]; %>
	<li><%= item.index %>. 用户: <%= item.user %>/ 网站：<%= item.site %></li>
	<% } %>
</ul>`, {_with: false});
r = ejs(db);
endTime = new Date().getTime();
console.log(r);
console.log('首次执行时间ejs：' + (endTime - startTime) + 'ms');

var handlebars = require('handlebars').compile(`<ul>
	{{#each list}}
	<li>{{index}}. 用户: {{user}}/ 网站：{{site}}</li>
	{{/each}}
</ul>`);
startTime = new Date().getTime();
r = handlebars(db);
endTime = new Date().getTime();
//console.log(r);
console.log('首次执行时间handlebars：' + (endTime - startTime) + 'ms');

startTime = new Date().getTime();
require("dot").process({
	global: "_page.render"
	, destination: __dirname + "/dot_render/"
	, path: (__dirname + "/views_test")
});
var dot = require('./dot_render')
r = dot.a10000(db);
endTime = new Date().getTime();
//console.log(r);
console.log('首次执行时间doT：' + (endTime - startTime) + 'ms');


// add tests
suite
	.add('bmw.js', function () {
		db.list[0].index ++;
		r = bmw.renderFile(__dirname + '/views_test/index.bmw', db);
	})
	.add('jade', function () {
		db.list[0].index ++;
		jade.renderFile(__dirname + '/views_test/10000.jade', db);
	})
	.add('ejs', function () {
		db.list[0].index ++;
		r = ejs(db);
	})
	.add('handlebars', function () {
		db.list[0].index ++;
		r = handlebars(db);
	})
	.add('doT', function () {
		db.list[0].index ++;
		r = dot.a10000(db);
	})
// add listeners
	.on('cycle', function (event) {
		console.log(String(event.target));
	})
	.on('complete', function () {
		console.log('Fastest is ' + this.filter('fastest').map('name'));
	})
// run async
	.run({ 'async': true });