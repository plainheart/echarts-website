window.__EC_DOC_option_gl_series_bar3D = {
  "name": {
    "desc": "<p>Series name used for displaying in <a href=\"/echarts-website/zh/option.html#tooltip\" target=\"_blank\">tooltip</a> and filtering with <a href=\"/echarts-website/zh/option.html#legend\" target=\"_blank\">legend</a>, or updating data and configuration with <code class=\"codespan\">setOption</code>.</p>\n"
  },
  "coordinateSystem": {
    "desc": "<p>The coordinate used in the series, whose options are:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;cartesian3D&#39;</code></p>\n<p>  Use a 3D rectangular coordinate (also known as Cartesian coordinate), with <a href=\"#series-.xAxisIndex\">xAxisIndex</a> and <a href=\"#series-.yAxisIndex\">yAxisIndex</a> to assign the corresponding axis component.</p>\n</li>\n</ul>\n<ul>\n<li><code class=\"codespan\">&#39;geo3D&#39;</code>\n  Use 3D geographic coordinate, with <a href=\"#series-.geoIndex\">geoIndex</a> to assign the corresponding 3D geographic coordinate components.</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;globe&#39;</code></p>\n<p>  Use 3D globe coordinate, with <a href=\"#series-.globeIndex\">globeIndex</a> to assign the corresponding 3D globe coordinate components.</p>\n</li>\n</ul>\n"
  },
  "grid3DIndex": {
    "desc": "<p>Use the index of the <a href=\"#grid3D\">grid3D</a> component. The first <a href=\"#grid3D\">grid3D</a> component is used by default.</p>\n"
  },
  "geo3DIndex": {
    "desc": "<p>The index of the <a href=\"#geo3D\">geo3D</a> component used by the axis.The first <a href=\"#grid3D\">grid3D</a> component is used by default.</p>\n"
  },
  "globeIndex": {
    "desc": "<p>The index of the <a href=\"#globe\">globe</a> component used by the axis.The first <a href=\"#globe\">globe</a> component is used by default.</p>\n"
  },
  "bevelSize": {
    "desc": "<p>The size of the bevel.\nSupport for setting values from 0 to 1. The default is 0, which means there is no bevel.</p>\n<p>Below are the differences between beveling and no beveling.</p>\n<div  class=\"twentytwenty-container\" style=\"width: 700px;\">\n    <img  src=\"documents/asset/gl/img/bar3D-no-bevel.png\" width=\"100%\" title=\"bevelSize: 0\"><img />\n    <img  src=\"documents/asset/gl/img/bar3D-bevel.png\" width=\"100%\" title=\"bevelSize: 0.3\"><img />\n<div />\n"
  },
  "bevelSmoothness": {
    "desc": "<p>The smoothness of the bevel, the larger the value, the smoother.</p>\n"
  },
  "stack": {
    "desc": "<p>Stacking of bar chart. On the same category axis, the series with the same <code class=\"codespan\">stack</code> name would be put on top of each other. Note that the data items that need to be stack in different series must have the same index in the array.</p>\n"
  },
  "minHeight": {
    "desc": "<p>The minimum width of the bar.</p>\n"
  },
  "itemStyle": {
    "desc": "<p>The style of the bar, including color and opacity.</p>\n"
  },
  "itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "label": {
    "desc": "<p>Configure the label of the bar.</p>\n"
  },
  "label.show": {
    "desc": "<p>Whether to show the label.</p>\n"
  },
  "label.distance": {
    "desc": "<p>Distance to the host graphic element.</p>\n<p>The distance from the label to the graphic. In a 3D Scatter, this distance is the pixel value of the screen space. In other figures, this distance is the relative 3D distance.</p>\n"
  },
  "label.formatter": {
    "desc": "<p>The formatter of the label content, which supports the string template and the callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template:</strong> </p>\n<p>The model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n</ul>\n<p><strong>Example:</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {c}&#39;\n</code></pre>\n<p><strong>Callback function:</strong>\n Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>The <code class=\"codespan\">params</code> is the single data set needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "label.textStyle": {
    "desc": "<p>The font style of the label.</p>\n"
  },
  "label.textStyle.color": {
    "desc": "<p>The Color of the text.</p>\n"
  },
  "label.textStyle.borderWidth": {
    "desc": "<p>The border width of the text.</p>\n"
  },
  "label.textStyle.borderColor": {
    "desc": "<p>The border color of the text.</p>\n"
  },
  "label.textStyle.fontFamily": {
    "desc": "<p>The font family of the text.</p>\n"
  },
  "label.textStyle.fontSize": {
    "desc": "<p>The font size of the text.</p>\n"
  },
  "label.textStyle.fontWeight": {
    "desc": "<p>The font thick weight of the text.</p>\n<p><strong>Optional:</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "emphasis": {
    "desc": "<p>Configure labels and styles for bar highlighting.</p>\n"
  },
  "emphasis.itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "emphasis.itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "emphasis.label.show": {
    "desc": "<p>Whether to show the label.</p>\n"
  },
  "emphasis.label.distance": {
    "desc": "<p>Distance to the host graphic element.</p>\n<p>The distance from the label to the graphic. In a 3D Scatter, this distance is the pixel value of the screen space. In other figures, this distance is the relative 3D distance.</p>\n"
  },
  "emphasis.label.formatter": {
    "desc": "<p>The formatter of the label content, which supports the string template and the callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template:</strong> </p>\n<p>The model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n</ul>\n<p><strong>Example:</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {c}&#39;\n</code></pre>\n<p><strong>Callback function:</strong>\n Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>The <code class=\"codespan\">params</code> is the single data set needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "emphasis.label.textStyle": {
    "desc": "<p>The font style of the label.</p>\n"
  },
  "emphasis.label.textStyle.color": {
    "desc": "<p>The Color of the text.</p>\n"
  },
  "emphasis.label.textStyle.borderWidth": {
    "desc": "<p>The border width of the text.</p>\n"
  },
  "emphasis.label.textStyle.borderColor": {
    "desc": "<p>The border color of the text.</p>\n"
  },
  "emphasis.label.textStyle.fontFamily": {
    "desc": "<p>The font family of the text.</p>\n"
  },
  "emphasis.label.textStyle.fontSize": {
    "desc": "<p>The font size of the text.</p>\n"
  },
  "emphasis.label.textStyle.fontWeight": {
    "desc": "<p>The font thick weight of the text.</p>\n<p><strong>Optional:</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "data": {
    "desc": "<p>A data array of 3D bar. Each item of the array is a piece of data. Usually this data is an array to store each attribute/dimension of the data. For example below:</p>\n<pre><code class=\"lang-js\">data: [\n    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]\n]\n</code></pre>\n<p>For each item in the array:</p>\n<ol>\n<li>In [grid3D] (~grid3D), the first three values of each item are <code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">z</code>.</li>\n<li>In <a href=\"#geo3D\">geo3D</a> and <a href=\"#globe\">globe</a>, the first two values of each item are longitude <code class=\"codespan\">lng</code>, latitude <code class=\"codespan\">lat</code>, and the third value indicates the size of the value, such as the number of people.  This value will be mapped to the range of <a href=\"#series-bar3D.minHeight\">minHeight</a> ~ <a href=\"#series-bar3D.maxHeight\">maxHeight</a>.</li>\n</ol>\n<p>In addition to the three values used by default for the coordinate system, each item can be added with any number of values for mapping the <a href=\"#visualMap\">visualMap</a> component to other graphical properties such as color.</p>\n<p>More likely, we need to assign name to each data item, in which case each item should be an object:</p>\n<pre><code class=\"lang-js\">[{\n    // name of date item\n    name: &#39;data1&#39;,\n    // value of date item is 8\n    value: [12, 14, 10]\n}, {\n    name: &#39;data2&#39;,\n    value: 20\n}]\n</code></pre>\n<p>Each data item can be further customized:</p>\n<pre><code class=\"lang-js\">[{\n    name: &#39;data1&#39;,\n    value: [12, 14, 10]\n}, {\n    // name of data item\n    name: &#39;data2&#39;,\n    value : [34, 50, 15],\n    // user-defined special itemStyle that only useful for this data item\n    itemStyle:{}\n}]\n</code></pre>\n"
  },
  "data.name": {
    "desc": "<p>The name of data item.</p>\n"
  },
  "data.value": {
    "desc": "<p>Data value.</p>\n"
  },
  "data.itemStyle": {
    "desc": "<p>The style setting of a single data item.</p>\n"
  },
  "data.itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "data.itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "data.label": {
    "desc": "<p>The label setting of a single data item.</p>\n"
  },
  "data.label.show": {
    "desc": "<p>Whether to show the label.</p>\n"
  },
  "data.label.distance": {
    "desc": "<p>Distance to the host graphic element.</p>\n<p>The distance from the label to the graphic. In a 3D Scatter, this distance is the pixel value of the screen space. In other figures, this distance is the relative 3D distance.</p>\n"
  },
  "data.label.formatter": {
    "desc": "<p>The formatter of the label content, which supports the string template and the callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template:</strong> </p>\n<p>The model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n</ul>\n<p><strong>Example:</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {c}&#39;\n</code></pre>\n<p><strong>Callback function:</strong>\n Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>The <code class=\"codespan\">params</code> is the single data set needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "data.label.textStyle": {
    "desc": "<p>The font style of the label.</p>\n"
  },
  "data.label.textStyle.color": {
    "desc": "<p>The Color of the text.</p>\n"
  },
  "data.label.textStyle.borderWidth": {
    "desc": "<p>The border width of the text.</p>\n"
  },
  "data.label.textStyle.borderColor": {
    "desc": "<p>The border color of the text.</p>\n"
  },
  "data.label.textStyle.fontFamily": {
    "desc": "<p>The font family of the text.</p>\n"
  },
  "data.label.textStyle.fontSize": {
    "desc": "<p>The font size of the text.</p>\n"
  },
  "data.label.textStyle.fontWeight": {
    "desc": "<p>The font thick weight of the text.</p>\n<p><strong>Optional:</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "data.emphasis": {
    "desc": "<p>Configure labels and styles for a sigle data item highlighting.</p>\n"
  },
  "data.emphasis.itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "data.emphasis.itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "data.emphasis.label.show": {
    "desc": "<p>Whether to show the label.</p>\n"
  },
  "data.emphasis.label.distance": {
    "desc": "<p>Distance to the host graphic element.</p>\n<p>The distance from the label to the graphic. In a 3D Scatter, this distance is the pixel value of the screen space. In other figures, this distance is the relative 3D distance.</p>\n"
  },
  "data.emphasis.label.formatter": {
    "desc": "<p>The formatter of the label content, which supports the string template and the callback function. In either form, <code class=\"codespan\">\\n</code> is supported to represent a new line.</p>\n<p><strong>String template:</strong> </p>\n<p>The model variation includes:</p>\n<ul>\n<li><code class=\"codespan\">{a}</code>: series name.</li>\n<li><code class=\"codespan\">{b}</code>: the name of a data item.</li>\n<li><code class=\"codespan\">{c}</code>: the value of a data item.</li>\n</ul>\n<p><strong>Example:</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b}: {c}&#39;\n</code></pre>\n<p><strong>Callback function:</strong>\n Callback function is in form of:</p>\n<pre><code class=\"lang-js\">(params: Object|Array) =&gt; string\n</code></pre>\n<p>The <code class=\"codespan\">params</code> is the single data set needed by formatter, which is formed as:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n"
  },
  "data.emphasis.label.textStyle": {
    "desc": "<p>The font style of the label.</p>\n"
  },
  "data.emphasis.label.textStyle.color": {
    "desc": "<p>The Color of the text.</p>\n"
  },
  "data.emphasis.label.textStyle.borderWidth": {
    "desc": "<p>The border width of the text.</p>\n"
  },
  "data.emphasis.label.textStyle.borderColor": {
    "desc": "<p>The border color of the text.</p>\n"
  },
  "data.emphasis.label.textStyle.fontFamily": {
    "desc": "<p>The font family of the text.</p>\n"
  },
  "data.emphasis.label.textStyle.fontSize": {
    "desc": "<p>The font size of the text.</p>\n"
  },
  "data.emphasis.label.textStyle.fontWeight": {
    "desc": "<p>The font thick weight of the text.</p>\n<p><strong>Optional:</strong></p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n"
  },
  "shading": {
    "desc": "<p>The coloring effect of 3D graphics in 3D Bar. The following three coloring methods are supported in echarts-gl:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;color&#39;</code>\nOnly display colors, not affected by other factors such as lighting.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;lambert&#39;</code>\nThrough the classic [lambert] coloring, can express the light and dark that the light shows.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;realistic&#39;</code>\nRealistic rendering, combined with <a href=\"#globe.light.ambientCubemap\">light.ambientCubemap</a> and <a href=\"#globe.postEffect\">postEffect</a>, can improve the quality and texture of the display. [Physical Based Rendering (PBR)] (<a href=\"https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/\" target=\"_blank\">https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/</a>) is used in ECharts GL to represent realistic materials.</p>\n</li>\n</ul>\n"
  },
  "realisticMaterial": {
    "desc": "<p>The configuration item of the realistic material is valid when <a href=\"#series-bar3D.shading\">shading</a> is <code class=\"codespan\">&#39;realistic&#39;</code>.</p>\n"
  },
  "realisticMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "realisticMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "realisticMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "realisticMaterial.roughness": {
    "desc": "<p>The <code class=\"codespan\">roughness</code> attribute is used to indicate the roughness of the material, <code class=\"codespan\">0</code> is completely smooth, <code class=\"codespan\">1</code> is completely rough, and the middle value is between the two.</p>\n<p>The following images show the effect of <code class=\"codespan\">roughness</code> in <a href=\"#globe\"><code class=\"codespan\">globe</code></a> <code class=\"codespan\">0.2</code> (smooth) and <code class=\"codespan\">0.8</code> (rough).</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-gloss.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-rough.png\"></p>\n<p>When you want to express more complex materials. You can set <code class=\"codespan\">roughness</code> directly to the texture that stores the roughness with each pixel as follows.</p>\n<p><img width=\"300\" height=\"300\" src=\"documents/asset/gl/img/roughness.png\"></p>\n<p>The more white the color in the texture, the larger the value and the rougher it is. You can get texture resources of different materials from resource websites such as [<a href=\"http://freepbr.com/]\" target=\"_blank\">http://freepbr.com/]</a> (<a href=\"http://freepbr.com/)\" target=\"_blank\">http://freepbr.com/)</a>. You can also generate it yourself using other tools.</p>\n"
  },
  "realisticMaterial.metalness": {
    "desc": "<p>The <code class=\"codespan\">metalness</code> attribute is used to indicate whether the material is metal or non-metal, <code class=\"codespan\">0</code> is non-metallic, <code class=\"codespan\">1</code> is metal, and the middle value is between the two. Usually set to <code class=\"codespan\">0</code> and <code class=\"codespan\">1</code> to meet most of the scenes.</p>\n<p>The picture below show the difference between `metal&#39; and &#39;0&#39; in <a href=\"#globe\">globe</a>.</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-metal.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-non-metal.png\"></p>\n<p>As with <a href=\"#series-bar3D.realisticMaterial.roughness\">roughness</a> you can set <code class=\"codespan\">metalness</code> directly to the metal texture.</p>\n"
  },
  "realisticMaterial.roughnessAdjust": {
    "desc": "<p>Roughness adjustment is useful when using roughness map. The overall roughness of the texture can be adjusted. The default is <code class=\"codespan\">0.5</code>, <code class=\"codespan\">0</code> is completely smooth, <code class=\"codespan\">1</code> is completely rough.</p>\n"
  },
  "realisticMaterial.metalnessAdjust": {
    "desc": "<p>Metalness adjustment is useful when using metalness maps. The overall metallicity of the texture can be adjusted. The default is <code class=\"codespan\">0.5</code>, <code class=\"codespan\">0</code> is non-metal, <code class=\"codespan\">1</code> is metal.</p>\n"
  },
  "realisticMaterial.normalTexture": {
    "desc": "<p>Normal map of material details.</p>\n<p>Using normal maps, you can still display rich shades of detail on the surface of the object with fewer vertices.</p>\n"
  },
  "lambertMaterial": {
    "desc": "<p>The configuration item of the lambert material is valid when <a href=\"#series-bar3D.shading\">shading</a> is <code class=\"codespan\">&#39;lambert&#39;</code>.</p>\n"
  },
  "lambertMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "lambertMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "lambertMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "colorMaterial": {
    "desc": "<p>The color material related configuration item is valid when <a href=\"#series-bar3D.shading\">shading</a> is <code class=\"codespan\">&#39;color&#39;</code>.</p>\n"
  },
  "colorMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "colorMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "colorMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "zlevel": {
    "desc": "<p>The layer in which the component is located.</p>\n<p><code class=\"codespan\">zlevel</code> is used to make layers with Canvas. Graphical elements with different <code class=\"codespan\">zlevel</code> values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate <code class=\"codespan\">zlevel</code>. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid the crash.</p>\n<p>Canvases with bigger <code class=\"codespan\">zlevel</code> will be placed on Canvases with smaller <code class=\"codespan\">zlevel</code>.</p>\n<p><strong>Note:</strong> The layers of the components in echarts-gl need to be separated from the layers of the components in echarts. The same <code class=\"codespan\">zlevel</code> cannot be used for both WebGL and Canvas drawing at the same time.</p>\n"
  },
  "silent": {
    "desc": "<p>Whether the graph doesn`t respond and triggers a mouse event. The default is false, which is to respond to and trigger mouse events.</p>\n"
  },
  "animation": {
    "desc": "<p>Whether to enable animation.</p>\n"
  },
  "animationDurationUpdate": {
    "desc": "<p>The duration time for update the transition animation.</p>\n"
  },
  "animationEasingUpdate": {
    "desc": "<p>The easing effect for update transition animation.</p>\n"
  }
}