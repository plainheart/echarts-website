window.__EC_DOC_option_tooltip = {
  "show": {
    "desc": "\n\n<p>是否显示提示框组件，包括提示框浮层和 <a href=\"#tooltip.axisPointer\">axisPointer</a>。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "trigger": {
    "desc": "\n\n<p>触发类型。</p>\n<p>可选：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;item&#39;</code></p>\n<p>  数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;axis&#39;</code></p>\n<p>  坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。</p>\n<p>  在 ECharts 2.x 中只支持类目轴上使用 axis trigger，在 ECharts 3 中支持在<a href=\"#grid\">直角坐标系</a>和<a href=\"#polar\">极坐标系</a>上的所有类型的轴。并且可以通过 <a href=\"#tooltip.axisPointer.axis\">axisPointer.axis</a> 指定坐标轴。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;none&#39;</code></p>\n<p>  什么都不触发。</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "item,axis,none"
    }
  },
  "axisPointer": {
    "desc": "<p>坐标轴指示器配置项。</p>\n<p><code class=\"codespan\">tooltip.axisPointer</code> 是配置坐标轴指示器的快捷方式。实际上坐标轴指示器的全部功能，都可以通过轴上的 axisPointer 配置项完成（例如 <a href=\"#xAxis.axisPointer\">xAxis.axisPointer</a> 或 <a href=\"#angleAxis.axisPointer\">angleAxis.axisPointer</a>）。但是使用 <code class=\"codespan\">tooltip.axisPointer</code> 在简单场景下会更方便一些。</p>\n<blockquote>\n<p><strong>注意：</strong> <code class=\"codespan\">tooltip.axisPointer</code> 中诸配置项的优先级低于轴上的 axisPointer 的配置项。</p>\n</blockquote>\n<hr>\n<p>坐标轴指示器是指示坐标轴当前刻度的工具。</p>\n<p>如下例，鼠标悬浮到图上，可以出现标线和刻度文本。</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/candlestick-axisPointer&edit=1&reset=1\" width=\"600\" height=\"450\"><iframe />\n\n\n<p>上例中，使用了 <a href=\"#axisPointer.link\">axisPointer.link</a> 来关联不同的坐标系中的 axisPointer。</p>\n<p>坐标轴指示器也有适合触屏的交互方式，如下：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=line-tooltip-touch&edit=1&reset=1\" width=\"600\" height=\"400\"><iframe />\n\n\n<p>坐标轴指示器在多轴的场景能起到辅助作用：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=multiple-y-axis&edit=1&reset=1\" width=\"600\" height=\"300\"><iframe />\n\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=multiple-x-axis&edit=1&reset=1\" width=\"600\" height=\"300\"><iframe />\n\n\n\n\n<hr>\n<blockquote>\n<p><strong>注意：</strong>\n一般来说，axisPointer 的具体配置项会配置在各个轴中（如 <a href=\"#xAxis.axisPointer\">xAxis.axisPointer</a>）或者 <code class=\"codespan\">tooltip</code> 中（如 <a href=\"#tooltip.axisPointer\">tooltip.axisPointer</a>）。</p>\n</blockquote>\n<blockquote>\n<p>但是这几个选项只能配置在全局的 axisPointer 中：<a href=\"#axisPointer.triggerOn\">axisPointer.triggerOn</a>、<a href=\"#axisPointer.link\">axisPointer.link</a>。</p>\n</blockquote>\n<hr>\n<p><strong>如何显示 axisPointer：</strong></p>\n<p>直角坐标系 <a href=\"#grid\">grid</a>、极坐标系 <a href=\"#polar\">polar</a>、单轴坐标系 <a href=\"#single\">single</a> 中的每个轴都自己的 axisPointer。</p>\n<p>他们的 axisPointer 默认不显示。有两种方法可以让他们显示：</p>\n<ul>\n<li><p>设置轴上的 <code class=\"codespan\">axisPointer.show</code>（例如 <a href=\"#xAxis.axisPointer.show\">xAxis.axisPointer.show</a>）为 <code class=\"codespan\">true</code>，则显示此轴的 axisPointer。</p>\n</li>\n<li><p>设置 <a href=\"#tooltip.trigger\">tooltip.trigger</a> 设置为 <code class=\"codespan\">&#39;axis&#39;</code> 或者 <a href=\"#tooltip.axisPointer.type\">tooltip.axisPointer.type</a> 设置为 <code class=\"codespan\">&#39;cross&#39;</code>，则此时坐标系会自动选择显示哪个轴的 axisPointer，也可以使用 <a href=\"#tooltip.axisPointer.axis\">tooltip.axisPointer.axis</a> 改变这种选择。注意，轴上如果设置了 axisPointer，会覆盖此设置。</p>\n</li>\n</ul>\n<hr>\n<p><strong>如何显示 axisPointer 的 label：</strong></p>\n<p>axisPointer 的 label 默认不显示（也就是默认只显示指示线），除非：</p>\n<ul>\n<li><p>设置轴上的 <code class=\"codespan\">axisPointer.label.show</code>（例如 <a href=\"#xAxis.axisPointer.show\">xAxis.axisPointer.label.show</a>）为 <code class=\"codespan\">true</code>，则显示此轴的 axisPointer 的 label。</p>\n</li>\n<li><p>设置 <a href=\"#tooltip.axisPointer.type\">tooltip.axisPointer.type</a> 为 <code class=\"codespan\">&#39;cross&#39;</code> 时会自动显示 axisPointer 的 label。</p>\n</li>\n</ul>\n<hr>\n<p><strong>关于触屏的 axisPointer 的设置</strong></p>\n<p>设置轴上的 <code class=\"codespan\">axisPointer.handle.show</code>（例如 <a href=\"#xAxis.axisPointer.handle.show\">xAxis.axisPointer.handle.show</a> 为 <code class=\"codespan\">true</code> 则会显示出此 axisPointer 的拖拽按钮。（polar 坐标系暂不支持此功能）。</p>\n<p><strong>注意：</strong>\n如果发现此时 tooltip 效果不良好，可设置 <a href=\"#tooltip.triggerOn\">tooltip.triggerOn</a> 为 <code class=\"codespan\">&#39;none&#39;</code>（于是效果为：手指按住按钮则显示 tooltip，松开按钮则隐藏 tooltip），或者 <a href=\"#tooltip.alwaysShowContent\">tooltip.alwaysShowContent</a> 为 <code class=\"codespan\">true</code>（效果为 tooltip 一直显示）。</p>\n<p>参见<a href=\"/echarts-website/examples/zh/editor.html?c=line-tooltip-touch&amp;edit=1&amp;reset=1\" target=\"_blank\">例子</a>。</p>\n<hr>\n<p><strong>自动吸附到数据（snap）</strong></p>\n<p>对于数值轴、时间轴，如果开启了 <a href=\"#xAxis.axisPointer.snap\">snap</a>，则 axisPointer 会自动吸附到最近的点上。</p>\n<hr>\n"
  },
  "axisPointer.type": {
    "desc": "\n\n<p>指示器类型。</p>\n<p>可选</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;line&#39;</code> 直线指示器</p>\n</li>\n<li><p><code class=\"codespan\">&#39;shadow&#39;</code> 阴影指示器</p>\n</li>\n<li><p><code class=\"codespan\">&#39;none&#39;</code> 无指示器</p>\n</li>\n<li><p><code class=\"codespan\">&#39;cross&#39;</code> 十字准星指示器。其实是种简写，表示启用两个正交的轴的 axisPointer。</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "none,line,shadow,cross"
    }
  },
  "axisPointer.axis": {
    "desc": "<p>指示器的坐标轴。</p>\n<p>默认情况，坐标系会自动选择显示哪个轴的 axisPointer（默认取类目轴或者时间轴）。</p>\n<p>可以是 <code class=\"codespan\">&#39;x&#39;</code>, <code class=\"codespan\">&#39;y&#39;</code>, <code class=\"codespan\">&#39;radius&#39;</code>, <code class=\"codespan\">&#39;angle&#39;</code>。</p>\n"
  },
  "axisPointer.snap": {
    "desc": "<p>坐标轴指示器是否自动吸附到点上。默认自动判断。</p>\n<p>这个功能在数值轴和时间轴上比较有意义，可以自动寻找细小的数值点。</p>\n"
  },
  "axisPointer.z": {
    "desc": "<p>坐标轴指示器的 z 值。控制图形的前后顺序。<code class=\"codespan\">z</code>值小的图形会被<code class=\"codespan\">z</code>值大的图形覆盖。</p>\n"
  },
  "axisPointer.label": {
    "desc": "<p>坐标轴指示器的文本标签。</p>\n"
  },
  "axisPointer.label.show": {
    "desc": "<p>是否显示文本标签。如果 <a href=\"#tooltip.axisPointer.type\">tooltip.axisPointer.type</a> 设置为 <code class=\"codespan\">&#39;cross&#39;</code> 则默认显示标签，否则默认不显示。</p>\n"
  },
  "axisPointer.label.precision": {
    "desc": "<p>文本标签中数值的小数点精度。默认根据当前轴的值自动判断。也可以指定如 <code class=\"codespan\">2</code> 表示保留两位小数。</p>\n"
  },
  "axisPointer.label.formatter": {
    "desc": "<p>文本标签文字的格式化器。</p>\n<p>如果为 <code class=\"codespan\">string</code>，可以是例如：<code class=\"codespan\">formatter: &#39;some text {value} some text</code>，其中 <code class=\"codespan\">{value}</code> 会被自动替换为轴的值。</p>\n<p>如果为 <code class=\"codespan\">function</code>，可以是例如：</p>\n<p><strong>参数：</strong></p>\n<p><code class=\"codespan\">{Object}</code> params: 含有：</p>\n<p><code class=\"codespan\">{Object}</code> params.value: 轴当前值，如果 axis.type 为 &#39;category&#39; 时，其值为 axis.data 里的数值。如果 axis.type 为 <code class=\"codespan\">&#39;time&#39;</code>，其值为时间戳。</p>\n<p><code class=\"codespan\">{Array.&lt;Object&gt;}</code> params.seriesData: 一个数组，是当前 axisPointer 最近的点的信息，每项内容为</p>\n<p><code class=\"codespan\">{string}</code> params.axisDimension: 轴的维度名，例如直角坐标系中是 <code class=\"codespan\">&#39;x&#39;</code>、<code class=\"codespan\">&#39;y&#39;</code>，极坐标系中是 <code class=\"codespan\">&#39;radius&#39;</code>、<code class=\"codespan\">&#39;angle&#39;</code>。</p>\n<p><code class=\"codespan\">{number}</code> params.axisIndex: 轴的 index，<code class=\"codespan\">0</code>、<code class=\"codespan\">1</code>、<code class=\"codespan\">2</code>、...</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>每项内容还包括轴的信息：</p>\n<pre><code class=\"lang-js\">{\n    axisDim: &#39;x&#39;, // &#39;x&#39;, &#39;y&#39;, &#39;angle&#39;, &#39;radius&#39;, &#39;single&#39;\n    axisId: &#39;xxx&#39;,\n    axisName: &#39;xxx&#39;,\n    axisIndex: 3,\n    axisValue: 121, // 当前 axisPointer 对应的 value。\n    axisValueLabel: &#39;文本&#39;\n}\n</code></pre>\n<p><strong>返回值：</strong></p>\n<p>显示的 string。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">formatter: function (params) {\n    // 假设此轴的 type 为 &#39;time&#39;。\n    return &#39;some text&#39; + echarts.format.formatTime(params.value);\n}\n</code></pre>\n"
  },
  "axisPointer.label.margin": {
    "desc": "<p>label 距离轴的距离。</p>\n"
  },
  "axisPointer.label.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#fff'"
    }
  },
  "axisPointer.label.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "axisPointer.label.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "axisPointer.label.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "axisPointer.label.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "axisPointer.label.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "axisPointer.label.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "axisPointer.label.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "axisPointer.label.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisPointer.label.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.label.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "axisPointer.label.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.label.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisPointer.label.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "axisPointer.label.padding": {
    "desc": "\n\n<p>axisPointer内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。</p>\n<p>使用示例：</p>\n<pre><code class=\"lang-js\">// 设置内边距为 5\npadding: 5\n// 设置上下的内边距为 5，左右的内边距为 10\npadding: [5, 10]\n// 分别设置四个方向的内边距\npadding: [\n    5,  // 上\n    10, // 右\n    5,  // 下\n    10, // 左\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "axisPointer.label.backgroundColor": {
    "desc": "<p>文本标签的背景颜色，默认是和 <a href=\"#xAxis.axisLine.lineStyle.color\">axis.axisLine.lineStyle.color</a> 相同。</p>\n"
  },
  "axisPointer.label.borderColor": {
    "desc": "<p>文本标签的边框颜色。</p>\n"
  },
  "axisPointer.label.borderWidth": {
    "desc": "<p>文本标签的边框宽度。</p>\n"
  },
  "axisPointer.label.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "3",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.label.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#aaa"
    }
  },
  "axisPointer.label.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.label.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.lineStyle": {
    "desc": "<p><a href=\"#tooltip.axisPointer.type\">axisPointer.type</a> 为 <code class=\"codespan\">&#39;line&#39;</code> 时有效。</p>\n"
  },
  "axisPointer.lineStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisPointer.lineStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.lineStyle.type": {
    "desc": "\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "axisPointer.lineStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.lineStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "axisPointer.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.lineStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "axisPointer.shadowStyle": {
    "desc": "<p><a href=\"#tooltip.axisPointer.type\">axisPointer.type</a> 为 <code class=\"codespan\">&#39;shadow&#39;</code> 时有效。</p>\n"
  },
  "axisPointer.shadowStyle.color": {
    "desc": "\n\n<p>填充的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisPointer.shadowStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.shadowStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "axisPointer.shadowStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.shadowStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.shadowStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "axisPointer.crossStyle": {
    "desc": "<p><a href=\"#tooltip.axisPointer.type\">axisPointer.type</a> 为 <code class=\"codespan\">&#39;cross&#39;</code> 时有效。</p>\n"
  },
  "axisPointer.crossStyle.color": {
    "desc": "\n\n<p>线的颜色。</p>\n<blockquote>\n<p>颜色可以使用 RGB 表示，比如 <code class=\"codespan\">&#39;rgb(128, 128, 128)&#39;</code>，如果想要加上 alpha 通道表示不透明度，可以使用 RGBA，比如 <code class=\"codespan\">&#39;rgba(128, 128, 128, 0.5)&#39;</code>，也可以使用十六进制格式，比如 <code class=\"codespan\">&#39;#ccc&#39;</code>。除了纯色之外颜色也支持渐变色和纹理填充</p>\n<pre><code class=\"lang-js\">// 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置\ncolor: {\n    type: &#39;linear&#39;,\n    x: 0,\n    y: 0,\n    x2: 0,\n    y2: 1,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变\ncolor: {\n    type: &#39;radial&#39;,\n    x: 0.5,\n    y: 0.5,\n    r: 0.5,\n    colorStops: [{\n        offset: 0, color: &#39;red&#39; // 0% 处的颜色\n    }, {\n        offset: 1, color: &#39;blue&#39; // 100% 处的颜色\n    }],\n    global: false // 缺省为 false\n}\n// 纹理填充\ncolor: {\n    image: imageDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串\n    repeat: &#39;repeat&#39; // 是否平铺，可以是 &#39;repeat-x&#39;, &#39;repeat-y&#39;, &#39;no-repeat&#39;\n}\n</code></pre>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "axisPointer.crossStyle.width": {
    "desc": "\n\n<p>线宽。</p>\n",
    "uiControl": {
      "type": "number",
      "value": "1",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.crossStyle.type": {
    "desc": "\n\n<p>线的类型。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "axisPointer.crossStyle.shadowBlur": {
    "desc": "\n\n<p>图形阴影的模糊大小。该属性配合 <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> 一起设置图形的阴影效果。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "axisPointer.crossStyle.shadowColor": {
    "desc": "\n\n<p>阴影颜色。支持的格式同<code class=\"codespan\">color</code>。</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "axisPointer.crossStyle.shadowOffsetX": {
    "desc": "\n\n<p>阴影水平方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.crossStyle.shadowOffsetY": {
    "desc": "\n\n<p>阴影垂直方向上的偏移距离。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "axisPointer.crossStyle.opacity": {
    "desc": "\n\n<p>图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "axisPointer.animation": {
    "desc": "\n\n<p>是否开启动画。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true",
      "clean": "true"
    }
  },
  "axisPointer.animationThreshold": {
    "desc": "<p>是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。</p>\n"
  },
  "axisPointer.animationDuration": {
    "desc": "\n\n<p>初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果：</p>\n<pre><code class=\"lang-js\">animationDuration: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20",
      "clean": "true"
    }
  },
  "axisPointer.animationEasing": {
    "desc": "\n\n<p>初始动画的缓动效果。不同的缓动效果可以参考 <a href=\"/echarts-website/examples/zh/editor.html?c=line-easing\" target=\"_blank\">缓动示例</a>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut",
      "clean": "true"
    }
  },
  "axisPointer.animationDelay": {
    "desc": "<p>初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-js\">animationDelay: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"/echarts-website/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
  },
  "axisPointer.animationDurationUpdate": {
    "desc": "\n\n<p>数据更新动画的时长。</p>\n<p>支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的更新动画效果：</p>\n<pre><code class=\"lang-js\">animationDurationUpdate: function (idx) {\n    // 越往后的数据时长越大\n    return idx * 100;\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "default": "1000",
      "step": "20"
    }
  },
  "axisPointer.animationEasingUpdate": {
    "desc": "\n\n<p>数据更新动画的缓动效果。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "linear,quadraticIn,quadraticOut,quadraticInOut,cubicIn,cubicOut,cubicInOut,quarticIn,quarticOut,quarticInOut,quinticIn,quinticOut,quinticInOut,sinusoidalIn,sinusoidalOut,sinusoidalInOut,exponentialIn,exponentialOut,exponentialInOut,circularIn,circularOut,circularInOut,elasticIn,elasticOut,elasticInOut,backIn,backOut,backInOut,bounceIn,bounceOut,bounceInOut"
    }
  },
  "axisPointer.animationDelayUpdate": {
    "desc": "<p>数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。</p>\n<p>如下示例：</p>\n<pre><code class=\"lang-js\">animationDelayUpdate: function (idx) {\n    // 越往后的数据延迟越大\n    return idx * 100;\n}\n</code></pre>\n<p>也可以看<a href=\"/echarts-website/examples/zh/editor.html?c=bar-animation-delay\" target=\"_blank\">该示例</a></p>\n"
  },
  "showContent": {
    "desc": "\n\n<p>是否显示提示框浮层，默认显示。只需tooltip触发事件或显示axisPointer而不需要显示内容时可配置该项为<code class=\"codespan\">false</code>。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "alwaysShowContent": {
    "desc": "\n\n<p>是否永远显示提示框内容，默认情况下在移出可触发提示框区域后 <a href=\"#tooltip.hideDelay\">一定时间</a> 后隐藏，设置为 <code class=\"codespan\">true</code> 可以保证一直显示提示框内容。</p>\n<p>该属性为 ECharts 3.0 中新加。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "triggerOn": {
    "desc": "\n\n<p>提示框触发的条件，可选：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;mousemove&#39;</code></p>\n<p>  鼠标移动时触发。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;click&#39;</code></p>\n<p>  鼠标点击时触发。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;mousemove|click&#39;</code></p>\n<p>  同时鼠标移动和点击时触发。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;none&#39;</code></p>\n<p>  不在 <code class=\"codespan\">&#39;mousemove&#39;</code> 或 <code class=\"codespan\">&#39;click&#39;</code> 时触发，用户可以通过 <a href=\"api.html#action.tooltip.showTip\" target=\"_blank\">action.tooltip.showTip</a> 和 <a href=\"api.html#action.tooltip.hideTip\" target=\"_blank\">action.tooltip.hideTip</a> 来手动触发和隐藏。也可以通过 <a href=\"#xAxis.axisPointer.handle\">axisPointer.handle</a> 来触发或隐藏。</p>\n</li>\n</ul>\n<p>该属性为 ECharts 3.0 中新加。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "mousemove,click"
    }
  },
  "showDelay": {
    "desc": "\n\n<p>浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 <a href=\"#tooltip.triggerOn\">triggerOn</a> 为 <code class=\"codespan\">&#39;mousemove&#39;</code> 时有效。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "20"
    }
  },
  "hideDelay": {
    "desc": "\n\n<p>浮层隐藏的延迟，单位为 ms，在 <a href=\"#tooltip.alwaysShowContent\">alwaysShowContent</a> 为 <code class=\"codespan\">true</code> 的时候无效。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "20",
      "default": "100"
    }
  },
  "enterable": {
    "desc": "\n\n<p>鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 <code class=\"codespan\">true</code>。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "renderMode": {
    "desc": "\n\n<p>浮层的渲染模式，默认以 <code class=\"codespan\">&#39;html</code> 即额外的 DOM 节点展示 tooltip；此外还可以设置为 <code class=\"codespan\">&#39;richText&#39;</code> 表示以富文本的形式渲染，渲染的结果在图表对应的 Canvas 中（目前 SVG 尚未支持富文本），这对于一些没有 DOM 的环境（如微信小程序）有更好的支持。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "html,richText",
      "default": "html"
    }
  },
  "confine": {
    "desc": "\n\n<p>是否将 tooltip 框限制在图表的区域内。</p>\n<p>当图表外层的 dom 被设置为 <code class=\"codespan\">&#39;overflow: hidden&#39;</code>，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "appendToBody": {
    "desc": "\n\n\n\n<blockquote>\n<p>从 <code class=\"codespan\">v4.7.0</code> 开始支持</p>\n</blockquote>\n<p>是否将 tooltip 的 DOM 节点添加为 HTML 的 <code class=\"codespan\">&lt;body&gt;</code> 的子节点。只有当 <a href=\"#tooltip.renderMode\">renderMode</a> 为 <code class=\"codespan\">&#39;html&#39;</code> 是有意义的。</p>\n<p>默认值是 <code class=\"codespan\">false</code>。<code class=\"codespan\">false</code> 表示，tooltip 的 DOM 节点会被添加为本图表的 DOM container 的一个子孙节点。但是这种方式导致，如果本图表的 DOM container 的祖先节点有设置 <code class=\"codespan\">overflow: hidden</code>，那么当 tooltip 超出 container 范围使可能被截断。这个问题一定程度上可以用 <a href=\"#tooltip.confine\">tooltip.confine</a> 来解决，但是不一定能解决所有场景。</p>\n<p>所以这里我们提供了 <code class=\"codespan\">appendToBody: true</code> 来解决这件事。这也是常见的解决此类问题的一种方式。但是 <code class=\"codespan\">true</code> 并不定为默认值，因为要避免 break change，尤其是一些对于 tooltip 深入定制的使用。并且也避免一些未知的 bad case。</p>\n<p>注：CSS transform 的场景，这也可以使用。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "false"
    }
  },
  "transitionDuration": {
    "desc": "\n\n<p>提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.1",
      "default": "0.4"
    }
  },
  "position": {
    "desc": "<p>提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。</p>\n<p>可选：</p>\n<ul>\n<li><p><code class=\"codespan\">Array</code></p>\n<p>  通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。</p>\n<p>  示例:</p>\n<pre><code class=\"lang-js\">  // 绝对位置，相对于容器左侧 10px, 上侧 10 px\n  position: [10, 10]\n  // 相对位置，放置在容器正中间\n  position: [&#39;50%&#39;, &#39;50%&#39;]\n</code></pre>\n</li>\n<li><p><code class=\"codespan\">Function</code></p>\n<p>  回调函数，格式如下：</p>\n<pre><code class=\"lang-js\">  (point: Array, params: Object|Array.&lt;Object&gt;, dom: HTMLDomElement, rect: Object, size: Object) =&gt; Array\n</code></pre>\n<p>  <strong>参数：</strong><br>\n  point: 鼠标位置，如 [20, 40]。<br>\n  params: 同 formatter 的参数相同。<br>\n  dom: tooltip 的 dom 对象。<br>\n  rect: 只有鼠标在图形上时有效，是一个用<code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">width</code>, <code class=\"codespan\">height</code>四个属性表达的图形包围盒。<br>\n  size: 包括 dom 的尺寸和 echarts 容器的当前尺寸，例如：<code class=\"codespan\">{contentSize: [width, height], viewSize: [width, height]}</code>。<br></p>\n<p>  <strong>返回值：</strong><br>\n  可以是一个表示 tooltip 位置的数组，数组值可以是绝对的像素值，也可以是相  百分比。<br>\n  也可以是一个对象，如：<code class=\"codespan\">{left: 10, top: 30}</code>，或者 <code class=\"codespan\">{right: &#39;20%&#39;, bottom: 40}</code>。<br></p>\n<p>  如下示例：</p>\n<pre><code class=\"lang-js\">  position: function (point, params, dom, rect, size) {\n      // 固定在顶部\n      return [point[0], &#39;10%&#39;];\n  }\n</code></pre>\n<p>  或者：</p>\n<pre><code class=\"lang-js\">  position: function (pos, params, dom, rect, size) {\n      // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。\n      var obj = {top: 60};\n      obj[[&#39;left&#39;, &#39;right&#39;][+(pos[0] &lt; size.viewSize[0] / 2)]] = 5;\n      return obj;\n  }\n</code></pre>\n</li>\n</ul>\n<ul>\n<li><p><code class=\"codespan\">&#39;inside&#39;</code></p>\n<p>  鼠标所在图形的内部中心位置，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;top&#39;</code></p>\n<p>  鼠标所在图形上侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;left&#39;</code></p>\n<p>  鼠标所在图形左侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;right&#39;</code></p>\n<p>  鼠标所在图形右侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;bottom&#39;</code></p>\n<p>  鼠标所在图形底侧，只在 <a href=\"#tooltip.trigger\">trigger</a> 为<code class=\"codespan\">&#39;item&#39;</code>的时候有效。</p>\n</li>\n</ul>\n"
  },
  "formatter": {
    "desc": "<p>提示框浮层内容格式器，支持字符串模板和回调函数两种形式。</p>\n<p><strong>1, 字符串模板</strong></p>\n<p>模板变量有 <code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code>，<code class=\"codespan\">{e}</code>，分别表示系列名，数据名，数据值等。\n在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，会有多个系列的数据，此时可以通过 <code class=\"codespan\">{a0}</code>, <code class=\"codespan\">{a1}</code>, <code class=\"codespan\">{a2}</code> 这种后面加索引的方式表示系列的索引。\n不同图表类型下的 <code class=\"codespan\">{a}</code>，<code class=\"codespan\">{b}</code>，<code class=\"codespan\">{c}</code>，<code class=\"codespan\">{d}</code> 含义不一样。\n其中变量<code class=\"codespan\">{a}</code>, <code class=\"codespan\">{b}</code>, <code class=\"codespan\">{c}</code>, <code class=\"codespan\">{d}</code>在不同图表类型下代表数据含义为：</p>\n<ul>\n<li><p>折线（区域）图、柱状（条形）图、K线图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（类目值），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>散点图（气泡）图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据名称），<code class=\"codespan\">{c}</code>（数值数组）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>地图 : <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（区域名称），<code class=\"codespan\">{c}</code>（合并数值）, <code class=\"codespan\">{d}</code>（无）</p>\n</li>\n<li><p>饼图、仪表盘、漏斗图: <code class=\"codespan\">{a}</code>（系列名称），<code class=\"codespan\">{b}</code>（数据项名称），<code class=\"codespan\">{c}</code>（数值）, <code class=\"codespan\">{d}</code>（百分比）</p>\n</li>\n</ul>\n<p>更多其它图表模板变量的含义可以见相应的图表的 label.formatter 配置项。</p>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">formatter: &#39;{b0}: {c0}&lt;br /&gt;{b1}: {c1}&#39;\n</code></pre>\n<p><strong>2, 回调函数</strong></p>\n<p>回调函数格式：</p>\n<pre><code class=\"lang-js\">(params: Object|Array, ticket: string, callback: (ticket: string, html: string)) =&gt; string\n</code></pre>\n<p>第一个参数 <code class=\"codespan\">params</code> 是 formatter 需要的数据集。格式如下：</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n    // 饼图的百分比\n    percent: number,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p>在 <a href=\"#tooltip.trigger\">trigger</a> 为 <code class=\"codespan\">&#39;axis&#39;</code> 的时候，或者 tooltip 被 <a href=\"#xAxis.axisPointer\">axisPointer</a> 触发的时候，<code class=\"codespan\">params</code> 是多个系列的数据数组。其中每项内容格式同上，并且，</p>\n<pre><code class=\"lang-js\">{\n    componentType: &#39;series&#39;,\n    // 系列类型\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index\n    seriesIndex: number,\n    // 系列名称\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）\n    value: number|Array|Object,\n    // 坐标轴 encode 映射信息，\n    // key 为坐标轴（如 &#39;x&#39; &#39;y&#39; &#39;radius&#39; &#39;angle&#39; 等）\n    // value 必然为数组，不会为 null/undefied，表示 dimension index 。\n    // 其内容如：\n    // {\n    //     x: [2] // dimension index 为 2 的数据映射到 x 轴\n    //     y: [0] // dimension index 为 0 的数据映射到 y 轴\n    // }\n    encode: Object,\n    // 维度名列表\n    dimensionNames: Array&lt;String&gt;,\n    // 数据的维度 index，如 0 或 1 或 2 ...\n    // 仅在雷达图中使用。\n    dimensionIndex: number,\n    // 数据图形的颜色\n    color: string,\n\n}\n</code></pre>\n<p>注：encode 和 dimensionNames 的使用方式，例如：</p>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    source: [\n        [&#39;Matcha Latte&#39;, 43.3, 85.8, 93.7],\n        [&#39;Milk Tea&#39;, 83.1, 73.4, 55.1],\n        [&#39;Cheese Cocoa&#39;, 86.4, 65.2, 82.5],\n        [&#39;Walnut Brownie&#39;, 72.4, 53.9, 39.1]\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.encode.y[0]]\n</code></pre>\n<p>如果数据为：</p>\n<pre><code class=\"lang-js\">dataset: {\n    dimensions: [&#39;product&#39;, &#39;2015&#39;, &#39;2016&#39;, &#39;2017&#39;],\n    source: [\n        {product: &#39;Matcha Latte&#39;, &#39;2015&#39;: 43.3, &#39;2016&#39;: 85.8, &#39;2017&#39;: 93.7},\n        {product: &#39;Milk Tea&#39;, &#39;2015&#39;: 83.1, &#39;2016&#39;: 73.4, &#39;2017&#39;: 55.1},\n        {product: &#39;Cheese Cocoa&#39;, &#39;2015&#39;: 86.4, &#39;2016&#39;: 65.2, &#39;2017&#39;: 82.5},\n        {product: &#39;Walnut Brownie&#39;, &#39;2015&#39;: 72.4, &#39;2016&#39;: 53.9, &#39;2017&#39;: 39.1}\n    ]\n}\n</code></pre>\n<p>则可这样得到 y 轴对应的 value：</p>\n<pre><code class=\"lang-js\">params.value[params.dimensionNames[params.encode.y[0]]]\n</code></pre>\n<p><strong>注：</strong> ECharts 2.x 使用数组表示各参数的方式不再支持。</p>\n<p>第二个参数 <code class=\"codespan\">ticket</code> 是异步回调标识，配合第三个参数 <code class=\"codespan\">callback</code> 使用。\n第三个参数 <code class=\"codespan\">callback</code> 是异步回调，在提示框浮层内容是异步获取的时候，可以通过 callback 传入上述的 <code class=\"codespan\">ticket</code> 和 <code class=\"codespan\">html</code> 更新提示框浮层内容。</p>\n<p>示例：</p>\n<pre><code class=\"lang-js\">formatter: function (params, ticket, callback) {\n    $.get(&#39;detail?name=&#39; + params.name, function (content) {\n        callback(ticket, toHTML(content));\n    });\n    return &#39;Loading&#39;;\n}\n</code></pre>\n"
  },
  "backgroundColor": {
    "desc": "<p>提示框浮层的背景颜色。</p>\n"
  },
  "borderColor": {
    "desc": "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<p>提示框浮层的边框颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "borderWidth": {
    "desc": "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<p>提示框浮层的边框宽。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "padding": {
    "desc": "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<p>提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。</p>\n<p>使用示例：</p>\n<pre><code class=\"lang-js\">// 设置内边距为 5\npadding: 5\n// 设置上下的内边距为 5，左右的内边距为 10\npadding: [5, 10]\n// 分别设置四个方向的内边距\npadding: [\n    5,  // 上\n    10, // 右\n    5,  // 下\n    10, // 左\n]\n</code></pre>\n",
    "uiControl": {
      "type": "vector",
      "min": "0",
      "dims": "T,R,B,L"
    }
  },
  "textStyle": {
    "desc": "<p>提示框浮层的文本样式。</p>\n"
  },
  "textStyle.color": {
    "desc": "\n\n<p>文字的颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "'#fff'"
    }
  },
  "textStyle.fontStyle": {
    "desc": "\n\n<p>文字字体的风格。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "textStyle.fontWeight": {
    "desc": "\n\n<p>文字字体的粗细。</p>\n<p>可选：</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "textStyle.fontFamily": {
    "desc": "\n\n<p>文字的字体系列。</p>\n<p>还可以是 &#39;serif&#39; , &#39;monospace&#39;, &#39;Arial&#39;, &#39;Courier New&#39;, &#39;Microsoft YaHei&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "textStyle.fontSize": {
    "desc": "\n\n<p>文字的字体大小。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "14",
      "min": "1",
      "step": "1"
    }
  },
  "textStyle.lineHeight": {
    "desc": "\n\n<p>行高。</p>\n<p><code class=\"codespan\">rich</code> 中如果没有设置 <code class=\"codespan\">lineHeight</code>，则会取父层级的 <code class=\"codespan\">lineHeight</code>。例如：</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // 没有设置 `lineHeight`，则 `lineHeight` 为 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "textStyle.width": {
    "desc": "<p>文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p><code class=\"codespan\">width</code> 也可以是百分比字符串，如 <code class=\"codespan\">&#39;100%&#39;</code>。表示的是所在文本块的 <code class=\"codespan\">contentWidth</code>（即不包含文本块的 <code class=\"codespan\">padding</code>）的百分之多少。之所以以 <code class=\"codespan\">contentWidth</code> 做基数，因为每个文本片段只能基于 <code class=\"codespan\">content box</code> 布局。如果以 <code class=\"codespan\">outerWidth</code> 做基数，则百分比的计算在实用中不具有意义，可能会超出。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "textStyle.height": {
    "desc": "<p>文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 <code class=\"codespan\">backgroundColor</code>）时，可能会使用它。</p>\n<p>注意，文字块的 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code> 指定的是内容高宽，不包含 <code class=\"codespan\">padding</code>。</p>\n<p>注意，如果不定义 <code class=\"codespan\">rich</code> 属性，则不能指定 <code class=\"codespan\">width</code> 和 <code class=\"codespan\">height</code>。</p>\n"
  },
  "textStyle.textBorderColor": {
    "desc": "\n\n<p>文字本身的描边颜色。</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "textStyle.textBorderWidth": {
    "desc": "\n\n<p>文字本身的描边宽度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.textShadowColor": {
    "desc": "\n\n<p>文字本身的阴影颜色。</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "textStyle.textShadowBlur": {
    "desc": "\n\n<p>文字本身的阴影长度。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.textShadowOffsetX": {
    "desc": "\n\n<p>文字本身的阴影 X 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.textShadowOffsetY": {
    "desc": "\n\n<p>文字本身的阴影 Y 偏移。</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "extraCssText": {
    "desc": "<p>额外附加到浮层的 css 样式。如下为浮层添加阴影的示例：</p>\n<pre><code class=\"lang-js\">extraCssText: &#39;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);&#39;\n</code></pre>\n"
  }
}