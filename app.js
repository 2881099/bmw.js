
/*
(function () {
  return;
  var jade = require('jade');
  var db = {
    title: 'abc',
    forstart: 3,
    forend: 10
  };
  var startTime = new Date().getTime();
  var r = jade.renderFile(__dirname + '/views_jade/inc/layout.jade', db);
  var endTime = new Date().getTime();
  console.log(r);
  console.log('首次执行时间：' + (endTime - startTime) + 'ms');

  for (var a = 0; a < 100; a++) {
    var startTime2 = new Date().getTime();
    var r = jade.renderFile(__dirname + '/views_jade/inc/layout.jade', db);
    //console.log(r);
    endTime = new Date().getTime();
    console.log('第' + a + '次执行时间：' + (endTime - startTime2) + 'ms');
  }
  endTime = new Date().getTime();
  console.log('总共完成时间：' + (endTime - startTime) + 'ms');
})();
*/

(function () {
	
	var bmw = require('./bmw');
	var db = {
		title: 'abc',
		forstart: 3,
		forend: 10
	};
	var startTime = new Date().getTime();
	var r = bmw.renderFile(__dirname + '/views/index.html', db);
	var endTime = new Date().getTime();
	console.log(r);
	console.log('首次执行时间：' + (endTime - startTime) + 'ms');

	for (var a = 0; a < 100; a++) {
		var startTime2 = new Date().getTime();
		var r = bmw.renderFile(__dirname + '/views/index.html', db);
		//console.log(r);
		endTime = new Date().getTime();
		console.log('第' + a + '次执行时间：' + (endTime - startTime2) + 'ms');
	}
	endTime = new Date().getTime();
	console.log('总共完成时间：' + (endTime - startTime) + 'ms');
})();


(function () {
	return;
	var list = []
	for (var a = 1; a < 101; a++)
		list.push({
			index: a,
			user: '<strong style="color:red">糖饼</strong>',
			site: 'http://www.planeart.cn',
			weibo: 'http://weibo.com/planeart',
			QQweibo: 'http://t.qq.com/tangbin'
		});

	var startTime = new Date().getTime();
	for (var a = 0; a < 10000; a++) {

		var $BMW__sb = [];
		var $BMW__blocks = {};
		$BMW__blocks.__sb = $BMW__sb; $BMW__blocks.toString = function () { return this.__sb.toString(); };
		var $BMW__out = function (a) { $BMW__sb.push(a === 0 ? a : (a || '')); };

		(function () {
			var $BMW__forarr = [];
			(function () { try { $BMW__forarr = list; if (!$BMW__forarr.forEach) $BMW__forarr = []; } catch (e1) { } }).call(null);
			$BMW__forarr.forEach(function (item, $BMW__forarr_index) {
				$BMW__sb.push('\r\n\r\n		<li>');
				(function () { try { $BMW__out(item.index); } catch (e1) { } }).call(null);
				$BMW__sb.push('. 用户: ');
				(function () { try { $BMW__out(item.user); } catch (e1) { } }).call(null);
				$BMW__sb.push('/ 网站：');
				(function () { try { $BMW__out(item.site); } catch (e1) { } }).call(null);
				$BMW__sb.push('</li>\r\n\r\n    ');
			});

		}).call(null); $BMW__sb.push('\r\n	</ul>');
		$BMW__sb.join('')
	}
	var endTime = new Date().getTime();
	console.log('首次执行时间：' + (endTime - startTime) + 'ms');
})();


(function () {
	return
	var bmw = require('./bmw');
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

	var startTime = new Date().getTime();
	var r = bmw.renderFile(__dirname + '/views/10000.html', db);
	var endTime = new Date().getTime();
	console.log(r);
	//console.log('首次执行时间：' + (endTime - startTime) + 'ms');

	var sss1 = new Date().getTime();
	for (var a = 0; a < 10000; a++) {
		var startTime2 = new Date().getTime();
		r = bmw.renderFile(__dirname + '/views/10000.html', db);
		//console.log(r);
		endTime = new Date().getTime();
		//console.log('第' + a + '次执行时间：' + (endTime - startTime2) + 'ms');
	}
	endTime = new Date().getTime();
	console.log('总共完成时间：' + (endTime - sss1) + 'ms');
})();