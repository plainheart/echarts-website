window.__EC_DOC_option_gl = {
  "globe": {
    "desc": "<p>地球组件。组件提供了地球的绘制以及相应的坐标系，开发者可以在上面展示三维的散点图、气泡图、柱状图、飞线图。</p>\n"
  },
  "geo3D": {
    "desc": "<p>三维的地理坐标系组件。组件提供了三维 GeoJSON 的绘制以及相应的坐标系，开发者可以在上面展示三维的散点图、气泡图、柱状图、飞线图。</p>\n"
  },
  "mapbox3D": {
    "desc": "<p>基于 mapbox-gl-js 的地理组件。支持在 mapbox 的地图上绘制三维的散点图，飞线图，柱状图和地图。你可以利用 Mapbox 强大的地图服务和 ECharts GL 丰富的可视化和渲染效果实现你想要的可视化作品。</p>\n<p>在使用 mapbox 组件之前你需要先引入 mapbox 的官方 sdk。</p>\n<pre><code class=\"lang-html\">&lt;script src=&#39;https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.js&#39;&gt;&lt;/script&gt;\n&lt;link href=&#39;https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.css&#39; rel=&#39;stylesheet&#39; /&gt;\n</code></pre>\n<p>然后获取到 mapbox 提供的 token 后设置到 <code class=\"codespan\">mapbox.accessToken</code> 上。</p>\n<pre><code class=\"lang-js\">mapboxgl.accessToken = &#39;你的 token&#39;;\n</code></pre>\n<p>接下来你就可以像使用其它组件一样使用 mapbox 组件了。</p>\n<pre><code class=\"lang-js\">chart.setOption({\n    mapbox: {\n        style: &#39;mapbox://styles/mapbox/dark-v9&#39;\n    }\n});\n</code></pre>\n<p>可以前往 <a href=\"https://www.mapbox.com/mapbox-gl-js/api/\" target=\"_blank\">https://www.mapbox.com/mapbox-gl-js/api/</a> 了解更详细的关于 mapbox-gl-js sdk 的内容。</p>\n"
  },
  "grid3D": {
    "desc": "<p>三维笛卡尔坐标系组件。需要和 <a href=\"#xAxis3D\">xAxis3D</a>，<a href=\"#yAxis3D\">yAxis3D</a>，<a href=\"#zAxis3D\">zAxis3D</a> 三个坐标轴组件一起使用。</p>\n<p>可以在三维笛卡尔坐标系上绘制<a href=\"#series-line3D\">三维折线图</a>，<a href=\"#series-bar3D\">三维柱状图</a>，<a href=\"#series-scatter3D\">三维散点/气泡图</a>，<a href=\"#series-surface\">曲面图</a>。</p>\n<p>你可以设置 <a href=\"#grid3D.postEffect\">postEffect</a>, <a href=\"#grid3D.light\">light</a> 等配置项提升<code class=\"codespan\">grid3D</code>中三维图表的显示效果。</p>\n<p>下面是 grid3D 中坐标轴配置项的说明。</p>\n<p><img width=\"700\" height=\"auto\" src=\"documents/asset/gl/img/grid3D.png\"></p>\n<hr>\n<blockquote>\n<p><strong>注意：</strong> <a href=\"#xAxis3D\">xAxis3D</a>，<a href=\"#yAxis3D\">yAxis3D</a>，<a href=\"#zAxis3D\">zAxis3D</a> 上单独设置的 <a href=\"#xAxis3D.axisLine\">axisLine</a>, <a href=\"#xAxis3D.axisTick\">axisTick</a>, <a href=\"#xAxis3D.axisLabel\">axisLabel</a>, <a href=\"#xAxis3D.splitLine\">splitLine</a>, <a href=\"#xAxis3D.splitArea\">splitArea</a>, <a href=\"#xAxis3D.axisPointer\">axisPointer</a>` 会覆盖<a href=\"#grid3D\">grid3D</a> 下的相应配置项。</p>\n</blockquote>\n"
  },
  "xAxis3D": {
    "desc": "<p>三维笛卡尔坐标系中的 x 轴。可以通过 <a href=\"#xAxis3D.grid3DIndex\">grid3DIndex</a> 索引所在的<a href=\"#grid3D\">三维笛卡尔坐标系</a>。</p>\n<p>在<code class=\"codespan\">xAxis3D</code>下设置的 <a href=\"#xAxis3D.axisLine\">axisLine</a>, <a href=\"#xAxis3D.axisTick\">axisTick</a>, <a href=\"#xAxis3D.axisLabel\">axisLabel</a>, <a href=\"#xAxis3D.splitLine\">splitLine</a>, <a href=\"#xAxis3D.splitArea\">splitArea</a>, <a href=\"#xAxis3D.axisPointer\">axisPointer</a> 会覆盖 <a href=\"#grid3D\">grid3D</a> 下的相应配置项。</p>\n"
  },
  "yAxis3D": {
    "desc": "<p>三维笛卡尔坐标系中的 y 轴。可以通过 <a href=\"#yAxis3D.grid3DIndex\">grid3DIndex</a> 索引所在的<a href=\"#grid3D\">三维笛卡尔坐标系</a>。</p>\n<p>在<code class=\"codespan\">yAxis3D</code>下设置的 <a href=\"#yAxis3D.axisLine\">axisLine</a>, <a href=\"#yAxis3D.axisTick\">axisTick</a>, <a href=\"#yAxis3D.axisLabel\">axisLabel</a>, <a href=\"#yAxis3D.splitLine\">splitLine</a>, <a href=\"#yAxis3D.splitArea\">splitArea</a>, <a href=\"#yAxis3D.axisPointer\">axisPointer</a> 会覆盖 <a href=\"#grid3D\">grid3D</a> 下的相应配置项。</p>\n"
  },
  "zAxis3D": {
    "desc": "<p>三维笛卡尔坐标系中的 z 轴。可以通过 <a href=\"#zAxis3D.grid3DIndex\">grid3DIndex</a> 索引所在的<a href=\"#grid3D\">三维笛卡尔坐标系</a>。</p>\n<p>在<code class=\"codespan\">zAxis3D</code>下设置的 <a href=\"#zAxis3D.axisLine\">axisLine</a>, <a href=\"#zAxis3D.axisTick\">axisTick</a>, <a href=\"#zAxis3D.axisLabel\">axisLabel</a>, <a href=\"#zAxis3D.splitLine\">splitLine</a>, <a href=\"#zAxis3D.splitArea\">splitArea</a>, <a href=\"#zAxis3D.axisPointer\">axisPointer</a> 会覆盖 <a href=\"#grid3D\">grid3D</a> 下的相应配置项。</p>\n"
  },
  "series": {
    "desc": "<p>系列列表。每个系列通过 <code class=\"codespan\">type</code> 决定自己的图表类型。</p>\n<p>echarts-gl 加入了丰富的三维可视化类型，包括 <a href=\"#series.bar3D\">三维柱状图 bar3D</a>，<a href=\"#series.scatter3D\">三维散点图 scatter3D</a>，<a href=\"#series.lines3D\">三维飞线 lines3D</a>，<a href=\"#series.surface\">曲面图 surface</a>，大部分可视化类型都能在多种坐标系组件中使用。而且与 echarts 原先的图例，tooltip 等交互组件有良好的集成。</p>\n<p>同时,对原先的二维图表也进行了更多功能上的增强。例如，对于大量数据的散点图和关系图，你可以使用 echarts-gl 中提供的 <a href=\"#series.scatterGL\">scatterGL</a>，<a href=\"#series.graphGL\">graphGL</a> 加速绘制和运算。</p>\n"
  },
  "series-scatter3D": {
    "desc": "<p>三维散点/气泡图。可以用于<a href=\"#grid3D\">三维直角坐标系 grid3D</a>，<a href=\"#geo3D\">三维地理坐标系 geo3D</a>，<a href=\"#globe\">地球 globe</a>，通过大小，颜色等属性展示数据。</p>\n<p>下图示一个三维的 simplex noise 用气泡图绘制出来的例子。</p>\n<p><img width=\"500\" height=\"auto\" src=\"documents/asset/gl/img/scatter3D.png\"></p>\n"
  },
  "series-bar3D": {
    "desc": "<p>三维柱状图。可以用于<a href=\"#grid3D\">三维直角坐标系 grid3D</a>，<a href=\"#geo3D\">三维地理坐标系 geo3D</a>，<a href=\"#globe\">地球 globe</a>，通过高度，颜色等属性展示数据。</p>\n<p>下图就是在 <a href=\"#geo3D\">geo3D</a> 上通过三维柱状图展示世界的人口密度数据。</p>\n<p><img width=\"700\" height=\"auto\" src=\"documents/asset/gl/img/geo-bar3D.jpg\"></p>\n"
  },
  "series-line3D": {
    "desc": "<p>三维折线图。可以用于<a href=\"#grid3D\">三维直角坐标系 grid3D</a>。</p>\n<p><img width=\"600\" height=\"auto\" src=\"documents/asset/gl/img/line3D.png\"></p>\n"
  },
  "series-lines3D": {
    "desc": "<p>三维的飞线图。跟二维的<a href=\"/echarts-website/zh/option.html#series-line\" target=\"_blank\">飞线图</a>一样用于表现起点终点的线数据。更多用在地理可视化上。</p>\n<p>下图是使用 <a href=\"#series-lines3D\">lines3D</a> 在 <a href=\"#globe\">globe</a> 上可视化飞机航班的一个例子。</p>\n<p><img width=\"700\" height=\"auto\" src=\"documents/asset/gl/img/globe-airline.png\"></p>\n"
  },
  "series-map3D": {
    "desc": "<p><strong>三维地图</strong></p>\n<p>三维地图主要用于地理区域数据的可视化，配合 <a href=\"http://echarts.baidu.com/option.html#visualMap\" target=\"_blank\">visualMap</a> 组件用于展示不同区域的人口分布密度等数据。</p>\n<p>相比于二维的地图，三维地图还能每个区域设置不同的高度，这个高度能够用来展示数据，也能够用来显示建筑数据中建筑的高度。</p>\n"
  },
  "series-surface": {
    "desc": "<p>曲面图。支持通过 <a href=\"#series-surface.parametric\">parametric</a> 绘制<a href=\"https://en.wikipedia.org/wiki/Parametric_surface\" target=\"_blank\">参数曲面</a>。</p>\n<p>下图就是一个配置成金属材质的类似一个金属零件的参数曲面。</p>\n<p><img width=\"500\" height=\"auto\" src=\"documents/asset/gl/img/parametric-surface.png\"></p>\n"
  },
  "series-polygons3D": {
    "desc": "<p><code class=\"codespan\">polygons3D</code> 用于可视化地图上带有高度信息的多边形数据，常用于建筑群的绘制。下图就是用<code class=\"codespan\">polygons3D</code>绘制的近 50w 数量的纽约建筑群。</p>\n<p><img width=\"900\" height=\"auto\" src=\"documents/asset/gl/img/polygons3D-ny.jpg\"></p>\n"
  },
  "series-scatterGL": {
    "desc": "<p>使用 WebGL 绘制的二维散点/气泡图。</p>\n<p>使用方式同 <a href=\"http://echarts.baidu.com/option.html#series-scatter\" target=\"_blank\">scatter</a>。</p>\n"
  },
  "series-graphGL": {
    "desc": "<p>使用 WebGL 绘制的关系图，支持大规模的网络/关系数据的布局和绘制。</p>\n"
  },
  "series-flowGL": {
    "desc": "<p><code class=\"codespan\">flowGL</code> 组件通过 WebGL 实现的粒子效果可视化向量场的迹线。</p>\n<p>下图是全球的风场通过<code class=\"codespan\">flowGL</code>可视化后的效果。</p>\n<p><img width=\"700\" height=\"auto\" src=\"documents/asset/gl/img/flowGL-wind.jpg\"></p>\n"
  }
}