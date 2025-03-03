window.__EC_DOC_option_series_custom = {
  "id": {
    "desc": "<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"
  },
  "name": {
    "desc": "<p>Series name used for displaying in <a href=\"#tooltip\">tooltip</a> and filtering with <a href=\"#legend\">legend</a>, or updating data and configuration with <code class=\"codespan\">setOption</code>.</p>\n"
  },
  "legendHoverLink": {
    "desc": "<p>Whether to enable highlighting chart when <a href=\"#legend\">legend</a> is being hovered.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "coordinateSystem": {
    "desc": "<p>The coordinate used in the series, whose options are:</p>\n<ul>\n<li><p><code class=\"codespan\">null</code> or <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>  No coordinate.</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;cartesian2d&#39;</code></p>\n<p>  Use a two-dimensional rectangular coordinate (also known as Cartesian coordinate), with <a href=\"#series-custom.xAxisIndex\">xAxisIndex</a> and <a href=\"#series-custom.yAxisIndex\">yAxisIndex</a> to assign the corresponding axis component.</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;polar&#39;</code></p>\n<p>  Use polar coordinates, with <a href=\"#series-custom.polarIndex\">polarIndex</a> to assign the corresponding polar coordinate component.</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;geo&#39;</code></p>\n<p>  Use geographic coordinate, with <a href=\"#series-custom.geoIndex\">geoIndex</a> to assign the corresponding geographic coordinate components.</p>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;none&#39;</code></p>\n<p>  Do not use coordinate system.</p>\n</li>\n</ul>\n"
  },
  "xAxisIndex": {
    "desc": "<p>Index of <a href=\"#xAxis\">x axis</a> to combine with, which is  useful for multiple x axes in one chart.</p>\n"
  },
  "yAxisIndex": {
    "desc": "<p>Index of <a href=\"#yAxis\">y axis</a> to combine with, which is  useful for multiple y axes in one chart.</p>\n"
  },
  "polarIndex": {
    "desc": "<p>Index of <a href=\"#polar\">polar coordinate</a> to combine with, which is useful for multiple polar axes in one chart.</p>\n"
  },
  "geoIndex": {
    "desc": "<p>Index of <a href=\"#geo\">geographic coordinate</a> to combine with, which is useful for multiple geographic axes in one chart.</p>\n"
  },
  "calendarIndex": {
    "desc": "<p>Index of <a href=\"#calendar\">calendar coordinates</a> to combine with, which is useful for multiple calendar coordinates in one chart.</p>\n"
  },
  "renderItem": {
    "desc": "<p><code class=\"codespan\">custom series</code> requires developers to write a render logic by themselves. This render logic is called <a href=\"#series-custom.renderItem\">renderItem</a>.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">var option = {\n    ...,\n    series: [{\n        type: &#39;custom&#39;,\n        renderItem: function (params, api) {\n            var categoryIndex = api.value(0);\n            var start = api.coord([api.value(1), categoryIndex]);\n            var end = api.coord([api.value(2), categoryIndex]);\n            var height = api.size([0, 1])[1] * 0.6;\n\n            var rectShape = echarts.graphic.clipRectByRect({\n                x: start[0],\n                y: start[1] - height / 2,\n                width: end[0] - start[0],\n                height: height\n            }, {\n                x: params.coordSys.x,\n                y: params.coordSys.y,\n                width: params.coordSys.width,\n                height: params.coordSys.height\n            });\n\n            return rectShape &amp;&amp; {\n                type: &#39;rect&#39;,\n                shape: rectShape,\n                style: api.style()\n            };\n        },\n        data: data\n    }]\n}\n</code></pre>\n<p><a href=\"#series-custom.renderItem\">renderItem</a> will be called on each data item.</p>\n<p><a href=\"#series-custom.renderItem\">renderItem</a> provides two parameters:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.arguments.params\">params</a>: provides info about the current series and data and coordinate system.</li>\n<li><a href=\"#series-custom.renderItem.arguments.api\">api</a>: includes some methods.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem\">renderItem</a> method should returns graphic elements definitions.See <a href=\"#series-custom.renderItem.return\">renderItem.return</a>.</p>\n<p>Generally, the main process of <a href=\"#series-custom.renderItem\">renderItem</a> is that retrieve value from data and convert them to graphic elements on the current coordinate system. Two methods in <a href=\"#series-custom.renderItem.arguments.api\">renderItem.arguments.api</a> are always used in this procedure:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.arguments.api.value\">api.value(...)</a> is used to retrieve value from data. For example, <code class=\"codespan\">api.value(0)</code> retrieve the value of the first dimension in the current data item.</li>\n<li><a href=\"#series-custom.renderItem.arguments.api.coord\">api.coord(...)</a> is used to convert data to coordinate. For example, <code class=\"codespan\">var point = api.coord([api.value(0), api.value(1)])</code> converet the data to the point on the current coordinate system.</li>\n</ul>\n<p>Sometimes <a href=\"#series-custom.renderItem.arguments.api.size\">api.size(...)</a> method is needed, which calculates the size on the coordinate system by a given data range.</p>\n<p>Moreover, <a href=\"#series-custom.renderItem.arguments.api.style\">api.style(...)</a> method can be used to set style. It provides not only the style settings specified in <a href=\"#series-custom.itemStyle\">series.itemStyle</a>, but also the result of visual mapping. This method can also be called like <code class=\"codespan\">api.style({fill: &#39;green&#39;, stroke: &#39;yellow&#39;})</code> to override those style settings.</p>\n"
  },
  "renderItem.arguments": {
    "desc": "<p>Parameters of <code class=\"codespan\">renderItem</code>.</p>\n"
  },
  "renderItem.arguments.params": {
    "desc": "<p>The first parameter of <code class=\"codespan\">renderItem</code>, including:</p>\n<pre><code class=\"lang-js\">{\n    context: // {string} An object that developers can store something temporarily here. Life cycle: current round of rendering.\n    seriesId: // {string} The id of this series.\n    seriesName: // {string} The name of this series.\n    seriesIndex: // {number} The index of this series.\n    dataIndex: // {number} The index of this data item.\n    dataIndexInside: // {number} The index of this data item in the current data window (see dataZoom).\n    dataInsideLength: // {number} The count of data in the current data window (see dataZoom).\n    actionType: // {string} The type of action that trigger this render.\n    coordSys: // coordSys is variable by different types of coordinate systems:\n    coordSys: {\n        type: &#39;cartesian2d&#39;,\n        x: // {number} x of grid rect\n        y: // {number} y of grid rect\n        width: // {number} width of grid rect\n        height: // {number} height of grid rect\n    },\n    coordSys: {\n        type: &#39;calendar&#39;,\n        x: // {number} x of calendar rect\n        y: // {number} y of calendar rect\n        width: // {number} width of calendar rect\n        height: // {number} height of calendar rect\n        cellWidth: // {number} calendar cellWidth\n        cellHeight: // {number} calendar cellHeight\n        rangeInfo: {\n            start: // date start of calendar.\n            end: // date end of calendar.\n            weeks: // number of weeks in calendar.\n            dayCount: // day count in calendar.\n        }\n    },\n    coordSys: {\n        type: &#39;geo&#39;,\n        x: // {number} x of geo rect\n        y: // {number} y of geo rect\n        width: // {number} width of geo rect\n        height: // {number} height of geo rect\n        zoom: // {number} zoom ratio, 1 if no zoom, 0.5 means shrink to 50%.\n    },\n    coordSys: {\n        type: &#39;polar&#39;,\n        cx: // {number} x of polar center.\n        cy: // {number} y of polar center.\n        r: // {number} outer radius of polar.\n        r0: // {number} inner radius of polar.\n    },\n    coordSys: {\n        type: &#39;singleAxis&#39;,\n        x: // {number} x of singleAxis rect\n        y: // {number} y of singleAxis rect\n        width: // {number} width of singleAxis rect\n        height: // {number} height of singleAxis rect\n    }\n}\n</code></pre>\n<p>Difference between <code class=\"codespan\">dataIndex</code> and <code class=\"codespan\">dataIndexInside</code>:</p>\n<ul>\n<li><code class=\"codespan\">dataIndex</code> is the index of a <code class=\"codespan\">dataItem</code> in the original data.</li>\n<li><code class=\"codespan\">dataIndexInside</code> is the index of a <code class=\"codespan\">dataItem</code> in the current data window (see <a href=\"#dataZoom\">dataZoom</a>.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.arguments.api\">renderItem.arguments.api</a> uses <code class=\"codespan\">dataIndexInside</code> as the input parameter but not <code class=\"codespan\">dataIndex</code>, because conversion from <code class=\"codespan\">dataIndex</code> to <code class=\"codespan\">dataIndexInside</code> is time-consuming.</p>\n"
  },
  "renderItem.arguments.api": {
    "desc": "<p>The second parameter of <code class=\"codespan\">renderItem</code>.</p>\n"
  },
  "renderItem.arguments.api.value": {
    "desc": "<p>Get value on the given dimension.</p>\n<pre><code>@param {number} dimension The given dimension. (index from 0).\n@param {number} [dataIndexInside] In most cases it is not necessary.\n@return {number} The value.\n</code></pre>"
  },
  "renderItem.arguments.api.coord": {
    "desc": "<p>Convert data to coordinate.</p>\n<pre><code>@param {Array.&lt;number&gt;} data.\n@return {Array.&lt;number&gt;} Point on canvas, at least includes [x, y].\n        In polar, it also contains:\n        polar: [x, y, radius, angle]\n</code></pre>"
  },
  "renderItem.arguments.api.size": {
    "desc": "<p>Get the size by the given data range.</p>\n<p>For example, in <code class=\"codespan\">cartesian2d</code>, suppose calling <code class=\"codespan\">api.size([2, 4])</code> returns <code class=\"codespan\">[12.4, 55]</code>. It represents that on x axis, data range <code class=\"codespan\">2</code> corresponds to size <code class=\"codespan\">12.4</code>, and on y axis data range <code class=\"codespan\">4</code> corresponds to size <code class=\"codespan\">55</code>.</p>\n<p>In some coordinate systems (for example, polar) or when log axis is used, the size is different in different point. So the second parameter is necessary to calculate size on the given point.</p>\n<pre><code>@param {Array.&lt;number&gt;} dataSize Data range.\n@param {Array.&lt;number&gt;} dataItem The point where the size will be calculated.\n@return {Array.&lt;number&gt;} The size.\n</code></pre>"
  },
  "renderItem.arguments.api.style": {
    "desc": "<p>The method obtains style info defined in <a href=\"#series-custom.itemStyle\">series.itemStyle</a>, and visual info obtained by visual mapping, and return them. Those returned info can be assigned to <code class=\"codespan\">style</code> attribute of graphic element definition directly. Developers can also override style info by calling this method like this: <code class=\"codespan\">api.style({fill: &#39;green&#39;, stroke: &#39;yellow&#39;})</code>.</p>\n<pre><code>@param {Object} [extra] Extra style info.\n@param {number} [dataIndexInside] In most cases, this parameter is not necessary.\n@return {Object} Style info, which can be assigned to `style` attribute of graphic element definition directly.\n</code></pre>"
  },
  "renderItem.arguments.api.styleEmphasis": {
    "desc": "<p>The method obtains style info defined in <a href=\"#series-custom.itemStyle.emphasis\">series.itemStyle.emphasis</a>, and visual info obtained by visual mapping, and return them. Those returned info can be assigned to <code class=\"codespan\">style</code> attribute of graphic element definition directly. Developers can also override style info by calling this method like this: <code class=\"codespan\">api.style({fill: &#39;green&#39;, stroke: &#39;yellow&#39;})</code>.</p>\n<pre><code>@param {Object} [extra] Extra style info.\n@param {number} [dataIndexInside] In most cases, this parameter is not necessary.\n@return {Object} Style info, which can be assigned to `style` attribute of graphic element definition directly.\n</code></pre>"
  },
  "renderItem.arguments.api.visual": {
    "desc": "<p>Get the visual info. It is rarely be used.</p>\n<pre><code>@param {string} visualType &#39;color&#39;, &#39;symbol&#39;, &#39;symbolSize&#39;, ...\n@param {number} [dataIndexInside] In most cases, this parameter is not necessary.\n@return {string|number} The value of visual.\n</code></pre>"
  },
  "renderItem.arguments.api.barLayout": {
    "desc": "<p>When <code class=\"codespan\">barLayout</code> is needed, (for example, when attaching some extra graphic elements to bar chart), this method can be used to obtain bar layout info.</p>\n<p>See a <a href=\"/echarts-website/examples/zh/editor.html?c=custom-bar-trend\" target=\"_blank\">sample</a>.</p>\n<pre><code>@param {Object} opt\n@param {number} opt.count How many bars in each group.\n@param {number|string} [opt.barWidth] Width of a bar.\n        Can be an absolute value like `40` or a percent value like `&#39;60%&#39;`.\n        The percent is based on the calculated category width.\n@param {number|string} [opt.barMaxWidth] Max width of a bar.\n        Can be an absolute value like `40` or a percent value like `&#39;60%&#39;`.\n        The percent is based on the calculated category width.\n        Has higer priority than `opt.barWidth`.\n@param {number|string} [opt.barMinWidth] Min width of a bar.\n        Can be an absolute value like `40` or a percent value like `&#39;60%&#39;`.\n        The percent is based on the calculated category width.\n        Has higer priority than `opt.barWidth`.\n@param {number} [opt.barGap] Gap of bars in a group.\n@param {number} [opt.barCategoryGap] Gap of groups.\n@return {Array.&lt;Object&gt;} [{\n        width: {number} Width of a bar.\n        offset: {number} Offset of a bar, based on the left most edge.\n        offsetCenter: {number} bar Offset of a bar, based on the center of the bar.\n    }, ...]\n</code></pre>"
  },
  "renderItem.arguments.api.currentSeriesIndices": {
    "desc": "<p>Obtain the current series index. Notice that the <code class=\"codespan\">currentSeriesIndex</code> is different from <code class=\"codespan\">seriesIndex</code> when legend is used to filter some series.</p>\n<pre><code>@return {number}\n</code></pre>"
  },
  "renderItem.arguments.api.font": {
    "desc": "<p>Obtain font string, which can be used on style setting directly.</p>\n<pre><code>@param {Object} opt\n@param {string} [opt.fontStyle]\n@param {number} [opt.fontWeight]\n@param {number} [opt.fontSize]\n@param {string} [opt.fontFamily]\n@return {string} font string.\n</code></pre>"
  },
  "renderItem.arguments.api.getWidth": {
    "desc": "<pre><code>@return {number} Width of echarts containter.\n</code></pre>"
  },
  "renderItem.arguments.api.getHeight": {
    "desc": "<pre><code>@return {number} Height of echarts container.\n</code></pre>"
  },
  "renderItem.arguments.api.getZr": {
    "desc": "<pre><code>@return {module:zrender} zrender instance.\n</code></pre>"
  },
  "renderItem.arguments.api.getDevicePixelRatio": {
    "desc": "<pre><code>@return {number} The current devicePixelRatio.\n</code></pre>"
  },
  "renderItem.return": {
    "desc": "<p><code class=\"codespan\">renderItem</code> should returns graphic element definitions. Each graphic element is an object. See <a href=\"#graphic.elements\">graphic</a> for detailed info. (But width\\height\\top\\bottom is not supported here)</p>\n<p>If nothing should be rendered in this data item, just returns nothing.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">// Returns a rectangular.\n{\n    type: &#39;rect&#39;,\n    shape: {\n        x: x, y: y, width: width, height: height\n    },\n    style: api.style()\n}\n</code></pre>\n<pre><code class=\"lang-js\">// Returns a group of elements.\n{\n    type: &#39;group&#39;,\n    // If diffChildrenByName is set as `true`, `child.name` will be used\n    // to diff children, which improves animation transition but degrade\n    // performance. The default value is `false`.\n    // diffChildrenByName: true,\n    children: [{\n        type: &#39;circle&#39;,\n        shape: {\n            cx: cx, cy: cy, r: r\n        },\n        style: api.style()\n    }, {\n        type: &#39;line&#39;,\n        shape: {\n            x1: x1, y1: y1, x2: x2, y2: y2\n        },\n        style: api.style()\n    }]\n}\n</code></pre>\n"
  },
  "renderItem.return_group": {
    "desc": "<p><code class=\"codespan\">group</code> is the only type that can contain children, so that a group of elements can be positioned and transformed together.</p>\n"
  },
  "renderItem.return_group.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_group.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "renderItem.return_group.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_group.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_group.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_group.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_group.z2": {
    "desc": "<p>Define the overlap relationship between graphic elements.</p>\n"
  },
  "renderItem.return_group.name": {
    "desc": "<p>See <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>.</p>\n"
  },
  "renderItem.return_group.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_group.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "renderItem.return_group.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "renderItem.return_group.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "renderItem.return_group.width": {
    "desc": "<p>Specify width of this <code class=\"codespan\">group</code>.</p>\n<p>This width is only used for the positioning of its children.</p>\n<p>When width is <code class=\"codespan\">0</code>, children can also be positioned according to its parent using <code class=\"codespan\">left: &#39;center&#39;</code>.</p>\n"
  },
  "renderItem.return_group.height": {
    "desc": "<p>Specify height of this <code class=\"codespan\">group</code>.</p>\n<p>This height is only used for the positioning of its children.</p>\n<p>When height is <code class=\"codespan\">0</code>, children can also be positioned according to its parent using <code class=\"codespan\">top: &#39;middle&#39;</code>.</p>\n"
  },
  "renderItem.return_group.diffChildrenByName": {
    "desc": "<p>In <a href=\"#series-custom\">custom series</a>, when <code class=\"codespan\">diffChildrenByName</code> is set as <code class=\"codespan\">true</code>, for each <a href=\"#series-custom.renderItem.return_group\">group</a> returned from <a href=\"#series-custom.renderItem\">renderItem</a>, &quot;diff&quot; will be performed to its <a href=\"#series-custom.renderItem.return_group.children\">children</a> according to the <a href=\"#series-custom.renderItem.return_polygon.name\">name</a> attribute of each graphic elements. Here &quot;diff&quot; means that map the coming graphic elements to the existing graphic elements when repainting according to <code class=\"codespan\">name</code>, which enables the transition animation if data is modified.</p>\n<p>But notice that the operation is performance consuming, do not use it for large data amount.</p>\n"
  },
  "renderItem.return_group.children": {
    "desc": "<p>A list of children, each item is a declaration of an element.</p>\n"
  },
  "renderItem.return_group.styleEmphasis": {
    "desc": "<p>Empahsis style of the graphic element, whose structure is the same as <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>.</p>\n"
  },
  "renderItem.return_path": {
    "desc": "<p>Use <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> to describe a path. Can be used to draw icons or any other shapes fitting the specified size by auto transforming.</p>\n<p>See examples:\n<a href=\"/echarts-website/examples/zh/editor.html?c=custom-calendar-icon\" target=\"_blank\">icons</a> and <a href=\"/echarts-website/examples/zh/editor.html?c=custom-gantt-flight\" target=\"_blank\">shapes</a>.</p>\n<p>About width/height, cover/contain, see\n<a href=\"#series-custom.renderItem.return_path.shape.layout\">layout</a>.</p>\n"
  },
  "renderItem.return_path.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_path.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "renderItem.return_path.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_path.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_path.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_path.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_path.z2": {
    "desc": "<p>Define the overlap relationship between graphic elements.</p>\n"
  },
  "renderItem.return_path.name": {
    "desc": "<p>See <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>.</p>\n"
  },
  "renderItem.return_path.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_path.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "renderItem.return_path.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "renderItem.return_path.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "renderItem.return_path.shape.pathData": {
    "desc": "<p><a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>.</p>\n<p>For example, <code class=\"codespan\">&#39;M0,0 L0,-20 L30,-20 C42,-20 38,-1 50,-1 L70,-1 L70,0 Z&#39;</code>.</p>\n<p>If <a href=\"#series-custom.renderItem.return_path.shape.width\">width</a>, <a href=\"#series-custom.renderItem.return_path.shape.height\">height</a>, <a href=\"#series-custom.renderItem.return_path.shape.x\">x</a> and <a href=\"#series-custom.renderItem.return_path.shape.y\">y</a> specified, <code class=\"codespan\">pathData</code> will be transformed to fit the defined rect. If they are not specified, do not do that.</p>\n<p><a href=\"#series-custom.renderItem.return_path.shape.layout\">layout</a> can be used to specify the transform strategy.</p>\n<p>See examples:\n<a href=\"/echarts-website/examples/zh/editor.html?c=custom-calendar-icon\" target=\"_blank\">icons</a> and <a href=\"/echarts-website/examples/zh/editor.html?c=custom-gantt-flight\" target=\"_blank\">shapes</a>.</p>\n"
  },
  "renderItem.return_path.shape.d": {
    "desc": "<p>Alias of <a href=\"#series-custom.renderItem.return_path.shape.pathData\">pathData</a>.</p>\n"
  },
  "renderItem.return_path.shape.layout": {
    "desc": "<p>If <a href=\"#series-custom.renderItem.return_path.shape.width\">width</a>, <a href=\"#series-custom.renderItem.return_path.shape.height\">height</a>, <a href=\"#series-custom.renderItem.return_path.shape.x\">x</a> and <a href=\"#series-custom.renderItem.return_path.shape.y\">y</a> specified, <code class=\"codespan\">pathData</code> will be transformed to fit the defined rect.</p>\n<p><code class=\"codespan\">layout</code> can be used to specify the transform strategy.</p>\n<p>Optional value:</p>\n<ul>\n<li><code class=\"codespan\">&#39;center&#39;</code>: Keep aspect ratio, put the path in the center of the rect, expand as far as possible but never overflow.</li>\n<li><code class=\"codespan\">&#39;cover&#39;</code>: Transform the path according to the aspect ratio of the rect, fill the rect and do not overflow.</li>\n</ul>\n"
  },
  "renderItem.return_path.shape.x": {
    "desc": "<p>The x value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_path.shape.y": {
    "desc": "<p>The y value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_path.shape.width": {
    "desc": "<p>The width of the shape of the element.</p>\n"
  },
  "renderItem.return_path.shape.height": {
    "desc": "<p>The height of the shape of the element.</p>\n"
  },
  "renderItem.return_path.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_path.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "renderItem.return_path.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "renderItem.return_path.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "renderItem.return_path.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "renderItem.return_path.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "renderItem.return_path.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "renderItem.return_path.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "renderItem.return_path.styleEmphasis": {
    "desc": "<p>Empahsis style of the graphic element, whose structure is the same as <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>.</p>\n"
  },
  "renderItem.return_image.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_image.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "renderItem.return_image.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_image.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_image.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_image.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_image.z2": {
    "desc": "<p>Define the overlap relationship between graphic elements.</p>\n"
  },
  "renderItem.return_image.name": {
    "desc": "<p>See <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>.</p>\n"
  },
  "renderItem.return_image.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_image.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "renderItem.return_image.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "renderItem.return_image.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "renderItem.return_image.style.image": {
    "desc": "<p>Specify contant of the image, can be a URL, or <a href=\"https://tools.ietf.org/html/rfc2397\" target=\"_blank\">dataURI</a>.</p>\n"
  },
  "renderItem.return_image.style.x": {
    "desc": "<p>The x value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_image.style.y": {
    "desc": "<p>The y value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_image.style.width": {
    "desc": "<p>The width of the shape of the element.</p>\n"
  },
  "renderItem.return_image.style.height": {
    "desc": "<p>The height of the shape of the element.</p>\n<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_image.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "renderItem.return_image.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "renderItem.return_image.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "renderItem.return_image.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "renderItem.return_image.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "renderItem.return_image.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "renderItem.return_image.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "renderItem.return_image.styleEmphasis": {
    "desc": "<p>Empahsis style of the graphic element, whose structure is the same as <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>.</p>\n"
  },
  "renderItem.return_text": {
    "desc": "<p>Text block.</p>\n"
  },
  "renderItem.return_text.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_text.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "renderItem.return_text.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_text.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_text.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_text.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_text.z2": {
    "desc": "<p>Define the overlap relationship between graphic elements.</p>\n"
  },
  "renderItem.return_text.name": {
    "desc": "<p>See <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>.</p>\n"
  },
  "renderItem.return_text.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_text.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "renderItem.return_text.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "renderItem.return_text.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "renderItem.return_text.style.text": {
    "desc": "<p>Text content. <code class=\"codespan\">\\n</code> can be used as a line break.</p>\n"
  },
  "renderItem.return_text.style.x": {
    "desc": "<p>The x value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_text.style.y": {
    "desc": "<p>The y value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_text.style.font": {
    "desc": "<p>Font size, font type, font weight, font color, follow the form of <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/font\" target=\"_blank\">css font</a>.</p>\n<p>For example:</p>\n<pre><code>// size | family\nfont: &#39;2em &quot;STHeiti&quot;, sans-serif&#39;\n\n// style | weight | size | family\nfont: &#39;italic bolder 16px cursive&#39;\n\n// weight | size | family\nfont: &#39;bolder 2em &quot;Microsoft YaHei&quot;, sans-serif&#39;\n</code></pre>"
  },
  "renderItem.return_text.style.textAlign": {
    "desc": "<p>Text horizontal alignment. Optional values: <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>.</p>\n<p><code class=\"codespan\">&#39;left&#39;</code> means the left side of the text block is specified by the <a href=\"#series-custom.renderItem.return_text.style.x\">style.x</a>, while <code class=\"codespan\">&#39;right&#39;</code> means the right side of the text block is specified by <a href=\"#series-custom.renderItem.return_text.style.y\">style.y</a>.</p>\n"
  },
  "renderItem.return_text.style.textVerticalAlign": {
    "desc": "<p>Text vertical alignment. Optional values: <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>.</p>\n<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_text.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "renderItem.return_text.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "renderItem.return_text.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "renderItem.return_text.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "renderItem.return_text.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "renderItem.return_text.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "renderItem.return_text.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "renderItem.return_text.styleEmphasis": {
    "desc": "<p>Empahsis style of the graphic element, whose structure is the same as <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>.</p>\n"
  },
  "renderItem.return_rect": {
    "desc": "<p>Rectangle element.</p>\n"
  },
  "renderItem.return_rect.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_rect.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "renderItem.return_rect.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_rect.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_rect.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_rect.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_rect.z2": {
    "desc": "<p>Define the overlap relationship between graphic elements.</p>\n"
  },
  "renderItem.return_rect.name": {
    "desc": "<p>See <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>.</p>\n"
  },
  "renderItem.return_rect.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_rect.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "renderItem.return_rect.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "renderItem.return_rect.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "renderItem.return_rect.shape.x": {
    "desc": "<p>The x value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_rect.shape.y": {
    "desc": "<p>The y value of the left-top corner of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_rect.shape.width": {
    "desc": "<p>The width of the shape of the element.</p>\n"
  },
  "renderItem.return_rect.shape.height": {
    "desc": "<p>The height of the shape of the element.</p>\n"
  },
  "renderItem.return_rect.shape.r": {
    "desc": "<p>Specify border radius of the rectangular here. Generally, <code class=\"codespan\">r</code> should be <code class=\"codespan\">[topLeftRadius, topRightRadius, BottomRightRadius, bottomLeftRadius]</code>, where each item is a number.</p>\n<p>Abbreviation is enabled, for example:</p>\n<ul>\n<li><code class=\"codespan\">r</code>: <code class=\"codespan\">1</code>         means <code class=\"codespan\">[1, 1, 1, 1]</code></li>\n<li><code class=\"codespan\">r</code>: <code class=\"codespan\">[1]</code>       means <code class=\"codespan\">[1, 1, 1, 1]</code></li>\n<li><code class=\"codespan\">r</code>: <code class=\"codespan\">[1, 2]</code>    means <code class=\"codespan\">[1, 2, 1, 2]</code></li>\n<li><code class=\"codespan\">r</code>: <code class=\"codespan\">[1, 2, 3]</code> means <code class=\"codespan\">[1, 2, 3, 2]</code></li>\n</ul>\n"
  },
  "renderItem.return_rect.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_rect.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "renderItem.return_rect.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "renderItem.return_rect.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "renderItem.return_rect.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "renderItem.return_rect.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "renderItem.return_rect.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "renderItem.return_rect.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "renderItem.return_rect.styleEmphasis": {
    "desc": "<p>Empahsis style of the graphic element, whose structure is the same as <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>.</p>\n"
  },
  "renderItem.return_circle": {
    "desc": "<p>Circle element.</p>\n"
  },
  "renderItem.return_circle.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_circle.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "renderItem.return_circle.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_circle.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_circle.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_circle.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_circle.z2": {
    "desc": "<p>Define the overlap relationship between graphic elements.</p>\n"
  },
  "renderItem.return_circle.name": {
    "desc": "<p>See <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>.</p>\n"
  },
  "renderItem.return_circle.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_circle.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "renderItem.return_circle.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "renderItem.return_circle.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "renderItem.return_circle.shape.cx": {
    "desc": "<p>The x value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_circle.shape.cy": {
    "desc": "<p>The y value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_circle.shape.r": {
    "desc": "<p>Outside radius.</p>\n"
  },
  "renderItem.return_circle.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_circle.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "renderItem.return_circle.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "renderItem.return_circle.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "renderItem.return_circle.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "renderItem.return_circle.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "renderItem.return_circle.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "renderItem.return_circle.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "renderItem.return_circle.styleEmphasis": {
    "desc": "<p>Empahsis style of the graphic element, whose structure is the same as <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>.</p>\n"
  },
  "renderItem.return_ring": {
    "desc": "<p>Ring element.</p>\n"
  },
  "renderItem.return_ring.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_ring.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "renderItem.return_ring.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_ring.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_ring.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_ring.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_ring.z2": {
    "desc": "<p>Define the overlap relationship between graphic elements.</p>\n"
  },
  "renderItem.return_ring.name": {
    "desc": "<p>See <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>.</p>\n"
  },
  "renderItem.return_ring.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_ring.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "renderItem.return_ring.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "renderItem.return_ring.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "renderItem.return_ring.shape.cx": {
    "desc": "<p>The x value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_ring.shape.cy": {
    "desc": "<p>The y value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_ring.shape.r": {
    "desc": "<p>Outside radius.</p>\n"
  },
  "renderItem.return_ring.shape.r0": {
    "desc": "<p>Inside radius.</p>\n"
  },
  "renderItem.return_ring.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_ring.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "renderItem.return_ring.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "renderItem.return_ring.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "renderItem.return_ring.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "renderItem.return_ring.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "renderItem.return_ring.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "renderItem.return_ring.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "renderItem.return_ring.styleEmphasis": {
    "desc": "<p>Empahsis style of the graphic element, whose structure is the same as <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>.</p>\n"
  },
  "renderItem.return_sector": {
    "desc": "<p>Sector element.</p>\n"
  },
  "renderItem.return_sector.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_sector.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "renderItem.return_sector.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_sector.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_sector.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_sector.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_sector.z2": {
    "desc": "<p>Define the overlap relationship between graphic elements.</p>\n"
  },
  "renderItem.return_sector.name": {
    "desc": "<p>See <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>.</p>\n"
  },
  "renderItem.return_sector.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_sector.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "renderItem.return_sector.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "renderItem.return_sector.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "renderItem.return_sector.shape.cx": {
    "desc": "<p>The x value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_sector.shape.cy": {
    "desc": "<p>The y value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_sector.shape.r": {
    "desc": "<p>Outside radius.</p>\n"
  },
  "renderItem.return_sector.shape.r0": {
    "desc": "<p>Inside radius.</p>\n"
  },
  "renderItem.return_sector.shape.startAngle": {
    "desc": "<p>start angle, in radian.</p>\n"
  },
  "renderItem.return_sector.shape.endAngle": {
    "desc": "<p>end anble, in radian.</p>\n"
  },
  "renderItem.return_sector.shape.clockwise": {
    "desc": "<p>Whether draw clockwise.</p>\n"
  },
  "renderItem.return_sector.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_sector.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "renderItem.return_sector.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "renderItem.return_sector.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "renderItem.return_sector.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "renderItem.return_sector.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "renderItem.return_sector.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "renderItem.return_sector.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "renderItem.return_sector.styleEmphasis": {
    "desc": "<p>Empahsis style of the graphic element, whose structure is the same as <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>.</p>\n"
  },
  "renderItem.return_arc": {
    "desc": "<p>Arc element.</p>\n"
  },
  "renderItem.return_arc.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_arc.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "renderItem.return_arc.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_arc.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_arc.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_arc.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_arc.z2": {
    "desc": "<p>Define the overlap relationship between graphic elements.</p>\n"
  },
  "renderItem.return_arc.name": {
    "desc": "<p>See <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>.</p>\n"
  },
  "renderItem.return_arc.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_arc.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "renderItem.return_arc.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "renderItem.return_arc.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "renderItem.return_arc.shape.cx": {
    "desc": "<p>The x value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_arc.shape.cy": {
    "desc": "<p>The y value of the center of the element in the coordinate system of its parent.</p>\n"
  },
  "renderItem.return_arc.shape.r": {
    "desc": "<p>Outside radius.</p>\n"
  },
  "renderItem.return_arc.shape.r0": {
    "desc": "<p>Inside radius.</p>\n"
  },
  "renderItem.return_arc.shape.startAngle": {
    "desc": "<p>start angle, in radian.</p>\n"
  },
  "renderItem.return_arc.shape.endAngle": {
    "desc": "<p>end anble, in radian.</p>\n"
  },
  "renderItem.return_arc.shape.clockwise": {
    "desc": "<p>Whether draw clockwise.</p>\n"
  },
  "renderItem.return_arc.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_arc.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "renderItem.return_arc.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "renderItem.return_arc.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "renderItem.return_arc.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "renderItem.return_arc.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "renderItem.return_arc.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "renderItem.return_arc.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "renderItem.return_arc.styleEmphasis": {
    "desc": "<p>Empahsis style of the graphic element, whose structure is the same as <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>.</p>\n"
  },
  "renderItem.return_polygon": {
    "desc": "<p>Polygon element.</p>\n"
  },
  "renderItem.return_polygon.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_polygon.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "renderItem.return_polygon.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_polygon.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_polygon.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_polygon.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_polygon.z2": {
    "desc": "<p>Define the overlap relationship between graphic elements.</p>\n"
  },
  "renderItem.return_polygon.name": {
    "desc": "<p>See <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>.</p>\n"
  },
  "renderItem.return_polygon.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_polygon.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "renderItem.return_polygon.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "renderItem.return_polygon.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "renderItem.return_polygon.shape.points": {
    "desc": "<p>A list of points, which defines the shape, like <code class=\"codespan\">[[22, 44], [44, 55], [11, 44], ...]</code>.</p>\n"
  },
  "renderItem.return_polygon.shape.smooth": {
    "desc": "<p>Whether smooth the line.</p>\n<ul>\n<li>If the value is number, bezier interpolation is used, and the value specified the level of smooth, which is in the range of <code class=\"codespan\">[0, 1]</code>.</li>\n<li>If the value is <code class=\"codespan\">&#39;spline&#39;</code>, Catmull-Rom spline interpolation is used.</li>\n</ul>\n"
  },
  "renderItem.return_polygon.shape.smoothConstraint": {
    "desc": "<p>Whether prevent the smooth process cause the line out of the bounding box.</p>\n<p>Only works when <code class=\"codespan\">smooth</code> is <code class=\"codespan\">number</code> (bezier smooth).</p>\n"
  },
  "renderItem.return_polygon.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_polygon.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "renderItem.return_polygon.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "renderItem.return_polygon.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "renderItem.return_polygon.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "renderItem.return_polygon.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "renderItem.return_polygon.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "renderItem.return_polygon.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "renderItem.return_polygon.styleEmphasis": {
    "desc": "<p>Empahsis style of the graphic element, whose structure is the same as <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>.</p>\n"
  },
  "renderItem.return_polyline": {
    "desc": "<p>Polyline element.</p>\n"
  },
  "renderItem.return_polyline.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_polyline.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "renderItem.return_polyline.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_polyline.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_polyline.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_polyline.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_polyline.z2": {
    "desc": "<p>Define the overlap relationship between graphic elements.</p>\n"
  },
  "renderItem.return_polyline.name": {
    "desc": "<p>See <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>.</p>\n"
  },
  "renderItem.return_polyline.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_polyline.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "renderItem.return_polyline.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "renderItem.return_polyline.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "renderItem.return_polyline.shape.points": {
    "desc": "<p>A list of points, which defines the shape, like <code class=\"codespan\">[[22, 44], [44, 55], [11, 44], ...]</code>.</p>\n"
  },
  "renderItem.return_polyline.shape.smooth": {
    "desc": "<p>Whether smooth the line.</p>\n<ul>\n<li>If the value is number, bezier interpolation is used, and the value specified the level of smooth, which is in the range of <code class=\"codespan\">[0, 1]</code>.</li>\n<li>If the value is <code class=\"codespan\">&#39;spline&#39;</code>, Catmull-Rom spline interpolation is used.</li>\n</ul>\n"
  },
  "renderItem.return_polyline.shape.smoothConstraint": {
    "desc": "<p>Whether prevent the smooth process cause the line out of the bounding box.</p>\n<p>Only works when <code class=\"codespan\">smooth</code> is <code class=\"codespan\">number</code> (bezier smooth).</p>\n"
  },
  "renderItem.return_polyline.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_polyline.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "renderItem.return_polyline.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "renderItem.return_polyline.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "renderItem.return_polyline.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "renderItem.return_polyline.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "renderItem.return_polyline.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "renderItem.return_polyline.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "renderItem.return_polyline.styleEmphasis": {
    "desc": "<p>Empahsis style of the graphic element, whose structure is the same as <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>.</p>\n"
  },
  "renderItem.return_line": {
    "desc": "<p>Line element.</p>\n"
  },
  "renderItem.return_line.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_line.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "renderItem.return_line.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_line.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_line.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_line.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_line.z2": {
    "desc": "<p>Define the overlap relationship between graphic elements.</p>\n"
  },
  "renderItem.return_line.name": {
    "desc": "<p>See <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>.</p>\n"
  },
  "renderItem.return_line.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_line.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "renderItem.return_line.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "renderItem.return_line.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "renderItem.return_line.shape.x1": {
    "desc": "<p>x value of the start point.</p>\n"
  },
  "renderItem.return_line.shape.y1": {
    "desc": "<p>y value of the start point.</p>\n"
  },
  "renderItem.return_line.shape.x2": {
    "desc": "<p>x value of the end point.</p>\n"
  },
  "renderItem.return_line.shape.y2": {
    "desc": "<p>y value of the end point.</p>\n"
  },
  "renderItem.return_line.shape.percent": {
    "desc": "<p>Specify the percentage of drawing, useful in animation.</p>\n<p>Value range: [0, 1].</p>\n"
  },
  "renderItem.return_line.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_line.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "renderItem.return_line.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "renderItem.return_line.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "renderItem.return_line.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "renderItem.return_line.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "renderItem.return_line.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "renderItem.return_line.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "renderItem.return_line.styleEmphasis": {
    "desc": "<p>Empahsis style of the graphic element, whose structure is the same as <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>.</p>\n"
  },
  "renderItem.return_bezierCurve": {
    "desc": "<p>Quadratic bezier curve or cubic bezier curve.</p>\n"
  },
  "renderItem.return_bezierCurve.type": {
    "desc": "<p>Must be specified when define a graphic element at the first time.</p>\n<p>Optional values:</p>\n<p><a href=\"#series-custom.renderItem.return_image\">image</a>,\n<a href=\"#series-custom.renderItem.return_text\">text</a>,\n<a href=\"#series-custom.renderItem.return_circle\">circle</a>,\n<a href=\"#series-custom.renderItem.return_sector\">sector</a>,\n<a href=\"#series-custom.renderItem.return_ring\">ring</a>,\n<a href=\"#series-custom.renderItem.return_polygon\">polygon</a>,\n<a href=\"#series-custom.renderItem.return_polyline\">polyline</a>,\n<a href=\"#series-custom.renderItem.return_rect\">rect</a>,\n<a href=\"#series-custom.renderItem.return_line\">line</a>,\n<a href=\"#series-custom.renderItem.return_bezierCurve\">bezierCurve</a>,\n<a href=\"#series-custom.renderItem.return_arc\">arc</a>,\n<a href=\"#series-custom.renderItem.return_group\">group</a>,</p>\n"
  },
  "renderItem.return_bezierCurve.id": {
    "desc": "<p>id is used to specifying element when willing to update it.\nid can be ignored if you do not need it.</p>\n"
  },
  "renderItem.return_bezierCurve.position": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_bezierCurve.rotation": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_bezierCurve.scale": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_bezierCurve.origin": {
    "desc": "<p><code class=\"codespan\">2D transform</code> can be applied to graphic elements, including:</p>\n<ul>\n<li><a href=\"#series-custom.renderItem.return_polygon.position\">position</a>: <code class=\"codespan\">[horizontal translate offset, vertical translate offset]</code>, <code class=\"codespan\">[0, 0]</code> by default. Positive value means translate towards right or bottom.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.rotation\">rotation</a>: Rotation in radian, <code class=\"codespan\">0</code> by default. Positive when anticlockwise.</li>\n<li><a href=\"#series-custom.renderItem.return_polygon.scale\">scale</a>: <code class=\"codespan\">[horizontal scale factor, vertical scale factor]</code>, <code class=\"codespan\">[1, 1]</code> by default.</li>\n</ul>\n<p><a href=\"#series-custom.renderItem.return_polygon.origin\">origin</a> specifies the origin point of rotation and scaling, <code class=\"codespan\">[0, 0]</code> by default.</p>\n<p>Notice:</p>\n<ul>\n<li>The coordinates specified in the transform attribute above are relative to the <code class=\"codespan\">[0, 0]</code> of the parent element (that is, <a href=\"#series-custom.renderItem.return_group\">group</a> or the root canvas). Thus we are able to <a href=\"#series-custom.renderItem.return_group\">group</a> multiple elements, and <a href=\"#series-custom.renderItem.return_group\">groups</a> can be nested.</li>\n<li>The order that the transform attributes are applied to a single graphic element is: Firstly, <code class=\"codespan\">rotation</code>, then, <code class=\"codespan\">scale</code>, finally, <code class=\"codespan\">position</code>.</li>\n</ul>\n"
  },
  "renderItem.return_bezierCurve.z2": {
    "desc": "<p>Define the overlap relationship between graphic elements.</p>\n"
  },
  "renderItem.return_bezierCurve.name": {
    "desc": "<p>See <a href=\"#series-custom.renderItem.return_polygon.diffChildrenByName\">diffChildrenByName</a>.</p>\n"
  },
  "renderItem.return_bezierCurve.info": {
    "desc": "<p>User defined data, can be visited in event listeners.</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "renderItem.return_bezierCurve.silent": {
    "desc": "<p>Whether response to mouse events / touch events.</p>\n"
  },
  "renderItem.return_bezierCurve.invisible": {
    "desc": "<p>Whether the element is visible.</p>\n"
  },
  "renderItem.return_bezierCurve.ignore": {
    "desc": "<p>Whether the element is totally ignored (neither render nor listen events).</p>\n"
  },
  "renderItem.return_bezierCurve.shape.x1": {
    "desc": "<p>x value of the start point.</p>\n"
  },
  "renderItem.return_bezierCurve.shape.y1": {
    "desc": "<p>y value of the start point.</p>\n"
  },
  "renderItem.return_bezierCurve.shape.x2": {
    "desc": "<p>x value of the end point.</p>\n"
  },
  "renderItem.return_bezierCurve.shape.y2": {
    "desc": "<p>y value of the end point.</p>\n"
  },
  "renderItem.return_bezierCurve.shape.cpx1": {
    "desc": "<p>x of control point.</p>\n"
  },
  "renderItem.return_bezierCurve.shape.cpy1": {
    "desc": "<p>y of control point.</p>\n"
  },
  "renderItem.return_bezierCurve.shape.cpx2": {
    "desc": "<p>x of the second control point. If specified, cubic bezier is used.</p>\n<p>If both <code class=\"codespan\">cpx2</code> and <code class=\"codespan\">cpy2</code> are not set, quatratic bezier is used.</p>\n"
  },
  "renderItem.return_bezierCurve.shape.cpy2": {
    "desc": "<p>y of the second control point. If specified, cubic bezier is used.</p>\n<p>If both <code class=\"codespan\">cpx2</code> and <code class=\"codespan\">cpy2</code> are not set, quatratic bezier is used.</p>\n"
  },
  "renderItem.return_bezierCurve.shape.percent": {
    "desc": "<p>Specify the percentage of drawing, useful in animation.</p>\n<p>Value range: [0, 1].</p>\n"
  },
  "renderItem.return_bezierCurve.style": {
    "desc": "<p>More attributes in <code class=\"codespan\">style</code> (for example, <a href=\"tutorial.html#Rich%20Text\" target=\"_blank\">rich text</a>), see the <code class=\"codespan\">style</code> related attributes in <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a>.</p>\n<p>Notice, the attribute names of the <code class=\"codespan\">style</code> of graphic elements is derived from <code class=\"codespan\">zrender</code>, which may be different from the attribute names in <code class=\"codespan\">echarts label</code>, <code class=\"codespan\">echarts itemStyle</code>, etc., although they have the same meaning. For example:</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "renderItem.return_bezierCurve.style.fill": {
    "desc": "<p>Color filled in this element.</p>\n"
  },
  "renderItem.return_bezierCurve.style.stroke": {
    "desc": "<p>Color of stroke.</p>\n"
  },
  "renderItem.return_bezierCurve.style.lineWidth": {
    "desc": "<p>Width of stroke.</p>\n"
  },
  "renderItem.return_bezierCurve.style.shadowBlur": {
    "desc": "<p>Width of shadow.</p>\n"
  },
  "renderItem.return_bezierCurve.style.shadowOffsetX": {
    "desc": "<p>X offset of shadow.</p>\n"
  },
  "renderItem.return_bezierCurve.style.shadowOffsetY": {
    "desc": "<p>Y offset of shadow.</p>\n"
  },
  "renderItem.return_bezierCurve.style.shadowColor": {
    "desc": "<p>color of shadow.</p>\n"
  },
  "renderItem.return_bezierCurve.styleEmphasis": {
    "desc": "<p>Empahsis style of the graphic element, whose structure is the same as <a href=\"#series-custom.renderItem.return_polygon.style\">style</a>.</p>\n"
  },
  "itemStyle": {
    "desc": "<p>Graphic style of , <code class=\"codespan\">emphasis</code> is the style when it is highlighted, like being hovered by mouse, or highlighted via legend connect.</p>\n"
  },
  "itemStyle.color": {
    "desc": "<p> color.  Color is taken from <a href=\"#color\">option.color Palette</a> by default. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "itemStyle.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "itemStyle.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "itemStyle.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "itemStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "itemStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "itemStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "itemStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "itemStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "emphasis.itemStyle.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.itemStyle.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.itemStyle.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "emphasis.itemStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "emphasis.itemStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.itemStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "dimensions": {
    "desc": "<p><code class=\"codespan\">dimensions</code> can be used to define dimension info for <code class=\"codespan\">series.data</code> or <code class=\"codespan\">dataset.source</code>.</p>\n<p>Notice: if <a href=\"#dataset\">dataset</a> is used, we can provide dimension names in the first column/row of <a href=\"#dataset.source\">dataset.source</a>, and not need to specify <code class=\"codespan\">dimensions</code> here. But if <code class=\"codespan\">dimensions</code> is specified here, echarts will not retrieve dimension names from the first row/column of <code class=\"codespan\">dataset.source</code> any more.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">option = {\n    dataset: {\n        source: [\n            // &#39;date&#39;, &#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;\n            [12, 44, 55, 66, 2],\n            [23, 6, 16, 23, 1],\n            ...\n        ]\n    },\n    series: {\n        type: &#39;xxx&#39;,\n        // Specify name for each dimesions, which will be displayed in tooltip.\n        dimensions: [&#39;date&#39;, &#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;]\n    }\n}\n</code></pre>\n<pre><code class=\"lang-js\">series: {\n    type: &#39;xxx&#39;,\n    dimensions: [\n        null,                // If you do not intent to defined this dimension, use null is fine.\n        {type: &#39;ordinal&#39;},   // Specify type of this dimension.\n                             // &#39;ordinal&#39; is always used in string.\n                             // If type is not specified, echarts will guess type by data.\n        {name: &#39;good&#39;, type: &#39;number&#39;},\n        &#39;bad&#39;                // Equals to {name: &#39;bad&#39;}.\n    ]\n}\n</code></pre>\n<p>Each data item of <code class=\"codespan\">dimensions</code> can be:</p>\n<ul>\n<li><code class=\"codespan\">string</code>, for example, <code class=\"codespan\">&#39;someName&#39;</code>, which equals to <code class=\"codespan\">{name: &#39;someName&#39;}</code>.</li>\n<li><code class=\"codespan\">Object</code>, where the attributes can be:<ul>\n<li>name: <code class=\"codespan\">string</code>.</li>\n<li>type: <code class=\"codespan\">string</code>, supports:<ul>\n<li><code class=\"codespan\">number</code></li>\n<li><code class=\"codespan\">float</code>, that is, <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array\" target=\"_blank\">Float64Array</a></li>\n<li><code class=\"codespan\">int</code>, that is, <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array\" target=\"_blank\">Int32Array</a></li>\n<li><code class=\"codespan\">ordinal</code>, discrete value, which represents string generally.</li>\n<li><code class=\"codespan\">time</code>, time value, see <a href=\"#series.data\">data</a> to check the format of time value.</li>\n</ul>\n</li>\n<li>displayName: <code class=\"codespan\">string</code>, generally used in tooltip for dimension display. If not specified, use <code class=\"codespan\">name</code> by default.</li>\n</ul>\n</li>\n</ul>\n<p>When <code class=\"codespan\">dimensions</code> is specified, the default <code class=\"codespan\">tooltip</code> will be displayed vertically, which is better to show diemsion names. Otherwise, <code class=\"codespan\">tooltip</code> will displayed only value horizontally.</p>\n"
  },
  "encode": {
    "desc": "<p>Define what is encoded to for each dimension of <code class=\"codespan\">data</code>. For example:</p>\n<pre><code class=\"lang-js\">option = {\n    dataset: {\n        source: [\n            // Each column is called a dimension.\n            // There are five dimensions: 0, 1, 2, 3, 4.\n            [12, 44, 55, 66, 2],\n            [23, 6, 16, 23, 1],\n            ...\n        ]\n    },\n    series: {\n        type: &#39;xxx&#39;,\n        encode: {\n            x: [3, 1, 5],      // Dimension 3, 1, 5 is mapped to x axis.\n            y: 2,              // Dimension 2 is mapped to y axis.\n            tooltip: [3, 2, 4] // Dimension 3, 2, 4 will be displayed in tooltip.\n        }\n    }\n}\n</code></pre>\n<p>When <a href=\"#series.dimensions\">dimensions</a> is used to defined name for a certain dimension, <code class=\"codespan\">encode</code> can refer the name directly. For example:</p>\n<pre><code class=\"lang-js\">series: {\n    type: &#39;xxx&#39;,\n    dimensions: [&#39;date&#39;, &#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;],\n    encode: {\n        x: &#39;date&#39;,\n        y: [&#39;open&#39;, &#39;close&#39;, &#39;highest&#39;, &#39;lowest&#39;]\n    }\n}\n</code></pre>\n<p>The basic structure of <a href=\"option.html#series.encode\" target=\"_blank\">encode</a> is illustrated as follows, where the left part of colon is the name of axis like <code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;radius&#39;</code>, <code class=\"codespan\">&#39;angle&#39;</code> or some special reserved names like &quot;tooltip&quot;, &quot;itemName&quot; etc., and the right part of the colon is the dimension names or dimension indices (based on 0). One or more dimensions can be specified. Usually not all of mappings need to be specified, only specify needed ones.</p>\n<p>The properties available in <code class=\"codespan\">encode</code> listed as follows:</p>\n<pre><code class=\"lang-js\">// In any of the series and coordinate systems,\n// these properties are available:\nencode: {\n    // Display dimension &quot;product&quot; and &quot;score&quot; in the tooltip.\n    tooltip: [&#39;product&#39;, &#39;score&#39;]\n    // Set the series name as the concat of the names of dimensions[1] and dimensions[3].\n    // (sometimes the dimension names are too long to type in series.name manually).\n    seriesName: [1, 3],\n    // Using dimensions[2] as the id of each data item. This is useful when dynamically\n    // update data by `chart.setOption()`, where the new and old data item can be\n    // corresponded by id, by which the appropriate animation can be performed when updating.\n    itemId: 2,\n    // Using dimensions[3] as the name of each data item. This is useful in charts like\n    // &#39;pie&#39;, &#39;funnel&#39;, where data item name can be displayed in legend.\n    itemName: 3\n}\n\n// These properties only work in cartesian(grid) coordinate system:\nencode: {\n    // Map dimensions[1], dimensions[5] and dimension &quot;score&quot; to the X axis.\n    x: [1, 5, &#39;score&#39;],\n    // Map dimensions[0] to the Y axis.\n    y: 0\n}\n\n// These properties only work in polar coordinate system:\nencode: {\n    radius: 3,\n    angle: 2,\n    ...\n}\n\n// These properties only work in geo coordinate system:\nencode: {\n    lng: 3,\n    lat: 2\n}\n\n// For some type of series that are not in any coordinate system,\n// like &#39;pie&#39;, &#39;funnel&#39; etc.:\nencode: {\n    value: 3\n}\n</code></pre>\n<p>This is an <a href=\"/echarts-website/examples/zh/view.html?c=dataset-encode1&amp;edit=1&amp;reset=1\" target=\"_blank\">example</a> for <code class=\"codespan\">encode</code>.</p>\n<p>Specially, in [custom series(~series-custom), some property in <code class=\"codespan\">encode</code>, corresponding to axis, can be set as null to make the series not controlled by the axis, that is, the series data will not be count in the extent of the axis, and the <a href=\"#dataZoom\">dataZoom</a> on the axis will not filter the series.</p>\n<pre><code class=\"lang-js\">var option = {\n    xAxis: {},\n    yAxis: {},\n    dataZoom: [{\n        xAxisIndex: 0\n    }, {\n        yAxisIndex: 0\n    }],\n    series: {\n        type: &#39;custom&#39;,\n        renderItem: function (params, api) {\n            return {\n                type: &#39;circle&#39;,\n                shape: {\n                    cx: 100, // x position is always 100\n                    cy: api.coord([0, api.value(0)])[1],\n                    r: 30\n                },\n                style: {\n                    fill: &#39;blue&#39;\n                }\n            };\n        },\n        encode: {\n            // Then the series will not be controlled\n            // by x axis and corresponding dataZoom.\n            x: -1,\n            y: 1\n        },\n        data: [ ... ]\n    }\n};\n</code></pre>\n"
  },
  "seriesLayoutBy": {
    "desc": "<p>When <a href=\"#dataset\">dataset</a> is used, <code class=\"codespan\">seriesLayoutBy</code> specifies whether the column or the row of <code class=\"codespan\">dataset</code> is mapped to the series, namely, the series is &quot;layout&quot; on columns or rows. Optional values:</p>\n<ul>\n<li>&#39;column&#39;: by default, the columns of <code class=\"codespan\">dataset</code> are mapped the series. In this case, each column represents a dimension.</li>\n<li>&#39;row&#39;：the rows of <code class=\"codespan\">dataset</code> are mapped to the series. In this case, each row represents a dimension.</li>\n</ul>\n<p>Check this <a href=\"/echarts-website/examples/zh/editor.html?c=dataset-series-layout-by\" target=\"_blank\">example</a>.</p>\n"
  },
  "datasetIndex": {
    "desc": "<p>If <a href=\"#series.data\">series.data</a> is not specified, and <a href=\"#dataset\">dataset</a> exists, the series will use <code class=\"codespan\">dataset</code>. <code class=\"codespan\">datasetIndex</code> specifies which dataset will be used.</p>\n"
  },
  "data": {
    "desc": "<p>Data array of series, which can be in the following forms:</p>\n<p>Notice, if no <code class=\"codespan\">data</code> specified in series, and there is <a href=\"#dataset\">dataset</a> in option, series will use the first <a href=\"#dataset\">dataset</a> as its datasource. If <code class=\"codespan\">data</code> has been specified, <a href=\"#dataset\">dataset</a> will not used.</p>\n<p><code class=\"codespan\">series.datasetIndex</code> can be used to specify other <a href=\"#dataset\">dataset</a>.</p>\n<p>Basically, data is represented by a two-dimension array, like the example below, where each column is named as a &quot;dimension&quot;.</p>\n<pre><code class=\"lang-js\">series: [{\n    data: [\n        // dimX   dimY   other dimensions ...\n        [  3.4,    4.5,   15,   43],\n        [  4.2,    2.3,   20,   91],\n        [  10.8,   9.5,   30,   18],\n        [  7.2,    8.8,   18,   57]\n    ]\n}]\n</code></pre>\n<ul>\n<li>In <a href=\"#grid\">cartesian (grid)</a>, &quot;dimX&quot; and &quot;dimY&quot; correspond to <a href=\"#xAxis\">xAxis</a> and <a href=\"#yAxis\">yAxis</a> respectively.</li>\n<li>In <a href=\"#polar\">polar</a> &quot;dimX&quot; and &quot;dimY&quot; correspond to <a href=\"#radiusAxis\">radiusAxis</a> 和 <a href=\"#anbleAxis\">angleAxis</a> respectively.</li>\n<li>Other dimensions are optional, which can be used in other places. For example:<ul>\n<li><a href=\"#visualMap\">visualMap</a> can map one or more dimensions to visual (color, symbol size ...).</li>\n<li><a href=\"#series.symbolSize\">series.symbolSize</a> can be set as a callback function, where symbol size can be calculated by values of a certain dimension.</li>\n<li>Values in other dimensions can be shown by <a href=\"#tooltip.formatter\">tooltip.formatter</a> or <a href=\"#series.label.formatter\">series.label.formatter</a>.</li>\n</ul>\n</li>\n</ul>\n<p>Especially, when there is one and only one category axis (axis.type is <code class=\"codespan\">&#39;category&#39;</code>), data can be simply be represented by a one-dimension array, like:</p>\n<pre><code class=\"lang-js\">xAxis: {\n    data: [&#39;a&#39;, &#39;b&#39;, &#39;m&#39;, &#39;n&#39;]\n},\nseries: [{\n    // Each item corresponds to each item in xAxis.data.\n    data: [23,  44,  55,  19]\n    // In fact, it is the simplification of the format below:\n    // data: [[0, 23], [1, 44], [2, 55], [3, 19]]\n}]\n</code></pre>\n<p><br>\n<strong>Relationship between &quot;value&quot; and <a href=\"#xAxis.type\">axis.type</a></strong></p>\n<ul>\n<li><p>When a dimension corresponds to a value axis (axis.type is <code class=\"codespan\">&#39;value&#39;</code> or <code class=\"codespan\">&#39;log&#39;</code>):</p>\n<p>  The value can be a <code class=\"codespan\">number</code> (like <code class=\"codespan\">12</code>) (can also be a number in a <code class=\"codespan\">string</code> format, like <code class=\"codespan\">&#39;12&#39;</code>).</p>\n</li>\n<li><p>When a dimension corresponds to a category axis (axis.type is <code class=\"codespan\">&#39;category&#39;</code>):</p>\n<p>  The value should be the ordinal of the axis.data (based on <code class=\"codespan\">0</code>), the string value of the axis.data. For example:</p>\n<pre><code class=\"lang-js\">  xAxis: {\n      type: &#39;category&#39;,\n      data: [&#39;Monday&#39;, &#39;Tuesday&#39;, &#39;Wednesday&#39;, &#39;Thursday&#39;]\n  },\n  yAxis: {\n      type: &#39;category&#39;,\n      data: [&#39;a&#39;, &#39;b&#39;, &#39;m&#39;, &#39;n&#39;, &#39;p&#39;, &#39;q&#39;]\n  },\n  series: [{\n      data: [\n          // xAxis      yAxis\n          [  0,           0,    2  ], // This point is located at xAxis: &#39;Monday&#39;, yAxis: &#39;a&#39;.\n          [  &#39;Thursday&#39;,  2,    1  ], // This point is located at xAxis: &#39;Thursday&#39;, yAxis: &#39;m&#39;.\n          [  2,          &#39;p&#39;,   2  ], // This point is located at xAxis: &#39;Wednesday&#39;, yAxis: &#39;p&#39;.\n          [  3,           3,    5  ]\n      ]\n  }]\n</code></pre>\n<p>  There is an example of double category axes: <a href=\"/echarts-website/examples/zh/editor.html?c=scatter-punchCard\" target=\"_blank\">Github Punchcard</a>.</p>\n</li>\n<li><p>When a dimension corresponds to a time axis (type is <code class=\"codespan\">&#39;time&#39;</code>), the value can be:</p>\n<ul>\n<li>a timestamp, like <code class=\"codespan\">1484141700832</code>, which represents a UTC time.</li>\n<li>a date string, in one of the formats below:<ul>\n<li>a subset of <a href=\"http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15\" target=\"_blank\">ISO 8601</a>, only including (all of these are treated as local time unless timezone is specified, which is consistent with <a href=\"https://momentjs.com/\" target=\"_blank\">moment</a>):<ul>\n<li>only part of year/month/date/time are specified: <code class=\"codespan\">&#39;2012-03&#39;</code>, <code class=\"codespan\">&#39;2012-03-01&#39;</code>, <code class=\"codespan\">&#39;2012-03-01 05&#39;</code>, <code class=\"codespan\">&#39;2012-03-01 05:06&#39;</code>.</li>\n<li>separated by <code class=\"codespan\">&quot;T&quot;</code> or a space: <code class=\"codespan\">&#39;2012-03-01T12:22:33.123&#39;</code>, <code class=\"codespan\">&#39;2012-03-01 12:22:33.123&#39;</code>.</li>\n<li>timezone specified: <code class=\"codespan\">&#39;2012-03-01T12:22:33Z&#39;</code>, <code class=\"codespan\">&#39;2012-03-01T12:22:33+8000&#39;</code>, <code class=\"codespan\">&#39;2012-03-01T12:22:33-05:00&#39;</code>.</li>\n</ul>\n</li>\n<li>other date string format (all of these are treated as local time):\n<code class=\"codespan\">&#39;2012&#39;</code>, <code class=\"codespan\">&#39;2012-3-1&#39;</code>, <code class=\"codespan\">&#39;2012/3/1&#39;</code>, <code class=\"codespan\">&#39;2012/03/01&#39;</code>,\n<code class=\"codespan\">&#39;2009/6/12 2:00&#39;</code>, <code class=\"codespan\">&#39;2009/6/12 2:05:08&#39;</code>, <code class=\"codespan\">&#39;2009/6/12 2:05:08.123&#39;</code>.</li>\n</ul>\n</li>\n<li>a JavaScript Date instance created by user:<ul>\n<li>Caution, when using a data string to create a Date instance, <a href=\"http://dygraphs.com/date-formats.html\" target=\"_blank\">browser differences and inconsistencies</a> should be considered.</li>\n<li>For example: In chrome, <code class=\"codespan\">new Date(&#39;2012-01-01&#39;)</code> is treated as a Jan 1st 2012 in UTC, while <code class=\"codespan\">new Date(&#39;2012-1-1&#39;)</code> and <code class=\"codespan\">new Date(&#39;2012/01/01&#39;)</code> are treated as Jan 1st 2012 in local timezone. In safari <code class=\"codespan\">new Date(&#39;2012-1-1&#39;)</code> is not supported.</li>\n<li>So if you intent to perform <code class=\"codespan\">new Date(dateString)</code>, it is strongly recommended to use a time parse library (e.g., <a href=\"https://momentjs.com/\" target=\"_blank\">moment</a>), or use <code class=\"codespan\">echarts.number.parseDate</code>, or check <a href=\"http://dygraphs.com/date-formats.html\" target=\"_blank\">this</a>.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<p><br>\n<strong>Customize a data item:</strong></p>\n<p>When needing to customize a data item, it can be set as an object, where property <code class=\"codespan\">value</code> reprensent real value. For example:</p>\n<pre><code class=\"lang-js\">[\n    12,\n    24,\n    {\n        value: [24, 32],\n        // label style, only works in this data item.\n        label: {},\n        // item style, only works in this data item.\n        itemStyle:{}\n    },\n    33\n]\n// Or\n[\n    [12, 332],\n    [24, 32],\n    {\n        value: [24, 32],\n        // label style, only works in this data item.\n        label: {},\n        // item style, only works in this data item.\n        itemStyle:{}\n    },\n    [33, 31]\n]\n</code></pre>\n<p><br>\n<strong>Empty value:</strong></p>\n<p><code class=\"codespan\">&#39;-&#39;</code> or <code class=\"codespan\">null</code> or <code class=\"codespan\">undefined</code> or <code class=\"codespan\">NaN</code> can be used to describe that a data item does not exist (ps：<em>not exist</em> does not means its value is <code class=\"codespan\">0</code>).</p>\n<p>For example, line chart can break when encounter an empty value, and scatter chart do not display graphic elements for empty values.</p>\n<p><br><br></p>\n"
  },
  "data.name": {
    "desc": "<p>Name of data item.</p>\n"
  },
  "data.value": {
    "desc": "<p>Value of data item.</p>\n"
  },
  "data.itemStyle.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.itemStyle.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.itemStyle.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "data.itemStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "data.itemStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.itemStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "data.emphasis.itemStyle.color": {
    "desc": "<p> color. </p>\n<blockquote>\n<p>Color can be represented in RGB, for example <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>. RGBA can be used when you need alpha channel, for example <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>. You may also use hexadecimal format, for example <code class=\"codespan\">&#39;#ccc&#39;</code>. Gradient color and texture are also supported besides single colors.</p>\n<pre><code class=\"lang-js\">// Linear gradient. First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box. If global is `true`, then the first four parameters are in absolute pixel positions.\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Radial gradient. First three parameters are x and y positions of center, and radius, similar to linear gradient.\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // color at 0% position\n    }, {\n        offset: 1, color: &#39;blue&#39; // color at 100% position\n    }],\n    global: false // false by default\n}\n// Fill with texture\ncolor: {\n    image: imageDom, // HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported\n    repeat: &#39;repeat&#39; // whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.itemStyle.borderColor": {
    "desc": "<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.emphasis.itemStyle.borderWidth": {
    "desc": "<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.borderType": {
    "desc": "<p>Border type, which can be <code class=\"codespan\">&#39;solid&#39;</code>, <code class=\"codespan\">&#39;dashed&#39;</code>, or <code class=\"codespan\">&#39;dotted&#39;</code>. <code class=\"codespan\">&#39;solid&#39;</code> by default.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "data.emphasis.itemStyle.shadowBlur": {
    "desc": "<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.shadowColor": {
    "desc": "<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "data.emphasis.itemStyle.shadowOffsetX": {
    "desc": "<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.shadowOffsetY": {
    "desc": "<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.emphasis.itemStyle.opacity": {
    "desc": "<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "data.tooltip": {
    "desc": "<p>tooltip settings in this series data.</p>\n"
  },
  "data.tooltip.position": {
    "desc": "<blockquote>\n<p><strong>Notice：</strong>series.data.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The position of the tooltip&#39;s floating layer, which would follow the position of mouse by default.</p>\n<p>Options:</p>\n<ul>\n<li><p><code class=\"codespan\">Array</code></p>\n<p>  Display the position of tooltip&#39;s floating layer through array, which supports absolute position and relative percentage.</p>\n<p>  Example:</p>\n<pre><code class=\"lang-js\">  // absolute position, which is 10px to the left side and 10px to the top side of the container\n  position: [10, 10]\n  // relative position, in the exact center of the container\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">Function</code></p>\n<p>  Callback function in the following form:</p>\n<pre><code class=\"lang-js\">  (point: Array, params: Object|Array.&lt;Object&gt;, dom: HTMLDomElement, rect: Object, size: Object) =&gt; Array\n</code></pre>\n<p>  <strong>Parameters:</strong><br>\n  point: Mouse position.<br>\n  param: The same as formatter.<br>\n  dom: The DOM object of tooltip.<br>\n  rect: It is valid only when mouse is on graphic elements, which stands for a bounding box with <code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">width</code>, and <code class=\"codespan\">height</code>.<br>\n  size: The size of dom echarts container. For example: <code class=\"codespan\">{contentSize: [width, height], viewSize: [width, height]}</code>. <br></p>\n<p>  <strong>Return:</strong><br>\n  Return value is an array standing for tooltip position, which can be absolute pixels, or relative percentage.<br>\n  Or can be an object, like <code class=\"codespan\">{left: 10, top: 30}</code>, or <code class=\"codespan\">{right: &#39;20%&#39;, bottom: 40}</code>.<br></p>\n<p>  For example:</p>\n<pre><code class=\"lang-js\">  position: function (point, params, dom, rect, size) {\n      // fixed at top\n      return [point[0], &#39;10%&#39;];\n  }\n</code></pre>\n<p>  Or:</p>\n<pre><code class=\"lang-js\">  position: function (pos, params, dom, rect, size) {\n      // tooltip will be fixed on the right if mouse hovering on the left,\n      // and on the left if hovering on the right.\n      var obj = {top: 60};\n      obj[[&#39;left&#39;, &#39;right&#39;][+(pos[0] &lt; size.viewSize[0] / 2)]] = 5;\n      return obj;\n  }\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">&#39;inside&#39;</code></p>\n<p> Center position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;top&#39;</code></p>\n<p>  Top position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;left&#39;</code></p>\n<p>  Left position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code></p>\n<p>  Right position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;bottom&#39;</code></p>\n<p>  Bottom position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n</ul>\n"
  },
  "data.tooltip.formatter": {
    "desc": "<blockquote>\n<p><strong>Notice：</strong>series.data.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The content formatter of tooltip&#39;s floating layer which supports string template and callback function.</p>\n<p><strong>1. String template</strong></p>\n<p>The template variables are <code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code> and <code class=\"codespan\">{e}</code>, which stands for series name, data name and data value and ect. When <a href=\"#tooltip.trigger\">trigger</a> is set to be <code class=\"codespan\">&#39;axis&#39;</code>, there may be data from multiple series. In this time, series index can be refered as <code class=\"codespan\">{a0}</code>, <code class=\"codespan\">{a1}</code>, or <code class=\"codespan\">{a2}</code>.</p>\n<p><code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code> have different meanings for different series types:</p>\n<ul>\n<li><p>Line (area) charts, bar (column) charts, K charts: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for category name, <code class=\"codespan\">{c}</code> for data value, <code class=\"codespan\">{d}</code> for none;</p>\n</li>\n<li><p>Scatter (bubble) charts: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for data name, <code class=\"codespan\">{c}</code> for data value, <code class=\"codespan\">{d}</code> for none;</p>\n</li>\n<li><p>Map: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for area name, <code class=\"codespan\">{c}</code> for merging data, <code class=\"codespan\">{d}</code> for none;</p>\n</li>\n<li><p>Pie charts, gauge charts, funnel charts: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for data item name, <code class=\"codespan\">{c}</code> for data value, <code class=\"codespan\">{d}</code> for percentage.</p>\n</li>\n</ul>\n<p><strong>Example: </strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b0}: {c0}&lt;br /&gt;{b1}: {c1}&#39;\n</code></pre>\n<p><strong>2. Callback function</strong></p>\n<p>The format of callback function:</p>\n<pre><code class=\"lang-js\">(params: Object|Array, ticket: string, callback: (ticket: string, html: string)) =&gt; string\n</code></pre>\n<p>The first parameter <code class=\"codespan\">params</code> is the data that the formatter needs. Its format is shown as follows:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n    // the percentage of pie chart\n    percent: number,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>When <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;axis&#39;</code>, or when tooltip is triggered by <a href=\"#xAxis.axisPointer\">axisPointer</a>, <code class=\"codespan\">params</code> is the data array of multiple series. The content of each item of the array is the same as above. Besides,</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p><strong>Note: </strong>Using array to present all the parameters in ECharts 2.x is not supported anymore.</p>\n<p>The second parameter <code class=\"codespan\">ticket</code> is the asynchronous callback flag which should be used along with the third parameter <code class=\"codespan\">callback</code> when it is used.</p>\n<p>The third parameter <code class=\"codespan\">callback</code> is asynchronous callback. When the content of tooltip is acquired asynchronously, <code class=\"codespan\">ticket</code> and <code class=\"codespan\">htm</code> as introduced above can be used to update tooltip with callback.</p>\n<p>Example:</p>\n<pre><code class=\"lang-js\">formatter: function (params, ticket, callback) {\n    $.get(&#39;detail?name=&#39; + params.name, function (content) {\n        callback(ticket, toHTML(content));\n    });\n    return &#39;Loading&#39;;\n}\n</code></pre>\n"
  },
  "data.tooltip.backgroundColor": {
    "desc": "<blockquote>\n<p><strong>Notice：</strong>series.data.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The background color of tooltip&#39;s floating layer.</p>\n"
  },
  "data.tooltip.borderColor": {
    "desc": "<blockquote>\n<p><strong>Notice：</strong>series.data.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The border color of tooltip&#39;s floating layer.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "data.tooltip.borderWidth": {
    "desc": "<blockquote>\n<p><strong>Notice：</strong>series.data.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The border width of tooltip&#39;s floating layer.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "data.tooltip.padding": {
    "desc": "<blockquote>\n<p><strong>Notice：</strong>series.data.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The floating layer of tooltip space around content. The unit is px. Default values for each position are 5. And they can be set to different values with left, right, top, and bottom.</p>\n<p>Examples: </p>\n<pre><code class=\"lang-js\">// Set padding to be 5\npadding: 5\n// Set the top and bottom paddings to be 5, and left and right paddings to be 10\npadding: [5, 10]\n// Set each of the four paddings seperately\npadding: [\n    5,  // up\n    10, // right\n    5,  // down\n    10, // left\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "data.tooltip.textStyle": {
    "desc": "<blockquote>\n<p><strong>Notice：</strong>series.data.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The text syle of tooltip&#39;s floating layer.</p>\n"
  },
  "data.tooltip.textStyle.color": {
    "desc": "<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#fff'"
    }
  },
  "data.tooltip.textStyle.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "data.tooltip.textStyle.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "data.tooltip.textStyle.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "data.tooltip.textStyle.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "14",
      "min": "1",
      "step": "1"
    }
  },
  "data.tooltip.textStyle.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "data.tooltip.textStyle.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "data.tooltip.textStyle.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "data.tooltip.textStyle.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "data.tooltip.textStyle.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.tooltip.textStyle.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "data.tooltip.textStyle.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "data.tooltip.textStyle.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.tooltip.textStyle.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "data.tooltip.extraCssText": {
    "desc": "<blockquote>\n<p><strong>Notice：</strong>series.data.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>Extra CSS style for floating layer. The following is an example for adding shadow.</p>\n<pre><code class=\"lang-js\">extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39;\n</code></pre>\n"
  },
  "clip": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v4.4.0</code></p>\n</blockquote>\n<p>If clip the overflow on the coordinate system. Clip results varies between series:</p>\n<ul>\n<li>Scatter：Ignore the symbols exceeds the coordinate system. Not clip the elements.</li>\n<li>Bar：Clip all the overflowed. With bar width kept.</li>\n<li>Line：Clip the overflowed line.</li>\n<li>Lines: Clip all the overflowed.</li>\n<li>Candlestick: Ignore the elements exceeds the coordinate system.</li>\n<li>Custom: Clip all the olverflowed.</li>\n</ul>\n<p>All these series have default value <code class=\"codespan\">true</code> except custom series. Set it to <code class=\"codespan\">false</code> if you don&#39;t want to clip.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "zlevel": {
    "desc": "<p><code class=\"codespan\">zlevel</code> value of all graphical elements in custom series.</p>\n<p><code class=\"codespan\">zlevel</code> is used to make layers with Canvas. Graphical elements with different <code class=\"codespan\">zlevel</code> values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate <code class=\"codespan\">zlevel</code>. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid crash.</p>\n<p>Canvases with bigger <code class=\"codespan\">zlevel</code> will be placed on Canvases with smaller <code class=\"codespan\">zlevel</code>.</p>\n"
  },
  "z": {
    "desc": "<p><code class=\"codespan\">z</code> value of all graphical elements in custom series, which controls order of drawing graphical components. Components with smaller <code class=\"codespan\">z</code> values may be overwritten by those with larger <code class=\"codespan\">z</code> values.</p>\n<p><code class=\"codespan\">z</code> has a lower priority to <code class=\"codespan\">zlevel</code>, and will not create new Canvas.</p>\n"
  },
  "silent": {
    "desc": "<p>Whether to ignore mouse events. Default value is false, for triggering and responding to mouse events.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "animation": {
    "desc": "<p>Whether to enable animation.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true",
      "clean": "true"
    }
  },
  "animationThreshold": {
    "desc": "<p>Whether to set graphic number threshold to animation. Animation will be disabled when graphic number is larger than threshold.</p>\n"
  },
  "animationDuration": {
    "desc": "<p>Duration of the first animation, which supports callback function for different data to have different animation effect:</p>\n<pre><code class=\"lang-js\">animationDuration: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20",
      "clean": "true"
    }
  },
  "animationEasing": {
    "desc": "<p>Easing method used for the first animation. Varied easing effects can be found at <a href=\"/echarts-website/examples/zh/editor.html?c=line-easing\" target=\"_blank\">easing effect example</a>.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut",
      "clean": "true"
    }
  },
  "animationDelay": {
    "desc": "<p>Delay before updating the first animation, which supports callback function for different data to have different animation effect.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">animationDelay: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n<p>See <a href=\"/echarts-website/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">this example</a> for more information.</p>\n"
  },
  "animationDurationUpdate": {
    "desc": "<p>Time for animation to complete, which supports callback function for different data to have different animation effect:</p>\n<pre><code class=\"lang-js\">animationDurationUpdate: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20"
    }
  },
  "animationEasingUpdate": {
    "desc": "<p>Easing method used for animation.</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut"
    }
  },
  "animationDelayUpdate": {
    "desc": "<p>Delay before updating animation, which supports callback function for different data to have different animation effects.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">animationDelayUpdate: function (idx) {\n    // delay for later data is larger\n    return idx * 100;\n}\n</code></pre>\n<p>See <a href=\"/echarts-website/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">this example</a> for more information.</p>\n"
  },
  "tooltip": {
    "desc": "<p>tooltip settings in this series.</p>\n"
  },
  "tooltip.position": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The position of the tooltip&#39;s floating layer, which would follow the position of mouse by default.</p>\n<p>Options:</p>\n<ul>\n<li><p><code class=\"codespan\">Array</code></p>\n<p>  Display the position of tooltip&#39;s floating layer through array, which supports absolute position and relative percentage.</p>\n<p>  Example:</p>\n<pre><code class=\"lang-js\">  // absolute position, which is 10px to the left side and 10px to the top side of the container\n  position: [10, 10]\n  // relative position, in the exact center of the container\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">Function</code></p>\n<p>  Callback function in the following form:</p>\n<pre><code class=\"lang-js\">  (point: Array, params: Object|Array.&lt;Object&gt;, dom: HTMLDomElement, rect: Object, size: Object) =&gt; Array\n</code></pre>\n<p>  <strong>Parameters:</strong><br>\n  point: Mouse position.<br>\n  param: The same as formatter.<br>\n  dom: The DOM object of tooltip.<br>\n  rect: It is valid only when mouse is on graphic elements, which stands for a bounding box with <code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">width</code>, and <code class=\"codespan\">height</code>.<br>\n  size: The size of dom echarts container. For example: <code class=\"codespan\">{contentSize: [width, height], viewSize: [width, height]}</code>. <br></p>\n<p>  <strong>Return:</strong><br>\n  Return value is an array standing for tooltip position, which can be absolute pixels, or relative percentage.<br>\n  Or can be an object, like <code class=\"codespan\">{left: 10, top: 30}</code>, or <code class=\"codespan\">{right: &#39;20%&#39;, bottom: 40}</code>.<br></p>\n<p>  For example:</p>\n<pre><code class=\"lang-js\">  position: function (point, params, dom, rect, size) {\n      // fixed at top\n      return [point[0], &#39;10%&#39;];\n  }\n</code></pre>\n<p>  Or:</p>\n<pre><code class=\"lang-js\">  position: function (pos, params, dom, rect, size) {\n      // tooltip will be fixed on the right if mouse hovering on the left,\n      // and on the left if hovering on the right.\n      var obj = {top: 60};\n      obj[[&#39;left&#39;, &#39;right&#39;][+(pos[0] &lt; size.viewSize[0] / 2)]] = 5;\n      return obj;\n  }\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">&#39;inside&#39;</code></p>\n<p> Center position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;top&#39;</code></p>\n<p>  Top position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;left&#39;</code></p>\n<p>  Left position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code></p>\n<p>  Right position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;bottom&#39;</code></p>\n<p>  Bottom position of the graphic element where the mouse is in, which is only valid when <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.</p>\n</li>\n</ul>\n"
  },
  "tooltip.formatter": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The content formatter of tooltip&#39;s floating layer which supports string template and callback function.</p>\n<p><strong>1. String template</strong></p>\n<p>The template variables are <code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code> and <code class=\"codespan\">{e}</code>, which stands for series name, data name and data value and ect. When <a href=\"#tooltip.trigger\">trigger</a> is set to be <code class=\"codespan\">&#39;axis&#39;</code>, there may be data from multiple series. In this time, series index can be refered as <code class=\"codespan\">{a0}</code>, <code class=\"codespan\">{a1}</code>, or <code class=\"codespan\">{a2}</code>.</p>\n<p><code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code> have different meanings for different series types:</p>\n<ul>\n<li><p>Line (area) charts, bar (column) charts, K charts: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for category name, <code class=\"codespan\">{c}</code> for data value, <code class=\"codespan\">{d}</code> for none;</p>\n</li>\n<li><p>Scatter (bubble) charts: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for data name, <code class=\"codespan\">{c}</code> for data value, <code class=\"codespan\">{d}</code> for none;</p>\n</li>\n<li><p>Map: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for area name, <code class=\"codespan\">{c}</code> for merging data, <code class=\"codespan\">{d}</code> for none;</p>\n</li>\n<li><p>Pie charts, gauge charts, funnel charts: <code class=\"codespan\">{a}</code> for series name, <code class=\"codespan\">{b}</code> for data item name, <code class=\"codespan\">{c}</code> for data value, <code class=\"codespan\">{d}</code> for percentage.</p>\n</li>\n</ul>\n<p><strong>Example: </strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b0}: {c0}&lt;br /&gt;{b1}: {c1}&#39;\n</code></pre>\n<p><strong>2. Callback function</strong></p>\n<p>The format of callback function:</p>\n<pre><code class=\"lang-js\">(params: Object|Array, ticket: string, callback: (ticket: string, html: string)) =&gt; string\n</code></pre>\n<p>The first parameter <code class=\"codespan\">params</code> is the data that the formatter needs. Its format is shown as follows:</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n    // the percentage of pie chart\n    percent: number,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>When <a href=\"#tooltip.trigger\">trigger</a> is <code class=\"codespan\">&#39;axis&#39;</code>, or when tooltip is triggered by <a href=\"#xAxis.axisPointer\">axisPointer</a>, <code class=\"codespan\">params</code> is the data array of multiple series. The content of each item of the array is the same as above. Besides,</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // Series type\n    seriesType: string,\n    // Series index in option.series\n    seriesIndex: number,\n    // Series name\n    seriesName: string,\n    // Data name, or category name\n    name: string,\n    // Data index in input data array\n    dataIndex: number,\n    // Original data as input\n    data: Object,\n    // Value of data. In most series it is the same as data.\n    // But in some series it is some part of the data (e.g., in map, radar)\n    value: number|Array|Object,\n    // encoding info of coordinate system\n    // Key: coord, like (&#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39;)\n    // value: Must be an array, not null/undefined. Contain dimension indices, like:\n    // {\n    //     x: [2] // values on dimension index 2 are mapped to x axis.\n    //     y: [0] // values on dimension index 0 are mapped to y axis.\n    // }\n    encode: Object,\n    // dimension names list\n    dimensionNames: Array&lt;String&gt;,\n    // data dimension index, for example 0 or 1 or 2 ...\n    // Only work in `radar` series.\n    dimensionIndex: number,\n    // Color of data\n    color: string,\n\n}\n</code></pre>\n<p>Note: the usage of encode and dimensionNames can be:</p>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>If data is:</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>We can get values that corresponding to y axis by:</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p><strong>Note: </strong>Using array to present all the parameters in ECharts 2.x is not supported anymore.</p>\n<p>The second parameter <code class=\"codespan\">ticket</code> is the asynchronous callback flag which should be used along with the third parameter <code class=\"codespan\">callback</code> when it is used.</p>\n<p>The third parameter <code class=\"codespan\">callback</code> is asynchronous callback. When the content of tooltip is acquired asynchronously, <code class=\"codespan\">ticket</code> and <code class=\"codespan\">htm</code> as introduced above can be used to update tooltip with callback.</p>\n<p>Example:</p>\n<pre><code class=\"lang-js\">formatter: function (params, ticket, callback) {\n    $.get(&#39;detail?name=&#39; + params.name, function (content) {\n        callback(ticket, toHTML(content));\n    });\n    return &#39;Loading&#39;;\n}\n</code></pre>\n"
  },
  "tooltip.backgroundColor": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The background color of tooltip&#39;s floating layer.</p>\n"
  },
  "tooltip.borderColor": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The border color of tooltip&#39;s floating layer.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "tooltip.borderWidth": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The border width of tooltip&#39;s floating layer.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "tooltip.padding": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The floating layer of tooltip space around content. The unit is px. Default values for each position are 5. And they can be set to different values with left, right, top, and bottom.</p>\n<p>Examples: </p>\n<pre><code class=\"lang-js\">// Set padding to be 5\npadding: 5\n// Set the top and bottom paddings to be 5, and left and right paddings to be 10\npadding: [5, 10]\n// Set each of the four paddings seperately\npadding: [\n    5,  // up\n    10, // right\n    5,  // down\n    10, // left\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "tooltip.textStyle": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>The text syle of tooltip&#39;s floating layer.</p>\n"
  },
  "tooltip.textStyle.color": {
    "desc": "<p> text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#fff'"
    }
  },
  "tooltip.textStyle.fontStyle": {
    "desc": "<p> font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "tooltip.textStyle.fontWeight": {
    "desc": "<p> font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "tooltip.textStyle.fontFamily": {
    "desc": "<p> font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "tooltip.textStyle.fontSize": {
    "desc": "<p> font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "14",
      "min": "1",
      "step": "1"
    }
  },
  "tooltip.textStyle.lineHeight": {
    "desc": "<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "tooltip.textStyle.width": {
    "desc": "<p>Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p><code class=\"codespan\">width</code> can also be percent string, like <code class=\"codespan\">&#39;100%&#39;</code>, which represents the percent of <code class=\"codespan\">contentWidth</code> (that is, the width without <code class=\"codespan\">padding</code>) of its container box. It is based on <code class=\"codespan\">contentWidth</code> because that each text fragment is layout based on the <code class=\"codespan\">content box</code>, where it makes no sense that calculating width based on <code class=\"codespan\">outerWith</code> in prectice.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "tooltip.textStyle.height": {
    "desc": "<p>Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see <code class=\"codespan\">backgroundColor</code>).</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> specifies the width and height of the content, without <code class=\"codespan\">padding</code>.</p>\n<p>Notice, <code class=\"codespan\">width</code> and <code class=\"codespan\">height</code> only work when <code class=\"codespan\">rich</code> specified.</p>\n"
  },
  "tooltip.textStyle.textBorderColor": {
    "desc": "<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "tooltip.textStyle.textBorderWidth": {
    "desc": "<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowColor": {
    "desc": "<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "tooltip.textStyle.textShadowBlur": {
    "desc": "<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowOffsetX": {
    "desc": "<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "tooltip.textStyle.textShadowOffsetY": {
    "desc": "<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "tooltip.extraCssText": {
    "desc": "<p><br></p>\n<blockquote>\n<p><strong>Notice：</strong>series.tooltip only works when <a href=\"#tooltip.trigger\">tooltip.trigger</a> is <code class=\"codespan\">&#39;item&#39;</code>.<br></p>\n</blockquote>\n<p>Extra CSS style for floating layer. The following is an example for adding shadow.</p>\n<pre><code class=\"lang-js\">extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39;\n</code></pre>\n"
  }
}