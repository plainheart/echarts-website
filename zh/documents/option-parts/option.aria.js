window.__EC_DOC_option_aria = {
  "enabled": {
    "desc": "<p>是否开启无障碍访问。如果不开启，则不会开启 <code class=\"codespan\">label</code> 或 <code class=\"codespan\">decal</code> 效果。</p>\n"
  },
  "label": {
    "desc": "<p>如果 <a href=\"#aria.enabled\">aria.enabled</a> 设置为 <code class=\"codespan\">true</code>，<code class=\"codespan\">label</code> 默认开启。开启后，会根据图表、数据、标题等情况，自动智能生成关于图表的描述，用户也可以通过配置项修改描述。</p>\n<p><strong>例子：</strong></p>\n<pre><code class=\"lang-js\">option = {\n    aria: {\n        // 下面几行可以不写，因为 label.enabled 默认 true\n        // label: {\n        //     enabled: true\n        // },\n        enabled: true\n    },\n    title: {\n        text: &#39;某站点用户访问来源&#39;,\n        x: &#39;center&#39;\n    },\n    series: [\n        {\n            name: &#39;访问来源&#39;,\n            type: &#39;pie&#39;,\n            data: [\n                { value: 335, name: &#39;直接访问&#39; },\n                { value: 310, name: &#39;邮件营销&#39; },\n                { value: 234, name: &#39;联盟广告&#39; },\n                { value: 135, name: &#39;视频广告&#39; },\n                { value: 1548, name: &#39;搜索引擎&#39; }\n            ]\n        }\n    ]\n};\n</code></pre>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/aria-pie&edit=1&reset=1\" width=\"700\" height=\"300\"></iframe>\n\n\n<p>生成的图表 DOM 上，会有一个 <code class=\"codespan\">aria-label</code> 属性，在朗读设备的帮助下，盲人能够了解图表的内容。其值为：</p>\n<blockquote>\n<p>这是一个关于“某站点用户访问来源”的图表。图表类型是饼图，表示访问来源。其数据是——直接访问的数据是335，邮件营销的数据是310，联盟广告的数据是234，视频广告的数据是135，搜索引擎的数据是1548。</p>\n</blockquote>\n<p>生成描述的基本流程为，如果 <a href=\"#aria.enabled\">aria.enabled</a> 设置为 <code class=\"codespan\">true</code>（非默认）且 <a href=\"#aria.label.enabled\">aria.label.enabled</a> 设置为 <code class=\"codespan\">true</code>（默认），则生成无障碍访问描述，否则不生成。如果定义了 <a href=\"#aria.label.description\">aria.label.description</a>，则将其作为图表的完整描述，否则根据模板拼接生成描述。我们提供了默认的生成描述的算法，仅当生成的描述不太合适时，才需要修改这些模板，甚至使用 <code class=\"codespan\">aria.label.description</code> 完全覆盖。</p>\n<p>使用模板拼接时，先根据是否存在标题 <a href=\"#title.text\">title.text</a> 决定使用 <a href=\"#aria.label.general.withTitle\">aria.label.general.withTitle</a> 还是 <a href=\"#aria.label.general.withoutTitle\">aria.label.general.withoutTitle</a> 作为整体性描述。其中，<code class=\"codespan\">aria.label.general.withTitle</code> 配置项包括模板变量 <code class=\"codespan\">&#39;{title}&#39;</code>，将会被替换成图表标题。也就是说，如果 <code class=\"codespan\">aria.label.general.withTitle</code> 被设置为 <code class=\"codespan\">&#39;图表的标题是：{title}。&#39;</code>，则如果包含标题 <code class=\"codespan\">&#39;价格分布图&#39;</code>，这部分的描述为 <code class=\"codespan\">&#39;图表的标题是：价格分布图。&#39;</code>。</p>\n<p>拼接完标题之后，会依次拼接系列的描述（<a href=\"#aria.label.series\">aria.label.series</a>），和每个系列的数据的描述（<a href=\"#aria.label.data\">aria.label.data</a>）。同样，每个模板都有可能包括模板变量，用以替换实际的值。</p>\n<p>完整的描述生成流程为：</p>\n<p><img width=\"800\" height=\"auto\" src=\"documents/asset/img/echarts-aria.jpg\"></p>\n"
  },
  "label.enabled": {
    "desc": "<p>是否开启无障碍访问的标签生成。开启后将生成 <code class=\"codespan\">aria-label</code> 属性。</p>\n"
  },
  "label.description": {
    "desc": "<p>默认采用算法自动生成图表描述，如果用户需要完全自定义，可以将这个值设为描述。如将其设置为 <code class=\"codespan\">&#39;这是一个展示了价格走势的图表&#39;</code>，则图表 DOM 元素的 <code class=\"codespan\">aria-label</code> 属性值即为该字符串。</p>\n<p>这一配置项常用于展示单个的数据并不能展示图表内容时，用户显示指定概括性描述图表的文字。例如图表是一个包含大量散点图的地图，默认的算法只能显示数据点的位置，不能从整体上传达作者的意图。这时候，可以将 <code class=\"codespan\">description</code> 指定为作者想表达的内容即可。</p>\n"
  },
  "label.general": {
    "desc": "<p>对于图表的整体性描述。</p>\n"
  },
  "label.general.withTitle": {
    "desc": "<p>如果图表存在 <a href=\"#title.text\">title.text</a>，则采用 <code class=\"codespan\">withTitle</code>。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{title}</code>：将被替换为图表的 <a href=\"#title.text\">title.text</a>。</li>\n</ul>\n"
  },
  "label.general.withoutTitle": {
    "desc": "<p>如果图表不存在 <a href=\"#title.text\">title.text</a>，则采用 <code class=\"codespan\">withoutTitle</code>。</p>\n"
  },
  "label.series": {
    "desc": "<p>系列相关的配置项。</p>\n"
  },
  "label.series.maxCount": {
    "desc": "<p>描述中最多出现的系列个数。</p>\n"
  },
  "label.series.single": {
    "desc": "<p>当图表只包含一个系列时，采用的描述。</p>\n"
  },
  "label.series.single.prefix": {
    "desc": "<p>对于所有系列的整体性描述，显示在每个系列描述之前。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesCount}</code>：将被替换为系列个数，这里始终为 1。</li>\n</ul>\n"
  },
  "label.series.single.withName": {
    "desc": "<p>如果系列有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesName}</code>：将被替换为系列的 <code class=\"codespan\">name</code>；</li>\n<li><code class=\"codespan\">{seriesType}</code>：将被替换为系列的类型名称，如：<code class=\"codespan\">&#39;柱状图&#39;</code>、 <code class=\"codespan\">&#39;折线图&#39;</code> 等等。</li>\n</ul>\n"
  },
  "label.series.single.withoutName": {
    "desc": "<p>如果系列没有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesType}</code>：将被替换为系列的类型名称，如：<code class=\"codespan\">&#39;柱状图&#39;</code>、 <code class=\"codespan\">&#39;折线图&#39;</code> 等等。</li>\n</ul>\n"
  },
  "label.series.multiple": {
    "desc": "<p>当图表只包含多个系列时，采用的描述。</p>\n"
  },
  "label.series.multiple.prefix": {
    "desc": "<p>对于所有系列的整体性描述，显示在每个系列描述之前。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesCount}</code>：将被替换为系列个数。</li>\n</ul>\n"
  },
  "label.series.multiple.withName": {
    "desc": "<p>如果系列有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesName}</code>：将被替换为系列的 <code class=\"codespan\">name</code>；</li>\n<li><code class=\"codespan\">{seriesType}</code>：将被替换为系列的类型名称，如：<code class=\"codespan\">&#39;柱状图&#39;</code>、 <code class=\"codespan\">&#39;折线图&#39;</code> 等等。</li>\n</ul>\n"
  },
  "label.series.multiple.withoutName": {
    "desc": "<p>如果系列没有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{seriesType}</code>：将被替换为系列的类型名称，如：<code class=\"codespan\">&#39;柱状图&#39;</code>、 <code class=\"codespan\">&#39;折线图&#39;</code> 等等。</li>\n</ul>\n"
  },
  "label.series.multiple.separator": {
    "desc": "<p>系列与系列之间描述的分隔符。</p>\n"
  },
  "label.series.multiple.separator.middle": {
    "desc": "<p>除了最后一个系列后的分隔符。</p>\n"
  },
  "label.series.multiple.separator.end": {
    "desc": "<p>最后一个系列后的分隔符。</p>\n"
  },
  "label.data": {
    "desc": "<p>数据相关的配置项。</p>\n"
  },
  "label.data.maxCount": {
    "desc": "<p>描述中每个系列最多出现的数据个数。</p>\n"
  },
  "label.data.allData": {
    "desc": "<p>当数据全部显示时采用的描述。这一配置项<strong>不会</strong>使得数据全部显示，可以通过将 <a href=\"#aria.data.maxCount\">aria.data.maxCount</a> 设置为 <code class=\"codespan\">Number.MAX_VALUE</code> 实现全部显示的效果。</p>\n"
  },
  "label.data.partialData": {
    "desc": "<p>当只有部分数据显示时采用的描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{displayCnt}</code>：将被替换为显示的数据个数。</li>\n</ul>\n"
  },
  "label.data.withName": {
    "desc": "<p>如果数据有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{name}</code>：将被替换为数据的 <code class=\"codespan\">name</code>；</li>\n<li><code class=\"codespan\">{value}</code>：将被替换为数据的值。</li>\n</ul>\n"
  },
  "label.data.withoutName": {
    "desc": "<p>如果数据没有 <code class=\"codespan\">name</code> 属性，则采用该描述。其中包括模板变量：</p>\n<ul>\n<li><code class=\"codespan\">{value}</code>：将被替换为数据的值。</li>\n</ul>\n"
  },
  "label.data.separator": {
    "desc": "<p>数据与数据之间描述的分隔符。</p>\n"
  },
  "label.data.separator.middle": {
    "desc": "<p>除了最后一个数据后的分隔符。</p>\n"
  },
  "label.data.separator.end": {
    "desc": "<p>最后一个数据后的分隔符。</p>\n<p>需要注意的是，通常最后一个数据后是系列的 <code class=\"codespan\">separator.end</code>，所以 <code class=\"codespan\">data.separator.end</code> 在大多数情况下为空字符串。</p>\n"
  },
  "decal": {
    "desc": "<p>为系列数据增加贴花纹理，作为颜色的辅助，帮助区分数据。使用默认贴花图案的方式非常简单，只需要开启即可：</p>\n<pre><code>aria: {\n    enabled: true,\n    decal: {\n        show: true\n    }\n}\n</code></pre><iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/aria-decal-simple&edit=1&reset=1\" width=\"700\" height=\"300\"></iframe>\n\n\n<p>绝大部分支持填充色的系列都支持贴花图案，包括：<code class=\"codespan\">&#39;line&#39;</code>, <code class=\"codespan\">&#39;bar&#39;</code>, <code class=\"codespan\">&#39;pie&#39;</code>, <code class=\"codespan\">&#39;radar&#39;</code>, <code class=\"codespan\">&#39;treemap&#39;</code>, <code class=\"codespan\">&#39;sunburst&#39;</code>, <code class=\"codespan\">&#39;boxplot&#39;</code>, <code class=\"codespan\">&#39;sankey&#39;</code>, <code class=\"codespan\">&#39;funnel&#39;</code>, <code class=\"codespan\">&#39;gauge&#39;</code>, <code class=\"codespan\">&#39;pictorialBar&#39;</code>, <code class=\"codespan\">&#39;themeRiver&#39;</code>, <code class=\"codespan\">&#39;custom&#39;</code> 等。其中，部分系列默认没有填充色（如 <code class=\"codespan\">&#39;line&#39;</code>, <code class=\"codespan\">&#39;radar&#39;</code>, <code class=\"codespan\">&#39;boxplot&#39;</code>）需要在设置了填充样式 <code class=\"codespan\">areaStyle</code> 的情况下才生效。</p>\n"
  },
  "decal.show": {
    "desc": "<p>是否显示贴花图案，默认不显示。如果要显示贴花，需要保证 <a href=\"#aria.enabled\">aria.enabled</a> 与 <code class=\"codespan\">aria.decal.show</code> 都是 <code class=\"codespan\">true</code>。</p>\n"
  },
  "decal.decals": {
    "desc": "<p>贴花图案的样式。如果是 <code class=\"codespan\">Object</code> 类型，表示为所有数据采用同样的样式，如果是数组，则数组的每一项各为一种样式，数据将会依次循环取数组中的样式。</p>\n"
  },
  "decal.decals.symbol": {
    "desc": "<p>贴花的图案，如果是 <code class=\"codespan\">string[]</code> 表示循环使用数组中的图案。</p>\n<p>ECharts 提供的标记类型包括</p>\n<p><code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;roundRect&#39;</code>, <code class=\"codespan\">&#39;triangle&#39;</code>, <code class=\"codespan\">&#39;diamond&#39;</code>, <code class=\"codespan\">&#39;pin&#39;</code>, <code class=\"codespan\">&#39;arrow&#39;</code>, <code class=\"codespan\">&#39;none&#39;</code></p>\n<p>可以通过 <code class=\"codespan\">&#39;image://url&#39;</code> 设置为图片，其中 URL 为图片的链接，或者 <code class=\"codespan\">dataURI</code>。</p>\n<p>URL 为图片链接例如：</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>URL 为 <code class=\"codespan\">dataURI</code> 例如：</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>可以通过 <code class=\"codespan\">&#39;path://&#39;</code> 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适的大小。路径的格式参见 <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a>。可以从 Adobe Illustrator 等工具编辑导出。</p>\n<p>例如：</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>"
  },
  "decal.decals.symbolSize": {
    "desc": "<p>取值范围：<code class=\"codespan\">0</code> 到 <code class=\"codespan\">1</code>，表示占图案区域的百分比。</p>\n"
  },
  "decal.decals.symbolKeepAspect": {
    "desc": "<p>是否保持图案的长宽比。</p>\n"
  },
  "decal.decals.color": {
    "desc": "<p>贴花图案的颜色，建议使用半透明色，这样能叠加在系列本身的颜色上。</p>\n"
  },
  "decal.decals.backgroundColor": {
    "desc": "<p>贴花的背景色，将会覆盖在系列本身颜色之上，贴花图案之下。</p>\n"
  },
  "decal.decals.dashArrayX": {
    "desc": "<p>贴花图案的基本模式是在横向和纵向上分别以<code class=\"codespan\">图案 - 空白 - 图案 - 空白 - 图案 - 空白</code>的形式无限循环。通过设置每个图案和空白的长度，可以实现复杂的图案效果。</p>\n<p><code class=\"codespan\">dashArrayX</code> 控制了横向的图案模式。当其值为 <code class=\"codespan\">number</code> 或 <code class=\"codespan\">number[]</code> 类型时，与 <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">SVG stroke-dasharray</a> 类似。</p>\n<ul>\n<li><p>如果是 <code class=\"codespan\">number</code> 类型，表示图案和空白分别是这个值。如 <code class=\"codespan\">5</code> 表示先显示宽度为 5 的图案，然后空 5 像素，再然后显示宽度为 5 的图案……</p>\n</li>\n<li><p>如果是 <code class=\"codespan\">number[]</code> 类型，则表示图案和空白依次为数组值的循环。如：<code class=\"codespan\">[5, 10, 2, 6]</code> 表示图案宽 5 像素，然后空 10 像素，然后图案宽 2 像素，然后空 6 像素，然后图案宽 5 像素……</p>\n</li>\n<li><p>如果是 <code class=\"codespan\">(number | number[])[]</code> 类型，表示每行的图案和空白依次为数组值的循环。如：<code class=\"codespan\">[10, [2, 5]]</code> 表示第一行以图案 10 像素空 10 像素循环，第二行以图案 2 像素空 5 像素循环，第三行以图案 10 像素空 10 像素循环……</p>\n</li>\n</ul>\n<p>可以结合以下的例子理解本接口：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/aria-decal&edit=1&reset=1\" width=\"700\" height=\"300\"></iframe>\n\n"
  },
  "decal.decals.dashArrayY": {
    "desc": "<p>贴花图案的基本模式是在横向和纵向上分别以<code class=\"codespan\">图案 - 空白 - 图案 - 空白 - 图案 - 空白</code>的形式无限循环。通过设置每个图案和空白的长度，可以实现复杂的图案效果。</p>\n<p><code class=\"codespan\">dashArrayY</code> 控制了横向的图案模式。与 <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">SVG stroke-dasharray</a> 类似。</p>\n<ul>\n<li><p>如果是 <code class=\"codespan\">number</code> 类型，表示图案和空白分别是这个值。如 <code class=\"codespan\">5</code> 表示先显示高度为 5 的图案，然后空 5 像素，再然后显示高度为 5 的图案……</p>\n</li>\n<li><p>如果是 <code class=\"codespan\">number[]</code> 类型，则表示图案和空白依次为数组值的循环。如：<code class=\"codespan\">[5, 10, 2, 6]</code> 表示图案高 5 像素，然后空 10 像素，然后图案高 2 像素，然后空 6 像素，然后图案高 5 像素……</p>\n</li>\n</ul>\n<p>可以结合以下的例子理解本接口：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/aria-decal&edit=1&reset=1\" width=\"700\" height=\"300\"></iframe>\n\n"
  },
  "decal.decals.rotation": {
    "desc": "<p>图案的整体旋转角度（弧度制），取值范围从 <code class=\"codespan\">-Math.PI</code> 到 <code class=\"codespan\">Math.PI</code>。</p>\n"
  },
  "decal.decals.maxTileWidth": {
    "desc": "<p>生成的图案在未重复之前的宽度上限。通常不需要设置该值，当你发现图案在重复的时候出现不连续的接缝时，可以尝试提高该值。</p>\n"
  },
  "decal.decals.maxTileHeight": {
    "desc": "<p>生成的图案在未重复之前的高度上限。通常不需要设置该值，当你发现图案在重复的时候出现不连续的接缝时，可以尝试提高该值。</p>\n"
  }
}