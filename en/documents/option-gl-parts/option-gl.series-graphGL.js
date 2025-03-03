window.__EC_DOC_option_gl_series_graphGL = {
  "name": {
    "desc": "<p>Series name used for displaying in <a href=\"/echarts-website/zh/option.html#tooltip\" target=\"_blank\">tooltip</a> and filtering with <a href=\"/echarts-website/zh/option.html#legend\" target=\"_blank\">legend</a>, or updating data and configuration with <code class=\"codespan\">setOption</code>.</p>\n"
  },
  "layout": {
    "desc": "<p>The continuous graph layout algorithm supports the <a href=\"https://github.com/gephi/gephi/wiki/Force-Atlas-2\" target=\"_blank\">forceAtlas2</a> algorithm layout using gephi.</p>\n"
  },
  "forceAtlas2": {
    "desc": "<p><a href=\"https://github.com/gephi/gephi/wiki/Force-Atlas-2\" target=\"_blank\">forceAtlas2</a> a continuous graph layout algorithm.</p>\n<p>The algorithm has efficient layout efficiency and stable layout results for large-scale network data.</p>\n<p>Support for configuring GPU or CPU layout via <a href=\"#series-graphGL.forceAtlas2.GPU\">forceAtlas2.GPU</a>.</p>\n<p>The advantage of the CPU is that it is compatible, and the GPU implementation has dozens or even hundreds of performance advantages in high-end graphics cards.</p>\n<p>Below is a performance comparison of the iteration of a layout of a 2w node (nearly 5w edges) on a GTX1070 and an i7 4GHz computer.</p>\n<p><img width=\"400\" height=\"auto\" src=\"documents/asset/gl/img/gpu-layout-perf.png\"></p>\n"
  },
  "forceAtlas2.GPU": {
    "desc": "<p>Whether to enable GPU layout.</p>\n"
  },
  "forceAtlas2.steps": {
    "desc": "<p>The number of iterations of an update. Because the force-guided algorithm usually draws the results of each iteration, but because the drawing time tends to be greater than the layout time, the layout efficiency will be reduced. At this time, we can set a larger <code class=\"codespan\">steps</code> parameter to ensure the layout and Draw time equalization and speed up the layout.</p>\n"
  },
  "forceAtlas2.stopThreshold": {
    "desc": "<p>Stops the threshold of the layout and stops the layout when the global velocity factor of the layout is less than this threshold. Set to 0 to never stop.</p>\n"
  },
  "forceAtlas2.barnesHutOptimize": {
    "desc": "<p>Whether to enable [Barnes Hut] (<a href=\"https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation\" target=\"_blank\">https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation</a>) optimization, valid when <a href=\"#series-graphGL.forceAtlas2.GPU\">forceAtlas2.GPU</a> is false.</p>\n<p>The default is on when the number of nodes &gt; 1000.</p>\n"
  },
  "forceAtlas2.repulsionByDegree": {
    "desc": "<p>Whether to calculate the repulsion factor of the node according to the degree of nodes, it is recommended to turn it on.</p>\n"
  },
  "forceAtlas2.linLogMode": {
    "desc": "<p>Whether it is the <code class=\"codespan\">lin-log</code> mode. The <code class=\"codespan\">lin-log</code> mode makes the nodes of the cluster more compact.</p>\n"
  },
  "forceAtlas2.gravity": {
    "desc": "<p>The gravity that the node is subjected to. This force will make the nodes close to the center.</p>\n"
  },
  "forceAtlas2.gravityCenter": {
    "desc": "<p>The position of the gravity center. By default, is the middle point of the initial position.</p>\n"
  },
  "forceAtlas2.scaling": {
    "desc": "<p>The scaling factor of the layout. The larger the value, the greater the repulsive force between the nodes.</p>\n"
  },
  "forceAtlas2.edgeWeightInfluence": {
    "desc": "<p>The influence factor of the edge weight. The larger the value, the greater the effect of edge weight on gravity.</p>\n<p>Note: This factor is exponential, so it is invalid when the edge weights are <code class=\"codespan\">0</code> and <code class=\"codespan\">1</code>.</p>\n"
  },
  "forceAtlas2.edgeWeight": {
    "desc": "<p>The weight distribution of the edges. Mapped from <a href=\"#series-graphGL.links.value\">links.value</a>.</p>\n<p>Support is set to a single number, which is the uniform weight value.</p>\n"
  },
  "forceAtlas2.nodeWeight": {
    "desc": "<p>The weight distribution of the nodes. Mapped from <a href=\"#series-graphGL.nodes.value\">nodes.value</a>.</p>\n<p>Support is set to a single number, which is the uniform weight value.</p>\n"
  },
  "forceAtlas2.preventOverlap": {
    "desc": "<p>Whether to prevent the nodes from overlapping.</p>\n"
  },
  "symbol": {
    "desc": "<p>The shape of the scatter. The default is a circle.</p>\n<p>Icon types provided by ECharts includes \n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n"
  },
  "symbolSize": {
    "desc": "<p> symbol size. It can be set to single numbers like <code class=\"codespan\">10</code>, or use an array to represent width and height. For example, <code class=\"codespan\">[20, 10]</code> means symbol width is <code class=\"codespan\">20</code>, and height is<code class=\"codespan\">10</code>.</p>\n<p>If size of symbols needs to be different, you can set with callback function in the following format:</p>\n<pre><code class=\"lang-js\">(value: Array|number, params: Object) =&gt; number|Array\n</code></pre>\n<p>The first parameter <code class=\"codespan\">value</code> is the value in <a href=\"#series-.data\">data</a>, and the second parameter <code class=\"codespan\">params</code> is the rest parameters of data item.</p>\n"
  },
  "itemStyle": {
    "desc": "<p>The style settings for the node.</p>\n"
  },
  "itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "itemStyle.borderWidth": {
    "desc": "<p>Sets the width of the border.</p>\n"
  },
  "itemStyle.borderColor": {
    "desc": "<p>Sets the color of the border.</p>\n"
  },
  "lineStyle": {
    "desc": "<p>The style setting of the relationship line.</p>\n"
  },
  "lineStyle.color": {
    "desc": "<p>The color of the line. </p>\n<p>In addition to color strings, RGBA values represented by arrays are supported, for example:</p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "lineStyle.opacity": {
    "desc": "<p>The opacity of the line.</p>\n"
  },
  "lineStyle.width": {
    "desc": "<p>The width of the line.</p>\n"
  },
  "data": {
    "desc": "<p>The data set of the node.</p>\n<p>The data format is the same as <a href=\"http://echarts.baidu.com/option.html#series-graph.data\" target=\"_blank\">graph.data</a></p>\n"
  },
  "data.name": {
    "desc": "<p>The name of the data item.</p>\n"
  },
  "data.value": {
    "desc": "<p>Data item value.</p>\n"
  },
  "data.itemStyle": {
    "desc": "<p>The style of a single node.</p>\n"
  },
  "data.itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "data.itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "data.itemStyle.borderWidth": {
    "desc": "<p>Sets the width of the border.</p>\n"
  },
  "data.itemStyle.borderColor": {
    "desc": "<p>Sets the color of the border.</p>\n"
  },
  "nodes": {
    "desc": "<p>Same as <a href=\"#series-graphGL.data\">graphGL.data</a>.</p>\n"
  },
  "links": {
    "desc": "<p>Relational data between nodes.\nThe data format is the same as <a href=\"http://echarts.baidu.com/option.html#series-graph.links\" target=\"_blank\">graph.links</a></p>\n"
  },
  "links.source": {
    "desc": "<p>A string of source node names for edges also supports the use of numbers to represent the index of the source node.</p>\n"
  },
  "links.target": {
    "desc": "<p>A string of the target node name for the edge, which also supports the use of numbers to represent the index of the source node.</p>\n"
  },
  "links.value": {
    "desc": "<p>The value of the edge.</p>\n"
  },
  "links.lineStyle": {
    "desc": "<p>The style of a single edge.</p>\n"
  },
  "links.lineStyle.color": {
    "desc": "<p>The color of the line. </p>\n<p>In addition to color strings, RGBA values represented by arrays are supported, for example:</p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "links.lineStyle.opacity": {
    "desc": "<p>The opacity of the line.</p>\n"
  },
  "links.lineStyle.width": {
    "desc": "<p>The width of the line.</p>\n"
  },
  "edges": {
    "desc": "<p>Same as <a href=\"#series-graphGL.links\">graphGL.links</a></p>\n"
  },
  "zlevel": {
    "desc": "<p>The layer in which the component is located.</p>\n<p><code class=\"codespan\">zlevel</code> is used to make layers with Canvas. Graphical elements with different <code class=\"codespan\">zlevel</code> values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate <code class=\"codespan\">zlevel</code>. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid the crash.</p>\n<p>Canvases with bigger <code class=\"codespan\">zlevel</code> will be placed on Canvases with smaller <code class=\"codespan\">zlevel</code>.</p>\n<p><strong>Note:</strong> The layers of the components in echarts-gl need to be separated from the layers of the components in echarts. The same <code class=\"codespan\">zlevel</code> cannot be used for both WebGL and Canvas drawing at the same time.</p>\n"
  }
}