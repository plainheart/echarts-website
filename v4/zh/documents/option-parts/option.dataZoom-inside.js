window.__EC_DOC_option_dataZoom_inside = {
  "id": {
    "desc": "<p>组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。</p>\n"
  },
  "disabled": {
    "desc": "\n\n<p>是否停止组件的功能。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "xAxisIndex": {
    "desc": "<p>设置 <code class=\"codespan\">dataZoom-inside</code> 组件控制的 <code class=\"codespan\">x轴</code>（即<a href=\"#xAxis\">xAxis</a>，是直角坐标系中的概念，参见 <a href=\"#grid\">grid</a>）。</p>\n<p>不指定时，当 <a href=\"#dataZoom-inside.orient\">dataZoom-inside.orient</a> 为 <code class=\"codespan\">&#39;horizontal&#39;</code>时，默认控制和 dataZoom 平行的第一个 <code class=\"codespan\">xAxis</code>。但是不建议使用默认值，建议显式指定。</p>\n<p>如果是 <code class=\"codespan\">number</code> 表示控制一个轴，如果是 <code class=\"codespan\">Array</code> 表示控制多个轴。</p>\n<p>例如有如下 ECharts option：</p>\n<pre><code class=\"lang-javascript\">option: {\n    xAxis: [\n        {...}, // 第一个 xAxis\n        {...}, // 第二个 xAxis\n        {...}, // 第三个 xAxis\n        {...}  // 第四个 xAxis\n    ],\n    dataZoom: [\n        { // 第一个 dataZoom 组件\n            xAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 xAxis\n        },\n        { // 第二个 dataZoom 组件\n            xAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 xAxis\n        }\n    ]\n}\n</code></pre>\n"
  },
  "yAxisIndex": {
    "desc": "<p>设置 <code class=\"codespan\">dataZoom-inside</code> 组件控制的 <code class=\"codespan\">y轴</code>（即<a href=\"#yAxis\">yAxis</a>，是直角坐标系中的概念，参见 <a href=\"#grid\">grid</a>）。</p>\n<p>不指定时，当 <a href=\"#dataZoom-inside.orient\">dataZoom-inside.orient</a> 为 <code class=\"codespan\">&#39;vertical&#39;</code>时，默认控制和 dataZoom 平行的第一个 <code class=\"codespan\">yAxis</code>。但是不建议使用默认值，建议显式指定。</p>\n<p>如果是 <code class=\"codespan\">number</code> 表示控制一个轴，如果是 <code class=\"codespan\">Array</code> 表示控制多个轴。</p>\n<p>例如有如下 ECharts option：</p>\n<pre><code class=\"lang-javascript\">option: {\n    yAxis: [\n        {...}, // 第一个 yAxis\n        {...}, // 第二个 yAxis\n        {...}, // 第三个 yAxis\n        {...}  // 第四个 yAxis\n    ],\n    dataZoom: [\n        { // 第一个 dataZoom 组件\n            yAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 yAxis\n        },\n        { // 第二个 dataZoom 组件\n            yAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 yAxis\n        }\n    ]\n}\n</code></pre>\n"
  },
  "radiusAxisIndex": {
    "desc": "<p>设置 <code class=\"codespan\">dataZoom-inside</code> 组件控制的 <code class=\"codespan\">radius 轴</code>（即<a href=\"#radiusAxis\">radiusAxis</a>，是直角坐标系中的概念，参见 <a href=\"#polar\">polar</a>）。</p>\n<p>如果是 <code class=\"codespan\">number</code> 表示控制一个轴，如果是 <code class=\"codespan\">Array</code> 表示控制多个轴。</p>\n<p>例如有如下 ECharts option：</p>\n<pre><code class=\"lang-javascript\">option: {\n    radiusAxis: [\n        {...}, // 第一个 radiusAxis\n        {...}, // 第二个 radiusAxis\n        {...}, // 第三个 radiusAxis\n        {...}  // 第四个 radiusAxis\n    ],\n    dataZoom: [\n        { // 第一个 dataZoom 组件\n            radiusAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 radiusAxis\n        },\n        { // 第二个 dataZoom 组件\n            radiusAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 radiusAxis\n        }\n    ]\n}\n</code></pre>\n"
  },
  "angleAxisIndex": {
    "desc": "<p>设置 <code class=\"codespan\">dataZoom-inside</code> 组件控制的 <code class=\"codespan\">angle 轴</code>（即<a href=\"#angleAxis\">angleAxis</a>，是直角坐标系中的概念，参见 <a href=\"#polar\">polar</a>）。</p>\n<p>如果是 <code class=\"codespan\">number</code> 表示控制一个轴，如果是 <code class=\"codespan\">Array</code> 表示控制多个轴。</p>\n<p>例如有如下 ECharts option：</p>\n<pre><code class=\"lang-javascript\">option: {\n    angleAxis: [\n        {...}, // 第一个 angleAxis\n        {...}, // 第二个 angleAxis\n        {...}, // 第三个 angleAxis\n        {...}  // 第四个 angleAxis\n    ],\n    dataZoom: [\n        { // 第一个 dataZoom 组件\n            angleAxisIndex: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 angleAxis\n        },\n        { // 第二个 dataZoom 组件\n            angleAxisIndex: 3      // 表示这个 dataZoom 组件控制 第四个 angleAxis\n        }\n    ]\n}\n</code></pre>\n"
  },
  "filterMode": {
    "desc": "\n\n\n\n<p><code class=\"codespan\">dataZoom</code> 的运行原理是通过 <code class=\"codespan\">数据过滤</code> 以及在内部设置轴的显示窗口来达到 <code class=\"codespan\">数据窗口缩放</code> 的效果。</p>\n<p>数据过滤模式（<a href=\"#dataZoom.filterMode\">dataZoom.filterMode</a>）的设置不同，效果也不同。</p>\n<p>可选值为：</p>\n<ul>\n<li><p>&#39;filter&#39;：当前数据窗口外的数据，被 <strong>过滤掉</strong>。即 <strong>会</strong> 影响其他轴的数据范围。每个数据项，只要有一个维度在数据窗口外，整个数据项就会被过滤掉。</p>\n</li>\n<li><p>&#39;weakFilter&#39;：当前数据窗口外的数据，被 <strong>过滤掉</strong>。即 <strong>会</strong> 影响其他轴的数据范围。每个数据项，只有当全部维度都在数据窗口同侧外部，整个数据项才会被过滤掉。</p>\n</li>\n<li><p>&#39;empty&#39;：当前数据窗口外的数据，被 <strong>设置为空</strong>。即 <strong>不会</strong> 影响其他轴的数据范围。</p>\n</li>\n<li><p>&#39;none&#39;: 不过滤数据，只改变数轴范围。</p>\n</li>\n</ul>\n<p>如何设置，由用户根据场景和需求自己决定。经验来说：</p>\n<ul>\n<li><p>当『只有 X 轴 或 只有 Y 轴受 <code class=\"codespan\">dataZoom</code> 组件控制』时，常使用 <code class=\"codespan\">filterMode: &#39;filter&#39;</code>，这样能使另一个轴自适应过滤后的数值范围。</p>\n</li>\n<li><p>当『X 轴 Y 轴分别受 <code class=\"codespan\">dataZoom</code> 组件控制』时：</p>\n<ul>\n<li><p>如果 X 轴和 Y 轴是『同等地位的、不应互相影响的』，比如在『双数值轴散点图』中，那么两个轴可都设为 <code class=\"codespan\">fiterMode: &#39;empty&#39;</code>。</p>\n</li>\n<li><p>如果 X 轴为主，Y 轴为辅，比如在『柱状图』中，需要『拖动 <code class=\"codespan\">dataZoomX</code> 改变 X 轴过滤柱子时，Y 轴的范围也自适应剩余柱子的高度』，『拖动 <code class=\"codespan\">dataZoomY</code> 改变 Y 轴过滤柱子时，X 轴范围不受影响』，那么就 X轴设为 <code class=\"codespan\">fiterMode: &#39;filter&#39;</code>，Y 轴设为 <code class=\"codespan\">fiterMode: &#39;empty&#39;</code>，即主轴 <code class=\"codespan\">&#39;filter&#39;</code>，辅轴 <code class=\"codespan\">&#39;empty&#39;</code>。</p>\n</li>\n</ul>\n</li>\n</ul>\n<p>下面是个具体例子：</p>\n<pre><code class=\"lang-javascript\">option = {\n    dataZoom: [\n        {\n            id: &#39;dataZoomX&#39;,\n            type: &#39;slider&#39;,\n            xAxisIndex: [0],\n            filterMode: &#39;filter&#39;\n        },\n        {\n            id: &#39;dataZoomY&#39;,\n            type: &#39;slider&#39;,\n            yAxisIndex: [0],\n            filterMode: &#39;empty&#39;\n        }\n    ],\n    xAxis: {type: &#39;value&#39;},\n    yAxis: {type: &#39;value&#39;},\n    series{\n        type: &#39;bar&#39;,\n        data: [\n            // 第一列对应 X 轴，第二列对应 Y 轴。\n            [12, 24, 36],\n            [90, 80, 70],\n            [3, 9, 27],\n            [1, 11, 111]\n        ]\n    }\n}\n</code></pre>\n<p>上例中，<code class=\"codespan\">dataZoomX</code> 的 <code class=\"codespan\">filterMode</code> 设置为 <code class=\"codespan\">&#39;filter&#39;</code>。于是，假设当用户拖拽 <code class=\"codespan\">dataZoomX</code>（不去动 <code class=\"codespan\">dataZoomY</code>）导致其 valueWindow 变为 <code class=\"codespan\">[2, 50]</code> 时，<code class=\"codespan\">dataZoomX</code> 对 series.data 的第一列进行遍历，窗口外的整项去掉，最终得到的 series.data 为：</p>\n<pre><code class=\"lang-javascript\">[\n    // 第一列对应 X 轴，第二列对应 Y 轴。\n    [12, 24, 36],\n    // [90, 80, 70] 整项被过滤掉，因为 90 在 dataWindow 之外。\n    [3, 9, 27]\n    // [1, 11, 111] 整项被过滤掉，因为 1 在 dataWindow 之外。\n]\n</code></pre>\n<p>过滤前，series.data 中对应 Y 轴的值有 <code class=\"codespan\">24</code>、<code class=\"codespan\">80</code>、<code class=\"codespan\">9</code>、<code class=\"codespan\">11</code>，过滤后，只剩下 <code class=\"codespan\">24</code> 和 <code class=\"codespan\">9</code>，那么 Y 轴的显示范围就会自动改变以适应剩下的这两个值的显示（如果 Y 轴没有被设置 <code class=\"codespan\">min</code>、<code class=\"codespan\">max</code> 固定其显示范围的话）。</p>\n<p>所以，<code class=\"codespan\">filterMode: &#39;filter&#39;</code> 的效果是：过滤数据后使另外的轴也能自动适应当前数据的范围。</p>\n<p>再从头来，上例中 <code class=\"codespan\">dataZoomY</code> 的 <code class=\"codespan\">filterMode</code> 设置为 <code class=\"codespan\">&#39;empty&#39;</code>。于是，假设当用户拖拽 <code class=\"codespan\">dataZoomY</code>（不去动 <code class=\"codespan\">dataZoomX</code>）导致其 dataWindow 变为 <code class=\"codespan\">[10, 60]</code> 时，<code class=\"codespan\">dataZoomY</code> 对 series.data 的第二列进行遍历，窗口外的值被设置为 empty （即替换为 NaN，这样设置为空的项，其所对应柱形，在 X 轴还有占位，只是不显示出来）。最终得到的 series.data 为：</p>\n<pre><code class=\"lang-javascript\">[\n    // 第一列对应 X 轴，第二列对应 Y 轴。\n    [12, 24, 36],\n    [90, NaN, 70], // 设置为 empty (NaN)\n    [3, NaN, 27],  // 设置为 empty (NaN)\n    [1, 11, 111]\n]\n</code></pre>\n<p>这时，series.data 中对应于 X 轴的值仍然全部保留不受影响，为 <code class=\"codespan\">12</code>、<code class=\"codespan\">90</code>、<code class=\"codespan\">3</code>、<code class=\"codespan\">1</code>。那么用户对 <code class=\"codespan\">dataZoomY</code> 的拖拽操作不会影响到 X 轴的范围。这样的效果，对于离群点（outlier）过滤功能，比较清晰。</p>\n<p>如下面的例子：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/bar-dataZoom-filterMode&edit=1&reset=1\" width=\"600\" height=\"400\"><iframe />\n\n\n\n\n\n",
    "uiControl": {
      "type": "enum",
      "options": "filter,weakFilter,empty,none",
      "default": "filter"
    }
  },
  "start": {
    "desc": "\n\n<p>数据窗口范围的起始百分比。范围是：0 ~ 100。表示 0% ~ 100%。</p>\n<p><a href=\"#dataZoom-inside.start\">dataZoom-inside.start</a> 和 <a href=\"#dataZoom-inside.end\">dataZoom-inside.end</a> 共同用 <strong>百分比</strong> 的形式定义了数据窗口范围。</p>\n<p>关于坐标轴范围（axis extent）和 <code class=\"codespan\">dataZoom-inside.start</code> 的关系的更多信息，请参见：<a href=\"#dataZoom-inside.rangeMode\">dataZoom-inside.rangeMode</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "100",
      "step": "0.5"
    }
  },
  "end": {
    "desc": "\n\n<p>数据窗口范围的结束百分比。范围是：0 ~ 100。</p>\n<p><a href=\"#dataZoom-inside.start\">dataZoom-inside.start</a> 和 <a href=\"#dataZoom-inside.end\">dataZoom-inside.end</a> 共同用 <strong>百分比</strong> 的形式定义了数据窗口范围。</p>\n<p>关于坐标轴范围（axis extent）和 <code class=\"codespan\">dataZoom-inside.end</code> 的关系的更多信息，请参见：<a href=\"#dataZoom-inside.rangeMode\">dataZoom-inside.rangeMode</a>。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "100",
      "default": "100",
      "step": "0.5"
    }
  },
  "startValue": {
    "desc": "<p>数据窗口范围的起始数值。如果设置了 <a href=\"#dataZoom-inside.start\">dataZoom-inside.start</a> 则 <code class=\"codespan\">startValue</code> 失效。</p>\n<p><a href=\"#dataZoom-inside.startValue\">dataZoom-inside.startValue</a> 和 <a href=\"#dataZoom-inside.endValue\">dataZoom-inside.endValue</a> 共同用 <strong>绝对数值</strong> 的形式定义了数据窗口范围。</p>\n<p>注意，如果轴的类型为 <code class=\"codespan\">category</code>，则 <code class=\"codespan\">startValue</code> 既可以设置为 <code class=\"codespan\">axis.data</code> 数组的 <code class=\"codespan\">index</code>，也可以设置为数组值本身。\n但是如果设置为数组值本身，会在内部自动转化为数组的 index。</p>\n<p>关于坐标轴范围（axis extent）和 <code class=\"codespan\">dataZoom-inside.startValue</code> 的关系的更多信息，请参见：<a href=\"#dataZoom-inside.rangeMode\">dataZoom-inside.rangeMode</a>。</p>\n"
  },
  "endValue": {
    "desc": "<p>数据窗口范围的结束数值。如果设置了 <a href=\"#dataZoom-inside.end\">dataZoom-inside.end</a> 则 <code class=\"codespan\">endValue</code> 失效。</p>\n<p><a href=\"#dataZoom-inside.startValue\">dataZoom-inside.startValue</a> 和 <a href=\"#dataZoom-inside.endValue\">dataZoom-inside.endValue</a> 共同用 <strong>绝对数值</strong> 的形式定义了数据窗口范围。</p>\n<p>注意，如果轴的类型为 <code class=\"codespan\">category</code>，则 <code class=\"codespan\">endValue</code> 即可以设置为 <code class=\"codespan\">axis.data</code> 数组的 <code class=\"codespan\">index</code>，也可以设置为数组值本身。\n但是如果设置为数组值本身，会在内部自动转化为数组的 index。</p>\n<p>关于坐标轴范围（axis extent）和 <code class=\"codespan\">dataZoom-inside.endValue</code> 的关系的更多信息，请参见：<a href=\"#dataZoom-inside.rangeMode\">dataZoom-inside.rangeMode</a>。</p>\n"
  },
  "minSpan": {
    "desc": "\n\n<p>用于限制窗口大小的最小值（百分比值），取值范围是 <code class=\"codespan\">0</code> ~ <code class=\"codespan\">100</code>。</p>\n<p>如果设置了 <a href=\"#dataZoom-inside.minValueSpan\">dataZoom-inside.minValueSpan</a> 则 <code class=\"codespan\">minSpan</code> 失效。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "100",
      "step": "0.5"
    }
  },
  "maxSpan": {
    "desc": "\n\n<p>用于限制窗口大小的最大值（百分比值），取值范围是 <code class=\"codespan\">0</code> ~ <code class=\"codespan\">100</code>。</p>\n<p>如果设置了 <a href=\"#dataZoom-inside.maxValueSpan\">dataZoom-inside.maxValueSpan</a> 则 <code class=\"codespan\">maxSpan</code> 失效。</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "100",
      "step": "0.5"
    }
  },
  "minValueSpan": {
    "desc": "<p>用于限制窗口大小的最小值（实际数值）。</p>\n<p>如在时间轴上可以设置为：<code class=\"codespan\">3600 * 24 * 1000 * 5</code> 表示 5 天。\n在类目轴上可以设置为 <code class=\"codespan\">5</code> 表示 5 个类目。</p>\n"
  },
  "maxValueSpan": {
    "desc": "<p>用于限制窗口大小的最大值（实际数值）。</p>\n<p>如在时间轴上可以设置为：<code class=\"codespan\">3600 * 24 * 1000 * 5</code> 表示 5 天。\n在类目轴上可以设置为 <code class=\"codespan\">5</code> 表示 5 个类目。</p>\n"
  },
  "orient": {
    "desc": "\n\n<p>布局方式是横还是竖。不仅是布局方式，对于直角坐标系而言，也决定了，缺省情况控制横向数轴还是纵向数轴。</p>\n<p>可选值为：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;horizontal&#39;</code>：水平。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;vertical&#39;</code>：竖直。</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "horizontal,vertical"
    }
  },
  "zoomLock": {
    "desc": "\n\n<p>是否锁定选择区域（或叫做数据窗口）的大小。</p>\n<p>如果设置为 <code class=\"codespan\">true</code> 则锁定选择区域的大小，也就是说，只能平移，不能缩放。</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "throttle": {
    "desc": "\n\n<p>设置触发视图刷新的频率。单位为毫秒（ms）。</p>\n<p>如果 <a href=\"#animation\">animation</a> 设为 <code class=\"codespan\">true</code> 且 <a href=\"#animationDurationUpdate\">animationDurationUpdate</a> 大于 <code class=\"codespan\">0</code>，可以保持 <code class=\"codespan\">throttle</code> 为默认值 <code class=\"codespan\">100</code>（或者设置为大于 <code class=\"codespan\">0</code> 的值），否则拖拽时有可能画面感觉卡顿。</p>\n<p>如果 <a href=\"#animation\">animation</a> 设为 <code class=\"codespan\">false</code> 或者 <a href=\"#animationDurationUpdate\">animationDurationUpdate</a> 设为 <code class=\"codespan\">0</code>，且在数据量不大时，拖拽时画面感觉卡顿，可以把尝试把 <code class=\"codespan\">throttle</code> 设为 <code class=\"codespan\">0</code> 来改善。</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "0",
      "step": "20"
    }
  },
  "rangeMode": {
    "desc": "<p>形式为：<code class=\"codespan\">[rangeModeForStart, rangeModeForEnd]</code>。</p>\n<p>例如 <code class=\"codespan\">rangeMode: [&#39;value&#39;, &#39;percent&#39;]</code>，表示 start 值取绝对数值，end 取百分比。</p>\n<p>每项可选值为：<code class=\"codespan\">&#39;value&#39;</code>, <code class=\"codespan\">&#39;percent&#39;</code></p>\n<ul>\n<li><code class=\"codespan\">&#39;value&#39;</code> 模式：处于此模式下，坐标轴范围（axis extent）总只会被<code class=\"codespan\">dataZoom.startValue</code> and <code class=\"codespan\">dataZoom.endValue</code> 决定，而不管数据是多少，以及不管，<code class=\"codespan\">axis.min</code> 和 <code class=\"codespan\">axis.max</code> 怎么设置。</li>\n<li><code class=\"codespan\">&#39;percent&#39;</code> 模式：处于此模式下，<code class=\"codespan\">100</code> 代表 100% 的 <code class=\"codespan\">[dMin, dMax]</code>。这里 <code class=\"codespan\">dMin</code> 表示，如果 <code class=\"codespan\">axis.min</code> 设置了就是 <code class=\"codespan\">axis.min</code>，否则是 <code class=\"codespan\">data.extent[0]</code>；<code class=\"codespan\">dMax</code> 表示，如果 <code class=\"codespan\">axis.max</code> 设置了就是 <code class=\"codespan\">axis.max</code>，否则是 <code class=\"codespan\">data.extent[1]</code>。<code class=\"codespan\">[dMin, dMax]</code> 乘以 percent 的结果得到坐标轴范围（axis extent）。</li>\n</ul>\n<p>默认情况下，<code class=\"codespan\">rangeMode</code> 总是被自动设定。如果指定了 <code class=\"codespan\">option.start</code>/<code class=\"codespan\">option.end</code> 那么就设定为 <code class=\"codespan\">&#39;percent&#39;</code>，如果指定了 <code class=\"codespan\">option.startValue</code>/<code class=\"codespan\">option.endValue</code> 那么就设定为 <code class=\"codespan\">&#39;value&#39;</code>。以及当用户用不用操作触发视图改变时，<code class=\"codespan\">rangeMode</code> 也可能会相应得变化（如，通过 <code class=\"codespan\">toolbox.dataZoom</code> 触发视图改变时，<code class=\"codespan\">rangeMode</code> 会自动被设置为 <code class=\"codespan\">value</code>，通过 <code class=\"codespan\">dataZoom-inside</code> 和 <code class=\"codespan\">dataZoom-slider</code> 触发视图改变时，会自动被设置为 <code class=\"codespan\">&#39;percent&#39;</code>）。</p>\n<p>如果我们手动在 <code class=\"codespan\">option</code> 中设定了 <code class=\"codespan\">rangeMode</code>，那么它只在 <code class=\"codespan\">start</code> 和 <code class=\"codespan\">startValue</code> 都设置了或者 <code class=\"codespan\">end</code> 和 <code class=\"codespan\">endValue</code> 都设置了才有意义。所以通常我们没必要在 <code class=\"codespan\">option</code> 中指定 <code class=\"codespan\">rangeMode</code>。</p>\n<p>举例一个使用场景：当我们使用动态数据时（即，周期性得通过 <code class=\"codespan\">setOption</code> 来改变数据），如果 <code class=\"codespan\">rangeMode</code> 在 <code class=\"codespan\">&#39;value</code>&#39; 模式，<code class=\"codespan\">dataZoom</code> 的窗口会一直保持在一个固定的值区间，无论数据怎么改变添加了多少；如果 <code class=\"codespan\">rangeMode</code> 在 <code class=\"codespan\">&#39;percent&#39;</code> 模式，窗口会随着数据的添加而改变（假设 <code class=\"codespan\">axis.min</code> 和 <code class=\"codespan\">axis.max</code> 没有被设置）。</p>\n"
  },
  "zoomOnMouseWheel": {
    "desc": "\n\n<p>如何触发缩放。可选值为：</p>\n<ul>\n<li><code class=\"codespan\">true</code>：表示不按任何功能键，鼠标滚轮能触发缩放。</li>\n<li><code class=\"codespan\">false</code>：表示鼠标滚轮不能触发缩放。</li>\n<li><code class=\"codespan\">&#39;shift&#39;</code>：表示按住 <code class=\"codespan\">shift</code> 和鼠标滚轮能触发缩放。</li>\n<li><code class=\"codespan\">&#39;ctrl&#39;</code>：表示按住 <code class=\"codespan\">ctrl</code> 和鼠标滚轮能触发缩放。</li>\n<li><code class=\"codespan\">&#39;alt&#39;</code>：表示按住 <code class=\"codespan\">alt</code> 和鼠标滚轮能触发缩放。</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "true,false,shift,ctrl,alt",
      "default": "true"
    }
  },
  "moveOnMouseMove": {
    "desc": "\n\n<p>如何触发数据窗口平移。可选值为：</p>\n<ul>\n<li><code class=\"codespan\">true</code>：表示不按任何功能键，鼠标移动能触发数据窗口平移。</li>\n<li><code class=\"codespan\">false</code>：表示鼠标移动不能触发平移。</li>\n<li><code class=\"codespan\">&#39;shift&#39;</code>：表示按住 <code class=\"codespan\">shift</code> 和鼠标移动能触发数据窗口平移。</li>\n<li><code class=\"codespan\">&#39;ctrl&#39;</code>：表示按住 <code class=\"codespan\">ctrl</code> 和鼠标移动能触发数据窗口平移。</li>\n<li><code class=\"codespan\">&#39;alt&#39;</code>：表示按住 <code class=\"codespan\">alt</code> 和鼠标移动能触发数据窗口平移。</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "true,false,shift,ctrl,alt",
      "default": "true"
    }
  },
  "moveOnMouseWheel": {
    "desc": "\n\n<p>如何触发数据窗口平移。可选值为：</p>\n<ul>\n<li><code class=\"codespan\">true</code>：表示不按任何功能键，鼠标滚轮能触发数据窗口平移。</li>\n<li><code class=\"codespan\">false</code>：表示鼠标滚轮不能触发平移。</li>\n<li><code class=\"codespan\">&#39;shift&#39;</code>：表示按住 <code class=\"codespan\">shift</code> 和鼠标滚轮能触发数据窗口平移。</li>\n<li><code class=\"codespan\">&#39;ctrl&#39;</code>：表示按住 <code class=\"codespan\">ctrl</code> 和鼠标滚轮能触发数据窗口平移。</li>\n<li><code class=\"codespan\">&#39;alt&#39;</code>：表示按住 <code class=\"codespan\">alt</code> 和鼠标滚轮能触发数据窗口平移。</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "true,false,shift,ctrl,alt",
      "default": "true"
    }
  },
  "preventDefaultMouseMove": {
    "desc": "\n\n<p>是否阻止 mousemove 事件的默认行为。</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  }
}