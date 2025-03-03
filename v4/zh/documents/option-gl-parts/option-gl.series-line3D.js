window.__EC_DOC_option_gl_series_line3D = {
  "name": {
    "desc": "<p>系列名称，用于 <a href=\"/echarts-website/zh/option.html#tooltip\" target=\"_blank\">tooltip</a> 的显示，<a href=\"/echarts-website/zh/option.html#legend\" target=\"_blank\">legend</a> 的图例筛选，在 <code class=\"codespan\">setOption</code> 更新数据和配置项时用于指定对应的系列。</p>\n"
  },
  "coordinateSystem": {
    "desc": "<p>该系列使用的坐标系，可选：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;cartesian3D&#39;</code></p>\n<p>  使用三维笛卡尔坐标系，通过 <a href=\"#series-.grid3DIndex\">grid3DIndex</a> 指定相应的三维笛卡尔坐标系组件。</p>\n</li>\n</ul>\n"
  },
  "grid3DIndex": {
    "desc": "<p>使用的 <a href=\"#grid3D\">grid3D</a> 组件的索引。默认使用第一个 <a href=\"#grid3D\">grid3D</a> 组件。</p>\n"
  },
  "lineStyle": {
    "desc": "<p>线条样式。</p>\n"
  },
  "lineStyle.color": {
    "desc": "<p>线条的颜色。</p>\n<p>除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：</p>\n<pre><code class=\"lang-js\">// 纯白色\n[1, 1, 1, 1]\n</code></pre>\n<p>使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。</p>\n"
  },
  "lineStyle.opacity": {
    "desc": "<p>线条的不透明度。</p>\n"
  },
  "lineStyle.width": {
    "desc": "<p>线条的宽度。</p>\n"
  },
  "lineStyle.lineStyle.color": {
    "desc": "<p>线条的颜色。</p>\n<p>除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：</p>\n<pre><code class=\"lang-js\">// 纯白色\n[1, 1, 1, 1]\n</code></pre>\n<p>使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。</p>\n"
  },
  "lineStyle.lineStyle.opacity": {
    "desc": "<p>线条的不透明度。</p>\n"
  },
  "lineStyle.lineStyle.width": {
    "desc": "<p>线条的宽度。</p>\n"
  },
  "data": {
    "desc": "<p>数据数组。数组每一项为一个数据。通常这个数据是用数组存储数据的每个属性/维度。例如下面：</p>\n<pre><code class=\"lang-js\">data: [\n    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]\n]\n</code></pre>\n<p>数组中的每一项的前三个值分别是<code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">z</code>。除了这三个值也可以添加其它值给 <a href=\"#visualMap\">visualMap</a> 组件映射到颜色等其它图形属性。</p>\n<p>有些时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象：</p>\n<pre><code class=\"lang-js\">[{\n    // 数据项的名称\n    name: &#39;数据1&#39;,\n    // 数据项值\n    value: [12, 14, 10]\n}, {\n    name: &#39;数据2&#39;,\n    value: [34, 50, 15]\n}]\n</code></pre>\n<p>需要对个别内容指定进行个性化定义时：</p>\n<pre><code class=\"lang-js\">[{\n    name: &#39;数据1&#39;,\n    value: [12, 14, 10]\n}, {\n    // 数据项名称\n    name: &#39;数据2&#39;,\n    value : [34, 50, 15],\n    //自定义特殊itemStyle，仅对该item有效\n    itemStyle:{}\n}]\n</code></pre>\n"
  },
  "data.name": {
    "desc": "<p>数据项名称。</p>\n"
  },
  "data.value": {
    "desc": "<p>数据项值。</p>\n"
  },
  "data.lineStyle": {
    "desc": "<p>单个数据项的样式设置。</p>\n"
  },
  "data.lineStyle.color": {
    "desc": "<p>线条的颜色。</p>\n<p>除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：</p>\n<pre><code class=\"lang-js\">// 纯白色\n[1, 1, 1, 1]\n</code></pre>\n<p>使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。</p>\n"
  },
  "data.lineStyle.opacity": {
    "desc": "<p>线条的不透明度。</p>\n"
  },
  "data.lineStyle.width": {
    "desc": "<p>线条的宽度。</p>\n"
  },
  "zlevel": {
    "desc": "<p>组件所在的层。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n<p><strong>注:</strong> echarts-gl 中组件的层需要跟 echarts 中组件的层分开。同一个 <code class=\"codespan\">zlevel</code> 不能同时用于 WebGL 和 Canvas 的绘制。</p>\n"
  },
  "silent": {
    "desc": "<p>图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。</p>\n"
  },
  "animation": {
    "desc": "<p>是否开启动画。</p>\n"
  },
  "animationDurationUpdate": {
    "desc": "<p>过渡动画的时长。</p>\n"
  },
  "animationEasingUpdate": {
    "desc": "<p>过渡动画的缓动效果。</p>\n"
  }
}