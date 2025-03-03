window.__EC_DOC_option_gl_series_scatterGL = {
  "name": {
    "desc": "<p>系列名称，用于 <a href=\"/echarts-website/zh/option.html#tooltip\" target=\"_blank\">tooltip</a> 的显示，<a href=\"/echarts-website/zh/option.html#legend\" target=\"_blank\">legend</a> 的图例筛选，在 <code class=\"codespan\">setOption</code> 更新数据和配置项时用于指定对应的系列。</p>\n"
  },
  "coordinateSystem": {
    "desc": "<p>使用的坐标系。</p>\n<p>同 <a href=\"http://echarts.baidu.com/option.html#series-scatter.coordinateSystem\" target=\"_blank\">scatter.coordinateSystem</a></p>\n"
  },
  "symbol": {
    "desc": "<p>散点的形状。默认为圆形。</p>\n<p>ECharts 提供的标记类型包括 \n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适（如果是 <code class=\"codespan\">symbol</code> 的话就是 <code class=\"codespan\">symbolSize</code>）的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n"
  },
  "symbolSize": {
    "desc": "<p>标记的大小，可以设置成诸如 <code class=\"codespan\">10</code> 这样单一的数字，也可以用数组分开表示宽和高，例如 <code class=\"codespan\">[20, 10]</code> 表示标记宽为<code class=\"codespan\">20</code>，高为<code class=\"codespan\">10</code>。</p>\n<p>如果需要每个数据的图形大小不一样，可以设置为如下格式的回调函数：</p>\n<pre><code class=\"lang-js\">(value: Array|number, params: Object) =&gt; number|Array\n</code></pre>\n<p>其中第一个参数 <code class=\"codespan\">value</code> 为 <a href=\"#series-.data\">data</a> 中的数据值。第二个参数<code class=\"codespan\">params</code> 是其它的数据项参数。</p>\n"
  },
  "itemStyle": {
    "desc": "<p>散点图的样式设置。</p>\n"
  },
  "itemStyle.color": {
    "desc": "<p>图形的颜色。</p>\n<p>除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：</p>\n<pre><code class=\"lang-js\">// 纯白色\n[1, 1, 1, 1]\n</code></pre>\n<p>使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。</p>\n"
  },
  "itemStyle.opacity": {
    "desc": "<p>图形的不透明度。</p>\n"
  },
  "itemStyle.borderWidth": {
    "desc": "<p>图形描边宽度。</p>\n"
  },
  "itemStyle.borderColor": {
    "desc": "<p>图形描边颜色。</p>\n"
  },
  "data": {
    "desc": "<p>散点图的数据集。</p>\n<p>数据格式同 <a href=\"http://echarts.baidu.com/option.html#series-scatter.data\" target=\"_blank\">scatter.data</a></p>\n"
  },
  "data.name": {
    "desc": "<p>数据项名称。</p>\n"
  },
  "data.value": {
    "desc": "<p>数据项值</p>\n"
  },
  "data.itemStyle": {
    "desc": "<p>单个数据图形的样式。</p>\n"
  },
  "data.itemStyle.color": {
    "desc": "<p>图形的颜色。</p>\n<p>除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：</p>\n<pre><code class=\"lang-js\">// 纯白色\n[1, 1, 1, 1]\n</code></pre>\n<p>使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。</p>\n"
  },
  "data.itemStyle.opacity": {
    "desc": "<p>图形的不透明度。</p>\n"
  },
  "data.itemStyle.borderWidth": {
    "desc": "<p>图形描边宽度。</p>\n"
  },
  "data.itemStyle.borderColor": {
    "desc": "<p>图形描边颜色。</p>\n"
  },
  "blendMode": {
    "desc": "<p>混合模式，目前支持<code class=\"codespan\">&#39;source-over&#39;</code>，<code class=\"codespan\">&#39;lighter&#39;</code>，默认使用的<code class=\"codespan\">&#39;source-over&#39;</code>是通过 alpha 混合，而<code class=\"codespan\">&#39;lighter&#39;</code>是叠加模式，该模式可以让数据集中的区域因为叠加而产生高亮的效果。</p>\n"
  },
  "zlevel": {
    "desc": "<p>组件所在的层。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n<p><strong>注:</strong> echarts-gl 中组件的层需要跟 echarts 中组件的层分开。同一个 <code class=\"codespan\">zlevel</code> 不能同时用于 WebGL 和 Canvas 的绘制。</p>\n"
  },
  "progressiveThreshold": {
    "desc": "<p>启用渐进渲染的阈值，渐进渲染可以让你在加载画面的过程中不会有阻塞。</p>\n"
  },
  "progressive": {
    "desc": "<p>渐进渲染每次渲染的数据量。</p>\n"
  }
}