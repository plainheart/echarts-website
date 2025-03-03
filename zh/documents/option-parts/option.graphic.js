window.__EC_DOC_option_graphic = {
  "id": {
    "desc": "<p>组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。</p>\n"
  },
  "elements": {
    "desc": "<p>里面是所有图形元素的集合。</p>\n<p>注意：graphic 的标准写法是：</p>\n<pre><code class=\"lang-javascript\">{\n    graphic: {\n        elements: [\n            {type: &#39;rect&#39;, ...}, {type: &#39;circle&#39;, ...}, ...\n        ]\n    }\n}\n</code></pre>\n<p>但是我们常常可以用简写：</p>\n<pre><code class=\"lang-javascript\">{\n    graphic: {\n        type: &#39;rect&#39;,\n        ...\n    }\n}\n</code></pre>\n<p>或者：</p>\n<pre><code class=\"lang-javascript\">{\n    graphic: [\n        {type: &#39;rect&#39;, ...}, {type: &#39;circle&#39;, ...}, ...\n    ]\n}\n</code></pre>\n"
  },
  "elements-group": {
    "desc": "<p>group 是唯一的可以有子节点的容器。group 可以用来整体定位一组图形元素。</p>\n"
  },
  "elements-group.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-group.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "elements-group.$action": {
    "desc": "<p>setOption 时指定本次对该图形元素的操作行为。</p>\n<p>可取值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>：如果已有元素，删除之，新建元素替代之。</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>：删除元素。</li>\n</ul>\n"
  },
  "elements-group.x": {
    "desc": "<p>元素的 x 像素位置。</p>\n"
  },
  "elements-group.y": {
    "desc": "<p>元素的 y 像素位置。</p>\n"
  },
  "elements-group.rotation": {
    "desc": "<p>元素的旋转</p>\n"
  },
  "elements-group.scaleX": {
    "desc": "<p>元素在 x 方向上的缩放。</p>\n"
  },
  "elements-group.scaleY": {
    "desc": "<p>元素在 y 方向上的缩放。</p>\n"
  },
  "elements-group.originX": {
    "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
  },
  "elements-group.originY": {
    "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
  },
  "elements-group.left": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-group.left\">left</a> 和 <a href=\"#graphic.elements-group.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-group.left\">left</a> 或 <a href=\"#graphic.elements-group.right\">right</a>，则 <a href=\"#graphic.elements-group.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-group.right": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-group.left\">left</a> 和 <a href=\"#graphic.elements-group.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-group.left\">left</a> 或 <a href=\"#graphic.elements-group.right\">right</a>，则 <a href=\"#graphic.elements-group.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-group.top": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-group.top\">top</a> 和 <a href=\"#graphic.elements-group.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-group.top\">top</a> 或 <a href=\"#graphic.elements-group.bottom\">bottom</a>，则 <a href=\"#graphic.elements-group.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-group.bottom": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-group.top\">top</a> 和 <a href=\"#graphic.elements-group.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-group.top\">top</a> 或 <a href=\"#graphic.elements-group.bottom\">bottom</a>，则 <a href=\"#graphic.elements-group.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-group.bounding": {
    "desc": "<p>决定此图形元素在定位时，对自身的包围盒计算方式。</p>\n<p>参见例子：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>可取值：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>：（默认）\n  表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。\n  这种方式易于使整体都限制在父元素范围中。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>：\n  表示仅仅用自身（不包括子节点）的没经过 tranform 的包围盒进行定位。\n  这种方式易于内容超出父元素范围的定位方式。</p>\n</li>\n</ul>\n"
  },
  "elements-group.z": {
    "desc": "<p>z 方向的高度，决定层叠关系。</p>\n"
  },
  "elements-group.zlevel": {
    "desc": "<p>决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。</p>\n"
  },
  "elements-group.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-group.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "elements-group.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "elements-group.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "elements-group.textContent": {
    "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>。</p>\n"
  },
  "elements-group.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-group.textConfig.rotation": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
  },
  "elements-group.textConfig.layoutRect": {
    "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-js\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-group.textConfig.offset": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
  },
  "elements-group.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-group.textConfig.distance": {
    "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
  },
  "elements-group.textConfig.local": {
    "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
  },
  "elements-group.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
  },
  "elements-group.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-group.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-group.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-group.textConfig.inside": {
    "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
  },
  "elements-group.cursor": {
    "desc": "\n\n<p>鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 <code class=\"codespan\">cursor</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-group.draggable": {
    "desc": "<p>图形元素是否可以被拖拽。</p>\n"
  },
  "elements-group.progressive": {
    "desc": "<p>是否渐进式渲染。当图形元素过多时才使用。</p>\n"
  },
  "elements-group.width": {
    "desc": "<p>用于描述此 <code class=\"codespan\">group</code> 的宽。</p>\n<p>这个宽只用于给子节点定位。</p>\n<p>即便当宽度为零的时候，子节点也可以使用 <code class=\"codespan\">left: &#39;center&#39;</code> 相对于父节点水平居中。</p>\n"
  },
  "elements-group.height": {
    "desc": "<p>用于描述此 <code class=\"codespan\">group</code> 的高。</p>\n<p>这个高只用于给子节点定位。</p>\n<p>即便当高度为零的时候，子节点也可以使用 <code class=\"codespan\">top: &#39;middle&#39;</code> 相对于父节点垂直居中。</p>\n"
  },
  "elements-group.diffChildrenByName": {
    "desc": "<p>在 <a href=\"#series-custom\">自定义系列</a> 中，当 <code class=\"codespan\">diffChildrenByName: true</code> 时，对于 <a href=\"#series-custom.renderItem\">renderItem</a> 返回值中的每一个 <a href=\"#graphic.elements-group\">group</a>，会根据其 <a href=\"#graphic.elements-group.children\">children</a> 中每个图形元素的 <a href=\"#graphic.elements-polygon.name\">name</a> 属性进行 &quot;diff&quot;。在这里，&quot;diff&quot; 的意思是，重绘的时候，在已存在的图形元素和新的图形元素之间建立对应关系（依据 <code class=\"codespan\">name</code> 是否相同），从如果数据有更新，能够形成的过渡动画。</p>\n<p>但是注意，这会有性能开销。如果数据量较大，不要开启这个功能。</p>\n"
  },
  "elements-group.children": {
    "desc": "<p>子节点列表，其中项都是一个图形元素定义。</p>\n"
  },
  "elements-image.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-image.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "elements-image.$action": {
    "desc": "<p>setOption 时指定本次对该图形元素的操作行为。</p>\n<p>可取值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>：如果已有元素，删除之，新建元素替代之。</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>：删除元素。</li>\n</ul>\n"
  },
  "elements-image.x": {
    "desc": "<p>元素的 x 像素位置。</p>\n"
  },
  "elements-image.y": {
    "desc": "<p>元素的 y 像素位置。</p>\n"
  },
  "elements-image.rotation": {
    "desc": "<p>元素的旋转</p>\n"
  },
  "elements-image.scaleX": {
    "desc": "<p>元素在 x 方向上的缩放。</p>\n"
  },
  "elements-image.scaleY": {
    "desc": "<p>元素在 y 方向上的缩放。</p>\n"
  },
  "elements-image.originX": {
    "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
  },
  "elements-image.originY": {
    "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
  },
  "elements-image.left": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-image.left\">left</a> 和 <a href=\"#graphic.elements-image.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-image.left\">left</a> 或 <a href=\"#graphic.elements-image.right\">right</a>，则 <a href=\"#graphic.elements-image.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-image.right": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-image.left\">left</a> 和 <a href=\"#graphic.elements-image.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-image.left\">left</a> 或 <a href=\"#graphic.elements-image.right\">right</a>，则 <a href=\"#graphic.elements-image.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-image.top": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-image.top\">top</a> 和 <a href=\"#graphic.elements-image.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-image.top\">top</a> 或 <a href=\"#graphic.elements-image.bottom\">bottom</a>，则 <a href=\"#graphic.elements-image.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-image.bottom": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-image.top\">top</a> 和 <a href=\"#graphic.elements-image.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-image.top\">top</a> 或 <a href=\"#graphic.elements-image.bottom\">bottom</a>，则 <a href=\"#graphic.elements-image.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-image.bounding": {
    "desc": "<p>决定此图形元素在定位时，对自身的包围盒计算方式。</p>\n<p>参见例子：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>可取值：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>：（默认）\n  表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。\n  这种方式易于使整体都限制在父元素范围中。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>：\n  表示仅仅用自身（不包括子节点）的没经过 tranform 的包围盒进行定位。\n  这种方式易于内容超出父元素范围的定位方式。</p>\n</li>\n</ul>\n"
  },
  "elements-image.z": {
    "desc": "<p>z 方向的高度，决定层叠关系。</p>\n"
  },
  "elements-image.zlevel": {
    "desc": "<p>决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。</p>\n"
  },
  "elements-image.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-image.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "elements-image.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "elements-image.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "elements-image.textContent": {
    "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>。</p>\n"
  },
  "elements-image.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-image.textConfig.rotation": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
  },
  "elements-image.textConfig.layoutRect": {
    "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-js\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-image.textConfig.offset": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
  },
  "elements-image.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-image.textConfig.distance": {
    "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
  },
  "elements-image.textConfig.local": {
    "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
  },
  "elements-image.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
  },
  "elements-image.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-image.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-image.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-image.textConfig.inside": {
    "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
  },
  "elements-image.cursor": {
    "desc": "\n\n<p>鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 <code class=\"codespan\">cursor</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-image.draggable": {
    "desc": "<p>图形元素是否可以被拖拽。</p>\n"
  },
  "elements-image.progressive": {
    "desc": "<p>是否渐进式渲染。当图形元素过多时才使用。</p>\n"
  },
  "elements-image.style.image": {
    "desc": "<p>图片的内容，可以是图片的 URL，也可以是 <a href=\"https://tools.ietf.org/html/rfc2397\" target=\"_blank\">dataURI</a>.</p>\n"
  },
  "elements-image.style.x": {
    "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "elements-image.style.y": {
    "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "elements-image.style.width": {
    "desc": "<p>图形元素的宽度。</p>\n"
  },
  "elements-image.style.height": {
    "desc": "<p>图形元素的高度。</p>\n<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-image.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "elements-image.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "elements-image.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "elements-image.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "elements-image.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "elements-image.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "elements-image.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "elements-image.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "elements-image.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "elements-text": {
    "desc": "<p>文本块。</p>\n"
  },
  "elements-text.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-text.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "elements-text.$action": {
    "desc": "<p>setOption 时指定本次对该图形元素的操作行为。</p>\n<p>可取值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>：如果已有元素，删除之，新建元素替代之。</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>：删除元素。</li>\n</ul>\n"
  },
  "elements-text.x": {
    "desc": "<p>元素的 x 像素位置。</p>\n"
  },
  "elements-text.y": {
    "desc": "<p>元素的 y 像素位置。</p>\n"
  },
  "elements-text.rotation": {
    "desc": "<p>元素的旋转</p>\n"
  },
  "elements-text.scaleX": {
    "desc": "<p>元素在 x 方向上的缩放。</p>\n"
  },
  "elements-text.scaleY": {
    "desc": "<p>元素在 y 方向上的缩放。</p>\n"
  },
  "elements-text.originX": {
    "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
  },
  "elements-text.originY": {
    "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
  },
  "elements-text.left": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-text.left\">left</a> 和 <a href=\"#graphic.elements-text.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-text.left\">left</a> 或 <a href=\"#graphic.elements-text.right\">right</a>，则 <a href=\"#graphic.elements-text.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-text.right": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-text.left\">left</a> 和 <a href=\"#graphic.elements-text.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-text.left\">left</a> 或 <a href=\"#graphic.elements-text.right\">right</a>，则 <a href=\"#graphic.elements-text.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-text.top": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-text.top\">top</a> 和 <a href=\"#graphic.elements-text.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-text.top\">top</a> 或 <a href=\"#graphic.elements-text.bottom\">bottom</a>，则 <a href=\"#graphic.elements-text.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-text.bottom": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-text.top\">top</a> 和 <a href=\"#graphic.elements-text.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-text.top\">top</a> 或 <a href=\"#graphic.elements-text.bottom\">bottom</a>，则 <a href=\"#graphic.elements-text.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-text.bounding": {
    "desc": "<p>决定此图形元素在定位时，对自身的包围盒计算方式。</p>\n<p>参见例子：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>可取值：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>：（默认）\n  表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。\n  这种方式易于使整体都限制在父元素范围中。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>：\n  表示仅仅用自身（不包括子节点）的没经过 tranform 的包围盒进行定位。\n  这种方式易于内容超出父元素范围的定位方式。</p>\n</li>\n</ul>\n"
  },
  "elements-text.z": {
    "desc": "<p>z 方向的高度，决定层叠关系。</p>\n"
  },
  "elements-text.zlevel": {
    "desc": "<p>决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。</p>\n"
  },
  "elements-text.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-text.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "elements-text.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "elements-text.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "elements-text.textContent": {
    "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>。</p>\n"
  },
  "elements-text.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-text.textConfig.rotation": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
  },
  "elements-text.textConfig.layoutRect": {
    "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-js\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-text.textConfig.offset": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
  },
  "elements-text.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-text.textConfig.distance": {
    "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
  },
  "elements-text.textConfig.local": {
    "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
  },
  "elements-text.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
  },
  "elements-text.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-text.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-text.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-text.textConfig.inside": {
    "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
  },
  "elements-text.cursor": {
    "desc": "\n\n<p>鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 <code class=\"codespan\">cursor</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-text.draggable": {
    "desc": "<p>图形元素是否可以被拖拽。</p>\n"
  },
  "elements-text.progressive": {
    "desc": "<p>是否渐进式渲染。当图形元素过多时才使用。</p>\n"
  },
  "elements-text.style.text": {
    "desc": "<p>文本块文字。可以使用 <code class=\"codespan\">\\n</code> 来换行。</p>\n"
  },
  "elements-text.style.x": {
    "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "elements-text.style.y": {
    "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "elements-text.style.font": {
    "desc": "<p>字体大小、字体类型、粗细、字体样式。格式参见 <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/font\" target=\"_blank\">css font</a>。</p>\n<p>例如：</p>\n<pre><code>// size | family\nfont: &#39;2em &quot;STHeiti&quot;, sans-serif&#39;\n\n// style | weight | size | family\nfont: &#39;italic bolder 16px cursive&#39;\n\n// weight | size | family\nfont: &#39;bolder 2em &quot;Microsoft YaHei&quot;, sans-serif&#39;\n</code></pre>"
  },
  "elements-text.style.textAlign": {
    "desc": "<p>水平对齐方式，取值：<code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, <code class=\"codespan\">&#39;right&#39;</code>。</p>\n<p>如果为 <code class=\"codespan\">&#39;left&#39;</code>，表示文本最左端在 <code class=\"codespan\">x</code> 值上。如果为 <code class=\"codespan\">&#39;right&#39;</code>，表示文本最右端在 <code class=\"codespan\">x</code> 值上。</p>\n"
  },
  "elements-text.style.textVerticalAlign": {
    "desc": "<p>垂直对齐方式，取值：<code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, <code class=\"codespan\">&#39;bottom&#39;</code>。</p>\n<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-text.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "elements-text.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "elements-text.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "elements-text.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "elements-text.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "elements-text.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "elements-text.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "elements-text.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "elements-text.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "elements-rect": {
    "desc": "<p>矩形。</p>\n"
  },
  "elements-rect.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-rect.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "elements-rect.$action": {
    "desc": "<p>setOption 时指定本次对该图形元素的操作行为。</p>\n<p>可取值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>：如果已有元素，删除之，新建元素替代之。</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>：删除元素。</li>\n</ul>\n"
  },
  "elements-rect.x": {
    "desc": "<p>元素的 x 像素位置。</p>\n"
  },
  "elements-rect.y": {
    "desc": "<p>元素的 y 像素位置。</p>\n"
  },
  "elements-rect.rotation": {
    "desc": "<p>元素的旋转</p>\n"
  },
  "elements-rect.scaleX": {
    "desc": "<p>元素在 x 方向上的缩放。</p>\n"
  },
  "elements-rect.scaleY": {
    "desc": "<p>元素在 y 方向上的缩放。</p>\n"
  },
  "elements-rect.originX": {
    "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
  },
  "elements-rect.originY": {
    "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
  },
  "elements-rect.left": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-rect.left\">left</a> 和 <a href=\"#graphic.elements-rect.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-rect.left\">left</a> 或 <a href=\"#graphic.elements-rect.right\">right</a>，则 <a href=\"#graphic.elements-rect.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-rect.right": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-rect.left\">left</a> 和 <a href=\"#graphic.elements-rect.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-rect.left\">left</a> 或 <a href=\"#graphic.elements-rect.right\">right</a>，则 <a href=\"#graphic.elements-rect.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-rect.top": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-rect.top\">top</a> 和 <a href=\"#graphic.elements-rect.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-rect.top\">top</a> 或 <a href=\"#graphic.elements-rect.bottom\">bottom</a>，则 <a href=\"#graphic.elements-rect.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-rect.bottom": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-rect.top\">top</a> 和 <a href=\"#graphic.elements-rect.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-rect.top\">top</a> 或 <a href=\"#graphic.elements-rect.bottom\">bottom</a>，则 <a href=\"#graphic.elements-rect.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-rect.bounding": {
    "desc": "<p>决定此图形元素在定位时，对自身的包围盒计算方式。</p>\n<p>参见例子：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>可取值：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>：（默认）\n  表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。\n  这种方式易于使整体都限制在父元素范围中。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>：\n  表示仅仅用自身（不包括子节点）的没经过 tranform 的包围盒进行定位。\n  这种方式易于内容超出父元素范围的定位方式。</p>\n</li>\n</ul>\n"
  },
  "elements-rect.z": {
    "desc": "<p>z 方向的高度，决定层叠关系。</p>\n"
  },
  "elements-rect.zlevel": {
    "desc": "<p>决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。</p>\n"
  },
  "elements-rect.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-rect.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "elements-rect.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "elements-rect.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "elements-rect.textContent": {
    "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>。</p>\n"
  },
  "elements-rect.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-rect.textConfig.rotation": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
  },
  "elements-rect.textConfig.layoutRect": {
    "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-js\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-rect.textConfig.offset": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
  },
  "elements-rect.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-rect.textConfig.distance": {
    "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
  },
  "elements-rect.textConfig.local": {
    "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
  },
  "elements-rect.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
  },
  "elements-rect.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-rect.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-rect.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-rect.textConfig.inside": {
    "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
  },
  "elements-rect.cursor": {
    "desc": "\n\n<p>鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 <code class=\"codespan\">cursor</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-rect.draggable": {
    "desc": "<p>图形元素是否可以被拖拽。</p>\n"
  },
  "elements-rect.progressive": {
    "desc": "<p>是否渐进式渲染。当图形元素过多时才使用。</p>\n"
  },
  "elements-rect.shape.x": {
    "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "elements-rect.shape.y": {
    "desc": "<p>图形元素的左上角在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "elements-rect.shape.width": {
    "desc": "<p>图形元素的宽度。</p>\n"
  },
  "elements-rect.shape.height": {
    "desc": "<p>图形元素的高度。</p>\n"
  },
  "elements-rect.shape.r": {
    "desc": "<p>可以用于设置圆角矩形。<code class=\"codespan\">r: [r1, r2, r3, r4]</code>，\n左上、右上、右下、左下角的半径依次为r1、r2、r3、r4。</p>\n<p>可以缩写，例如：</p>\n<ul>\n<li><code class=\"codespan\">r</code> 缩写为 <code class=\"codespan\">1</code>         相当于 <code class=\"codespan\">[1, 1, 1, 1]</code></li>\n<li><code class=\"codespan\">r</code> 缩写为 <code class=\"codespan\">[1]</code>       相当于 <code class=\"codespan\">[1, 1, 1, 1]</code></li>\n<li><code class=\"codespan\">r</code> 缩写为 <code class=\"codespan\">[1, 2]</code>    相当于 <code class=\"codespan\">[1, 2, 1, 2]</code></li>\n<li><code class=\"codespan\">r</code> 缩写为 <code class=\"codespan\">[1, 2, 3]1 相当于</code>[1, 2, 3, 2]`</li>\n</ul>\n"
  },
  "elements-rect.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-rect.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "elements-rect.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "elements-rect.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "elements-rect.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "elements-rect.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "elements-rect.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "elements-rect.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "elements-rect.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "elements-rect.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "elements-circle": {
    "desc": "<p>圆。</p>\n"
  },
  "elements-circle.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-circle.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "elements-circle.$action": {
    "desc": "<p>setOption 时指定本次对该图形元素的操作行为。</p>\n<p>可取值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>：如果已有元素，删除之，新建元素替代之。</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>：删除元素。</li>\n</ul>\n"
  },
  "elements-circle.x": {
    "desc": "<p>元素的 x 像素位置。</p>\n"
  },
  "elements-circle.y": {
    "desc": "<p>元素的 y 像素位置。</p>\n"
  },
  "elements-circle.rotation": {
    "desc": "<p>元素的旋转</p>\n"
  },
  "elements-circle.scaleX": {
    "desc": "<p>元素在 x 方向上的缩放。</p>\n"
  },
  "elements-circle.scaleY": {
    "desc": "<p>元素在 y 方向上的缩放。</p>\n"
  },
  "elements-circle.originX": {
    "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
  },
  "elements-circle.originY": {
    "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
  },
  "elements-circle.left": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-circle.left\">left</a> 和 <a href=\"#graphic.elements-circle.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-circle.left\">left</a> 或 <a href=\"#graphic.elements-circle.right\">right</a>，则 <a href=\"#graphic.elements-circle.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-circle.right": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-circle.left\">left</a> 和 <a href=\"#graphic.elements-circle.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-circle.left\">left</a> 或 <a href=\"#graphic.elements-circle.right\">right</a>，则 <a href=\"#graphic.elements-circle.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-circle.top": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-circle.top\">top</a> 和 <a href=\"#graphic.elements-circle.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-circle.top\">top</a> 或 <a href=\"#graphic.elements-circle.bottom\">bottom</a>，则 <a href=\"#graphic.elements-circle.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-circle.bottom": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-circle.top\">top</a> 和 <a href=\"#graphic.elements-circle.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-circle.top\">top</a> 或 <a href=\"#graphic.elements-circle.bottom\">bottom</a>，则 <a href=\"#graphic.elements-circle.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-circle.bounding": {
    "desc": "<p>决定此图形元素在定位时，对自身的包围盒计算方式。</p>\n<p>参见例子：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>可取值：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>：（默认）\n  表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。\n  这种方式易于使整体都限制在父元素范围中。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>：\n  表示仅仅用自身（不包括子节点）的没经过 tranform 的包围盒进行定位。\n  这种方式易于内容超出父元素范围的定位方式。</p>\n</li>\n</ul>\n"
  },
  "elements-circle.z": {
    "desc": "<p>z 方向的高度，决定层叠关系。</p>\n"
  },
  "elements-circle.zlevel": {
    "desc": "<p>决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。</p>\n"
  },
  "elements-circle.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-circle.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "elements-circle.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "elements-circle.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "elements-circle.textContent": {
    "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>。</p>\n"
  },
  "elements-circle.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-circle.textConfig.rotation": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
  },
  "elements-circle.textConfig.layoutRect": {
    "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-js\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-circle.textConfig.offset": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
  },
  "elements-circle.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-circle.textConfig.distance": {
    "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
  },
  "elements-circle.textConfig.local": {
    "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
  },
  "elements-circle.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
  },
  "elements-circle.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-circle.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-circle.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-circle.textConfig.inside": {
    "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
  },
  "elements-circle.cursor": {
    "desc": "\n\n<p>鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 <code class=\"codespan\">cursor</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-circle.draggable": {
    "desc": "<p>图形元素是否可以被拖拽。</p>\n"
  },
  "elements-circle.progressive": {
    "desc": "<p>是否渐进式渲染。当图形元素过多时才使用。</p>\n"
  },
  "elements-circle.shape.cx": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "elements-circle.shape.cy": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "elements-circle.shape.r": {
    "desc": "<p>外半径。</p>\n"
  },
  "elements-circle.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-circle.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "elements-circle.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "elements-circle.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "elements-circle.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "elements-circle.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "elements-circle.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "elements-circle.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "elements-circle.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "elements-circle.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "elements-ring": {
    "desc": "<p>圆环。</p>\n"
  },
  "elements-ring.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-ring.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "elements-ring.$action": {
    "desc": "<p>setOption 时指定本次对该图形元素的操作行为。</p>\n<p>可取值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>：如果已有元素，删除之，新建元素替代之。</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>：删除元素。</li>\n</ul>\n"
  },
  "elements-ring.x": {
    "desc": "<p>元素的 x 像素位置。</p>\n"
  },
  "elements-ring.y": {
    "desc": "<p>元素的 y 像素位置。</p>\n"
  },
  "elements-ring.rotation": {
    "desc": "<p>元素的旋转</p>\n"
  },
  "elements-ring.scaleX": {
    "desc": "<p>元素在 x 方向上的缩放。</p>\n"
  },
  "elements-ring.scaleY": {
    "desc": "<p>元素在 y 方向上的缩放。</p>\n"
  },
  "elements-ring.originX": {
    "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
  },
  "elements-ring.originY": {
    "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
  },
  "elements-ring.left": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-ring.left\">left</a> 和 <a href=\"#graphic.elements-ring.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-ring.left\">left</a> 或 <a href=\"#graphic.elements-ring.right\">right</a>，则 <a href=\"#graphic.elements-ring.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-ring.right": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-ring.left\">left</a> 和 <a href=\"#graphic.elements-ring.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-ring.left\">left</a> 或 <a href=\"#graphic.elements-ring.right\">right</a>，则 <a href=\"#graphic.elements-ring.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-ring.top": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-ring.top\">top</a> 和 <a href=\"#graphic.elements-ring.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-ring.top\">top</a> 或 <a href=\"#graphic.elements-ring.bottom\">bottom</a>，则 <a href=\"#graphic.elements-ring.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-ring.bottom": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-ring.top\">top</a> 和 <a href=\"#graphic.elements-ring.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-ring.top\">top</a> 或 <a href=\"#graphic.elements-ring.bottom\">bottom</a>，则 <a href=\"#graphic.elements-ring.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-ring.bounding": {
    "desc": "<p>决定此图形元素在定位时，对自身的包围盒计算方式。</p>\n<p>参见例子：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>可取值：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>：（默认）\n  表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。\n  这种方式易于使整体都限制在父元素范围中。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>：\n  表示仅仅用自身（不包括子节点）的没经过 tranform 的包围盒进行定位。\n  这种方式易于内容超出父元素范围的定位方式。</p>\n</li>\n</ul>\n"
  },
  "elements-ring.z": {
    "desc": "<p>z 方向的高度，决定层叠关系。</p>\n"
  },
  "elements-ring.zlevel": {
    "desc": "<p>决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。</p>\n"
  },
  "elements-ring.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-ring.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "elements-ring.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "elements-ring.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "elements-ring.textContent": {
    "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>。</p>\n"
  },
  "elements-ring.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-ring.textConfig.rotation": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
  },
  "elements-ring.textConfig.layoutRect": {
    "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-js\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-ring.textConfig.offset": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
  },
  "elements-ring.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-ring.textConfig.distance": {
    "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
  },
  "elements-ring.textConfig.local": {
    "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
  },
  "elements-ring.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
  },
  "elements-ring.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-ring.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-ring.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-ring.textConfig.inside": {
    "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
  },
  "elements-ring.cursor": {
    "desc": "\n\n<p>鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 <code class=\"codespan\">cursor</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-ring.draggable": {
    "desc": "<p>图形元素是否可以被拖拽。</p>\n"
  },
  "elements-ring.progressive": {
    "desc": "<p>是否渐进式渲染。当图形元素过多时才使用。</p>\n"
  },
  "elements-ring.shape.cx": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "elements-ring.shape.cy": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "elements-ring.shape.r": {
    "desc": "<p>外半径。</p>\n"
  },
  "elements-ring.shape.r0": {
    "desc": "<p>内半径。</p>\n"
  },
  "elements-ring.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-ring.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "elements-ring.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "elements-ring.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "elements-ring.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "elements-ring.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "elements-ring.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "elements-ring.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "elements-ring.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "elements-ring.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "elements-sector": {
    "desc": "<p>扇形。</p>\n"
  },
  "elements-sector.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-sector.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "elements-sector.$action": {
    "desc": "<p>setOption 时指定本次对该图形元素的操作行为。</p>\n<p>可取值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>：如果已有元素，删除之，新建元素替代之。</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>：删除元素。</li>\n</ul>\n"
  },
  "elements-sector.x": {
    "desc": "<p>元素的 x 像素位置。</p>\n"
  },
  "elements-sector.y": {
    "desc": "<p>元素的 y 像素位置。</p>\n"
  },
  "elements-sector.rotation": {
    "desc": "<p>元素的旋转</p>\n"
  },
  "elements-sector.scaleX": {
    "desc": "<p>元素在 x 方向上的缩放。</p>\n"
  },
  "elements-sector.scaleY": {
    "desc": "<p>元素在 y 方向上的缩放。</p>\n"
  },
  "elements-sector.originX": {
    "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
  },
  "elements-sector.originY": {
    "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
  },
  "elements-sector.left": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-sector.left\">left</a> 和 <a href=\"#graphic.elements-sector.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-sector.left\">left</a> 或 <a href=\"#graphic.elements-sector.right\">right</a>，则 <a href=\"#graphic.elements-sector.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-sector.right": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-sector.left\">left</a> 和 <a href=\"#graphic.elements-sector.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-sector.left\">left</a> 或 <a href=\"#graphic.elements-sector.right\">right</a>，则 <a href=\"#graphic.elements-sector.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-sector.top": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-sector.top\">top</a> 和 <a href=\"#graphic.elements-sector.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-sector.top\">top</a> 或 <a href=\"#graphic.elements-sector.bottom\">bottom</a>，则 <a href=\"#graphic.elements-sector.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-sector.bottom": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-sector.top\">top</a> 和 <a href=\"#graphic.elements-sector.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-sector.top\">top</a> 或 <a href=\"#graphic.elements-sector.bottom\">bottom</a>，则 <a href=\"#graphic.elements-sector.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-sector.bounding": {
    "desc": "<p>决定此图形元素在定位时，对自身的包围盒计算方式。</p>\n<p>参见例子：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>可取值：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>：（默认）\n  表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。\n  这种方式易于使整体都限制在父元素范围中。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>：\n  表示仅仅用自身（不包括子节点）的没经过 tranform 的包围盒进行定位。\n  这种方式易于内容超出父元素范围的定位方式。</p>\n</li>\n</ul>\n"
  },
  "elements-sector.z": {
    "desc": "<p>z 方向的高度，决定层叠关系。</p>\n"
  },
  "elements-sector.zlevel": {
    "desc": "<p>决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。</p>\n"
  },
  "elements-sector.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-sector.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "elements-sector.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "elements-sector.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "elements-sector.textContent": {
    "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>。</p>\n"
  },
  "elements-sector.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-sector.textConfig.rotation": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
  },
  "elements-sector.textConfig.layoutRect": {
    "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-js\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-sector.textConfig.offset": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
  },
  "elements-sector.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-sector.textConfig.distance": {
    "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
  },
  "elements-sector.textConfig.local": {
    "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
  },
  "elements-sector.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
  },
  "elements-sector.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-sector.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-sector.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-sector.textConfig.inside": {
    "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
  },
  "elements-sector.cursor": {
    "desc": "\n\n<p>鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 <code class=\"codespan\">cursor</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-sector.draggable": {
    "desc": "<p>图形元素是否可以被拖拽。</p>\n"
  },
  "elements-sector.progressive": {
    "desc": "<p>是否渐进式渲染。当图形元素过多时才使用。</p>\n"
  },
  "elements-sector.shape.cx": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "elements-sector.shape.cy": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "elements-sector.shape.r": {
    "desc": "<p>外半径。</p>\n"
  },
  "elements-sector.shape.r0": {
    "desc": "<p>内半径。</p>\n"
  },
  "elements-sector.shape.startAngle": {
    "desc": "<p>开始弧度。</p>\n"
  },
  "elements-sector.shape.endAngle": {
    "desc": "<p>结束弧度。</p>\n"
  },
  "elements-sector.shape.clockwise": {
    "desc": "<p>是否顺时针。</p>\n"
  },
  "elements-sector.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-sector.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "elements-sector.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "elements-sector.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "elements-sector.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "elements-sector.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "elements-sector.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "elements-sector.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "elements-sector.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "elements-sector.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "elements-arc": {
    "desc": "<p>圆弧。</p>\n"
  },
  "elements-arc.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-arc.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "elements-arc.$action": {
    "desc": "<p>setOption 时指定本次对该图形元素的操作行为。</p>\n<p>可取值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>：如果已有元素，删除之，新建元素替代之。</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>：删除元素。</li>\n</ul>\n"
  },
  "elements-arc.x": {
    "desc": "<p>元素的 x 像素位置。</p>\n"
  },
  "elements-arc.y": {
    "desc": "<p>元素的 y 像素位置。</p>\n"
  },
  "elements-arc.rotation": {
    "desc": "<p>元素的旋转</p>\n"
  },
  "elements-arc.scaleX": {
    "desc": "<p>元素在 x 方向上的缩放。</p>\n"
  },
  "elements-arc.scaleY": {
    "desc": "<p>元素在 y 方向上的缩放。</p>\n"
  },
  "elements-arc.originX": {
    "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
  },
  "elements-arc.originY": {
    "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
  },
  "elements-arc.left": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-arc.left\">left</a> 和 <a href=\"#graphic.elements-arc.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-arc.left\">left</a> 或 <a href=\"#graphic.elements-arc.right\">right</a>，则 <a href=\"#graphic.elements-arc.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-arc.right": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-arc.left\">left</a> 和 <a href=\"#graphic.elements-arc.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-arc.left\">left</a> 或 <a href=\"#graphic.elements-arc.right\">right</a>，则 <a href=\"#graphic.elements-arc.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-arc.top": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-arc.top\">top</a> 和 <a href=\"#graphic.elements-arc.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-arc.top\">top</a> 或 <a href=\"#graphic.elements-arc.bottom\">bottom</a>，则 <a href=\"#graphic.elements-arc.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-arc.bottom": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-arc.top\">top</a> 和 <a href=\"#graphic.elements-arc.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-arc.top\">top</a> 或 <a href=\"#graphic.elements-arc.bottom\">bottom</a>，则 <a href=\"#graphic.elements-arc.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-arc.bounding": {
    "desc": "<p>决定此图形元素在定位时，对自身的包围盒计算方式。</p>\n<p>参见例子：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>可取值：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>：（默认）\n  表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。\n  这种方式易于使整体都限制在父元素范围中。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>：\n  表示仅仅用自身（不包括子节点）的没经过 tranform 的包围盒进行定位。\n  这种方式易于内容超出父元素范围的定位方式。</p>\n</li>\n</ul>\n"
  },
  "elements-arc.z": {
    "desc": "<p>z 方向的高度，决定层叠关系。</p>\n"
  },
  "elements-arc.zlevel": {
    "desc": "<p>决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。</p>\n"
  },
  "elements-arc.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-arc.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "elements-arc.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "elements-arc.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "elements-arc.textContent": {
    "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>。</p>\n"
  },
  "elements-arc.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-arc.textConfig.rotation": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
  },
  "elements-arc.textConfig.layoutRect": {
    "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-js\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-arc.textConfig.offset": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
  },
  "elements-arc.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-arc.textConfig.distance": {
    "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
  },
  "elements-arc.textConfig.local": {
    "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
  },
  "elements-arc.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
  },
  "elements-arc.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-arc.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-arc.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-arc.textConfig.inside": {
    "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
  },
  "elements-arc.cursor": {
    "desc": "\n\n<p>鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 <code class=\"codespan\">cursor</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-arc.draggable": {
    "desc": "<p>图形元素是否可以被拖拽。</p>\n"
  },
  "elements-arc.progressive": {
    "desc": "<p>是否渐进式渲染。当图形元素过多时才使用。</p>\n"
  },
  "elements-arc.shape.cx": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。</p>\n"
  },
  "elements-arc.shape.cy": {
    "desc": "<p>图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。</p>\n"
  },
  "elements-arc.shape.r": {
    "desc": "<p>外半径。</p>\n"
  },
  "elements-arc.shape.r0": {
    "desc": "<p>内半径。</p>\n"
  },
  "elements-arc.shape.startAngle": {
    "desc": "<p>开始弧度。</p>\n"
  },
  "elements-arc.shape.endAngle": {
    "desc": "<p>结束弧度。</p>\n"
  },
  "elements-arc.shape.clockwise": {
    "desc": "<p>是否顺时针。</p>\n"
  },
  "elements-arc.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-arc.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "elements-arc.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "elements-arc.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "elements-arc.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "elements-arc.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "elements-arc.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "elements-arc.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "elements-arc.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "elements-arc.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "elements-polygon": {
    "desc": "<p>多边形。</p>\n"
  },
  "elements-polygon.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-polygon.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "elements-polygon.$action": {
    "desc": "<p>setOption 时指定本次对该图形元素的操作行为。</p>\n<p>可取值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>：如果已有元素，删除之，新建元素替代之。</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>：删除元素。</li>\n</ul>\n"
  },
  "elements-polygon.x": {
    "desc": "<p>元素的 x 像素位置。</p>\n"
  },
  "elements-polygon.y": {
    "desc": "<p>元素的 y 像素位置。</p>\n"
  },
  "elements-polygon.rotation": {
    "desc": "<p>元素的旋转</p>\n"
  },
  "elements-polygon.scaleX": {
    "desc": "<p>元素在 x 方向上的缩放。</p>\n"
  },
  "elements-polygon.scaleY": {
    "desc": "<p>元素在 y 方向上的缩放。</p>\n"
  },
  "elements-polygon.originX": {
    "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
  },
  "elements-polygon.originY": {
    "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
  },
  "elements-polygon.left": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.left\">left</a> 和 <a href=\"#graphic.elements-polygon.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-polygon.left\">left</a> 或 <a href=\"#graphic.elements-polygon.right\">right</a>，则 <a href=\"#graphic.elements-polygon.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-polygon.right": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.left\">left</a> 和 <a href=\"#graphic.elements-polygon.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-polygon.left\">left</a> 或 <a href=\"#graphic.elements-polygon.right\">right</a>，则 <a href=\"#graphic.elements-polygon.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-polygon.top": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.top\">top</a> 和 <a href=\"#graphic.elements-polygon.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-polygon.top\">top</a> 或 <a href=\"#graphic.elements-polygon.bottom\">bottom</a>，则 <a href=\"#graphic.elements-polygon.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-polygon.bottom": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-polygon.top\">top</a> 和 <a href=\"#graphic.elements-polygon.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-polygon.top\">top</a> 或 <a href=\"#graphic.elements-polygon.bottom\">bottom</a>，则 <a href=\"#graphic.elements-polygon.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-polygon.bounding": {
    "desc": "<p>决定此图形元素在定位时，对自身的包围盒计算方式。</p>\n<p>参见例子：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>可取值：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>：（默认）\n  表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。\n  这种方式易于使整体都限制在父元素范围中。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>：\n  表示仅仅用自身（不包括子节点）的没经过 tranform 的包围盒进行定位。\n  这种方式易于内容超出父元素范围的定位方式。</p>\n</li>\n</ul>\n"
  },
  "elements-polygon.z": {
    "desc": "<p>z 方向的高度，决定层叠关系。</p>\n"
  },
  "elements-polygon.zlevel": {
    "desc": "<p>决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。</p>\n"
  },
  "elements-polygon.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-polygon.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "elements-polygon.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "elements-polygon.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "elements-polygon.textContent": {
    "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>。</p>\n"
  },
  "elements-polygon.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-polygon.textConfig.rotation": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
  },
  "elements-polygon.textConfig.layoutRect": {
    "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-js\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-polygon.textConfig.offset": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
  },
  "elements-polygon.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-polygon.textConfig.distance": {
    "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
  },
  "elements-polygon.textConfig.local": {
    "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
  },
  "elements-polygon.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
  },
  "elements-polygon.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-polygon.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-polygon.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-polygon.textConfig.inside": {
    "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
  },
  "elements-polygon.cursor": {
    "desc": "\n\n<p>鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 <code class=\"codespan\">cursor</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-polygon.draggable": {
    "desc": "<p>图形元素是否可以被拖拽。</p>\n"
  },
  "elements-polygon.progressive": {
    "desc": "<p>是否渐进式渲染。当图形元素过多时才使用。</p>\n"
  },
  "elements-polygon.shape.points": {
    "desc": "<p>点列表，用于定义形状，如 <code class=\"codespan\">[[22, 44], [44, 55], [11, 44], ...]</code></p>\n"
  },
  "elements-polygon.shape.smooth": {
    "desc": "<p>是否平滑曲线。</p>\n<ul>\n<li>如果为 number：表示贝塞尔 (bezier) 差值平滑，smooth 指定了平滑等级，范围 <code class=\"codespan\">[0, 1]</code>。</li>\n<li>如果为 <code class=\"codespan\">&#39;spline&#39;</code>：表示 Catmull-Rom spline 差值平滑。</li>\n</ul>\n"
  },
  "elements-polygon.shape.smoothConstraint": {
    "desc": "<p>是否将平滑曲线约束在包围盒中。<code class=\"codespan\">smooth</code> 为 <code class=\"codespan\">number</code>（bezier）时生效。</p>\n"
  },
  "elements-polygon.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-polygon.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "elements-polygon.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "elements-polygon.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "elements-polygon.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "elements-polygon.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "elements-polygon.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "elements-polygon.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "elements-polygon.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "elements-polygon.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "elements-polyline": {
    "desc": "<p>折线。</p>\n"
  },
  "elements-polyline.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-polyline.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "elements-polyline.$action": {
    "desc": "<p>setOption 时指定本次对该图形元素的操作行为。</p>\n<p>可取值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>：如果已有元素，删除之，新建元素替代之。</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>：删除元素。</li>\n</ul>\n"
  },
  "elements-polyline.x": {
    "desc": "<p>元素的 x 像素位置。</p>\n"
  },
  "elements-polyline.y": {
    "desc": "<p>元素的 y 像素位置。</p>\n"
  },
  "elements-polyline.rotation": {
    "desc": "<p>元素的旋转</p>\n"
  },
  "elements-polyline.scaleX": {
    "desc": "<p>元素在 x 方向上的缩放。</p>\n"
  },
  "elements-polyline.scaleY": {
    "desc": "<p>元素在 y 方向上的缩放。</p>\n"
  },
  "elements-polyline.originX": {
    "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
  },
  "elements-polyline.originY": {
    "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
  },
  "elements-polyline.left": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-polyline.left\">left</a> 和 <a href=\"#graphic.elements-polyline.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-polyline.left\">left</a> 或 <a href=\"#graphic.elements-polyline.right\">right</a>，则 <a href=\"#graphic.elements-polyline.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-polyline.right": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-polyline.left\">left</a> 和 <a href=\"#graphic.elements-polyline.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-polyline.left\">left</a> 或 <a href=\"#graphic.elements-polyline.right\">right</a>，则 <a href=\"#graphic.elements-polyline.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-polyline.top": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-polyline.top\">top</a> 和 <a href=\"#graphic.elements-polyline.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-polyline.top\">top</a> 或 <a href=\"#graphic.elements-polyline.bottom\">bottom</a>，则 <a href=\"#graphic.elements-polyline.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-polyline.bottom": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-polyline.top\">top</a> 和 <a href=\"#graphic.elements-polyline.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-polyline.top\">top</a> 或 <a href=\"#graphic.elements-polyline.bottom\">bottom</a>，则 <a href=\"#graphic.elements-polyline.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-polyline.bounding": {
    "desc": "<p>决定此图形元素在定位时，对自身的包围盒计算方式。</p>\n<p>参见例子：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>可取值：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>：（默认）\n  表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。\n  这种方式易于使整体都限制在父元素范围中。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>：\n  表示仅仅用自身（不包括子节点）的没经过 tranform 的包围盒进行定位。\n  这种方式易于内容超出父元素范围的定位方式。</p>\n</li>\n</ul>\n"
  },
  "elements-polyline.z": {
    "desc": "<p>z 方向的高度，决定层叠关系。</p>\n"
  },
  "elements-polyline.zlevel": {
    "desc": "<p>决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。</p>\n"
  },
  "elements-polyline.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-polyline.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "elements-polyline.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "elements-polyline.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "elements-polyline.textContent": {
    "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>。</p>\n"
  },
  "elements-polyline.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-polyline.textConfig.rotation": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
  },
  "elements-polyline.textConfig.layoutRect": {
    "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-js\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-polyline.textConfig.offset": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
  },
  "elements-polyline.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-polyline.textConfig.distance": {
    "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
  },
  "elements-polyline.textConfig.local": {
    "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
  },
  "elements-polyline.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
  },
  "elements-polyline.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-polyline.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-polyline.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-polyline.textConfig.inside": {
    "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
  },
  "elements-polyline.cursor": {
    "desc": "\n\n<p>鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 <code class=\"codespan\">cursor</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-polyline.draggable": {
    "desc": "<p>图形元素是否可以被拖拽。</p>\n"
  },
  "elements-polyline.progressive": {
    "desc": "<p>是否渐进式渲染。当图形元素过多时才使用。</p>\n"
  },
  "elements-polyline.shape.points": {
    "desc": "<p>点列表，用于定义形状，如 <code class=\"codespan\">[[22, 44], [44, 55], [11, 44], ...]</code></p>\n"
  },
  "elements-polyline.shape.smooth": {
    "desc": "<p>是否平滑曲线。</p>\n<ul>\n<li>如果为 number：表示贝塞尔 (bezier) 差值平滑，smooth 指定了平滑等级，范围 <code class=\"codespan\">[0, 1]</code>。</li>\n<li>如果为 <code class=\"codespan\">&#39;spline&#39;</code>：表示 Catmull-Rom spline 差值平滑。</li>\n</ul>\n"
  },
  "elements-polyline.shape.smoothConstraint": {
    "desc": "<p>是否将平滑曲线约束在包围盒中。<code class=\"codespan\">smooth</code> 为 <code class=\"codespan\">number</code>（bezier）时生效。</p>\n"
  },
  "elements-polyline.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-polyline.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "elements-polyline.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "elements-polyline.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "elements-polyline.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "elements-polyline.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "elements-polyline.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "elements-polyline.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "elements-polyline.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "elements-polyline.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "elements-line": {
    "desc": "<p>直线。</p>\n"
  },
  "elements-line.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-line.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "elements-line.$action": {
    "desc": "<p>setOption 时指定本次对该图形元素的操作行为。</p>\n<p>可取值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>：如果已有元素，删除之，新建元素替代之。</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>：删除元素。</li>\n</ul>\n"
  },
  "elements-line.x": {
    "desc": "<p>元素的 x 像素位置。</p>\n"
  },
  "elements-line.y": {
    "desc": "<p>元素的 y 像素位置。</p>\n"
  },
  "elements-line.rotation": {
    "desc": "<p>元素的旋转</p>\n"
  },
  "elements-line.scaleX": {
    "desc": "<p>元素在 x 方向上的缩放。</p>\n"
  },
  "elements-line.scaleY": {
    "desc": "<p>元素在 y 方向上的缩放。</p>\n"
  },
  "elements-line.originX": {
    "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
  },
  "elements-line.originY": {
    "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
  },
  "elements-line.left": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-line.left\">left</a> 和 <a href=\"#graphic.elements-line.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-line.left\">left</a> 或 <a href=\"#graphic.elements-line.right\">right</a>，则 <a href=\"#graphic.elements-line.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-line.right": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-line.left\">left</a> 和 <a href=\"#graphic.elements-line.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-line.left\">left</a> 或 <a href=\"#graphic.elements-line.right\">right</a>，则 <a href=\"#graphic.elements-line.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-line.top": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-line.top\">top</a> 和 <a href=\"#graphic.elements-line.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-line.top\">top</a> 或 <a href=\"#graphic.elements-line.bottom\">bottom</a>，则 <a href=\"#graphic.elements-line.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-line.bottom": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-line.top\">top</a> 和 <a href=\"#graphic.elements-line.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-line.top\">top</a> 或 <a href=\"#graphic.elements-line.bottom\">bottom</a>，则 <a href=\"#graphic.elements-line.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-line.bounding": {
    "desc": "<p>决定此图形元素在定位时，对自身的包围盒计算方式。</p>\n<p>参见例子：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>可取值：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>：（默认）\n  表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。\n  这种方式易于使整体都限制在父元素范围中。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>：\n  表示仅仅用自身（不包括子节点）的没经过 tranform 的包围盒进行定位。\n  这种方式易于内容超出父元素范围的定位方式。</p>\n</li>\n</ul>\n"
  },
  "elements-line.z": {
    "desc": "<p>z 方向的高度，决定层叠关系。</p>\n"
  },
  "elements-line.zlevel": {
    "desc": "<p>决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。</p>\n"
  },
  "elements-line.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-line.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "elements-line.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "elements-line.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "elements-line.textContent": {
    "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>。</p>\n"
  },
  "elements-line.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-line.textConfig.rotation": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
  },
  "elements-line.textConfig.layoutRect": {
    "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-js\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-line.textConfig.offset": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
  },
  "elements-line.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-line.textConfig.distance": {
    "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
  },
  "elements-line.textConfig.local": {
    "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
  },
  "elements-line.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
  },
  "elements-line.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-line.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-line.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-line.textConfig.inside": {
    "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
  },
  "elements-line.cursor": {
    "desc": "\n\n<p>鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 <code class=\"codespan\">cursor</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-line.draggable": {
    "desc": "<p>图形元素是否可以被拖拽。</p>\n"
  },
  "elements-line.progressive": {
    "desc": "<p>是否渐进式渲染。当图形元素过多时才使用。</p>\n"
  },
  "elements-line.shape.x1": {
    "desc": "<p>开始点的 x 值。</p>\n"
  },
  "elements-line.shape.y1": {
    "desc": "<p>开始点的 y 值。</p>\n"
  },
  "elements-line.shape.x2": {
    "desc": "<p>结束点的 x 值。</p>\n"
  },
  "elements-line.shape.y2": {
    "desc": "<p>结束点的 y 值。</p>\n"
  },
  "elements-line.shape.percent": {
    "desc": "<p>线画到百分之多少就不画了。值的范围：[0, 1]。</p>\n"
  },
  "elements-line.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-line.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "elements-line.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "elements-line.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "elements-line.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "elements-line.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "elements-line.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "elements-line.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "elements-line.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "elements-line.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  },
  "elements-bezierCurve": {
    "desc": "<p>二次或三次贝塞尔曲线。</p>\n"
  },
  "elements-bezierCurve.type": {
    "desc": "<p>用 setOption 首次设定图形元素时必须指定。\n可取值：</p>\n<p><a href=\"#graphic.elements-image\">image</a>,\n<a href=\"#graphic.elements-text\">text</a>,\n<a href=\"#graphic.elements-circle\">circle</a>,\n<a href=\"#graphic.elements-sector\">sector</a>,\n<a href=\"#graphic.elements-ring\">ring</a>,\n<a href=\"#graphic.elements-polygon\">polygon</a>,\n<a href=\"#graphic.elements-polyline\">polyline</a>,\n<a href=\"#graphic.elements-rect\">rect</a>,\n<a href=\"#graphic.elements-line\">line</a>,\n<a href=\"#graphic.elements-bezierCurve\">bezierCurve</a>,\n<a href=\"#graphic.elements-arc\">arc</a>,\n<a href=\"#graphic.elements-group\">group</a>,</p>\n"
  },
  "elements-bezierCurve.id": {
    "desc": "<p>id 用于在更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。</p>\n"
  },
  "elements-bezierCurve.$action": {
    "desc": "<p>setOption 时指定本次对该图形元素的操作行为。</p>\n<p>可取值：</p>\n<ul>\n<li><code class=\"codespan\">&#39;merge&#39;</code>：如果已有元素，则新的配置项和已有的设定进行 merge。如果没有则新建。</li>\n<li><code class=\"codespan\">&#39;replace&#39;</code>：如果已有元素，删除之，新建元素替代之。</li>\n<li><code class=\"codespan\">&#39;remove&#39;</code>：删除元素。</li>\n</ul>\n"
  },
  "elements-bezierCurve.x": {
    "desc": "<p>元素的 x 像素位置。</p>\n"
  },
  "elements-bezierCurve.y": {
    "desc": "<p>元素的 y 像素位置。</p>\n"
  },
  "elements-bezierCurve.rotation": {
    "desc": "<p>元素的旋转</p>\n"
  },
  "elements-bezierCurve.scaleX": {
    "desc": "<p>元素在 x 方向上的缩放。</p>\n"
  },
  "elements-bezierCurve.scaleY": {
    "desc": "<p>元素在 y 方向上的缩放。</p>\n"
  },
  "elements-bezierCurve.originX": {
    "desc": "<p>元素旋转和缩放原点的 x 像素位置。</p>\n"
  },
  "elements-bezierCurve.originY": {
    "desc": "<p>元素旋转和缩放原点的 y 像素位置。</p>\n"
  },
  "elements-bezierCurve.left": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-bezierCurve.left\">left</a> 和 <a href=\"#graphic.elements-bezierCurve.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-bezierCurve.left\">left</a> 或 <a href=\"#graphic.elements-bezierCurve.right\">right</a>，则 <a href=\"#graphic.elements-bezierCurve.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-bezierCurve.right": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的高和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;center&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-bezierCurve.left\">left</a> 和 <a href=\"#graphic.elements-bezierCurve.right\">right</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-bezierCurve.left\">left</a> 或 <a href=\"#graphic.elements-bezierCurve.right\">right</a>，则 <a href=\"#graphic.elements-bezierCurve.shape\">shape</a> 里的 <code class=\"codespan\">x</code>、<code class=\"codespan\">cx</code> 等定位属性不再生效。</p>\n"
  },
  "elements-bezierCurve.top": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-bezierCurve.top\">top</a> 和 <a href=\"#graphic.elements-bezierCurve.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-bezierCurve.top\">top</a> 或 <a href=\"#graphic.elements-bezierCurve.bottom\">bottom</a>，则 <a href=\"#graphic.elements-bezierCurve.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-bezierCurve.bottom": {
    "desc": "<p>描述怎么根据父元素进行定位。</p>\n<p>『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 <code class=\"codespan\">group</code> 的子元素，父元素就是 <code class=\"codespan\">group</code> 元素。</p>\n<p>值的类型可以是：</p>\n<ul>\n<li><code class=\"codespan\">number</code>：表示像素值。</li>\n<li>百分比值：如 &#39;33%&#39;，用父元素的宽和此百分比计算出最终值。</li>\n<li><code class=\"codespan\">&#39;middle&#39;</code>：表示自动居中。</li>\n</ul>\n<p><a href=\"#graphic.elements-bezierCurve.top\">top</a> 和 <a href=\"#graphic.elements-bezierCurve.bottom\">bottom</a> 只有一个可以生效。</p>\n<p>如果指定 <a href=\"#graphic.elements-bezierCurve.top\">top</a> 或 <a href=\"#graphic.elements-bezierCurve.bottom\">bottom</a>，则 <a href=\"#graphic.elements-bezierCurve.shape\">shape</a> 里的 <code class=\"codespan\">y</code>、<code class=\"codespan\">cy</code> 等定位属性不再生效。</p>\n"
  },
  "elements-bezierCurve.bounding": {
    "desc": "<p>决定此图形元素在定位时，对自身的包围盒计算方式。</p>\n<p>参见例子：</p>\n<iframe  data-src=\"/echarts-website/examples/zh/view.html?c=doc-example/graphic-bounding&edit=1&reset=1\" width=\"500\" height=\"500\"></iframe>\n\n\n<p>可取值：</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;all&#39;</code>：（默认）\n  表示用自身以及子节点整体的经过 transform 后的包围盒进行定位。\n  这种方式易于使整体都限制在父元素范围中。</p>\n</li>\n<li><p><code class=\"codespan\">&#39;raw&#39;</code>：\n  表示仅仅用自身（不包括子节点）的没经过 tranform 的包围盒进行定位。\n  这种方式易于内容超出父元素范围的定位方式。</p>\n</li>\n</ul>\n"
  },
  "elements-bezierCurve.z": {
    "desc": "<p>z 方向的高度，决定层叠关系。</p>\n"
  },
  "elements-bezierCurve.zlevel": {
    "desc": "<p>决定此元素绘制在哪个 canvas 层中。注意，越多 canvas 层会占用越多资源。</p>\n"
  },
  "elements-bezierCurve.info": {
    "desc": "<p>用户定义的任意数据，可以在 event listener 中访问，如：</p>\n<pre><code class=\"lang-js\">chart.on(&#39;click&#39;, function (params) {\n    console.log(params.info);\n});\n</code></pre>\n"
  },
  "elements-bezierCurve.silent": {
    "desc": "<p>是否不响应鼠标以及触摸事件。</p>\n"
  },
  "elements-bezierCurve.invisible": {
    "desc": "<p>节点是否可见。</p>\n"
  },
  "elements-bezierCurve.ignore": {
    "desc": "<p>节点是否完全被忽略（既不渲染，也不响应事件）。</p>\n"
  },
  "elements-bezierCurve.textContent": {
    "desc": "<p>这是一个文本定义，附着在一个节点上，会依据 <code class=\"codespan\">textConfig</code> 配置，相对于节点布局。</p>\n<p>里面的属性同于 <a href=\"option.html#graphic.elements-text\" target=\"_blank\">text</a>。</p>\n"
  },
  "elements-bezierCurve.textConfig.position": {
    "desc": "<p>Position of <code class=\"codespan\">textContent</code>.</p>\n<ul>\n<li>&#39;left&#39;</li>\n<li>&#39;right&#39;</li>\n<li>&#39;top&#39;</li>\n<li>&#39;bottom&#39;</li>\n<li>&#39;inside&#39;</li>\n<li>&#39;insideLeft&#39;</li>\n<li>&#39;insideRight&#39;</li>\n<li>&#39;insideTop&#39;</li>\n<li>&#39;insideBottom&#39;</li>\n<li>&#39;insideTopLeft&#39;</li>\n<li>&#39;insideTopRight&#39;</li>\n<li>&#39;insideBottomLeft&#39;</li>\n<li>&#39;insideBottomRight&#39;</li>\n<li>or like <code class=\"codespan\">[12, 33]</code></li>\n<li>or like <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n</ul>\n"
  },
  "elements-bezierCurve.textConfig.rotation": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的旋转弧度。</p>\n"
  },
  "elements-bezierCurve.textConfig.layoutRect": {
    "desc": "<p><code class=\"codespan\">textContent</code> 根据此矩形来布局位置。\n默认是节点的包围盒。</p>\n<pre><code class=\"lang-js\">{\n    x: number\n    y: number\n    width: number\n    height: number\n}\n</code></pre>\n"
  },
  "elements-bezierCurve.textConfig.offset": {
    "desc": "<p><code class=\"codespan\">textContent</code> 的偏移。</p>\n<p><code class=\"codespan\">offset</code> 和 <code class=\"codespan\">position</code> 的区别是，<code class=\"codespan\">offset</code> 是旋转（rotation）后计算。</p>\n"
  },
  "elements-bezierCurve.textConfig.origin": {
    "desc": "<p><code class=\"codespan\">origin</code> 相对于节点的包围盒。\n可以是百分数。\n如果指定为 <code class=\"codespan\">&#39;center&#39;</code>，则定位在包围盒中心。</p>\n<p>只有当 <code class=\"codespan\">position</code> and <code class=\"codespan\">rotation</code> 都设置时，生效。</p>\n<ul>\n<li>如 <code class=\"codespan\">[12, 33]</code></li>\n<li>或如 <code class=\"codespan\">[&#39;50%&#39;, &#39;50%&#39;]</code></li>\n<li>&#39;center&#39;</li>\n</ul>\n"
  },
  "elements-bezierCurve.textConfig.distance": {
    "desc": "<p>距离 <code class=\"codespan\">layoutRect</code> 的距离。</p>\n"
  },
  "elements-bezierCurve.textConfig.local": {
    "desc": "<p>如果 <code class=\"codespan\">true</code> 的话，会采用节点的 transform。</p>\n"
  },
  "elements-bezierCurve.textConfig.insideFill": {
    "desc": "<p><code class=\"codespan\">insideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.insideFill</code> &gt; &quot;auto-calculated-fill&quot;\n在绝大多数场景下，&quot;auto-calculated-fill&quot; 是白色。</p>\n"
  },
  "elements-bezierCurve.textConfig.insideStroke": {
    "desc": "<p><code class=\"codespan\">insideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 <code class=\"codespan\">&quot;inside&quot;</code>，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.insideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会和节点的 <code class=\"codespan\">fill</code> 相同，如果 <code class=\"codespan\">fill</code> 没有的话则为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-bezierCurve.textConfig.outsideFill": {
    "desc": "<p><code class=\"codespan\">outsideFill</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 是 &quot;inside&quot;，它的 <code class=\"codespan\">fill</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.fill</code> &gt; <code class=\"codespan\">textConfig.outsideFill</code> &gt; #000</p>\n"
  },
  "elements-bezierCurve.textConfig.outsideStroke": {
    "desc": "<p><code class=\"codespan\">outsideStroke</code> 可以是一个颜色字符串，或者空着。</p>\n<p>如果 <code class=\"codespan\">textContent</code> 不是 &quot;inside&quot;，它的 <code class=\"codespan\">stroke</code> 会按这个优先级来选取：\n<code class=\"codespan\">textContent.style.stroke</code> &gt; <code class=\"codespan\">textConfig.outsideStroke</code> &gt; &quot;auto-calculated-stroke&quot;</p>\n<p>&quot;auto-calculated-stroke&quot; 的规则是：</p>\n<ul>\n<li>如果<ul>\n<li>(A) <code class=\"codespan\">fill</code> 在 style 中被指定（无论是在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>或者 (B) 需要画文字的背景（无论是定义在 <code class=\"codespan\">textContent.style</code> 还是 <code class=\"codespan\">textContent.style.rich</code> 里）</li>\n<li>&quot;auto-calculated-stroke&quot; 都会为 <code class=\"codespan\">null</code>。</li>\n</ul>\n</li>\n<li>否则<ul>\n<li>&quot;auto-calculated-stroke&quot; 会为一个近似于白色的颜色，来区别于背景。</li>\n</ul>\n</li>\n</ul>\n"
  },
  "elements-bezierCurve.textConfig.inside": {
    "desc": "<p>如果确定文本是在节点中的话，则此可设置为 <code class=\"codespan\">true</code>，避免 echarts 额外猜测。</p>\n"
  },
  "elements-bezierCurve.cursor": {
    "desc": "\n\n<p>鼠标悬浮时在图形元素上时鼠标的样式是什么。同 CSS 的 <code class=\"codespan\">cursor</code>。</p>\n",
    "uiControl": {
      "type": "enum",
      "options": "auto,pointer,move",
      "default": "pointer"
    }
  },
  "elements-bezierCurve.draggable": {
    "desc": "<p>图形元素是否可以被拖拽。</p>\n"
  },
  "elements-bezierCurve.progressive": {
    "desc": "<p>是否渐进式渲染。当图形元素过多时才使用。</p>\n"
  },
  "elements-bezierCurve.shape.x1": {
    "desc": "<p>开始点的 x 值。</p>\n"
  },
  "elements-bezierCurve.shape.y1": {
    "desc": "<p>开始点的 y 值。</p>\n"
  },
  "elements-bezierCurve.shape.x2": {
    "desc": "<p>结束点的 x 值。</p>\n"
  },
  "elements-bezierCurve.shape.y2": {
    "desc": "<p>结束点的 y 值。</p>\n"
  },
  "elements-bezierCurve.shape.cpx1": {
    "desc": "<p>控制点 x 值。</p>\n"
  },
  "elements-bezierCurve.shape.cpy1": {
    "desc": "<p>控制点 y 值。</p>\n"
  },
  "elements-bezierCurve.shape.cpx2": {
    "desc": "<p>第二个控制点 x 值。如果设置则开启三阶贝塞尔曲线。</p>\n"
  },
  "elements-bezierCurve.shape.cpy2": {
    "desc": "<p>第二个控制点 y 值。如果设置则开启三阶贝塞尔曲线。</p>\n"
  },
  "elements-bezierCurve.shape.percent": {
    "desc": "<p>画到百分之多少就不画了。值的范围：[0, 1]。</p>\n"
  },
  "elements-bezierCurve.style": {
    "desc": "<p>注：关于图形元素中更多的样式设置（例如 <a href=\"tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE\" target=\"_blank\">富文本标签</a>），参见 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderdisplayable\" target=\"_blank\">zrender/graphic/Displayable</a> 中的 style 相关属性。</p>\n<p>注意，这里图形元素的样式属性名称直接源于 zrender，和 <code class=\"codespan\">echarts label</code>、<code class=\"codespan\">echarts itemStyle</code> 等处同样含义的样式属性名称或有不同。例如，有如下对应：</p>\n<ul>\n<li><a href=\"#series-scatter.label.color\">itemStyle.color</a> =&gt; <code class=\"codespan\">style.fill</code></li>\n<li><a href=\"#series-scatter.label.color\">itemStyle.borderColor</a> =&gt; <code class=\"codespan\">style.stroke</code></li>\n<li><a href=\"#series-scatter.label.color\">label.color</a> =&gt; <code class=\"codespan\">style.textFill</code></li>\n<li><a href=\"#series-scatter.label.textBorderColor\">label.textBorderColor</a> =&gt; <code class=\"codespan\">style.textStroke</code></li>\n<li>...</li>\n</ul>\n"
  },
  "elements-bezierCurve.style.fill": {
    "desc": "<p>填充色。</p>\n"
  },
  "elements-bezierCurve.style.stroke": {
    "desc": "<p>笔画颜色。</p>\n"
  },
  "elements-bezierCurve.style.lineWidth": {
    "desc": "<p>笔画宽度。</p>\n"
  },
  "elements-bezierCurve.style.shadowBlur": {
    "desc": "<p>阴影宽度。</p>\n"
  },
  "elements-bezierCurve.style.shadowOffsetX": {
    "desc": "<p>阴影 X 方向偏移。</p>\n"
  },
  "elements-bezierCurve.style.shadowOffsetY": {
    "desc": "<p>阴影 Y 方向偏移。</p>\n"
  },
  "elements-bezierCurve.style.shadowColor": {
    "desc": "<p>阴影颜色。</p>\n"
  },
  "elements-bezierCurve.focus": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：</p>\n<ul>\n<li><code class=\"codespan\">&#39;none&#39;</code> 不淡出其它图形，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;self&#39;</code> 只聚焦（不淡出）当前高亮的数据的图形。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 聚焦当前高亮的数据所在的系列的所有图形。</li>\n</ul>\n"
  },
  "elements-bezierCurve.blurScope": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">v5.0.0</code> 开始支持</p>\n</blockquote>\n<p>在开启<code class=\"codespan\">focus</code>的时候，可以通过<code class=\"codespan\">blurScope</code>配置淡出的范围。支持如下配置</p>\n<ul>\n<li><code class=\"codespan\">&#39;coordinateSystem&#39;</code> 淡出范围为坐标系，默认使用该配置。</li>\n<li><code class=\"codespan\">&#39;series&#39;</code> 淡出范围为系列。</li>\n<li><code class=\"codespan\">&#39;global&#39;</code> 淡出范围为全局。</li>\n</ul>\n"
  }
}