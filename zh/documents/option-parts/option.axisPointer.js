window.__EC_DOC_option_axisPointer = {
  "id": {
    "desc": "<p>组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。</p>\n"
  },
  "show": {
    "desc": "\n\n<p>默认不显示。但是如果 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 设置为 <code class=\"codespan\">&#39;axis&#39;</code> 或者 <a href=\"#tooltip.axisPointer.type\">tooltip.axisPointer.type</a> 设置为 <code class=\"codespan\">&#39;cross&#39;</code>，则自动显示 axisPointer。坐标系会自动选择显示显示哪个轴的 axisPointer，也可以使用 <a href=\"#tooltip.axisPointer.axis\">tooltip.axisPointer.axis</a> 改变这种选择。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "type": {
    "desc": "\n\n<p>指示器类型。</p>\n<p>可选</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;line&#39;</code> 直线指示器</p>\n</li>\n<li><p><code class=\"codespan\">&#39;shadow&#39;</code> 阴影指示器</p>\n</li>\n<li><p><code class=\"codespan\">&#39;none&#39;</code> 无指示器</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "line,shadow,none"
    }
  },
  "snap": {
    "desc": "<p>坐标轴指示器是否自动吸附到点上。默认自动判断。</p>\n<p>这个功能在数值轴和时间轴上比较有意义，可以自动寻找细小的数值点。</p>\n"
  },
  "z": {
    "desc": "<p>坐标轴指示器的 z 值。控制图形的前后顺序。<code class=\"codespan\">z</code>值小的图形会被<code class=\"codespan\">z</code>值大的图形覆盖。</p>\n"
  },
  "label": {
    "desc": "<p>坐标轴指示器的文本标签。</p>\n"
  },
  "label.show": {
    "desc": "<p>是否显示文本标签。如果 <a href=\"#tooltip.axisPointer.type\">tooltip.axisPointer.type</a> 设置为 <code class=\"codespan\">&#39;cross&#39;</code> 则默认显示标签，否则默认不显示。</p>\n"
  },
  "label.precision": {
    "desc": "<p>文本标签中数值的小数点精度。默认根据当前轴的值自动判断。也可以指定如 <code class=\"codespan\">2</code> 表示保留两位小数。</p>\n"
  },
  "label.formatter": {
    "desc": "<p>文本标签文字的格式化器。</p>\n<p>如果为 <code class=\"codespan\">string</code>，可以是例如：<code class=\"codespan\">formatter: &#39;some text {value} some text</code>，其中 <code class=\"codespan\">{value}</code> 会被自动替换为轴的值。</p>\n<p>如果为 <code class=\"codespan\">function</code>，可以是例如：</p>\n<p><strong>参数：</strong></p>\n<p><code class=\"codespan\">{Object}</code> params: 含有：</p>\n<p><code class=\"codespan\">{Object}</code> params.value: 轴当前值，如果 axis.type 为 &#39;category&#39; 时，其值为 axis.data 里的数值。如果 axis.type 为 <code class=\"codespan\">&#39;time&#39;</code>，其值为时间戳。</p>\n<p><code class=\"codespan\">{Array.&lt;Object&gt;}</code> params.seriesData: 一个数组，是当前 axisPointer 最近的点的信息，每项内容为</p>\n<p><code class=\"codespan\">{string}</code> params.axisDimension: 轴的维度名，例如直角坐标系中是 <code class=\"codespan\">&#39;x&#39;</code>、<code class=\"codespan\">&#39;y&#39;</code>，极坐标系中是 <code class=\"codespan\">&#39;radius&#39;</code>、<code class=\"codespan\">&#39;angle&#39;</code>。</p>\n<p><code class=\"codespan\">{number}</code> params.axisIndex: 轴的 index，<code class=\"codespan\">0</code>、<code class=\"codespan\">1</code>、<code class=\"codespan\">2</code>、...</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>每项内容还包括轴的信息：</p>\n<pre><code class=\"lang-js\">{\n    axisDim: &#39;x&#39;, // &#39;x&#39;, &#39;y&#39;, &#39;angle&#39;, &#39;radius&#39;, &#39;single&#39;\n    axisId: &#39;xxx&#39;,\n    axisName: &#39;xxx&#39;,\n    axisIndex: 3,\n    axisValue: 121, // 当前 axisPointer 对应的 value。\n    axisValueLabel: &#39;文本&#39;\n}\n</code></pre>\n<p><strong>返回值：</strong></p>\n<p>显示的 string。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">formatter: function (params) {\n    // 假设此轴的 type 为 &#39;time&#39;。\n    return &#39;some text&#39; + echarts.format.formatTime(params.value);\n}\n</code></pre>\n"
  },
  "label.margin": {
    "desc": "<p>label 距离轴的距离。</p>\n"
  },
  "label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#fff'"
    }
  },
  "label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "label.width": {
    "desc": "\n\n<p>文本显示宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "label.height": {
    "desc": "\n\n<p>文本显示高度。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.textBorderType": {
    "desc": "\n\n\n<p>文字本身的描边类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">textBorderDashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "label.textBorderDashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">textBorderType</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "label.overflow": {
    "desc": "\n\n<p>文字超出宽度是否截断或者换行。配置<code class=\"codespan\">width</code>时有效</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> 截断，并在末尾显示<code class=\"codespan\">ellipsis</code>配置的文本，默认为<code class=\"codespan\">...</code></li>\n<li><code class=\"codespan\">&#39;break&#39;</code> 换行</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> 换行，跟<code class=\"codespan\">&#39;break&#39;</code>不同的是，在英语等拉丁文中，<code class=\"codespan\">&#39;breakAll&#39;</code>还会强制单词内换行</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "label.ellipsis": {
    "desc": "<p>在<code class=\"codespan\">overflow</code>配置为<code class=\"codespan\">&#39;truncate&#39;</code>的时候，可以通过该属性配置末尾显示的文本。</p>\n"
  },
  "label.padding": {
    "desc": "\n\n<p>axisPointer内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。</p>\n<p>使用示例：</p>\n<pre><code class=\"lang-js\">// 设置内边距为 5\npadding: 5\n// 设置上下的内边距为 5，左右的内边距为 10\npadding: [5, 10]\n// 分别设置四个方向的内边距\npadding: [\n    5,  // 上\n    10, // 右\n    5,  // 下\n    10, // 左\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "label.backgroundColor": {
    "desc": "<p>文本标签的背景颜色，默认是和 <a href=\"#xAxis.axisLine.lineStyle.color\">axis.axisLine.lineStyle.color</a> 相同。</p>\n"
  },
  "label.borderColor": {
    "desc": "<p>文本标签的边框颜色。</p>\n"
  },
  "label.borderWidth": {
    "desc": "<p>文本标签的边框宽度。</p>\n"
  },
  "label.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "3",
      "min": "0",
      "step": "0.5"
    }
  },
  "label.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#aaa"
    }
  },
  "label.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "label.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "lineStyle": {
    "desc": "<p><a href=\"#tooltip.axisPointer.type\">axisPointer.type</a> 为 <code class=\"codespan\">&#39;line&#39;</code> 时有效。</p>\n"
  },
  "lineStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "lineStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "lineStyle.type": {
    "desc": "\n\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>自 <code class=\"codespan\">v5.0.0</code> 开始，也可以是 <code class=\"codespan\">number</code> 或者 <code class=\"codespan\">number</code> 数组，用以指定线条的 <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a>，配合 \n<code class=\"codespan\">dashOffset</code>\n 可实现更灵活的虚线效果。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">{\n\ntype: [5, 10],\n\ndashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "lineStyle.dashOffset": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置虚线的偏移量，可搭配 \n<code class=\"codespan\">type</code>\n 指定 dash array 实现灵活的虚线效果。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "lineStyle.cap": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于指定线段末端的绘制方式，可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: 线段末端以方形结束。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 线段末端以圆形结束。</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;butt&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "lineStyle.join": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。</p>\n<p>可以是：</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 \n<code class=\"codespan\">miterLimit</code>\n属性看到效果。</li>\n</ul>\n<p>默认值为 <code class=\"codespan\">&#39;bevel&#39;</code>。 更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "lineStyle.miterLimit": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n\n\n<p>用于设置斜接面限制比例。只有当 \n<code class=\"codespan\">join</code>\n 为 <code class=\"codespan\">miter</code> 时，\n<code class=\"codespan\">miterLimit</code>\n 才有效。</p>\n<p>默认值为 <code class=\"codespan\">10</code>。负数、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> 和 <code class=\"codespan\">NaN</code> 均会被忽略。</p>\n<p>更多详情可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "shadowStyle": {
    "desc": "<p><a href=\"#tooltip.axisPointer.type\">axisPointer.type</a> 为 <code class=\"codespan\">&#39;shadow&#39;</code> 时有效。</p>\n"
  },
  "shadowStyle.color": {
    "desc": "\n\n<p>填充的颜色。</p>\n<blockquote>\n<p>支持使用<code class=\"codespan\">rgb(255,255,255)</code>，<code class=\"codespan\">rgba(255,255,255,1)</code>，<code class=\"codespan\">#fff</code>等方式设置为纯色，也支持设置为渐变色和纹理填充，具体见<a href=\"#color\">option.color</a></p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "shadowStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "shadowStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "shadowStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "shadowStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "shadowStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "triggerTooltip": {
    "desc": "\n\n<p>是否触发 tooltip。如果不想触发 tooltip 可以关掉。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "value": {
    "desc": "<p>当前的 value。在使用 <a href=\"xAxisPointer.handle\" target=\"_blank\">axisPointer.handle</a> 时，可以设置此值进行初始值设定，从而决定 axisPointer 的初始位置。</p>\n"
  },
  "status": {
    "desc": "\n\n<p>当前的状态，可取值为 <code class=\"codespan\">&#39;show&#39;</code> 和 <code class=\"codespan\">&#39;hide&#39;</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "show,hide"
    }
  },
  "handle": {
    "desc": "<p>拖拽手柄，适用于触屏的环境。参见 <a href=\"/echarts-website/examples/zh/editor.html?c=line-tooltip-touch&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n"
  },
  "handle.show": {
    "desc": "\n\n<p>当 show 设为 <code class=\"codespan\">true</code> 时开启，这时显示手柄，并且 axisPointer 会一直显示。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "handle.icon": {
    "desc": "\n\n<p>手柄的图标。</p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre><p>参见 <a href=\"/echarts-website/examples/zh/editor.html?c=doc-example/axisPointer-handle-image&amp;edit=1&amp;reset=1\" target=\"_blank\">使用图片的例子</a></p>\n",
    "uiControl": {
      "type": "icon",
      "clean": "true"
    }
  },
  "handle.size": {
    "desc": "\n\n<p>手柄的尺寸，可以设置单值，如 <code class=\"codespan\">45</code>，也可以设置为数组：<code class=\"codespan\">[width, height]</code>。</p>\n",
    "uiControl": {
      "type": "vector",
      "default": "45,45",
      "min": "0",
      "step": "0.5",
      "dims": "width,height"
    }
  },
  "handle.margin": {
    "desc": "\n\n<p>手柄与轴的距离。注意，这是手柄中心点和轴的距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "0",
      "step": "0.5"
    }
  },
  "handle.color": {
    "desc": "\n\n<p>手柄颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "handle.throttle": {
    "desc": "\n\n<p>手柄拖拽时触发视图更新周期，单位毫秒，调大这个数值可以改善性能，但是降低体验。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "40",
      "min": "0",
      "step": "10"
    }
  },
  "handle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "3",
      "min": "0",
      "step": "0.5"
    }
  },
  "handle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#aaa"
    }
  },
  "handle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "2",
      "step": "0.5"
    }
  },
  "handle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "link": {
    "desc": "<p>不同轴的 axisPointer 可以进行联动，在这里设置。联动表示轴能同步一起活动。轴依据他们的 axisPointer 当前对应的值来联动。</p>\n<p>联动的效果可以看这两个例子：<a href=\"/echarts-website/examples/zh/view.html?c=candlestick-brush&amp;edit=1&amp;reset=1\" target=\"_blank\">例子A</a>，<a href=\"/echarts-website/examples/zh/view.html?c=scatter-nutrients-matrix&amp;edit=1&amp;reset=1\" target=\"_blank\">例子B</a>。</p>\n<p>link 是一个数组，其中每一项表示一个 link group，一个 group 中的坐标轴互相联动。例如：</p>\n<pre><code class=\"lang-js\">link: [\n    {\n        // 表示所有 xAxisIndex 为 0、3、4 和 yAxisName 为 &#39;someName&#39; 的坐标轴联动。\n        xAxisIndex: [0, 3, 4],\n        yAxisName: &#39;someName&#39;\n    },\n    {\n        // 表示左右 xAxisId 为 &#39;aa&#39;、&#39;cc&#39; 以及所有的 angleAxis 联动。\n        xAxisId: [&#39;aa&#39;, &#39;cc&#39;],\n        angleAxis: &#39;all&#39;\n    },\n    ...\n]\n</code></pre>\n<p>如上所示，每个 link group 中可以用这些方式引用坐标轴：</p>\n<pre><code class=\"lang-js\">{\n    // 以下的 &#39;some&#39; 均表示轴的维度，也就是表示 &#39;x&#39;, &#39;y&#39;, &#39;radius&#39;, &#39;angle&#39;, &#39;single&#39;\n    someAxisIndex: [...], // 可以是一个数组或单值或 &#39;all&#39;\n    someAxisName: [...],  // 可以是一个数组或单值或 &#39;all&#39;\n    someAxisId: [...],    // 可以是一个数组或单值或 &#39;all&#39;\n}\n</code></pre>\n<hr>\n<p><strong>如何联动不同类型（<a href=\"#xAxis.type\">axis.type</a>）的轴？</strong></p>\n<p>如果 axis 的类型不同，比如 axisA type 为 &#39;category&#39;，axisB type 为 &#39;time&#39;，可以在每个 link group 中写转换函数（mapper）来进行值的转换，例如：</p>\n<pre><code class=\"lang-js\">link: [{\n    xAxisIndex: [0, 1],\n    yAxisName: [&#39;yy&#39;],\n    mapper: function (sourceVal, sourceAxisInfo, targetAxisInfo) {\n        if (sourceAxisInfo.axisName === &#39;yy&#39;) {\n            // from timestamp to &#39;2012-02-05&#39;\n            return echarts.format.formatTime(&#39;yyyy-MM-dd&#39;, sourceVal);\n        }\n        else if (targetAxisInfo.axisName === &#39;yy&#39;) {\n            // from &#39;2012-02-05&#39; to date\n            return echarts.number.parseDate(dates[sourceVal]);\n        }\n        else {\n            return sourceVal;\n        }\n    }\n}]\n</code></pre>\n<p>mapper 的输入参数：</p>\n<p><code class=\"codespan\">{number}</code> sourceVal</p>\n<p><code class=\"codespan\">{Object}</code> sourceAxisInfo 里面包含 {axisDim, axisId, axisName, axisIndex} 等信息</p>\n<p><code class=\"codespan\">{Object}</code> targetAxisInfo 里面包含 {axisDim, axisId, axisName, axisIndex} 等信息</p>\n<p>mapper 的返回值：</p>\n<p><code class=\"codespan\">{number}</code> 转换结果</p>\n"
  },
  "triggerOn": {
    "desc": "\n\n<p>提示框触发的条件，可选：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;mousemove&#39;</code></p>\n<p>  鼠标移动时触发。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;click&#39;</code></p>\n<p>  鼠标点击时触发。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;none&#39;</code></p>\n<p>  不在 <code class=\"codespan\">&#39;mousemove&#39;</code> 或 <code class=\"codespan\">&#39;click&#39;</code> 时触发。</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "mousemove,click,none"
    }
  }
}