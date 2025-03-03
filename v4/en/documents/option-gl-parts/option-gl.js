window.__EC_DOC_option_gl = {
  "globe": {
    "desc": "<p>Globe component. The component provides the drawing of the Earth and the coordinate system. The developer can display 3D Scatter, 3D Bubble, 3D Bar, 3D Lines on it.</p>\n"
  },
  "geo3D": {
    "desc": "<p>A 3D geographic coordinate system component. The component can draw a 3D GeoJSON and coordinate system. Developers can display 3D Scatter, 3D Bubble, 3D Bar, 3D Lines on it.</p>\n"
  },
  "mapbox3D": {
    "desc": "<p>A geographic component based on mapbox-gl-js. Support for drawing <a href=\"#series-scatter3D\">3D Scatter</a>, <a href=\"#series-lines3D\">3D Lines</a>, <a href=\"#series-bar3D\">3D Bar</a>, <a href=\"#series-map3D\">3D map</a> on mapbox maps. You can take advantage of Mapbox&#39;s powerful map service and ECharts GL&#39;s rich visualization and rendering effects to achieve the visualization you want.</p>\n<p>You need to introduce the official sdk of mapbox before using the mapbox component.</p>\n<pre><code class=\"lang-html\">&lt;script src=&#39;https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.js&#39;&gt;&lt;/script&gt;\n&lt;link href=&#39;https://api.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.css&#39; rel=&#39;stylesheet&#39; /&gt;\n</code></pre>\n<p>Then get the token provided by mapbox and set it to <code class=\"codespan\">mapbox.accessToken</code>.</p>\n<pre><code class=\"lang-js\">mapboxgl.accessToken = &#39;your token&#39;;\n</code></pre>\n<p>Then you can use the mapbox component just like any other component.</p>\n<pre><code class=\"lang-js\">chart.setOption({\n    mapbox: {\n        style: &#39;mapbox://styles/mapbox/dark-v9&#39;\n    }\n});\n</code></pre>\n<p>Go to <a href=\"https://www.mapbox.com/mapbox-gl-js/api/\" target=\"_blank\">https://www.mapbox.com/mapbox-gl-js/api/</a> for more details on <code class=\"codespan\">mapbox-gl-js sdk</code>.</p>\n"
  },
  "grid3D": {
    "desc": "<p>3D cartesian coordinate system component. It requires <a href=\"#xAxis3D\">xAxis3D</a>, <a href=\"#yAxis3D\">yAxis3D</a>and <a href=\"#zAxis3D\">zAxis3D</a> axis components to be used together.</p>\n<p>You can draw <a href=\"#series-line3D\">3D Lines</a>, <a href=\"#series-bar3D\">3D Bar</a>, <a href=\"#series-scatter3D\">3D Scatter</a>, <a href=\"#series-surface\">surface</a> on the 3D Cartesian coordinate system.</p>\n<p>You can set the <a href=\"#grid3D.postEffect\">postEffect</a>, <a href=\"#grid3D.light\">light</a> and other configuration items to improve the display of 3D charts in <code class=\"codespan\">grid3D</code>.</p>\n<p>Below is a description of the axis configuration items in grid3D. </p>\n<p><img width=\"700\" height=\"auto\" src=\"documents/asset/gl/img/grid3D.png\"></p>\n<hr>\n<p><strong>Note：</strong> The <a href=\"#xAxis3D.axisLine\">axisLine</a>, <a href=\"#xAxis3D.axisTick\">axisTick</a>, <a href=\"#xAxis3D.axisLabel\">axisLabel</a>, <a href=\"#xAxis3D.splitLine\">splitLine</a>, <a href=\"#xAxis3D.splitArea\">splitArea</a>, <a href=\"#xAxis3D.axisPointer\">axisPointer</a> set separately on <a href=\"#xAxis3D\">xAxis3D</a>, <a href=\"#yAxis3D\">yAxis3D</a>, <a href=\"#zAxis3D\">zAxis3D</a> will cover the corresponding configuration items under <a href=\"#grid3D\">grid3D</a>.</p>\n"
  },
  "xAxis3D": {
    "desc": "<p>The X-axis in a 3D cartesian coordinate system.\nYou can use <a href=\"#xAxis3D.grid3DIndex\">grid3DIndex</a> to index <a href=\"#grid3D\">3D cartesian coordinate system</a>.</p>\n<p>The <a href=\"#xAxis3D.axisLine\">axisLine</a>, <a href=\"#xAxis3D.axisTick\">axisTick</a>, <a href=\"#xAxis3D.axisLabel\">axisLabel</a>, <a href=\"#xAxis3D.splitLine\">splitLine</a>, <a href=\"#xAxis3D.splitArea\">splitArea</a>, <a href=\"#xAxis3D.axisPointer\">axisPointer</a> set separately on <a href=\"#xAxis3D\">xAxis3D</a> will cover the corresponding configuration items under <a href=\"#grid3D\">grid3D</a>.</p>\n"
  },
  "yAxis3D": {
    "desc": "<p>The Y-axis in a 3D cartesian coordinate system.\nYou can use <a href=\"#yAxis3D.grid3DIndex\">grid3DIndex</a> to index <a href=\"#grid3D\">3D cartesian coordinate system</a>.</p>\n<p>The <a href=\"#yAxis3D.axisLine\">axisLine</a>, <a href=\"#yAxis3D.axisTick\">axisTick</a>, <a href=\"#yAxis3D.axisLabel\">axisLabel</a>, <a href=\"#yAxis3D.splitLine\">splitLine</a>, <a href=\"#yAxis3D.splitArea\">splitArea</a>, <a href=\"#yAxis3D.axisPointer\">axisPointer</a> set separately on <a href=\"#yAxis3D\">yAxis3D</a> will cover the corresponding configuration items under <a href=\"#grid3D\">grid3D</a>.</p>\n"
  },
  "zAxis3D": {
    "desc": "<p>The Z-axis in a 3D cartesian coordinate system.\nYou can use <a href=\"#zAxis3D.grid3DIndex\">grid3DIndex</a> to index <a href=\"#grid3D\">3D cartesian coordinate system</a>.</p>\n<p>The <a href=\"#zAxis3D.axisLine\">axisLine</a>, <a href=\"#zAxis3D.axisTick\">axisTick</a>, <a href=\"#zAxis3D.axisLabel\">axisLabel</a>, <a href=\"#zAxis3D.splitLine\">splitLine</a>, <a href=\"#zAxis3D.splitArea\">splitArea</a>, <a href=\"#zAxis3D.axisPointer\">axisPointer</a> set separately on <a href=\"#zAxis3D\">zAxis3D</a> will cover the corresponding configuration items under <a href=\"#grid3D\">grid3D</a>.</p>\n"
  },
  "series": {
    "desc": "<p>Series list. Each series decides its diagram type through <code class=\"codespan\">type</code>.</p>\n<p>ECharts-gl adds a rich 3D visualization type.\nIncluding [3D bar] (~series.bar3D), [3D scatter] (~series.scatter3D), [3D lines] (~series.lines3D), [surface] (~series. Surface),\nMost visualization types can be used in a variety of coordinate system components, and are well integrated with the original echarts legend, tooltip, and other interactive components.</p>\n<p>At the same time, more functional enhancements have been made to the original 2D chart. For example, for scatter chart and diagrams of large amounts of data, you can use <a href=\"#series.scatterGL\">scatterGL</a>, <a href=\"#series.graphGL\">graphGL</a> provided in echarts-gl to speed up drawing and operations.</p>\n"
  },
  "series-scatter3D": {
    "desc": "<p>3D scatter chart. It can be used to display data in <a href=\"#grid3D\">grid3D</a>, <a href=\"#geo3D\"> geo3D</a>, <a href=\"#globe\">globe</a> using attributes such as size、color and so on.</p>\n<p>This example is a 3D simplex noise drawn with a bubble chart.</p>\n<p><img width=\"500\" height=\"auto\" src=\"documents/asset/gl/img/scatter3D.png\"></p>\n"
  },
  "series-bar3D": {
    "desc": "<p>3D bar. It can be used to display data in <a href=\"#grid3D\">grid3D</a>, <a href=\"#geo3D\"> geo3D</a>, <a href=\"#globe\">globe</a> using attributes such as size 、color and so on.</p>\n<p>The figure below shows the population density data of the world through a 3D bar chart on [geo3D] (~geo3D).</p>\n<p><img width=\"700\" height=\"auto\" src=\"documents/asset/gl/img/geo-bar3D.jpg\"></p>\n"
  },
  "series-line3D": {
    "desc": "<p>3D Line. Can be used for [grid3D] (~grid3D)</p>\n<p><img width=\"600\" height=\"auto\" src=\"documents/asset/gl/img/line3D.png\"></p>\n"
  },
  "series-lines3D": {
    "desc": "<p>3D lines. Like the 2D [lines] (<a href=\"/echarts-website/zh/option.html#series-line)\" target=\"_blank\">/echarts-website/zh/option.html#series-line)</a>, it is used to represent the line data from the start point to the end point. More is used in geographic visualization.</p>\n<p>Below is an example of a visual airplane flight using <a href=\"#series-lines3D\">lines3D</a> on <a href=\"#globe\">globe</a>.</p>\n<p><img width=\"700\" height=\"auto\" src=\"documents/asset/gl/img/globe-airline.png\"></p>\n"
  },
  "series-map3D": {
    "desc": "<p><strong>3D map</strong></p>\n<p>3D maps are mainly used for visualizing geographic area data. With the [visualMap] (<a href=\"http://echarts.baidu.com/option.html#visualMap\" target=\"_blank\">http://echarts.baidu.com/option.html#visualMap</a>) component, it can be used to display data such as population distribution density in different regions.</p>\n<p>Compared to 2D maps, 3D maps can set different heights for each area. This height can be used to display data and to display the height of the building in the building data.</p>\n"
  },
  "series-surface": {
    "desc": "<p>Surface. Support to drawn the [Parameter surface] (<a href=\"https://en.wikipedia.org/wiki/Parametric_surface\" target=\"_blank\">https://en.wikipedia.org/wiki/Parametric_surface</a>) by <a href=\"#series-surface.parametric\">parametric</a>.</p>\n<p>The figure below is a parametric surface similar to a metal part configured as a metal material.</p>\n<p><img width=\"500\" height=\"auto\" src=\"documents/asset/gl/img/parametric-surface.png\"></p>\n"
  },
  "series-polygons3D": {
    "desc": "<p><code class=\"codespan\">polygons3D</code> is used to visualize polygon data with high information on the map, which is often used for drawing of buildings.\nThe picture below shows the nearly 50w number of New York buildings drawn with <code class=\"codespan\">polygons3D</code>.</p>\n<p><img width=\"900\" height=\"auto\" src=\"documents/asset/gl/img/polygons3D-ny.jpg\"></p>\n"
  },
  "series-scatterGL": {
    "desc": "<p>A 2D scatter/bubble plot drawn using WebGL.</p>\n<p>It is used in the same way as <a href=\"http://echarts.baidu.com/option.html#series-scatter\" target=\"_blank\">scatter</a>.</p>\n"
  },
  "series-graphGL": {
    "desc": "<p>Uses WebGL to drawn the relational chart, support the layout and rendering of large-scale network/relational data.</p>\n"
  },
  "series-flowGL": {
    "desc": "<p>The <code class=\"codespan\">flowGL</code> component visualizes the traces of the vector field through the particle effects implemented by WebGL.</p>\n<p>The figure below shows the effect of the global wind field visualized by <code class=\"codespan\">flowGL</code>.</p>\n<p><img width=\"700\" height=\"auto\" src=\"documents/asset/gl/img/flowGL-wind.jpg\"></p>\n"
  }
}