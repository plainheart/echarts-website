window.__EC_DOC_option_gl_series_graphGL = {
  "name": {
    "desc": "<p>系列名称，用于 <a href=\"/echarts-website/zh/option.html#tooltip\" target=\"_blank\">tooltip</a> 的显示，<a href=\"/echarts-website/zh/option.html#legend\" target=\"_blank\">legend</a> 的图例筛选，在 <code class=\"codespan\">setOption</code> 更新数据和配置项时用于指定对应的系列。</p>\n"
  },
  "layout": {
    "desc": "<p>布局的算法，支持使用 gephi 的 <a href=\"https://github.com/gephi/gephi/wiki/Force-Atlas-2\" target=\"_blank\">forceAtlas2</a> 算法布局。</p>\n"
  },
  "forceAtlas2": {
    "desc": "<p><a href=\"https://github.com/gephi/gephi/wiki/Force-Atlas-2\" target=\"_blank\">forceAtlas2</a> 布局算法。</p>\n<p>该算法对大规模的网络数据有着高效的布局效率和稳定的布局结果。</p>\n<p>支持通过 <a href=\"#series-graphGL.forceAtlas2.GPU\">forceAtlas2.GPU</a> 配置为 GPU 还是 CPU 布局。</p>\n<p>CPU 实现的优势是兼容性好，而 GPU 实现在高端显卡中有着数十倍甚至上百倍的性能优势。</p>\n<p>下面是在 GTX1070 和 i7 4GHz 的电脑中对一个 2w 个节点（近 5w 条边）的关系图一次布局的迭代的性能对比。</p>\n<p><img width=\"400\" height=\"auto\" src=\"documents/asset/gl/img/gpu-layout-perf.png\"></p>\n"
  },
  "forceAtlas2.GPU": {
    "desc": "<p>是否启用 GPU 布局。</p>\n"
  },
  "forceAtlas2.steps": {
    "desc": "<p>一次更新的迭代次数。因为力引导算法通常会把每次迭代的结果都绘制出来，但是因为绘制时间往往会大于布局的时间，会导致布局的效率降低，这时候我们可以设置更大的<code class=\"codespan\">steps</code>参数，保证布局和绘制的时间均衡，加快布局的速度。</p>\n"
  },
  "forceAtlas2.stopThreshold": {
    "desc": "<p>停止布局的阈值，当布局的全局速度因子小于这个阈值时停止布局。设为 0 则永远不停止。</p>\n"
  },
  "forceAtlas2.barnesHutOptimize": {
    "desc": "<p>是否开启 <a href=\"https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation\" target=\"_blank\">Barnes Hut</a> 优化，在 <a href=\"#series-graphGL.forceAtlas2.GPU\">forceAtlas2.GPU</a> 为 false 时有效。</p>\n<p>默认在节点数 &gt; 1000时开启。</p>\n"
  },
  "forceAtlas2.repulsionByDegree": {
    "desc": "<p>是否根据节点边的数量来计算节点的斥力因子，建议开启。</p>\n"
  },
  "forceAtlas2.linLogMode": {
    "desc": "<p>是否是<code class=\"codespan\">lin-log</code>模式。<code class=\"codespan\">lin-log</code> 模式会让聚类的节点更加紧凑。</p>\n"
  },
  "forceAtlas2.gravity": {
    "desc": "<p>节点受到的向心力。这个力会让节点像中心靠拢。</p>\n"
  },
  "forceAtlas2.gravityCenter": {
    "desc": "<p>向心力中心的位置。默认去初始位置的中间点。</p>\n"
  },
  "forceAtlas2.scaling": {
    "desc": "<p>布局的缩放因子，值越大则节点间的斥力越大。</p>\n"
  },
  "forceAtlas2.edgeWeightInfluence": {
    "desc": "<p>边权重的影响因子。值越大，则边权重对于引力的影响也越大。</p>\n<p>注：这个因子是指数级的，因此在边权重为<code class=\"codespan\">0</code>和<code class=\"codespan\">1</code>的时候无效。</p>\n"
  },
  "forceAtlas2.edgeWeight": {
    "desc": "<p>边的权重分布。映射自 <a href=\"#series-graphGL.links.value\">links.value</a>。</p>\n<p>支持设置为单个数字，这时候就是统一的权重值。</p>\n"
  },
  "forceAtlas2.nodeWeight": {
    "desc": "<p>节点的权重分布。映射自 <a href=\"#series-graphGL.nodes.value\">nodes.value</a>。</p>\n<p>支持设置为单个数字，这时候就是统一的权重值。</p>\n"
  },
  "forceAtlas2.preventOverlap": {
    "desc": "<p>是否开启防止节点重叠。</p>\n"
  },
  "symbol": {
    "desc": "<p>散点的形状。默认为圆形。</p>\n<p>ECharts 提供的标记类型包括 \n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适（如果是 <code class=\"codespan\">symbol</code> 的话就是 <code class=\"codespan\">symbolSize</code>）的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n"
  },
  "symbolSize": {
    "desc": "<p>标记的大小，可以设置成诸如 <code class=\"codespan\">10</code> 这样单一的数字，也可以用数组分开表示宽和高，例如 <code class=\"codespan\">[20, 10]</code> 表示标记宽为<code class=\"codespan\">20</code>，高为<code class=\"codespan\">10</code>。</p>\n<p>如果需要每个数据的图形大小不一样，可以设置为如下格式的回调函数：</p>\n<pre><code class=\"lang-js\">(value: Array|number, params: Object) =&gt; number|Array\n</code></pre>\n<p>其中第一个参数 <code class=\"codespan\">value</code> 为 <a href=\"#series-.data\">data</a> 中的数据值。第二个参数<code class=\"codespan\">params</code> 是其它的数据项参数。</p>\n"
  },
  "itemStyle": {
    "desc": "<p>节点的样式设置。</p>\n"
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
  "lineStyle": {
    "desc": "<p>关系边的样式设置。</p>\n"
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
    "desc": "<p>节点的数据集。</p>\n<p>数据格式同 <a href=\"http://echarts.baidu.com/option.html#series-graph.data\" target=\"_blank\">graph.data</a></p>\n"
  },
  "data.name": {
    "desc": "<p>数据项名称。</p>\n"
  },
  "data.value": {
    "desc": "<p>数据项值。</p>\n"
  },
  "data.itemStyle": {
    "desc": "<p>单个节点的样式。</p>\n"
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
  "nodes": {
    "desc": "<p>同 <a href=\"#series-graphGL.data\">graphGL.data</a>。</p>\n"
  },
  "links": {
    "desc": "<p>节点间的关系数据。\n数据格式同 <a href=\"http://echarts.baidu.com/option.html#series-graph.links\" target=\"_blank\">graph.links</a></p>\n"
  },
  "links.source": {
    "desc": "<p>边的源节点名称的字符串，也支持使用数字表示源节点的索引。</p>\n"
  },
  "links.target": {
    "desc": "<p>边的目标节点名称的字符串，也支持使用数字表示源节点的索引。</p>\n"
  },
  "links.value": {
    "desc": "<p>边的数值。</p>\n"
  },
  "links.lineStyle": {
    "desc": "<p>单条边的样式。</p>\n"
  },
  "links.lineStyle.color": {
    "desc": "<p>线条的颜色。</p>\n<p>除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：</p>\n<pre><code class=\"lang-js\">// 纯白色\n[1, 1, 1, 1]\n</code></pre>\n<p>使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。</p>\n"
  },
  "links.lineStyle.opacity": {
    "desc": "<p>线条的不透明度。</p>\n"
  },
  "links.lineStyle.width": {
    "desc": "<p>线条的宽度。</p>\n"
  },
  "edges": {
    "desc": "<p>同 <a href=\"#series-graphGL.links\">graphGL.links</a></p>\n"
  },
  "zlevel": {
    "desc": "<p>组件所在的层。</p>\n<p><code class=\"codespan\">zlevel</code>用于 Canvas 分层，不同<code class=\"codespan\">zlevel</code>值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的<code class=\"codespan\">zlevel</code>。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。</p>\n<p><code class=\"codespan\">zlevel</code> 大的 Canvas 会放在 <code class=\"codespan\">zlevel</code> 小的 Canvas 的上面。</p>\n<p><strong>注:</strong> echarts-gl 中组件的层需要跟 echarts 中组件的层分开。同一个 <code class=\"codespan\">zlevel</code> 不能同时用于 WebGL 和 Canvas 的绘制。</p>\n"
  }
}