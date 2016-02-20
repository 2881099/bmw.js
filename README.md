## 百次循环 benchmark 测试结果
```html
<ul>
	<li @for="item in list">{#item.index}. 用户: {#item.user}/ 网站：{#item.site}</li>
</ul>
```
```jade
首次执行时间bmwjs：6ms
首次执行时间jade：55ms
首次执行时间ejs：4ms
首次执行时间handlebars：17ms
bmw.js x 57,008 ops/sec ±2.86% (70 runs sampled)
jade x 264 ops/sec ±5.03% (65 runs sampled)
ejs x 736 ops/sec ±3.10% (70 runs sampled)
handlebars x 4,259 ops/sec ±3.24% (77 runs sampled)
Fastest is bmw.js
```

## 语法使用
```html
<html>
<head>
<title>{#title}</title>
</head>
<body>

<!--可嵌套使用，同一标签最多支持3个指令-->
{include ../header.html}
<div @for="i 1, 101">
  <p @if="i === 50" @for="item,index in data">aaa</p>
  <p @else="i % 3 === 0">bbb {#i}</p>
  <p @else="">ccc {#i}</p>
</div>

<!--定义模块，可以将公共模块定义到一个文件中-->
{module module_name1 parms1, 2, 3...}
{/module}
{module module_name2 parms1, 2, 3...}
{/module}

<!--使用模块-->
{import ../module.html as myname}
{#myname.module_name(parms1, 2, 3...)}

<!--继承-->
{extends ../inc/layout.html}
{block body}{/block}

<!--嵌入代码块-->
{%
for (var a = 0; a < 100; a++)
  print(a);
%}

<!--条件分支-->
{if i === 50}
{elseif i > 60}
{else}
{/if}

<!--三种循环-->
{for i 1,101}                可自定义名 {for index2 表达式1 in 表达式2}

{for item,index in items}    可选参数称 index
                             可自定义名 {for item2, index99 in 数组表达式}

{for key,item,index on json} 可选参数 item, index，
                             可自定义名 {for key2, item2, index99 in 对象表达式}
{/for}

<!--不被解析-->
{miss}
此块内容不被bmw.js解析
{/miss}

</body>
</html>
```

# 前端使用
```html
<script id="tplcode1" type="text/bmwjs">
	<div @for="i 1, 101">
	<p @if="i === 50" @for="item,index in data">aaa</p>
	<p @else="i % 3 === 0">bbb {#i}</p>
	<p @else="">ccc {#i}</p>
	</div>
</script>
<script type="text/javascript" src="/bmw.js"></script>
<script type="text/javascript">
var tpl = $('#tplcode1').before('<div id="tplcode1"></div>').remove().html(); //添加输出div标签，并删除script标签
$('#tplcode1').html(bmwjs.render(tpl, {}));
</script>
```


# nodejs 中接入到 express 使用　
```javascript
var bmw = require('bmw');

app.use(express.static(path.join(__dirname, 'public')));
// view engine setup
app.engine('html', function (filePath, options, callback) { // 定义模板引擎
  callback(null, lib.bmw.renderFile(filePath, options));
});

app.set('views', path.join(__dirname, 'views_bmw'));
app.set('view engine', 'html');
```
