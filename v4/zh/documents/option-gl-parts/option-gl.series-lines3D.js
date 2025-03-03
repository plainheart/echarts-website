window.__EC_DOC_option_gl_series_lines3D = {
  "name": {
    "desc": "<p>系列名称，用于 <a href=\"/echarts-website/zh/option.html#tooltip\" target=\"_blank\">tooltip</a> 的显示，<a href=\"/echarts-website/zh/option.html#legend\" target=\"_blank\">legend</a> 的图例筛选，在 <code class=\"codespan\">setOption</code> 更新数据和配置项时用于指定对应的系列。</p>\n"
  },
  "coordinateSystem": {
    "desc": "<p>该系列使用的坐标系，可选：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;geo3D&#39;</code></p>\n<p>  使用三维地理坐标系，通过 <a href=\"#series-.geo3DIndex\">geo3DIndex</a> 指定相应的三维地理坐标系组件</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;globe&#39;</code></p>\n<p>  使用地球坐标系，通过 <a href=\"#series-.globeIndex\">globeIndex</a> 指定相应的地球坐标系组件</p>\n</li>\n</ul>\n"
  },
  "geo3DIndex": {
    "desc": "<p>坐标轴使用的 <a href=\"#geo3D\">geo3D</a> 组件的索引。默认使用第一个 <a href=\"#geo3D\">geo3D</a> 组件。</p>\n"
  },
  "globeIndex": {
    "desc": "<p>坐标轴使用的 <a href=\"#globe\">globe</a> 组件的索引。默认使用第一个 <a href=\"#globe\">globe</a> 组件。</p>\n"
  },
  "polyline": {
    "desc": "<p>是否是多段线。</p>\n<p>默认为 <code class=\"codespan\">false</code>，只能用于绘制只有两个端点的线段（表现为被赛尔曲线）。</p>\n<p>如果该配置项为 <code class=\"codespan\">true</code>，则可以在 <a href=\"#series-lines3D.data.coords\">data.coords</a> 中设置多于 2 个的顶点用来绘制多段线，在绘制路线轨迹的时候比较有用。</p>\n"
  },
  "effect": {
    "desc": "<p>飞线的尾迹特效。</p>\n"
  },
  "effect.show": {
    "desc": "<p>是否显示尾迹特效，默认不显示。</p>\n"
  },
  "effect.period": {
    "desc": "<p>尾迹特效的周期。</p>\n"
  },
  "effect.constantSpeed": {
    "desc": "<p>轨迹特效的移动动画是否是固定速度，单位按三维空间的尺寸，设置为非 null 的值后会忽略 <a href=\"#series-lines3D.effect.period\">period</a> 配置项。</p>\n"
  },
  "effect.trailWidth": {
    "desc": "<p>尾迹的宽度。</p>\n"
  },
  "effect.trailLength": {
    "desc": "<p>尾迹的长度，范围从 0 到 1，为线条长度的百分比。</p>\n"
  },
  "effect.trailColor": {
    "desc": "<p>尾迹的颜色，默认跟线条颜色相同。</p>\n"
  },
  "effect.trailOpacity": {
    "desc": "<p>尾迹的不透明度，默认跟线条不透明度相同。</p>\n"
  },
  "lineStyle": {
    "desc": "<p>飞线的线条样式。</p>\n"
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
  "data": {
    "desc": "<p>三维飞线图的数据数组，通常数据的每一项可以是一个包含起点和终点的坐标集。在 <a href=\"#series-lines3D.polyline\">polyline</a> 设置为 <code class=\"codespan\">true</code> 时支持多于两个的坐标。\n如下：</p>\n<pre><code class=\"lang-js\">data: [\n    [\n        [120, 66, 1], // 起点的经纬度和海拔坐标\n        [122, 67, 2]  // 终点的经纬度和海拔坐标\n    ]\n]\n</code></pre>\n<p>有些时候需要配置数据项的名字或者单独的样式。需要把经纬度坐标写到 coords 属性下。如下：</p>\n<pre><code class=\"lang-js\">data: [\n    {\n        coords: [ [120, 66], [122, 67] ],\n        // 数据值\n        value: 10,\n        // 数据名\n        name: &#39;foo&#39;,\n        // 线条样式\n        lineStyle: {}\n    }\n]\n</code></pre>\n"
  },
  "data.coords": {
    "desc": "<p>一个包含两个到多个经纬度坐标的数组。在 <a href=\"#series-lines3D.polyline\">polyline</a> 设置为 <code class=\"codespan\">true</code> 时支持多于两个的坐标。</p>\n"
  },
  "data.value": {
    "desc": "<p>数据值。</p>\n"
  },
  "data.lineStyle": {
    "desc": "<p>单个数据（单条线）的样式设置。</p>\n"
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
  "blendMode": {
    "desc": "<p>混合模式，目前支持<code class=\"codespan\">&#39;source-over&#39;</code>，<code class=\"codespan\">&#39;lighter&#39;</code>，默认使用的<code class=\"codespan\">&#39;source-over&#39;</code>是通过 alpha 混合，而<code class=\"codespan\">&#39;lighter&#39;</code>是叠加模式，该模式可以让数据集中的区域因为叠加而产生高亮的效果。</p>\n"
  },
  "zlevel": {
    "desc": "<p>组件所在的层。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n<p><strong>注:</strong> echarts-gl 中组件的层需要跟 echarts 中组件的层分开。同一个 <code class=\"codespan\">zlevel</code> 不能同时用于 WebGL 和 Canvas 的绘制。</p>\n"
  },
  "silent": {
    "desc": "<p>图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。</p>\n"
  }
}