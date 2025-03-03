window.__EC_DOC_option_gl_series_scatter3D = {
  "name": {
    "desc": "<p>系列名称，用于 <a href=\"/echarts-website/zh/option.html#tooltip\" target=\"_blank\">tooltip</a> 的显示，<a href=\"/echarts-website/zh/option.html#legend\" target=\"_blank\">legend</a> 的图例筛选，在 <code class=\"codespan\">setOption</code> 更新数据和配置项时用于指定对应的系列。</p>\n"
  },
  "coordinateSystem": {
    "desc": "<p>该系列使用的坐标系，可选：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;cartesian3D&#39;</code></p>\n<p>  使用三维笛卡尔坐标系，通过 <a href=\"#series-.grid3DIndex\">grid3DIndex</a> 指定相应的三维笛卡尔坐标系组件。</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;geo3D&#39;</code></p>\n<p>  使用三维地理坐标系，通过 <a href=\"#series-.geo3DIndex\">geo3DIndex</a> 指定相应的三维地理坐标系组件</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;globe&#39;</code></p>\n<p>  使用地球坐标系，通过 <a href=\"#series-.globeIndex\">globeIndex</a> 指定相应的地球坐标系组件</p>\n</li>\n</ul>\n"
  },
  "grid3DIndex": {
    "desc": "<p>使用的 <a href=\"#grid3D\">grid3D</a> 组件的索引。默认使用第一个 <a href=\"#grid3D\">grid3D</a> 组件。</p>\n"
  },
  "geo3DIndex": {
    "desc": "<p>坐标轴使用的 <a href=\"#geo3D\">geo3D</a> 组件的索引。默认使用第一个 <a href=\"#geo3D\">geo3D</a> 组件。</p>\n"
  },
  "globeIndex": {
    "desc": "<p>坐标轴使用的 <a href=\"#globe\">globe</a> 组件的索引。默认使用第一个 <a href=\"#globe\">globe</a> 组件。</p>\n"
  },
  "symbol": {
    "desc": "<p>散点的形状。默认为圆形。</p>\n<p>ECharts 提供的标记类型包括 \n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适（如果是 <code class=\"codespan\">symbol</code> 的话就是 <code class=\"codespan\">symbolSize</code>）的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n"
  },
  "symbolSize": {
    "desc": "<p>标记的大小，可以设置成诸如 <code class=\"codespan\">10</code> 这样单一的数字，也可以用数组分开表示宽和高，例如 <code class=\"codespan\">[20, 10]</code> 表示标记宽为<code class=\"codespan\">20</code>，高为<code class=\"codespan\">10</code>。</p>\n<p>如果需要每个数据的图形大小不一样，可以设置为如下格式的回调函数：</p>\n<pre><code class=\"lang-js\">(value: Array|number, params: Object) =&gt; number|Array\n</code></pre>\n<p>其中第一个参数 <code class=\"codespan\">value</code> 为 <a href=\"#series-.data\">data</a> 中的数据值。第二个参数<code class=\"codespan\">params</code> 是其它的数据项参数。</p>\n"
  },
  "itemStyle": {
    "desc": "<p>散点图颜色描边等样式。</p>\n"
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
  "label": {
    "desc": "<p>标签样式</p>\n"
  },
  "label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "label.distance": {
    "desc": "<p>标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离。</p>\n"
  },
  "label.position": {
    "desc": "<p>标签的位置。</p>\n<p><strong>可选：</strong></p>\n<ul>\n<li>&#39;top&#39;</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n</ul>\n"
  },
  "label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong> </p>\n<p>模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {c}&#39;\n</code></pre>\n<p><strong>回调函数</strong> </p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "label.textStyle": {
    "desc": "<p>标签的字体样式。</p>\n"
  },
  "label.textStyle.color": {
    "desc": "<p>文字的颜色。</p>\n"
  },
  "label.textStyle.borderWidth": {
    "desc": "<p>文字的描边宽度。</p>\n"
  },
  "label.textStyle.borderColor": {
    "desc": "<p>文字的描边颜色。</p>\n"
  },
  "label.textStyle.fontFamily": {
    "desc": "<p>文字的字体系列。</p>\n"
  },
  "label.textStyle.fontSize": {
    "desc": "<p>文字的字体大小。</p>\n"
  },
  "label.textStyle.fontWeight": {
    "desc": "<p>文字字体的粗细。</p>\n<p><strong>可选：</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "emphasis": {
    "desc": "<p>图形和标签高亮的样式。</p>\n"
  },
  "emphasis.itemStyle.color": {
    "desc": "<p>图形的颜色。</p>\n<p>除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：</p>\n<pre><code class=\"lang-js\">// 纯白色\n[1, 1, 1, 1]\n</code></pre>\n<p>使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。</p>\n"
  },
  "emphasis.itemStyle.opacity": {
    "desc": "<p>图形的不透明度。</p>\n"
  },
  "emphasis.itemStyle.borderWidth": {
    "desc": "<p>图形描边宽度。</p>\n"
  },
  "emphasis.itemStyle.borderColor": {
    "desc": "<p>图形描边颜色。</p>\n"
  },
  "emphasis.label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "emphasis.label.distance": {
    "desc": "<p>标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离。</p>\n"
  },
  "emphasis.label.position": {
    "desc": "<p>标签的位置。</p>\n<p><strong>可选：</strong></p>\n<ul>\n<li>&#39;top&#39;</li>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;bottom&#39;</li>\n</ul>\n"
  },
  "emphasis.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong> </p>\n<p>模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {c}&#39;\n</code></pre>\n<p><strong>回调函数</strong> </p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "emphasis.label.textStyle": {
    "desc": "<p>标签的字体样式。</p>\n"
  },
  "emphasis.label.textStyle.color": {
    "desc": "<p>文字的颜色。</p>\n"
  },
  "emphasis.label.textStyle.borderWidth": {
    "desc": "<p>文字的描边宽度。</p>\n"
  },
  "emphasis.label.textStyle.borderColor": {
    "desc": "<p>文字的描边颜色。</p>\n"
  },
  "emphasis.label.textStyle.fontFamily": {
    "desc": "<p>文字的字体系列。</p>\n"
  },
  "emphasis.label.textStyle.fontSize": {
    "desc": "<p>文字的字体大小。</p>\n"
  },
  "emphasis.label.textStyle.fontWeight": {
    "desc": "<p>文字字体的粗细。</p>\n<p><strong>可选：</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "data": {
    "desc": "<p>三维散点图数据数组。数组每一项为一个数据。通常这个数据用一个数组存储数据的每个属性/维度。例如：</p>\n<pre><code class=\"lang-js\">data: [\n    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]\n]\n</code></pre>\n<p>对于数组中的每一项：</p>\n<ol>\n<li>在 <a href=\"#grid3D\">grid3D</a> 中，每一项的前三个值分别是<code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">z</code>。</li>\n<li>在 <a href=\"#geo3D\">geo3D</a> 以及 <a href=\"globe\" target=\"_blank\">globe</a> 中，每一项的前两个值分别是经纬度 <code class=\"codespan\">lng</code>, <code class=\"codespan\">lat</code>。</li>\n</ol>\n<p>除了默认给坐标系使用的值，每一项还可以加入任意多个值，用于给 <a href=\"#visualMap\">visualMap</a> 组件映射到颜色等其它图形属性。</p>\n<p>有些时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象：</p>\n<pre><code class=\"lang-js\">[{\n    // 数据项的名称\n    name: &#39;数据1&#39;,\n    // 数据项值\n    value: [12, 14, 10]\n}, {\n    name: &#39;数据2&#39;,\n    value: [34, 50, 15]\n}]\n</code></pre>\n<p>需要对个别内容指定进行个性化定义时：</p>\n<pre><code class=\"lang-js\">[{\n    name: &#39;数据1&#39;,\n    value: [12, 14, 10]\n}, {\n    // 数据项名称\n    name: &#39;数据2&#39;,\n    value : [34, 50, 15],\n    //自定义特殊itemStyle，仅对该item有效\n    itemStyle:{}\n}]\n</code></pre>\n"
  },
  "blendMode": {
    "desc": "<p>混合模式，目前支持<code class=\"codespan\">&#39;source-over&#39;</code>，<code class=\"codespan\">&#39;lighter&#39;</code>，默认使用的<code class=\"codespan\">&#39;source-over&#39;</code>是通过 alpha 混合，而<code class=\"codespan\">&#39;lighter&#39;</code>是叠加模式，该模式可以让数据集中的区域因为叠加而产生高亮的效果。</p>\n"
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