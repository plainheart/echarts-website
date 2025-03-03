window.__EC_DOC_api_events = {
  "鼠标事件": {
    "desc": "<p>鼠标事件的事件参数是事件对象的数据的各个属性，对于图表的点击事件，基本参数如下，其它图表诸如饼图可能会有部分附加参数。例如饼图会有<code class=\"codespan\">percent</code>属性表示百分比，具体见各个图表类型的 label formatter 回调函数的 <code class=\"codespan\">params</code>。</p>\n<pre><code class=\"lang-js\">{\n    // 当前点击的图形元素所属的组件名称，\n    // 其值如 &#39;series&#39;、&#39;markLine&#39;、&#39;markPoint&#39;、&#39;timeLine&#39; 等。\n    componentType: string,\n    // 系列类型。值可能为：&#39;line&#39;、&#39;bar&#39;、&#39;pie&#39; 等。当 componentType 为 &#39;series&#39; 时有意义。\n    seriesType: string,\n    // 系列在传入的 option.series 中的 index。当 componentType 为 &#39;series&#39; 时有意义。\n    seriesIndex: number,\n    // 系列名称。当 componentType 为 &#39;series&#39; 时有意义。\n    seriesName: string,\n    // 数据名，类目名\n    name: string,\n    // 数据在传入的 data 数组中的 index\n    dataIndex: number,\n    // 传入的原始数据项\n    data: Object,\n    // sankey、graph 等图表同时含有 nodeData 和 edgeData 两种 data，\n    // dataType 的值会是 &#39;node&#39; 或者 &#39;edge&#39;，表示当前点击在 node 还是 edge 上。\n    // 其他大部分图表中只有一种 data，dataType 无意义。\n    dataType: string,\n    // 传入的数据值\n    value: number|Array,\n    // 数据图形的颜色。当 componentType 为 &#39;series&#39; 时有意义。\n    color: string,\n    // 用户自定义的数据。只在 graphic component 和自定义系列（custom series）\n    // 中生效，如果节点定义上设置了如：{type: &#39;circle&#39;, info: {some: 123}}。\n    info: *\n}\n</code></pre>\n<p>鼠标事件包括 <code class=\"codespan\">&#39;click&#39;</code>、<code class=\"codespan\">&#39;dblclick&#39;</code>、<code class=\"codespan\">&#39;mousedown&#39;</code>、<code class=\"codespan\">&#39;mousemove&#39;</code>、<code class=\"codespan\">&#39;mouseup&#39;</code>、<code class=\"codespan\">&#39;mouseover&#39;</code>、<code class=\"codespan\">&#39;mouseout&#39;</code>、<code class=\"codespan\">&#39;globalout&#39;</code>、<code class=\"codespan\">&#39;contextmenu&#39;</code>。</p>\n<p>参见 <a href=\"/echarts-website/handbook/zh/concepts/event\" target=\"_blank\">ECharts 中的事件和行为</a></p>\n"
  },
  "highlight": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.highlight\">highlight</a></p>\n<p>高亮事件。</p>\n"
  },
  "downplay": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.downplay\">downplay</a></p>\n<p>取消高亮事件。</p>\n"
  },
  "selectchanged": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.toggleSelected\">toggleSelected</a>, <a href=\"#action.select\">select</a>, <a href=\"#action.unselect\">unselect</a></p>\n<p>在数据选中状态发生变化时触发的事件</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;selectchanged&#39;,\n    fromAction: &#39;select&#39; | &#39;toggleSelected&#39; | &#39;unselect&#39;,\n    // 按系列分组的选中项列表\n    selected: ({\n        dataIndex: number[], seriesIndex: number\n    })[]\n}\n</code></pre>\n"
  },
  "legendselectchanged": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.legend.legendToggleSelect\">legendToggleSelect</a>\n切换图例选中状态后的事件。</p>\n<p><strong>注：</strong>图例组件用户切换图例开关会触发该事件。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;legendselectchanged&#39;,\n    // 切换的图例名称\n    name: string\n    // 所有图例的选中状态表\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n"
  },
  "legendselected": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.legend.legendSelect\">legendSelect</a>\n图例选中后的事件。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;legendselected&#39;,\n    // 选中的图例名称\n    name: string\n    // 所有图例的选中状态表\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n<p><strong>注：</strong> ECharts 2.x 中用户开关图例对应的事件从 <code class=\"codespan\">legendselected</code> 改为 <a href=\"#events.legendselectchanged\">legendselectchanged</a>。</p>\n"
  },
  "legendunselected": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.legend.legendUnSelect\">legendUnSelect</a>\n图例取消选中后的事件。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;legendunselected&#39;,\n    // 取消选中的图例名称\n    name: string\n    // 所有图例的选中状态表。\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n"
  },
  "legendselectall": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.legend.legendAllSelect\">legendAllSelect</a>\n图例全选后的事件。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;legendselectall&#39;,\n    // 所有图例的选中状态表。\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n"
  },
  "legendinverseselect": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.legend.legendInverseSelect\">legendInverseSelect</a>\n图例反选后的事件。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;legendinverseselect&#39;,\n    // 所有图例的选中状态表。\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n"
  },
  "legendscroll": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.legend.legendScroll\">legendscroll</a>\n图例滚动事件。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;legendscroll&#39;,\n    scrollDataIndex: number\n    legendId: string\n}\n</code></pre>\n"
  },
  "datazoom": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.dataZoom.dataZoom\">dataZoom</a></p>\n<p>数据区域缩放后的事件。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;datazoom&#39;,\n    // 缩放的开始位置的百分比，0 - 100\n    start: number\n    // 缩放的结束位置的百分比，0 - 100\n    end: number\n    // 缩放的开始位置的数值，只有在工具栏的缩放行为的事件中存在。\n    startValue?: number\n    // 缩放的结束位置的数值，只有在工具栏的缩放行为的事件中存在。\n    endValue?: number\n}\n</code></pre>\n"
  },
  "datarangeselected": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.dataRange.selectDataRange\">selectDataRange</a>\n视觉映射组件中，<code class=\"codespan\">range</code> 值改变后触发的事件。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;datarangeselected&#39;,\n    // 连续型 visualMap 和 离散型 visualMap 不一样\n    // 连续型的是一个表示数值范围的数组。\n    // 离散型的是一个对象，键值是类目或者分段的索引。值是`true`或`false`\n    selected: Object|Array\n}\n</code></pre>\n"
  },
  "timelinechanged": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.timeline.timelineChange\">timelineChange</a>\n时间轴中的时间点改变后的事件。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;timelinechanged&#39;,\n    // 时间点的 index\n    currentIndex: number\n}\n</code></pre>\n"
  },
  "timelineplaychanged": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.timeline.timelinePlayChange\">timelinePlayChange</a>\n时间轴中播放状态的切换事件。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;timelineplaychanged&#39;,\n    // 播放状态，true 为自动播放\n    playState: boolean\n}\n</code></pre>\n"
  },
  "restore": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.toolbox.restore\">restore</a>\n重置 option 事件。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;restore&#39;\n}\n</code></pre>\n"
  },
  "dataviewchanged": {
    "desc": "<p><a href=\"option.html#toolbox.feature.dataView\" target=\"_blank\">工具栏中数据视图</a>的修改事件。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;dataviewchanged&#39;\n}\n</code></pre>\n"
  },
  "magictypechanged": {
    "desc": "<p><a href=\"option.html#toolbox.feature.magicType\" target=\"_blank\">工具栏中动态类型切换</a>的切换事件。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;magictypechanged&#39;,\n    // 点击切换的当前类型，同 echarts 2.x 中的 type 属性\n    currentType: string\n}\n</code></pre>\n"
  },
  "geoselectchanged": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.geo.geoToggleSelect\">geoToggleSelect</a></p>\n<p><a href=\"option.html#geo\" target=\"_blank\">geo</a> 中地图区域切换选中状态的事件。</p>\n<p>用户点击选中会触发该事件。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;geoselectchanged&#39;,\n    // 系列 ID，可以在 option 中传入\n    seriesId: string,\n    // 数据名称\n    name: name,\n    // 每个 geo 组件的选中信息列表。\n    // allSelected 从 `v5.1.0` 开始支持\n    allSelected: ({\n        geoIndex: number\n        // 每个 geo 组件上选中的名称列表。\n        name: string[]\n    })[],\n    // 不推荐使用此属性。\n    // 所有数据的选中状态表。\n    // 不同 geo 组件的状态会被合并在一起。\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n"
  },
  "geoselected": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.geo.geoSelect\">geoSelect</a></p>\n<p><a href=\"option.html#{componentTypeFull}\" target=\"_blank\">geo</a> 中地图区域选中后的事件。</p>\n<p>使用<code class=\"codespan\">dispatchAction</code>可触发此事件，用户点击不会触发此事件（用户点击事件请使用 <a href=\"#events.geoselectchanged\">geoselectchanged</a>）。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;geoselected&#39;,\n    // 系列 ID，可以在 option 中传入\n    seriesId: string\n    // 数据名称\n    name: name,\n    // 所有数据的选中状态表。\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n"
  },
  "geounselected": {
    "desc": "<p><strong>ACTION:</strong> <a href=\"#action.geo.geoUnSelect\">geoUnSelect</a></p>\n<p><a href=\"option.html#geo\" target=\"_blank\">geo</a> 中地图区域取消选中后的事件。</p>\n<p>使用<code class=\"codespan\">dispatchAction</code>可触发此事件，用户点击不会触发此事件（用户点击事件请使用 <a href=\"#events.geoselectchanged\">geoselectchanged</a>）。</p>\n<pre><code class=\"lang-js\">{\n    type: &#39;geounselected&#39;,\n    // 系列 ID，可以在 option 中传入\n    seriesId: string\n    // 数据名称\n    name: name,\n    // 所有数据的选中状态表。\n    selected: {\n        [name: string]: boolean\n    }\n}\n</code></pre>\n"
  },
  "axisareaselected": {
    "desc": "<p><a href=\"option.html#parallelAxis\" target=\"_blank\">平行坐标轴 (Parallel)</a>范围选取事件。</p>\n<p>当进行坐标轴范围选取时，可以用如下方式获取当前高亮的线所对应的 data indices\n（即 <code class=\"codespan\">series</code> 的 <code class=\"codespan\">data</code> 中的序号列表）。</p>\n<pre><code class=\"lang-javascript\">chart.on(&#39;axisareaselected&#39;, function () {\n    var series0 = chart.getModel().getSeries()[0];\n    var series1 = chart.getModel().getSeries()[1];\n    var indices0 = series0.getRawIndicesByActiveState(&#39;active&#39;);\n    var indices1 = series1.getRawIndicesByActiveState(&#39;active&#39;);\n    console.log(indices0, indices1);\n});\n</code></pre>\n"
  },
  "brush": {
    "desc": "<p>“选框正在添加”事件。即发出 <a href=\"#action.brush.brush\">brush action</a> 得到的事件。</p>\n"
  },
  "brushEnd": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v4.5.0</code> 开始支持</p>\n</blockquote>\n<p>“选框添加完毕”事件。即发出 <a href=\"#action.brush.brushEnd\">brushEnd action</a> 得到的事件。</p>\n"
  },
  "brushselected": {
    "desc": "<p>对外通知当前选中了什么。</p>\n<p>参见 <a href=\"option.html#brush\" target=\"_blank\">区域选择</a>。</p>\n<p>这个事件，在 <code class=\"codespan\">setOption</code> 时不会发出，在其他的 dispatchAction 时，或者用户在界面中创建、删除、修改选框时会发出。</p>\n<p>事件参数内容为：</p>\n<pre><code class=\"lang-javascript\">{\n    type: &#39;brushselected&#39;,\n    batch: [\n        {\n            // brush 组件的 id，大多数情况只使用一个 brush 组件，所以不必理会。\n            brushId: string,\n            // brush 组件的 index。\n            brushIndex: number,\n            // brush 组件的 name。\n            brushName: string,\n\n            // 各个选框\n            areas: [\n                { // 第一个选框\n                    // 则此处使用 range 或者 coordRange 记录了选框当前的形状。\n                    // 其值参见 brush action 中 range/coordRange 的解释。\n\n                    // 如果此选框是“全局选框”（即并不属于哪个坐标系），则使用 range 单位是像素。\n                    range: Array.&lt;number&gt;,\n\n                    // 如果此选框是“坐标系选框”，则使用 coordRange 和 coordRanges，单位为坐标系单位。\n                    coordRange: Array.&lt;number&gt;,\n                    // 其中，如果选框属于直角坐标系（grid）的某个轴（例如指定了 xAxisIndex: 0），\n                    // 且此轴对应于多个 cartesian（例如，对应两个 yAxis），那么这里 coordRanges\n                    // 是每个 cartesian 中的选框的范围值。而 coordRange 是 coordRanges[0]。\n                    coordRanges: Array.&lt;Array.&lt;number&gt;&gt;,\n                },\n                ...\n            ],\n\n            // 每个系列被选中的项。\n            // 注意，如果某个系列不支持 brush，但是还是会在这里出现对应的项。\n            // 也就是说，selected 可以使用 seriesIndex 来直接找到对应的项。\n            selected: [\n                { // series 0 被选中的项\n                    seriesIndex: number,\n                    dataIndex: [ 3, 6, 12, 23 ] // 用这些 dataIndex，可以去原始数据中找到真正的值。\n                },\n                { // series 1 被选中的项\n                    seriesIndex: number,\n                    dataIndex: []\n                },\n                ...\n            ]\n        },\n        ...\n    ]\n}\n</code></pre>\n<p>事件使用方式例如：</p>\n<pre><code class=\"lang-javascript\">var dataBySeries = [\n    [ 12, 23, 54, 6 ], // series 0 的数据\n    [ 34, 34433, 2223, 21122, 1232, 34 ] // series 1 的数据\n];\n\nchart.setOption({\n    ...,\n    brush: {\n        ...\n    },\n    series: [\n        { // series 0\n            data: dataBySeries[0]\n        },\n        { // series 1\n            data: dataBySeries[1]\n        }\n    ]\n});\n\nchart.on(&#39;brushSelected&#39;, function (params) {\n    var brushComponent = params.batch[0];\n\n    var sum = 0; // 统计选中项的数据值的和\n\n    for (var sIdx = 0; sIdx &lt; brushComponent.selected.length; sIdx++) {\n        // 对于每个 series：\n        var dataIndices = brushComponent.selected[sIdx].dataIndex;\n\n        for (var i = 0; i &lt; dataIndices.length; i++) {\n            var dataIndex = dataIndices[i];\n            sum += dataBySeries[sIdx][dataIndex];\n        }\n    }\n    console.log(sum); // 用某种方式输出统计值。\n});\n</code></pre>\n<p>如果想<strong>避免此事件频繁触发</strong>，可以使用 <a href=\"option.html#brush.throttleType\" target=\"_blank\">brush.throttleType</a>。</p>\n"
  },
  "globalcursortaken": {
    "desc": "<p>参见 <a href=\"#action.brush.takeGlobalCursor\">takeGlobalCursor</a>。</p>\n"
  },
  "rendered": {
    "desc": "<p>渲染结束事件。注意 <code class=\"codespan\">rendered</code> 事件并不代表渲染动画（参见 <a href=\"option.html#animation\" target=\"_blank\">animation</a> 相关配置）或者渐进渲染（参见 <a href=\"option.html#series-scatter.progressive\" target=\"_blank\">progressive</a> 相关配置）停止，只代表本帧的渲染结束。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">var snapshotImage = new Image();\ndocument.body.append(snapshotImage);\nchart.on(&#39;rendered&#39;, function () {\n    snapshotImage.src = chart.getDataURL();\n});\n</code></pre>\n"
  },
  "finished": {
    "desc": "<p>渲染完成事件。当渲染动画（参见 <a href=\"option.html#animation\" target=\"_blank\">animation</a> 相关配置）或者渐进渲染（参见 <a href=\"option.html#series-scatter.progressive\" target=\"_blank\">progressive</a> 相关配置）停止时触发。</p>\n<pre><code class=\"lang-js\">var snapshotImage = new Image();\ndocument.body.append(snapshotImage);\nchart.on(&#39;finished&#39;, function () {\n    snapshotImage.src = chart.getDataURL();\n});\n</code></pre>\n"
  }
}