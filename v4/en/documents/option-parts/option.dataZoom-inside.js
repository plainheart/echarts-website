window.__EC_DOC_option_dataZoom_inside = {
  "id": {
    "desc": "<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"
  },
  "disabled": {
    "desc": "<p>Whether disable inside zoom.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "xAxisIndex": {
    "desc": "<p>Specify which <a href=\"#xAxis\">xAxis</a> is/are controlled by the <code class=\"codespan\">dataZoom-inside</code> when <a href=\"#grid\">catesian coordinate system</a> is used.</p>\n<p>By default the first <code class=\"codespan\">xAxis</code> that parallel to <code class=\"codespan\">dataZoom</code> are controlled when <a href=\"#dataZoom-inside.orient\">dataZoom-inside.orient</a> is set as <code class=\"codespan\">&#39;horizontal&#39;</code>. But it is recommended to specify it explicitly but not use default value.</p>\n<p>If it is set as a single <code class=\"codespan\">number</code>, one axis is controlled, while if it is set as an <code class=\"codespan\">Array</code> , multiple axes are controlled.</p>\n<p>For example:</p>\n<pre><code class=\"lang-javascript\">option: {\n    xAxis: [\n        {...}, // The first xAxis\n        {...}, // The second xAxis\n        {...}, // The third xAxis\n        {...}  // The fourth xAxis\n    ],\n    dataZoom: [\n        { // The first dataZoom component\n            xAxisIndex: [0, 2] // Indicates that this dataZoom component\n                                     // controls the first and the third xAxis\n        },\n        { // The second dataZoom component\n            xAxisIndex: 3      // indicates that this dataZoom component\n                                     // controls the fourth xAxis\n        }\n    ]\n}\n</code></pre>\n"
  },
  "yAxisIndex": {
    "desc": "<p>Specify which <a href=\"#yAxis\">yAxis</a> is/are controlled by the <code class=\"codespan\">dataZoom-inside</code> when <a href=\"#grid\">catesian coordinate system</a> is used.</p>\n<p>By default the first <code class=\"codespan\">yAxis</code> that parallel to <code class=\"codespan\">dataZoom</code> are controlled when <a href=\"#dataZoom-inside.orient\">dataZoom-inside.orient</a> is set as <code class=\"codespan\">&#39;vertical&#39;</code>. But it is recommended to specify it explicitly but not use default value.</p>\n<p>If it is set as a single <code class=\"codespan\">number</code>, one axis is controlled, while if it is set as an <code class=\"codespan\">Array</code> , multiple axes are controlled.</p>\n<p>For example:</p>\n<pre><code class=\"lang-javascript\">option: {\n    yAxis: [\n        {...}, // The first yAxis\n        {...}, // The second yAxis\n        {...}, // The third yAxis\n        {...}  // The fourth yAxis\n    ],\n    dataZoom: [\n        { // The first dataZoom component\n            yAxisIndex: [0, 2] // Indicates that this dataZoom component\n                                     // controls the first and the third yAxis\n        },\n        { // The second dataZoom component\n            yAxisIndex: 3      // indicates that this dataZoom component\n                                     // controls the fourth yAxis\n        }\n    ]\n}\n</code></pre>\n"
  },
  "radiusAxisIndex": {
    "desc": "<p>Specify which <a href=\"#radiusAxis\">radiusAxis</a> is/are controlled by the <code class=\"codespan\">dataZoom-inside</code> when <a href=\"#polar\">polar coordinate system</a> is used.</p>\n<p>If it is set as a single <code class=\"codespan\">number</code>, one axis is controlled, while if it is set as an <code class=\"codespan\">Array</code> , multiple axes are controlled.</p>\n<p>For example:</p>\n<pre><code class=\"lang-javascript\">option: {\n    radiusAxis: [\n        {...}, // The first radiusAxis\n        {...}, // The second radiusAxis\n        {...}, // The third radiusAxis\n        {...}  // The fourth radiusAxis\n    ],\n    dataZoom: [\n        { // The first dataZoom component\n            radiusAxisIndex: [0, 2] // Indicates that this dataZoom component\n                                     // controls the first and the third radiusAxis\n        },\n        { // The second dataZoom component\n            radiusAxisIndex: 3      // indicates that this dataZoom component\n                                     // controls the fourth radiusAxis\n        }\n    ]\n}\n</code></pre>\n"
  },
  "angleAxisIndex": {
    "desc": "<p>Specify which <a href=\"#angleAxis\">angleAxis</a> is/are controlled by the <code class=\"codespan\">dataZoom-inside</code> when <a href=\"#polar\">polar coordinate system</a> is used.</p>\n<p>If it is set as a single <code class=\"codespan\">number</code>, one axis is controlled, while if it is set as an <code class=\"codespan\">Array</code> , multiple axes are controlled.</p>\n<p>For example:</p>\n<pre><code class=\"lang-javascript\">option: {\n    angleAxis: [\n        {...}, // The first angleAxis\n        {...}, // The second angleAxis\n        {...}, // The third angleAxis\n        {...}  // The fourth angleAxis\n    ],\n    dataZoom: [\n        { // The first dataZoom component\n            angleAxisIndex: [0, 2] // Indicates that this dataZoom component\n                                     // controls the first and the third angleAxis\n        },\n        { // The second dataZoom component\n            angleAxisIndex: 3      // indicates that this dataZoom component\n                                     // controls the fourth angleAxis\n        }\n    ]\n}\n</code></pre>\n"
  },
  "filterMode": {
    "desc": "<p>Generally <code class=\"codespan\">dataZoom</code> component zoom or roam coordinate system through data filtering and set the windows of axes internally.</p>\n<p>Its behaviours vary according to filtering mode settings (<a href=\"#dataZoom.filterMode\">dataZoom.filterMode</a>).</p>\n<p>Possible values:</p>\n<ul>\n<li><p>&#39;filter&#39;: data that outside the window will be <strong>filtered</strong>, which may lead to some changes of windows of other axes. For each data item, it will be filtered if one of the relevant dimensions is out of the window.</p>\n</li>\n<li><p>&#39;weakFilter&#39;: data that outside the window will be <strong>filtered</strong>, which may lead to some changes of windows of other axes. For each data item, it will be filtered only if all of the relevant dimensions are out of the same side of the window.</p>\n</li>\n<li><p>&#39;empty&#39;: data that outside the window will be <strong>set to NaN</strong>, which will not lead to changes of windows of other axes.</p>\n</li>\n<li><p>&#39;none&#39;: Do not filter data.</p>\n</li>\n</ul>\n<p>How to set <code class=\"codespan\">filterMode</code> is up to users, depending on the requirments and scenarios. Expirically:</p>\n<ul>\n<li><p>If only <code class=\"codespan\">xAxis</code> or only <code class=\"codespan\">yAxis</code> is controlled by <code class=\"codespan\">dataZoom</code>, <code class=\"codespan\">filterMode: &#39;filter&#39;</code> is typically used, which enable the other axis auto adapte its window to the extent of the filtered data.</p>\n</li>\n<li><p>If both <code class=\"codespan\">xAxis</code> and <code class=\"codespan\">yAxis</code> are operated by <code class=\"codespan\">dataZoom</code>:</p>\n<ul>\n<li><p>If <code class=\"codespan\">xAxis</code> and <code class=\"codespan\">yAxis</code> should not effect mutually (e.g. a scatter chart with both axes on the type of <code class=\"codespan\">&#39;value&#39;</code>), they should be set to be <code class=\"codespan\">filterMode: &#39;empty&#39;</code>.</p>\n</li>\n<li><p>If <code class=\"codespan\">xAxis</code> is the main axis and <code class=\"codespan\">yAxis</code> is the auxiliary axis (or vise versa) (e.g., in a bar chart, when dragging <code class=\"codespan\">dataZoomX</code> to change the window of xAxis, we need the yAxis to adapt to the clipped data, but when dragging <code class=\"codespan\">dataZoomY</code> to change the window of yAxis, we need the xAxis not to be changed), in this case, <code class=\"codespan\">xAxis</code> should be set to be <code class=\"codespan\">fiterMode: &#39;filter&#39;</code>, while <code class=\"codespan\">yAxis</code> should be set to be <code class=\"codespan\">fiterMode: &#39;empty&#39;</code>.</p>\n</li>\n</ul>\n</li>\n</ul>\n<p>It can be demonstrated by the sample:</p>\n<pre><code class=\"lang-javascript\">option = {\n    dataZoom: [\n        {\n            id: &#39;dataZoomX&#39;,\n            type: &#39;slider&#39;,\n            xAxisIndex: [0],\n            filterMode: &#39;filter&#39;\n        },\n        {\n            id: &#39;dataZoomY&#39;,\n            type: &#39;slider&#39;,\n            yAxisIndex: [0],\n            filterMode: &#39;empty&#39;\n        }\n    ],\n    xAxis: {type: &#39;value&#39;},\n    yAxis: {type: &#39;value&#39;},\n    series{\n        type: &#39;bar&#39;,\n        data: [\n            // The first column corresponds to xAxis,\n            // and the second coloum corresponds to yAxis.\n            [12, 24, 36],\n            [90, 80, 70],\n            [3, 9, 27],\n            [1, 11, 111]\n        ]\n    }\n}\n</code></pre>\n<p>In the sample above, <code class=\"codespan\">dataZoomX</code> is set as <code class=\"codespan\">filterMode: &#39;filter&#39;</code>. When use drags <code class=\"codespan\">dataZoomX</code> (do not touch <code class=\"codespan\">dataZoomY</code>) and the valueWindow of <code class=\"codespan\">xAxis</code> is changed to <code class=\"codespan\">[2, 50]</code> consequently, <code class=\"codespan\">dataZoomX</code> travel the first column of series.data and filter items that out of the window. The series.data turns out to be:</p>\n<pre><code class=\"lang-javascript\">[\n    [12, 24, 36],\n    // [90, 80, 70] This item is filtered, as 90 is out of the window.\n    [3, 9, 27]\n    // [1, 11, 111] This item is filtered, as 1 is out of the window.\n]\n</code></pre>\n<p>Before filtering, the second column, which corresponds to yAxis, has values <code class=\"codespan\">24</code>, <code class=\"codespan\">80</code>, <code class=\"codespan\">9</code>, <code class=\"codespan\">11</code>. After filtering, only <code class=\"codespan\">24</code> and <code class=\"codespan\">9</code> are left. Then the extent of <code class=\"codespan\">yAxis</code> is adjusted to adapt the two values (if <code class=\"codespan\">yAxis.min</code> and <code class=\"codespan\">yAxis.max</code> are not set).</p>\n<p>So <code class=\"codespan\">filterMode: &#39;filter&#39;</code> can be used to enable the other axis to auto adapt the filtered data.</p>\n<p>Then let&#39;s review the sample from the beginning, <code class=\"codespan\">dataZoomY</code> is set as <code class=\"codespan\">filterMode: &#39;empty&#39;</code>. So if user drags <code class=\"codespan\">dataZoomY</code> (do not touch <code class=\"codespan\">dataZoomX</code>) and its window is changed to <code class=\"codespan\">[10, 60]</code> consequently, <code class=\"codespan\">dataZoomY</code> travels the second column of series.data and set NaN to all of the values that outside the window (NaN cause the graphical elements, i.e., bar elements, do not show, but still hold the place). The series.data turns out to be:</p>\n<pre><code class=\"lang-javascript\">[\n    [12, 24, 36],\n    [90, NaN, 70], // Set to NaN\n    [3, NaN, 27],  // Set to NaN\n    [1, 11, 111]\n]\n</code></pre>\n<p>In this case, the first column (i.e., <code class=\"codespan\">12</code>, <code class=\"codespan\">90</code>, <code class=\"codespan\">3</code>, <code class=\"codespan\">1</code>, which corresponds to <code class=\"codespan\">xAxis</code>), will not be changed at all. So dragging <code class=\"codespan\">yAxis</code> will not change extent of <code class=\"codespan\">xAxis</code>, which is good for requirements like outlier filtering.</p>\n<p>See this example:</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/bar-dataZoom-filterMode&edit=1&reset=1\" width=\"600\" height=\"400\"><iframe />\n\n\n\n\n\n\n",
    "uiControl": {
      "type": "enum",
      "options": "filter,weakFilter,empty,none",
      "default": "filter"
    }
  },
  "start": {
    "desc": "<p>The start percentage of the window out of the data extent, in the range of 0 ~ 100.</p>\n<p><a href=\"#dataZoom-inside.start\">dataZoom-inside.start</a> and <a href=\"#dataZoom-inside.end\">dataZoom-inside.end</a> define the window of the data in <strong>percent</strong> form.</p>\n<p>More info about the relationship between <code class=\"codespan\">dataZoom-inside.start</code> and axis extent can be checked in <a href=\"#dataZoom-inside.rangeMode\">dataZoom-inside.rangeMode</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "100",
      "step": "0.5"
    }
  },
  "end": {
    "desc": "<p>The end percentage of the window out of the data extent, in the range of 0 ~ 100.</p>\n<p><a href=\"#dataZoom-inside.start\">dataZoom-inside.start</a> and <a href=\"#dataZoom-inside.end\">dataZoom-inside.end</a> define the window of the data in <strong>percent</strong> form.</p>\n<p>More info about the relationship between <code class=\"codespan\">dataZoom-inside.end</code> and axis extent can be checked in <a href=\"#dataZoom-inside.rangeMode\">dataZoom-inside.rangeMode</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "100",
      "default": "100",
      "step": "0.5"
    }
  },
  "startValue": {
    "desc": "<p>The start absolute value of the window, not works when <a href=\"#dataZoom-inside.start\">dataZoom-inside.start</a> is set.</p>\n<p><a href=\"#dataZoom-inside.startValue\">dataZoom-inside.startValue</a> and <a href=\"#dataZoom-inside.endValue\">dataZoom-inside.endValue</a> define the window of the data window in <strong>absolute value</strong> form.</p>\n<p>Notice, if an axis is set to be <code class=\"codespan\">category</code>, <code class=\"codespan\">startValue</code> could be set as <code class=\"codespan\">index</code> of the array of <code class=\"codespan\">axis.data</code> or as the array value itself. In the latter case, it will internally and automatically translate to the index of array.</p>\n<p>More info about the relationship between <code class=\"codespan\">dataZoom-inside.startValue</code> and axis extent can be checked in <a href=\"#dataZoom-inside.rangeMode\">dataZoom-inside.rangeMode</a>.</p>\n"
  },
  "endValue": {
    "desc": "<p>The end absolute value of the window, doesn&#39;t work when <a href=\"#dataZoom-inside.end\">dataZoom-inside.end</a> is set.</p>\n<p><a href=\"#dataZoom-inside.startValue\">dataZoom-inside.startValue</a> and <a href=\"#dataZoom-inside.endValue\">dataZoom-inside.endValue</a> define the window of the data window in <strong>absolute value</strong> form.</p>\n<p>Notice, if an axis is set to be <code class=\"codespan\">category</code>, <code class=\"codespan\">startValue</code> could be set as <code class=\"codespan\">index</code> of the array of <code class=\"codespan\">axis.data</code> or as the array value itself. In the latter case, it will internally and automatically translate to the index of array.</p>\n<p>More info about the relationship between <code class=\"codespan\">dataZoom-inside.endValue</code> and axis extent can be checked in <a href=\"#dataZoom-inside.rangeMode\">dataZoom-inside.rangeMode</a>.</p>\n"
  },
  "minSpan": {
    "desc": "<p>Used to restrict minimal window size, in percent, which value is in the range of [0, 100].</p>\n<p>If <a href=\"#dataZoom-inside.minValueSpan\">dataZoom-inside.minValueSpan</a> is set, <code class=\"codespan\">minSpan</code> does not work any more.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "100",
      "step": "0.5"
    }
  },
  "maxSpan": {
    "desc": "<p>Used to restrict maximal window size, in percent, which value is in the range of [0, 100].</p>\n<p>If <a href=\"#dataZoom-inside.maxValueSpan\">dataZoom-inside.maxValueSpan</a> is set, <code class=\"codespan\">maxSpan</code> does not work any more.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "100",
      "step": "0.5"
    }
  },
  "minValueSpan": {
    "desc": "<p>Used to restrict minimal window size.</p>\n<p>For example:\nIn time axis it can be set as <code class=\"codespan\">3600 * 24 * 1000 * 5</code> to represent &quot;5 day&quot;.\nIn category axis it can be set as <code class=\"codespan\">5</code> to represent 5 categories.</p>\n"
  },
  "maxValueSpan": {
    "desc": "<p>Used to restrict maximal window size.</p>\n<p>For example:\nIn time axis it can be set as <code class=\"codespan\">3600 * 24 * 1000 * 5</code> to represent &quot;5 day&quot;.\nIn category axis it can be set as <code class=\"codespan\">5</code> to represent 5 categories.</p>\n"
  },
  "orient": {
    "desc": "<p>Specify whether the layout of <code class=\"codespan\">dataZoom</code> component is horizontal or vertical. What&#39;s more, it indicates whether the horizontal axis or vertical axis is controlled by default in catesian coordinate system.</p>\n<p>Valid values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;horizontal&#39;</code>: horizontal.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;vertical&#39;</code>: vertical.</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "horizontal,vertical"
    }
  },
  "zoomLock": {
    "desc": "<p>Specify whether to lock the size of window (selected area).</p>\n<p>When set as <code class=\"codespan\">true</code>, the size of window is locked, that is, only the translation (by mouse drag or touch drag) is avialable but zoom is not.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "throttle": {
    "desc": "<p>Specify the frame rate of views refreshing, with unit millisecond (ms).</p>\n<p>If <a href=\"#animation\">animation</a> set as <code class=\"codespan\">true</code> and <a href=\"#animationDurationUpdate\">animationDurationUpdate</a> set as bigger than <code class=\"codespan\">0</code>, you can keep <code class=\"codespan\">throttle</code> as the default value <code class=\"codespan\">100</code> (or set it as a value bigger than <code class=\"codespan\">0</code>), otherwise it might be not smooth when dragging.</p>\n<p>If <a href=\"#animation\">animation</a> set as <code class=\"codespan\">false</code> or <a href=\"#animationDurationUpdate\">animationDurationUpdate</a> set as <code class=\"codespan\">0</code>, and data size is not very large, and it seems to be not smooth when dragging, you can set <code class=\"codespan\">throttle</code> as <code class=\"codespan\">0</code> to improve that.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "0",
      "step": "20"
    }
  },
  "rangeMode": {
    "desc": "<p>The format is <code class=\"codespan\">[rangeModeForStart, rangeModeForEnd]</code>.</p>\n<p>For example <code class=\"codespan\">rangeMode: [&#39;value&#39;, &#39;percent&#39;]</code> means that use absolute value in <code class=\"codespan\">start</code> and percent value in <code class=\"codespan\">end</code>.</p>\n<p>Optional value for each item: <code class=\"codespan\">&#39;value&#39;</code>, <code class=\"codespan\">&#39;percent&#39;</code>.</p>\n<ul>\n<li><code class=\"codespan\">&#39;value&#39;</code> mode: the axis extent will always only be determined by <code class=\"codespan\">dataZoom.startValue</code> and <code class=\"codespan\">dataZoom.endValue</code>, despite how data like and how <code class=\"codespan\">axis.min</code> and <code class=\"codespan\">axis.max</code> are.</li>\n<li><code class=\"codespan\">&#39;percent&#39;</code> mode: <code class=\"codespan\">100</code> represents 100% of the <code class=\"codespan\">[dMin, dMax]</code>, where <code class=\"codespan\">dMin</code> is <code class=\"codespan\">axis.min</code> if <code class=\"codespan\">axis.min</code> specified, otherwise <code class=\"codespan\">data.extent[0]</code>, and <code class=\"codespan\">dMax</code> is <code class=\"codespan\">axis.max</code> if <code class=\"codespan\">axis.max</code> specified, otherwise <code class=\"codespan\">data.extent[1]</code>. Axis extent will only be determined by the result of the percent of <code class=\"codespan\">[dMin, dMax]</code>.</li>\n</ul>\n<p><code class=\"codespan\">rangeMode</code> are auto determined by whether <code class=\"codespan\">option.start</code>/<code class=\"codespan\">option.end</code> are specified (represents <code class=\"codespan\">&#39;percent&#39;</code> mode) or <code class=\"codespan\">option.startValue</code>/<code class=\"codespan\">option.endValue</code> specified (represents <code class=\"codespan\">&#39;value&#39;</code> mode). And when user behavior trigger the changing of the view, the <code class=\"codespan\">rangeMode</code> would be modified automatically. For example, if triggered by <code class=\"codespan\">toolbox.dataZoom</code>, it will be modefied to <code class=\"codespan\">&#39;value&#39;</code>, and if triggered by <code class=\"codespan\">dataZoom-inside</code> or <code class=\"codespan\">dataZoom-slider</code>, it will be modified to <code class=\"codespan\">&#39;percent&#39;</code>.</p>\n<p>If we specify <code class=\"codespan\">rangeMode</code> manually in <code class=\"codespan\">option</code>, it only works when both <code class=\"codespan\">start</code> and <code class=\"codespan\">startValue</code> specified or both <code class=\"codespan\">end</code> and <code class=\"codespan\">endValue</code> specified. So usually we do not need to specify <code class=\"codespan\">dataZoom.rangeMode</code> manually.</p>\n<p>Take a scenario as an example. When we are using dynamic data (update data periodically via <code class=\"codespan\">setOption</code>), if in <code class=\"codespan\">&#39;value</code>&#39; mode, the window will be kept in a fixed value range despite how data are appended, while if in <code class=\"codespan\">&#39;percent&#39;</code> mode, whe window range will be changed alone with the appended data (suppose <code class=\"codespan\">axis.min</code> and <code class=\"codespan\">axis.max</code> are not specified).</p>\n"
  },
  "zoomOnMouseWheel": {
    "desc": "<p>How to trigger zoom. Optional values:</p>\n<ul>\n<li><code class=\"codespan\">true</code>：Mouse wheel triggers zoom.</li>\n<li><code class=\"codespan\">false</code>：Mouse wheel can not triggers zoom.</li>\n<li><code class=\"codespan\">&#39;shift&#39;</code>：Holding <code class=\"codespan\">shift</code> and mouse wheel triggers zoom.</li>\n<li><code class=\"codespan\">&#39;ctrl&#39;</code>：Holding <code class=\"codespan\">ctrl</code> and mouse wheel triggers zoom.</li>\n<li><code class=\"codespan\">&#39;alt&#39;</code>：Holding <code class=\"codespan\">alt</code> and mouse wheel triggers zoom.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "true,false,shift,ctrl,alt",
      "default": "true"
    }
  },
  "moveOnMouseMove": {
    "desc": "<p>How to trigger data window move. Optional values:</p>\n<ul>\n<li><code class=\"codespan\">true</code>：Mouse move triggers data window move.</li>\n<li><code class=\"codespan\">false</code>：Mouse move can not triggers data window move.</li>\n<li><code class=\"codespan\">&#39;shift&#39;</code>：Holding <code class=\"codespan\">shift</code> and mouse move triggers data window move.</li>\n<li><code class=\"codespan\">&#39;ctrl&#39;</code>：Holding <code class=\"codespan\">ctrl</code> and mouse move triggers data window move.</li>\n<li><code class=\"codespan\">&#39;alt&#39;</code>：Holding <code class=\"codespan\">alt</code> and mouse move triggers data window move.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "true,false,shift,ctrl,alt",
      "default": "true"
    }
  },
  "moveOnMouseWheel": {
    "desc": "<p>How to trigger data window move. Optional values:</p>\n<ul>\n<li><code class=\"codespan\">true</code>：Mouse wheel triggers data window move.</li>\n<li><code class=\"codespan\">false</code>：Mouse wheel can not triggers data window move.</li>\n<li><code class=\"codespan\">&#39;shift&#39;</code>：Holding <code class=\"codespan\">shift</code> and mouse wheel triggers data window move.</li>\n<li><code class=\"codespan\">&#39;ctrl&#39;</code>：Holding <code class=\"codespan\">ctrl</code> and mouse wheel triggers data window move.</li>\n<li><code class=\"codespan\">&#39;alt&#39;</code>：Holding <code class=\"codespan\">alt</code> and mouse wheel triggers data window move.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "true,false,shift,ctrl,alt",
      "default": "true"
    }
  },
  "preventDefaultMouseMove": {
    "desc": "<p>Whether to prevent default behavior of mouse move event.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  }
}