
var str = `
<div @if="a==1 && b = 2" @for="a 1,10" width="200" border="1" cellspacing="1" cellpadding="1">
  <div @for="item in items">
    1
    <div>6</div>
  </div>
  <div>2
    <div>3
      <div>4</div>
    </div>
    <div>5</div>
  </div>
</div>
<div @else=""/>
`;

  var htmlSyntax = function (content, num) {
    /*
    现实前：
    <table @if="a==1 && b = 2" width="200" border="1" cellspacing="1" cellpadding="1">
      <tr @for="item in items">
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    </table>
    
    现实后：
    {if a==1 && b = 2}
    <table width="200" border="1" cellspacing="1" cellpadding="1">
      {for item in items}
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
      {/for}
    </table>
    {/if}
    */
    while (num-- > 0) {
      var arr = content.split(/<(\w+)\s+@(if|for|else)\s*="([^"]*)"/gi);
      if (arr.length === 1) break;

      for (var a = 1; a < arr.length; a += 4) {
        var tag = '<' + arr[a];
        var end = '</' + arr[a] + '>';
        var fc = 1;
        for (var b = a; fc > 0 && b < arr.length; b += 4) {
          if (b > a && arr[a].toLowerCase() === arr[b].toLowerCase()) fc++;
          var bpos = 0;
          while (true) {
            var fa = arr[b + 3].indexOf(tag, bpos);
            var fb = arr[b + 3].indexOf(end, bpos);
            if (b === a) {
              var z = arr[b + 3].indexOf("/>");
              if ((fb === -1 || z < fb) && z !== -1) {
                var y = arr[b + 3].substr(0, z + 2);
                if (!/<\/?\w+[^>]*>/.test(y))
                  fb = z - end.length + 2;
              }
            }
            if (fa === -1 && fb === -1) break;
            if (fa !== -1 && (fa < fb || fb == -1)) {
              fc++;
              bpos = fa + tag.length;
              continue;
            }
            if (fb !== -1) fc--;
            if (fc <= 0) {
              var a1 = arr[a + 1];
              var end3 = '{/' + a1 + '}';
              if (a1.toLowerCase() === 'else') {
                if (String(arr[a - 4 + 3]).replace(/\s+/g, '').slice(-5).toLowerCase() === '{/if}') {
                  var idx = arr[a - 4 + 3].lastIndexOf('{/if}');
                  arr[a - 4 + 3] = arr[a - 4 + 3].substr(0, idx) + arr[a - 4 + 3].substr(idx + 5);
                  //如果 @else="有条件内容"，则变换成 elseif 条件内容
                  if (arr[a + 2].replace(/\s+/g, '').length > 0) a1 = 'elseif';
                  end3 = '{/if}';
                } else {
                  arr[a] = '指令 @' + arr[a + 1] + '="' + arr[a + 2] + '" 没紧接着 if/else 指令之后，无效. <' + arr[a];
                  arr[a + 1] = arr[a + 2] = '';
                }
              }
              if (arr[a + 1].length > 0) {
                if (arr[a + 2].replace(/\s+/g, '').length > 0 || a1.toLowerCase() === 'else') {
                  arr[b + 3] = arr[b + 3].substr(0, fb + end.length) + end3 + arr[b + 3].substr(fb + end.length);
                  arr[a] = '{' + a1 + ' ' + arr[a + 2] + '}<' + arr[a];
                  arr[a + 1] = arr[a + 2] = '';
                } else {
                  arr[a] = '<' + arr[a];
                  arr[a + 1] = arr[a + 2] = '';
                }
              }
              break;
            }
            bpos = fb + end.length;
          }
        }
        if (fc > 0) {
          arr[a] = '不严谨的html格式，请检查 ' + arr[a] + ' 的结束标签, @' + arr[a + 1] + '="' + arr[a + 2] + '" 指令无效. <' + arr[a];
          arr[a + 1] = arr[a + 2] = '';
        }
      }
      content = arr.join('');
    }

    return content;
  };

console.log(htmlSyntax(str, 3));