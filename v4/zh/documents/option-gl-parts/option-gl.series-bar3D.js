window.__EC_DOC_option_gl_series_bar3D = {
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
  "bevelSize": {
    "desc": "<p>柱子的倒角尺寸。支持设置为从 0 到 1 的值。默认为 0，即没有倒角。</p>\n<p>下面是无倒角和有倒角的区别。</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/bar3D-no-bevel.png\" width=\"100%\" title=\"bevelSize: 0\"><img />\n    <img  src=\"documents/asset/gl/img/bar3D-bevel.png\" width=\"100%\" title=\"bevelSize: 0.3\"><img />\n<div />\n"
  },
  "bevelSmoothness": {
    "desc": "<p>柱子倒角的光滑/圆润度，数值越大越光滑/圆润。</p>\n"
  },
  "stack": {
    "desc": "<p>柱状图堆叠，相同 <code class=\"codespan\">stack</code> 值的柱状图系列数据会有叠加。注意不同系列需要叠加的数据项在数组中的索引必须是一样的。</p>\n"
  },
  "minHeight": {
    "desc": "<p>最小柱子高度。</p>\n"
  },
  "itemStyle": {
    "desc": "<p>柱子的样式，包括颜色和不透明度。</p>\n"
  },
  "itemStyle.color": {
    "desc": "<p>图形的颜色。 默认从全局调色盘 <a href=\"http://echarts.baidu.com/option.html#color\" target=\"_blank\">option.color</a> 获取颜色 </p>\n<p>除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：</p>\n<pre><code class=\"lang-js\">// 纯白色\n[1, 1, 1, 1]\n</code></pre>\n<p>使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。</p>\n"
  },
  "itemStyle.opacity": {
    "desc": "<p>图形的不透明度。</p>\n"
  },
  "label": {
    "desc": "<p>柱子的标签配置。</p>\n"
  },
  "label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "label.distance": {
    "desc": "<p>标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离。</p>\n"
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
    "desc": "<p>柱子高亮状态的标签和样式配置。</p>\n"
  },
  "emphasis.itemStyle.color": {
    "desc": "<p>图形的颜色。</p>\n<p>除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：</p>\n<pre><code class=\"lang-js\">// 纯白色\n[1, 1, 1, 1]\n</code></pre>\n<p>使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。</p>\n"
  },
  "emphasis.itemStyle.opacity": {
    "desc": "<p>图形的不透明度。</p>\n"
  },
  "emphasis.label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "emphasis.label.distance": {
    "desc": "<p>标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离。</p>\n"
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
    "desc": "<p>三维柱状图数据数组。数组每一项为一个数据。通常这个数据是用数组存储数据的每个属性/维度。例如下面：</p>\n<pre><code class=\"lang-js\">data: [\n    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]\n]\n</code></pre>\n<p>对于数组中的每一项：</p>\n<ol>\n<li>在 <a href=\"#grid3D\">grid3D</a> 中，每一项的前三个值分别是<code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">z</code>。</li>\n<li>在 <a href=\"#geo3D\">geo3D</a> 以及 <a href=\"#globe\">globe</a> 中，每一项的前两个值分别是经纬度 <code class=\"codespan\">lng</code>, <code class=\"codespan\">lat</code>，第三个值表示数值大小，例如人口的多少。这个值会被映射到 <a href=\"#series-bar3D.minHeight\">minHeight</a> ~ <a href=\"#series-bar3D.maxHeight\">maxHeight</a> 的范围。</li>\n</ol>\n<p>除了默认给坐标系使用的三个值，每一项还可以加入任意多个值，用于给 <a href=\"#visualMap\">visualMap</a> 组件映射到颜色等其它图形属性。</p>\n<p>有些时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象：</p>\n<pre><code class=\"lang-js\">[{\n    // 数据项的名称\n    name: &#39;数据1&#39;,\n    // 数据项值\n    value: [12, 14, 10]\n}, {\n    name: &#39;数据2&#39;,\n    value: [34, 50, 15]\n}]\n</code></pre>\n<p>需要对个别内容指定进行个性化定义时：</p>\n<pre><code class=\"lang-js\">[{\n    name: &#39;数据1&#39;,\n    value: [12, 14, 10]\n}, {\n    // 数据项名称\n    name: &#39;数据2&#39;,\n    value : [34, 50, 15],\n    //自定义特殊itemStyle，仅对该item有效\n    itemStyle:{}\n}]\n</code></pre>\n"
  },
  "data.name": {
    "desc": "<p>数据项名称。</p>\n"
  },
  "data.value": {
    "desc": "<p>数据项值。</p>\n"
  },
  "data.itemStyle": {
    "desc": "<p>单个数据项的样式设置。</p>\n"
  },
  "data.itemStyle.color": {
    "desc": "<p>图形的颜色。</p>\n<p>除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：</p>\n<pre><code class=\"lang-js\">// 纯白色\n[1, 1, 1, 1]\n</code></pre>\n<p>使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。</p>\n"
  },
  "data.itemStyle.opacity": {
    "desc": "<p>图形的不透明度。</p>\n"
  },
  "data.label": {
    "desc": "<p>单个数据项的标签设置。</p>\n"
  },
  "data.label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "data.label.distance": {
    "desc": "<p>标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离。</p>\n"
  },
  "data.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong> </p>\n<p>模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {c}&#39;\n</code></pre>\n<p><strong>回调函数</strong> </p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "data.label.textStyle": {
    "desc": "<p>标签的字体样式。</p>\n"
  },
  "data.label.textStyle.color": {
    "desc": "<p>文字的颜色。</p>\n"
  },
  "data.label.textStyle.borderWidth": {
    "desc": "<p>文字的描边宽度。</p>\n"
  },
  "data.label.textStyle.borderColor": {
    "desc": "<p>文字的描边颜色。</p>\n"
  },
  "data.label.textStyle.fontFamily": {
    "desc": "<p>文字的字体系列。</p>\n"
  },
  "data.label.textStyle.fontSize": {
    "desc": "<p>文字的字体大小。</p>\n"
  },
  "data.label.textStyle.fontWeight": {
    "desc": "<p>文字字体的粗细。</p>\n<p><strong>可选：</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "data.emphasis": {
    "desc": "<p>单个数据项高亮状态的标签和样式配置。</p>\n"
  },
  "data.emphasis.itemStyle.color": {
    "desc": "<p>图形的颜色。</p>\n<p>除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：</p>\n<pre><code class=\"lang-js\">// 纯白色\n[1, 1, 1, 1]\n</code></pre>\n<p>使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。</p>\n"
  },
  "data.emphasis.itemStyle.opacity": {
    "desc": "<p>图形的不透明度。</p>\n"
  },
  "data.emphasis.label.show": {
    "desc": "<p>是否显示标签。</p>\n"
  },
  "data.emphasis.label.distance": {
    "desc": "<p>标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离。</p>\n"
  },
  "data.emphasis.label.formatter": {
    "desc": "<p>标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 <code class=\"codespan\">\\n</code> 换行。</p>\n<p><strong>字符串模板</strong> </p>\n<p>模板变量有：</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>：系列名。</li>\n<li><code class=\"codespan\">{b}</code>：数据名。</li>\n<li><code class=\"codespan\">{c}</code>：数据值。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {c}&#39;\n</code></pre>\n<p><strong>回调函数</strong> </p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>参数 <code class=\"codespan\">params</code> 是 formatter 需要的单个数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "data.emphasis.label.textStyle": {
    "desc": "<p>标签的字体样式。</p>\n"
  },
  "data.emphasis.label.textStyle.color": {
    "desc": "<p>文字的颜色。</p>\n"
  },
  "data.emphasis.label.textStyle.borderWidth": {
    "desc": "<p>文字的描边宽度。</p>\n"
  },
  "data.emphasis.label.textStyle.borderColor": {
    "desc": "<p>文字的描边颜色。</p>\n"
  },
  "data.emphasis.label.textStyle.fontFamily": {
    "desc": "<p>文字的字体系列。</p>\n"
  },
  "data.emphasis.label.textStyle.fontSize": {
    "desc": "<p>文字的字体大小。</p>\n"
  },
  "data.emphasis.label.textStyle.fontWeight": {
    "desc": "<p>文字字体的粗细。</p>\n<p><strong>可选：</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "shading": {
    "desc": "<p>三维柱状图中三维图形的着色效果。echarts-gl 中支持下面三种着色方式：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;color&#39;</code>\n只显示颜色，不受光照等其它因素的影响。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;lambert&#39;</code>\n通过经典的 <a href=\"https://en.wikipedia.org/wiki/Lambertian_reflectance\" target=\"_blank\">lambert</a> 着色表现光照带来的明暗。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;realistic&#39;</code>\n真实感渲染，配合 <a href=\"#globe.light.ambientCubemap\">light.ambientCubemap</a> 和 <a href=\"#globe.postEffect\">postEffect</a> 使用可以让展示的画面效果和质感有质的提升。ECharts GL 中使用了<a href=\"https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/\" target=\"_blank\">基于物理的渲染（PBR）</a> 来表现真实感材质。</p>\n</li>\n</ul>\n"
  },
  "realisticMaterial": {
    "desc": "<p>真实感材质相关的配置项，在 <a href=\"#series-bar3D.shading\">shading</a> 为<code class=\"codespan\">&#39;realistic&#39;</code>时有效。</p>\n"
  },
  "realisticMaterial.detailTexture": {
    "desc": "<p>材质细节的纹理贴图。</p>\n"
  },
  "realisticMaterial.textureTiling": {
    "desc": "<p>材质细节纹理的平铺。默认为<code class=\"codespan\">1</code>，也就是拉伸填满。大于 <code class=\"codespan\">1</code> 的时候，数字表示纹理平铺重复的次数。</p>\n<p><strong>注：</strong> 使用平铺需要 <code class=\"codespan\">detailTexture</code> 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。</p>\n"
  },
  "realisticMaterial.textureOffset": {
    "desc": "<p>材质细节纹理的位移。</p>\n"
  },
  "realisticMaterial.roughness": {
    "desc": "<p><code class=\"codespan\">roughness</code>属性用于表示材质的粗糙度，<code class=\"codespan\">0</code>为完全光滑，<code class=\"codespan\">1</code>完全粗糙，中间的值则是介于这两者之间。</p>\n<p>下图是 <a href=\"#globe\">globe</a> 中<code class=\"codespan\">roughness</code>分别是<code class=\"codespan\">0.2</code>（光滑）与<code class=\"codespan\">0.8</code>（粗糙）的效果。</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-gloss.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-rough.png\"></p>\n<p>当你想要表达更复杂的材质时。你可以直接将 <code class=\"codespan\">roughness</code> 设置为如下用每个像素存储粗糙度的贴图。</p>\n<p><img width=\"300\" height=\"300\" src=\"documents/asset/gl/img/roughness.png\"></p>\n<p>贴图中颜色越白的地方值越大，就越粗糙。你可以从 <a href=\"http://freepbr.com/\" target=\"_blank\">http://freepbr.com/</a> 等资源网站获取不同材质的贴图资源，也可以使用其他工具自己生成。</p>\n"
  },
  "realisticMaterial.metalness": {
    "desc": "<p><code class=\"codespan\">metalness</code>属性用于表示材质是金属还是非金属，<code class=\"codespan\">0</code>为非金属，<code class=\"codespan\">1</code>为金属，中间的值则是介于这两者之间。通常设成<code class=\"codespan\">0</code>和<code class=\"codespan\">1</code>就能满足大部分场景了。</p>\n<p>下图是 <a href=\"#globe\">globe</a> 中<code class=\"codespan\">metalness</code>分别设成<code class=\"codespan\">1</code>与<code class=\"codespan\">0</code>的效果区别。</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-metal.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-non-metal.png\"></p>\n<p>跟 <a href=\"#series-bar3D.realisticMaterial.roughness\">roughness</a> 一样 你可以直接将 <code class=\"codespan\">metalness</code> 设置为金属度贴图。</p>\n"
  },
  "realisticMaterial.roughnessAdjust": {
    "desc": "<p>粗糙度调整，在使用粗糙度贴图的时候有用。可以对贴图整体的粗糙度进行调整。默认为 <code class=\"codespan\">0.5</code>，<code class=\"codespan\">0</code>的时候为完全光滑，<code class=\"codespan\">1</code>的时候为完全粗糙。</p>\n"
  },
  "realisticMaterial.metalnessAdjust": {
    "desc": "<p>金属度调整，在使用金属度贴图的时候有用。可以对贴图整体的金属度进行调整。默认为 <code class=\"codespan\">0.5</code>，<code class=\"codespan\">0</code>的时候为非金属，<code class=\"codespan\">1</code>的时候为金属。</p>\n"
  },
  "realisticMaterial.normalTexture": {
    "desc": "<p>材质细节的法线贴图。</p>\n<p>使用法线贴图可以在较少的顶点下依然表现出物体表面丰富的明暗细节。</p>\n"
  },
  "lambertMaterial": {
    "desc": "<p>lambert 材质相关的配置项，在 <a href=\"#series-bar3D.shading\">shading</a> 为<code class=\"codespan\">&#39;lambert&#39;</code>时有效。</p>\n"
  },
  "lambertMaterial.detailTexture": {
    "desc": "<p>材质细节的纹理贴图。</p>\n"
  },
  "lambertMaterial.textureTiling": {
    "desc": "<p>材质细节纹理的平铺。默认为<code class=\"codespan\">1</code>，也就是拉伸填满。大于 <code class=\"codespan\">1</code> 的时候，数字表示纹理平铺重复的次数。</p>\n<p><strong>注：</strong> 使用平铺需要 <code class=\"codespan\">detailTexture</code> 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。</p>\n"
  },
  "lambertMaterial.textureOffset": {
    "desc": "<p>材质细节纹理的位移。</p>\n"
  },
  "colorMaterial": {
    "desc": "<p>color 材质相关的配置项，在 <a href=\"#series-bar3D.shading\">shading</a> 为<code class=\"codespan\">&#39;color&#39;</code>时有效。</p>\n"
  },
  "colorMaterial.detailTexture": {
    "desc": "<p>材质细节的纹理贴图。</p>\n"
  },
  "colorMaterial.textureTiling": {
    "desc": "<p>材质细节纹理的平铺。默认为<code class=\"codespan\">1</code>，也就是拉伸填满。大于 <code class=\"codespan\">1</code> 的时候，数字表示纹理平铺重复的次数。</p>\n<p><strong>注：</strong> 使用平铺需要 <code class=\"codespan\">detailTexture</code> 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。</p>\n"
  },
  "colorMaterial.textureOffset": {
    "desc": "<p>材质细节纹理的位移。</p>\n"
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