window.__EC_DOC_option_dataZoom_slider = {
  "id": {
    "desc": "<p>Component ID, not specified by default. If specified, it can be used to refer the component in option or API.</p>\n"
  },
  "show": {
    "desc": "\n\n<p>Whether to show the  component. If is set to be <code class=\"codespan\">false</code>, it will not show, but its data filtering function still works.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "backgroundColor": {
    "desc": "\n\n<p>The background color of the component.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "rgba(47,69,84,0)"
    }
  },
  "dataBackground": {
    "desc": "<p>The style of data shadow.</p>\n"
  },
  "dataBackground.lineStyle": {
    "desc": "<p>Line style of data shadow</p>\n"
  },
  "dataBackground.lineStyle.color": {
    "desc": "\n\n<p>Line color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "dataBackground.lineStyle.width": {
    "desc": "\n\n<p> line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0.5",
      "min": "0",
      "step": "0.5"
    }
  },
  "dataBackground.lineStyle.type": {
    "desc": "\n\n\n<p>line type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">dashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-js\">{\n\ntype: [5, 10],\n\ndashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "dataBackground.lineStyle.dashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">type</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "dataBackground.lineStyle.cap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "dataBackground.lineStyle.join": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">miterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "dataBackground.lineStyle.miterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">join</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "dataBackground.lineStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "dataBackground.lineStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "dataBackground.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "dataBackground.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "dataBackground.lineStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "dataBackground.areaStyle": {
    "desc": "<p>Area style of data shadow</p>\n"
  },
  "dataBackground.areaStyle.color": {
    "desc": "\n\n<p>Fill color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "dataBackground.areaStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "dataBackground.areaStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "dataBackground.areaStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "dataBackground.areaStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "dataBackground.areaStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0.2",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "selectedDataBackground": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>Styles of selected data shadow.</p>\n"
  },
  "selectedDataBackground.lineStyle": {
    "desc": "<p>Line style of selected data shadow.</p>\n"
  },
  "selectedDataBackground.lineStyle.color": {
    "desc": "\n\n<p>Line color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "selectedDataBackground.lineStyle.width": {
    "desc": "\n\n<p> line width.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0.5",
      "min": "0",
      "step": "0.5"
    }
  },
  "selectedDataBackground.lineStyle.type": {
    "desc": "\n\n\n<p>line type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">dashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-js\">{\n\ntype: [5, 10],\n\ndashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "selectedDataBackground.lineStyle.dashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">type</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "selectedDataBackground.lineStyle.cap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "selectedDataBackground.lineStyle.join": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">miterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "selectedDataBackground.lineStyle.miterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">join</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "selectedDataBackground.lineStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "selectedDataBackground.lineStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "selectedDataBackground.lineStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "selectedDataBackground.lineStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "selectedDataBackground.lineStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "selectedDataBackground.areaStyle": {
    "desc": "<p>Area style of selected data shadow.</p>\n"
  },
  "selectedDataBackground.areaStyle.color": {
    "desc": "\n\n<p>Fill color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "selectedDataBackground.areaStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "selectedDataBackground.areaStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "selectedDataBackground.areaStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "selectedDataBackground.areaStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "selectedDataBackground.areaStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0.2",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "fillerColor": {
    "desc": "\n\n<p>The color to fill selected area.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "rgba(167,183,204,0.4)"
    }
  },
  "borderColor": {
    "desc": "\n\n<p>The color of border.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#ddd"
    }
  },
  "handleIcon": {
    "desc": "\n\n<p>Icon shape of handle, which supports path string. Its default value is:</p>\n<pre><code class=\"lang-js\">&#39;M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z&#39;\n</code></pre>\n<p>It can be set to an image with <code class=\"codespan\">&#39;image://url&#39;</code> , in which URL is the link to an image, or <code class=\"codespan\">dataURI</code> of an image.</p>\n<p>An image URL example:</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>A <code class=\"codespan\">dataURI</code> example:</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n<p>For example:</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon"
    }
  },
  "handleSize": {
    "desc": "\n\n<p>The size of control handle. It can be in pixels, or in percentage relative to the width of dataZoom component. By default, it&#39;s the same as the width of dataZoom component.</p>\n",
    "uiControl": {
      "type": "percent",
      "min": "0",
      "step": "1",
      "default": "100%"
    }
  },
  "handleStyle": {
    "desc": "<p>Style of handle. Please refer to <a href=\"/echarts-website/examples/en/editor.html?c=area-simple\" target=\"_blank\">area-simple example</a>.</p>\n"
  },
  "handleStyle.color": {
    "desc": "\n\n<p> color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "handleStyle.borderColor": {
    "desc": "\n\n<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "handleStyle.borderWidth": {
    "desc": "\n\n<p> border width. No border when it is set to be 0.</p>\n<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "handleStyle.borderType": {
    "desc": "\n\n\n<p> border type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">borderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-js\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "handleStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">borderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "handleStyle.borderCap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "handleStyle.borderJoin": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">borderMiterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "handleStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">borderJoin</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "handleStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "handleStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "handleStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "handleStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "handleStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "moveHandleIcon": {
    "desc": "\n\n\n\n<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>Icon of move handle.</p>\n<pre><code class=\"lang-js\">&#39;M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z&#39;\n</code></pre>\n<p>It can be set to an image with <code class=\"codespan\">&#39;image://url&#39;</code> , in which URL is the link to an image, or <code class=\"codespan\">dataURI</code> of an image.</p>\n<p>An image URL example:</p>\n<pre><code>&#39;image://http://xxx.xxx.xxx/a/b.png&#39;\n</code></pre><p>A <code class=\"codespan\">dataURI</code> example:</p>\n<pre><code>&#39;image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7&#39;\n</code></pre><p>Icons can be set to arbitrary vector path via <code class=\"codespan\">&#39;path://&#39;</code> in ECharts. As compared with a raster image, vector paths prevent jagging and blurring when scaled, and have better control over changing colors. The size of the vector icon will be adapted automatically. Refer to <a href=\"http://www.w3.org/TR/SVG/paths.html#PathData\" target=\"_blank\">SVG PathData</a> for more information about the format of the path. You may export vector paths from tools like Adobe </p>\n<p>For example:</p>\n<pre><code>&#39;path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z&#39;\n</code></pre>",
    "uiControl": {
      "type": "icon"
    }
  },
  "moveHandleSize": {
    "desc": "\n\n\n\n<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>Size of move handle.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "7"
    }
  },
  "moveHandleStyle": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>Style of move handle.</p>\n"
  },
  "moveHandleStyle.color": {
    "desc": "\n\n<p> color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "moveHandleStyle.borderColor": {
    "desc": "\n\n<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "moveHandleStyle.borderWidth": {
    "desc": "\n\n<p> border width. No border when it is set to be 0.</p>\n<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "moveHandleStyle.borderType": {
    "desc": "\n\n\n<p> border type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">borderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-js\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "moveHandleStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">borderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "moveHandleStyle.borderCap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "moveHandleStyle.borderJoin": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">borderMiterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "moveHandleStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">borderJoin</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "moveHandleStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "moveHandleStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "moveHandleStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "moveHandleStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "moveHandleStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "labelPrecision": {
    "desc": "\n\n<p>Precision of label if in number form. By default, it is decided based on the number of data.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1"
    }
  },
  "labelFormatter": {
    "desc": "<p>The formatter tool for the label.</p>\n<ul>\n<li><p>It is a template if in <code class=\"codespan\">string</code>. For instance, <code class=\"codespan\">aaaa{value}bbbb</code>, where <code class=\"codespan\">{value}</code> will be replaced by the value of actual data value.</p>\n</li>\n<li><p>It is a callback function if in <code class=\"codespan\">Function</code>. For example:</p>\n</li>\n</ul>\n<pre><code class=\"lang-javascript\">/**\n * @param {*} value If axis.type is &#39;category&#39;, `value` is the index of axis.data.\n *                  else `value` is current value.\n * @param {strign} valueStr Inner formatted string.\n * @return {string} Returns the label formatted.\n */\nlabelFormatter: function (value, valueStr) {\n    return &#39;aaa&#39; + value + &#39;bbb&#39;;\n}\n</code></pre>\n"
  },
  "showDetail": {
    "desc": "\n\n<p>Whether to show detail, that is, show the detailed data information when dragging.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "showDataShadow": {
    "desc": "\n\n<p>Whether to show data shadow in <code class=\"codespan\">dataZoom-silder</code> component, to indicate the data tendency in brief.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "realtime": {
    "desc": "\n\n<p>Whether to update view while dragging. If it is set as <code class=\"codespan\">false</code>, the view will be updated only at the end of dragging.</p>\n",
    "uiControl": {
      "type": "boolean",
      "default": "true"
    }
  },
  "textStyle.color": {
    "desc": "\n\n<p>dataZoom  text color.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#333"
    }
  },
  "textStyle.fontStyle": {
    "desc": "\n\n<p>dataZoom  font style.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;italic&#39;</code></li>\n<li><code class=\"codespan\">&#39;oblique&#39;</code></li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,italic,oblique"
    }
  },
  "textStyle.fontWeight": {
    "desc": "\n\n<p>dataZoom  font thick weight.</p>\n<p>Options are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;normal&#39;</code></li>\n<li><code class=\"codespan\">&#39;bold&#39;</code></li>\n<li><code class=\"codespan\">&#39;bolder&#39;</code></li>\n<li><code class=\"codespan\">&#39;lighter&#39;</code></li>\n<li>100 | 200 | 300 | 400...</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "default": "normal",
      "options": "normal,bold,bolder,lighter"
    }
  },
  "textStyle.fontFamily": {
    "desc": "\n\n<p>dataZoom  font family.</p>\n<p>Can also be &#39;serif&#39; , &#39;monospace&#39;, ...</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "sans-serif",
      "options": "sans-serif,serif,monospace,Arial,Courier New"
    }
  },
  "textStyle.fontSize": {
    "desc": "\n\n<p>dataZoom  font size.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "12",
      "min": "1",
      "step": "1"
    }
  },
  "textStyle.lineHeight": {
    "desc": "\n\n<p>Line height of the text fragment.</p>\n<p>If <code class=\"codespan\">lineHeight</code> is not set in <code class=\"codespan\">rich</code>, <code class=\"codespan\">lineHeight</code> in parent level will be used. For example:</p>\n<pre><code class=\"lang-js\">{\n    lineHeight: 56,\n    rich: {\n        a: {\n            // `lineHeight` is not set, then it will be 56\n        }\n    }\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "12"
    }
  },
  "textStyle.width": {
    "desc": "\n\n<p>Width of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "100",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "textStyle.height": {
    "desc": "\n\n<p>Height of text block.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "50",
      "min": "1",
      "max": "500",
      "step": "1"
    }
  },
  "textStyle.textBorderColor": {
    "desc": "\n\n<p>Storke color of the text.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "textStyle.textBorderWidth": {
    "desc": "\n\n<p>Storke line width of the text.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.textBorderType": {
    "desc": "\n\n\n<p>Stroke line type of the text.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">textBorderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-js\">{\n\ntextBorderType: [5, 10],\n\ntextBorderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "textStyle.textBorderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">textBorderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "textStyle.textShadowColor": {
    "desc": "\n\n<p>Shadow color of the text itself.</p>\n",
    "uiControl": {
      "type": "color",
      "default": "#000"
    }
  },
  "textStyle.textShadowBlur": {
    "desc": "\n\n<p>Shadow blue of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "0.5"
    }
  },
  "textStyle.textShadowOffsetX": {
    "desc": "\n\n<p>Shadow X offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.textShadowOffsetY": {
    "desc": "\n\n<p>Shadow Y offset of the text itself.</p>\n",
    "uiControl": {
      "type": "number",
      "step": "0.5"
    }
  },
  "textStyle.overflow": {
    "desc": "\n\n<p>Determine how to display the text when it&#39;s overflow. Available when <code class=\"codespan\">width</code> is set.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the text and trailing with <code class=\"codespan\">ellipsis</code>.</li>\n<li><code class=\"codespan\">&#39;break&#39;</code> Break by word</li>\n<li><code class=\"codespan\">&#39;breakAll&#39;</code> Break by character.</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "truncate,break,breakAll"
    }
  },
  "textStyle.ellipsis": {
    "desc": "<p>Ellipsis to be displayed when <code class=\"codespan\">overflow</code> is set to <code class=\"codespan\">truncate</code>.</p>\n<ul>\n<li><code class=\"codespan\">&#39;truncate&#39;</code> Truncate the overflow lines.</li>\n</ul>\n"
  },
  "xAxisIndex": {
    "desc": "<p>Specify which <a href=\"#xAxis\">xAxis</a> is/are controlled by the <code class=\"codespan\">dataZoom-slider</code> when <a href=\"#grid\">catesian coordinate system</a> is used.</p>\n<p>By default the first <code class=\"codespan\">xAxis</code> that parallel to <code class=\"codespan\">dataZoom</code> are controlled when <a href=\"#dataZoom-slider.orient\">dataZoom-slider.orient</a> is set as <code class=\"codespan\">&#39;horizontal&#39;</code>. But it is recommended to specify it explicitly but not use default value.</p>\n<p>If it is set as a single <code class=\"codespan\">number</code>, one axis is controlled, while if it is set as an <code class=\"codespan\">Array</code> , multiple axes are controlled.</p>\n<p>For example:</p>\n<pre><code class=\"lang-javascript\">option: {\n    xAxis: [\n        {...}, // The first xAxis\n        {...}, // The second xAxis\n        {...}, // The third xAxis\n        {...}  // The fourth xAxis\n    ],\n    dataZoom: [\n        { // The first dataZoom component\n            xAxisIndex: [0, 2] // Indicates that this dataZoom component\n                                     // controls the first and the third xAxis\n        },\n        { // The second dataZoom component\n            xAxisIndex: 3      // indicates that this dataZoom component\n                                     // controls the fourth xAxis\n        }\n    ]\n}\n</code></pre>\n"
  },
  "yAxisIndex": {
    "desc": "<p>Specify which <a href=\"#yAxis\">yAxis</a> is/are controlled by the <code class=\"codespan\">dataZoom-slider</code> when <a href=\"#grid\">catesian coordinate system</a> is used.</p>\n<p>By default the first <code class=\"codespan\">yAxis</code> that parallel to <code class=\"codespan\">dataZoom</code> are controlled when <a href=\"#dataZoom-slider.orient\">dataZoom-slider.orient</a> is set as <code class=\"codespan\">&#39;vertical&#39;</code>. But it is recommended to specify it explicitly but not use default value.</p>\n<p>If it is set as a single <code class=\"codespan\">number</code>, one axis is controlled, while if it is set as an <code class=\"codespan\">Array</code> , multiple axes are controlled.</p>\n<p>For example:</p>\n<pre><code class=\"lang-javascript\">option: {\n    yAxis: [\n        {...}, // The first yAxis\n        {...}, // The second yAxis\n        {...}, // The third yAxis\n        {...}  // The fourth yAxis\n    ],\n    dataZoom: [\n        { // The first dataZoom component\n            yAxisIndex: [0, 2] // Indicates that this dataZoom component\n                                     // controls the first and the third yAxis\n        },\n        { // The second dataZoom component\n            yAxisIndex: 3      // indicates that this dataZoom component\n                                     // controls the fourth yAxis\n        }\n    ]\n}\n</code></pre>\n"
  },
  "radiusAxisIndex": {
    "desc": "<p>Specify which <a href=\"#radiusAxis\">radiusAxis</a> is/are controlled by the <code class=\"codespan\">dataZoom-slider</code> when <a href=\"#polar\">polar coordinate system</a> is used.</p>\n<p>If it is set as a single <code class=\"codespan\">number</code>, one axis is controlled, while if it is set as an <code class=\"codespan\">Array</code> , multiple axes are controlled.</p>\n<p>For example:</p>\n<pre><code class=\"lang-javascript\">option: {\n    radiusAxis: [\n        {...}, // The first radiusAxis\n        {...}, // The second radiusAxis\n        {...}, // The third radiusAxis\n        {...}  // The fourth radiusAxis\n    ],\n    dataZoom: [\n        { // The first dataZoom component\n            radiusAxisIndex: [0, 2] // Indicates that this dataZoom component\n                                     // controls the first and the third radiusAxis\n        },\n        { // The second dataZoom component\n            radiusAxisIndex: 3      // indicates that this dataZoom component\n                                     // controls the fourth radiusAxis\n        }\n    ]\n}\n</code></pre>\n"
  },
  "angleAxisIndex": {
    "desc": "<p>Specify which <a href=\"#angleAxis\">angleAxis</a> is/are controlled by the <code class=\"codespan\">dataZoom-slider</code> when <a href=\"#polar\">polar coordinate system</a> is used.</p>\n<p>If it is set as a single <code class=\"codespan\">number</code>, one axis is controlled, while if it is set as an <code class=\"codespan\">Array</code> , multiple axes are controlled.</p>\n<p>For example:</p>\n<pre><code class=\"lang-javascript\">option: {\n    angleAxis: [\n        {...}, // The first angleAxis\n        {...}, // The second angleAxis\n        {...}, // The third angleAxis\n        {...}  // The fourth angleAxis\n    ],\n    dataZoom: [\n        { // The first dataZoom component\n            angleAxisIndex: [0, 2] // Indicates that this dataZoom component\n                                     // controls the first and the third angleAxis\n        },\n        { // The second dataZoom component\n            angleAxisIndex: 3      // indicates that this dataZoom component\n                                     // controls the fourth angleAxis\n        }\n    ]\n}\n</code></pre>\n"
  },
  "filterMode": {
    "desc": "\n\n\n\n<p>Generally <code class=\"codespan\">dataZoom</code> component zoom or roam coordinate system through data filtering and set the windows of axes internally.</p>\n<p>Its behaviours vary according to filtering mode settings (<a href=\"#dataZoom.filterMode\">dataZoom.filterMode</a>).</p>\n<p>Possible values:</p>\n<ul>\n<li><p>&#39;filter&#39;: data that outside the window will be <strong>filtered</strong>, which may lead to some changes of windows of other axes. For each data item, it will be filtered if one of the relevant dimensions is out of the window.</p>\n</li>\n<li><p>&#39;weakFilter&#39;: data that outside the window will be <strong>filtered</strong>, which may lead to some changes of windows of other axes. For each data item, it will be filtered only if all of the relevant dimensions are out of the same side of the window.</p>\n</li>\n<li><p>&#39;empty&#39;: data that outside the window will be <strong>set to NaN</strong>, which will not lead to changes of windows of other axes.</p>\n</li>\n<li><p>&#39;none&#39;: Do not filter data.</p>\n</li>\n</ul>\n<p>How to set <code class=\"codespan\">filterMode</code> is up to users, depending on the requirments and scenarios. Expirically:</p>\n<ul>\n<li><p>If only <code class=\"codespan\">xAxis</code> or only <code class=\"codespan\">yAxis</code> is controlled by <code class=\"codespan\">dataZoom</code>, <code class=\"codespan\">filterMode: &#39;filter&#39;</code> is typically used, which enable the other axis auto adapte its window to the extent of the filtered data.</p>\n</li>\n<li><p>If both <code class=\"codespan\">xAxis</code> and <code class=\"codespan\">yAxis</code> are operated by <code class=\"codespan\">dataZoom</code>:</p>\n<ul>\n<li><p>If <code class=\"codespan\">xAxis</code> and <code class=\"codespan\">yAxis</code> should not effect mutually (e.g. a scatter chart with both axes on the type of <code class=\"codespan\">&#39;value&#39;</code>), they should be set to be <code class=\"codespan\">filterMode: &#39;empty&#39;</code>.</p>\n</li>\n<li><p>If <code class=\"codespan\">xAxis</code> is the main axis and <code class=\"codespan\">yAxis</code> is the auxiliary axis (or vise versa) (e.g., in a bar chart, when dragging <code class=\"codespan\">dataZoomX</code> to change the window of xAxis, we need the yAxis to adapt to the clipped data, but when dragging <code class=\"codespan\">dataZoomY</code> to change the window of yAxis, we need the xAxis not to be changed), in this case, <code class=\"codespan\">xAxis</code> should be set to be <code class=\"codespan\">fiterMode: &#39;filter&#39;</code>, while <code class=\"codespan\">yAxis</code> should be set to be <code class=\"codespan\">fiterMode: &#39;empty&#39;</code>.</p>\n</li>\n</ul>\n</li>\n</ul>\n<p>It can be demonstrated by the sample:</p>\n<pre><code class=\"lang-javascript\">option = {\n    dataZoom: [\n        {\n            id: &#39;dataZoomX&#39;,\n            type: &#39;slider&#39;,\n            xAxisIndex: [0],\n            filterMode: &#39;filter&#39;\n        },\n        {\n            id: &#39;dataZoomY&#39;,\n            type: &#39;slider&#39;,\n            yAxisIndex: [0],\n            filterMode: &#39;empty&#39;\n        }\n    ],\n    xAxis: {type: &#39;value&#39;},\n    yAxis: {type: &#39;value&#39;},\n    series{\n        type: &#39;bar&#39;,\n        data: [\n            // The first column corresponds to xAxis,\n            // and the second coloum corresponds to yAxis.\n            [12, 24, 36],\n            [90, 80, 70],\n            [3, 9, 27],\n            [1, 11, 111]\n        ]\n    }\n}\n</code></pre>\n<p>In the sample above, <code class=\"codespan\">dataZoomX</code> is set as <code class=\"codespan\">filterMode: &#39;filter&#39;</code>. When use drags <code class=\"codespan\">dataZoomX</code> (do not touch <code class=\"codespan\">dataZoomY</code>) and the valueWindow of <code class=\"codespan\">xAxis</code> is changed to <code class=\"codespan\">[2, 50]</code> consequently, <code class=\"codespan\">dataZoomX</code> travel the first column of series.data and filter items that out of the window. The series.data turns out to be:</p>\n<pre><code class=\"lang-javascript\">[\n    [12, 24, 36],\n    // [90, 80, 70] This item is filtered, as 90 is out of the window.\n    [3, 9, 27]\n    // [1, 11, 111] This item is filtered, as 1 is out of the window.\n]\n</code></pre>\n<p>Before filtering, the second column, which corresponds to yAxis, has values <code class=\"codespan\">24</code>, <code class=\"codespan\">80</code>, <code class=\"codespan\">9</code>, <code class=\"codespan\">11</code>. After filtering, only <code class=\"codespan\">24</code> and <code class=\"codespan\">9</code> are left. Then the extent of <code class=\"codespan\">yAxis</code> is adjusted to adapt the two values (if <code class=\"codespan\">yAxis.min</code> and <code class=\"codespan\">yAxis.max</code> are not set).</p>\n<p>So <code class=\"codespan\">filterMode: &#39;filter&#39;</code> can be used to enable the other axis to auto adapt the filtered data.</p>\n<p>Then let&#39;s review the sample from the beginning, <code class=\"codespan\">dataZoomY</code> is set as <code class=\"codespan\">filterMode: &#39;empty&#39;</code>. So if user drags <code class=\"codespan\">dataZoomY</code> (do not touch <code class=\"codespan\">dataZoomX</code>) and its window is changed to <code class=\"codespan\">[10, 60]</code> consequently, <code class=\"codespan\">dataZoomY</code> travels the second column of series.data and set NaN to all of the values that outside the window (NaN cause the graphical elements, i.e., bar elements, do not show, but still hold the place). The series.data turns out to be:</p>\n<pre><code class=\"lang-javascript\">[\n    [12, 24, 36],\n    [90, NaN, 70], // Set to NaN\n    [3, NaN, 27],  // Set to NaN\n    [1, 11, 111]\n]\n</code></pre>\n<p>In this case, the first column (i.e., <code class=\"codespan\">12</code>, <code class=\"codespan\">90</code>, <code class=\"codespan\">3</code>, <code class=\"codespan\">1</code>, which corresponds to <code class=\"codespan\">xAxis</code>), will not be changed at all. So dragging <code class=\"codespan\">yAxis</code> will not change extent of <code class=\"codespan\">xAxis</code>, which is good for requirements like outlier filtering.</p>\n<p>See this example:</p>\n<iframe  data-src=\"/echarts-website/examples/en/view.html?c=doc-example/bar-dataZoom-filterMode&edit=1&reset=1\" width=\"600\" height=\"400\"></iframe>\n\n\n\n\n\n",
    "uiControl": {
      "type": "enum",
      "options": "filter,weakFilter,empty,none",
      "default": "filter"
    }
  },
  "start": {
    "desc": "\n\n<p>The start percentage of the window out of the data extent, in the range of 0 ~ 100.</p>\n<p><a href=\"#dataZoom-slider.start\">dataZoom-slider.start</a> and <a href=\"#dataZoom-slider.end\">dataZoom-slider.end</a> define the window of the data in <strong>percent</strong> form.</p>\n<p>More info about the relationship between <code class=\"codespan\">dataZoom-slider.start</code> and axis extent can be checked in <a href=\"#dataZoom-slider.rangeMode\">dataZoom-slider.rangeMode</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "100",
      "step": "0.5"
    }
  },
  "end": {
    "desc": "\n\n<p>The end percentage of the window out of the data extent, in the range of 0 ~ 100.</p>\n<p><a href=\"#dataZoom-slider.start\">dataZoom-slider.start</a> and <a href=\"#dataZoom-slider.end\">dataZoom-slider.end</a> define the window of the data in <strong>percent</strong> form.</p>\n<p>More info about the relationship between <code class=\"codespan\">dataZoom-slider.end</code> and axis extent can be checked in <a href=\"#dataZoom-slider.rangeMode\">dataZoom-slider.rangeMode</a>.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "100",
      "default": "100",
      "step": "0.5"
    }
  },
  "startValue": {
    "desc": "<p>The start absolute value of the window, not works when <a href=\"#dataZoom-slider.start\">dataZoom-slider.start</a> is set.</p>\n<p><a href=\"#dataZoom-slider.startValue\">dataZoom-slider.startValue</a> and <a href=\"#dataZoom-slider.endValue\">dataZoom-slider.endValue</a> define the window of the data window in <strong>absolute value</strong> form.</p>\n<p>Notice, if an axis is set to be <code class=\"codespan\">category</code>, <code class=\"codespan\">startValue</code> could be set as <code class=\"codespan\">index</code> of the array of <code class=\"codespan\">axis.data</code> or as the array value itself. In the latter case, it will internally and automatically translate to the index of array.</p>\n<p>More info about the relationship between <code class=\"codespan\">dataZoom-slider.startValue</code> and axis extent can be checked in <a href=\"#dataZoom-slider.rangeMode\">dataZoom-slider.rangeMode</a>.</p>\n"
  },
  "endValue": {
    "desc": "<p>The end absolute value of the window, doesn&#39;t work when <a href=\"#dataZoom-slider.end\">dataZoom-slider.end</a> is set.</p>\n<p><a href=\"#dataZoom-slider.startValue\">dataZoom-slider.startValue</a> and <a href=\"#dataZoom-slider.endValue\">dataZoom-slider.endValue</a> define the window of the data window in <strong>absolute value</strong> form.</p>\n<p>Notice, if an axis is set to be <code class=\"codespan\">category</code>, <code class=\"codespan\">startValue</code> could be set as <code class=\"codespan\">index</code> of the array of <code class=\"codespan\">axis.data</code> or as the array value itself. In the latter case, it will internally and automatically translate to the index of array.</p>\n<p>More info about the relationship between <code class=\"codespan\">dataZoom-slider.endValue</code> and axis extent can be checked in <a href=\"#dataZoom-slider.rangeMode\">dataZoom-slider.rangeMode</a>.</p>\n"
  },
  "minSpan": {
    "desc": "\n\n<p>Used to restrict minimal window size, in percent, which value is in the range of [0, 100].</p>\n<p>If <a href=\"#dataZoom-slider.minValueSpan\">dataZoom-slider.minValueSpan</a> is set, <code class=\"codespan\">minSpan</code> does not work any more.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "max": "100",
      "step": "0.5"
    }
  },
  "maxSpan": {
    "desc": "\n\n<p>Used to restrict maximal window size, in percent, which value is in the range of [0, 100].</p>\n<p>If <a href=\"#dataZoom-slider.maxValueSpan\">dataZoom-slider.maxValueSpan</a> is set, <code class=\"codespan\">maxSpan</code> does not work any more.</p>\n",
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
    "desc": "\n\n<p>Specify whether the layout of <code class=\"codespan\">dataZoom</code> component is horizontal or vertical. What&#39;s more, it indicates whether the horizontal axis or vertical axis is controlled by default in catesian coordinate system.</p>\n<p>Valid values:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;horizontal&#39;</code>: horizontal.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;vertical&#39;</code>: vertical.</p>\n</li>\n</ul>\n",
    "uiControl": {
      "type": "enum",
      "options": "horizontal,vertical"
    }
  },
  "zoomLock": {
    "desc": "\n\n<p>Specify whether to lock the size of window (selected area).</p>\n<p>When set as <code class=\"codespan\">true</code>, the size of window is locked, that is, only the translation (by mouse drag or touch drag) is avialable but zoom is not.</p>\n",
    "uiControl": {
      "type": "boolean"
    }
  },
  "throttle": {
    "desc": "\n\n<p>Specify the frame rate of views refreshing, with unit millisecond (ms).</p>\n<p>If <a href=\"#animation\">animation</a> set as <code class=\"codespan\">true</code> and <a href=\"#animationDurationUpdate\">animationDurationUpdate</a> set as bigger than <code class=\"codespan\">0</code>, you can keep <code class=\"codespan\">throttle</code> as the default value <code class=\"codespan\">100</code> (or set it as a value bigger than <code class=\"codespan\">0</code>), otherwise it might be not smooth when dragging.</p>\n<p>If <a href=\"#animation\">animation</a> set as <code class=\"codespan\">false</code> or <a href=\"#animationDurationUpdate\">animationDurationUpdate</a> set as <code class=\"codespan\">0</code>, and data size is not very large, and it seems to be not smooth when dragging, you can set <code class=\"codespan\">throttle</code> as <code class=\"codespan\">0</code> to improve that.</p>\n",
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
  "zlevel": {
    "desc": "<p><code class=\"codespan\">zlevel</code> value of all graphical elements in .</p>\n<p><code class=\"codespan\">zlevel</code> is used to make layers with Canvas. Graphical elements with different <code class=\"codespan\">zlevel</code> values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate <code class=\"codespan\">zlevel</code>. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid crash.</p>\n<p>Canvases with bigger <code class=\"codespan\">zlevel</code> will be placed on Canvases with smaller <code class=\"codespan\">zlevel</code>.</p>\n"
  },
  "z": {
    "desc": "<p><code class=\"codespan\">z</code> value of all graphical elements in , which controls order of drawing graphical components. Components with smaller <code class=\"codespan\">z</code> values may be overwritten by those with larger <code class=\"codespan\">z</code> values.</p>\n<p><code class=\"codespan\">z</code> has a lower priority to <code class=\"codespan\">zlevel</code>, and will not create new Canvas.</p>\n"
  },
  "left": {
    "desc": "<p>Distance between dataZoom-slider component and the left side of the container.</p>\n<p><code class=\"codespan\">left</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;left&#39;</code>, <code class=\"codespan\">&#39;center&#39;</code>, or <code class=\"codespan\">&#39;right&#39;</code>, then the component will be aligned automatically based on position.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "top": {
    "desc": "<p>Distance between dataZoom-slider component and the top side of the container.</p>\n<p><code class=\"codespan\">top</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>; and it can also be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>.</p>\n<p>If the <code class=\"codespan\">left</code> value is set to be <code class=\"codespan\">&#39;top&#39;</code>, <code class=\"codespan\">&#39;middle&#39;</code>, or <code class=\"codespan\">&#39;bottom&#39;</code>, then the component will be aligned automatically based on position.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "right": {
    "desc": "<p>Distance between dataZoom-slider component and the right side of the container.</p>\n<p><code class=\"codespan\">right</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n<p>Adaptive by default.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "bottom": {
    "desc": "<p>Distance between dataZoom-slider component and the bottom side of the container.</p>\n<p><code class=\"codespan\">bottom</code> value can be instant pixel value like <code class=\"codespan\">20</code>; it can also be a percentage value relative to container width like <code class=\"codespan\">&#39;20%&#39;</code>.</p>\n<p>Adaptive by default.</p>\n",
    "uiControl": {
      "type": "percent",
      "default": "0%"
    }
  },
  "brushSelect": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>Whether to enable brush to select.</p>\n"
  },
  "brushStyle": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>Style of brushing area.</p>\n"
  },
  "brushStyle.color": {
    "desc": "\n\n<p> color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "brushStyle.borderColor": {
    "desc": "\n\n<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "brushStyle.borderWidth": {
    "desc": "\n\n<p> border width. No border when it is set to be 0.</p>\n<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "brushStyle.borderType": {
    "desc": "\n\n\n<p> border type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">borderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-js\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "brushStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">borderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "brushStyle.borderCap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "brushStyle.borderJoin": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">borderMiterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "brushStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">borderJoin</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "brushStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "brushStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "brushStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "brushStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "brushStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "emphasis": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n<p>Style when highlighted.</p>\n"
  },
  "emphasis.handleStyle.color": {
    "desc": "\n\n<p> color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.handleStyle.borderColor": {
    "desc": "\n\n<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.handleStyle.borderWidth": {
    "desc": "\n\n<p> border width. No border when it is set to be 0.</p>\n<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.handleStyle.borderType": {
    "desc": "\n\n\n<p> border type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">borderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-js\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "emphasis.handleStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">borderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "emphasis.handleStyle.borderCap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "emphasis.handleStyle.borderJoin": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">borderMiterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "emphasis.handleStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">borderJoin</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "emphasis.handleStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.handleStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "emphasis.handleStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.handleStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.handleStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  },
  "emphasis.moveHandleStyle.color": {
    "desc": "\n\n<p> color. </p>\n<blockquote>\n<p>Supports setting as solid color using <code class=\"codespan\">rgb(255,255,255)</code>, <code class=\"codespan\">rgba(255,255,255,1)</code>, <code class=\"codespan\">#fff</code>, etc. Also supports setting as gradient color and pattern fill, see <a href=\"#color\">option.color</a> for details</p>\n</blockquote>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.moveHandleStyle.borderColor": {
    "desc": "\n\n<p> border color, whose format is similar to that of <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color"
    }
  },
  "emphasis.moveHandleStyle.borderWidth": {
    "desc": "\n\n<p> border width. No border when it is set to be 0.</p>\n<p> border width. No border when it is set to be 0.</p>\n",
    "uiControl": {
      "type": "number",
      "value": "0",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.moveHandleStyle.borderType": {
    "desc": "\n\n\n<p> border type.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;solid&#39;</code></li>\n<li><code class=\"codespan\">&#39;dashed&#39;</code></li>\n<li><code class=\"codespan\">&#39;dotted&#39;</code></li>\n</ul>\n<p>Since <code class=\"codespan\">v5.0.0</code>, it can also be a number or a number array to specify the <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray\" target=\"_blank\">dash array</a> of the line. With \n<code class=\"codespan\">borderDashOffset</code>\n, we can make the line style more flexible.</p>\n<p>For example：</p>\n<pre><code class=\"lang-js\">{\n\nborderType: [5, 10],\n\nborderDashOffset: 5\n}\n</code></pre>\n",
    "uiControl": {
      "type": "enum",
      "default": "solid",
      "options": "solid,dashed,dotted"
    }
  },
  "emphasis.moveHandleStyle.borderDashOffset": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the line dash offset. With \n<code class=\"codespan\">borderType</code>\n, we can make the line style more flexible.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset\" target=\"_blank\">lineDashOffset</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "0"
    }
  },
  "emphasis.moveHandleStyle.borderCap": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To specify how to draw the end points of the line.\nPossible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;butt&#39;</code>: The ends of lines are squared off at the endpoints.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: The ends of lines are rounded.</li>\n<li><code class=\"codespan\">&#39;square&#39;</code>: The ends of lines are squared off by adding a box with an equal width and half the height of the line&#39;s thickness.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;butt&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap\" target=\"_blank\">lineCap</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "butt",
      "options": "butt,round,square"
    }
  },
  "emphasis.moveHandleStyle.borderJoin": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To determine the shape used to join two line segments where they meet.</p>\n<p>Possible values are:</p>\n<ul>\n<li><code class=\"codespan\">&#39;bevel&#39;</code>: Fills an additional triangular area between the common endpoint of connected segments, and the separate outside rectangular corners of each segment.</li>\n<li><code class=\"codespan\">&#39;round&#39;</code>: Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments. The radius for these rounded corners is equal to the line width.</li>\n<li><code class=\"codespan\">&#39;miter&#39;</code>: Connected segments are joined by extending their outside edges to connect at a single point, with the effect of filling an additional lozenge-shaped area. This setting is affected by the \n<code class=\"codespan\">borderMiterLimit</code>\nproperty.</li>\n</ul>\n<p>Default value is <code class=\"codespan\">&#39;bevel&#39;</code>. Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin\" target=\"_blank\">lineJoin</a> for more details.</p>\n",
    "uiControl": {
      "type": "enum",
      "default": "bevel",
      "options": "bevel,round,miter"
    }
  },
  "emphasis.moveHandleStyle.borderMiterLimit": {
    "desc": "<blockquote>\n<p>Since <code class=\"codespan\">v5.0.0</code></p>\n</blockquote>\n\n\n<p>To set the miter limit ratio. Only works when \n<code class=\"codespan\">borderJoin</code>\n is set as <code class=\"codespan\">miter</code>.</p>\n<p>Default value is <code class=\"codespan\">10</code>. Negative、<code class=\"codespan\">0</code>、<code class=\"codespan\">Infinity</code> and <code class=\"codespan\">NaN</code> values are ignored.</p>\n<p>Refer to MDN <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit\" target=\"_blank\">miterLimit</a> for more details.</p>\n",
    "uiControl": {
      "type": "number",
      "min": "0",
      "step": "1",
      "default": "10"
    }
  },
  "emphasis.moveHandleStyle.shadowBlur": {
    "desc": "\n\n<p>Size of shadow blur. This attribute should be used along with <code class=\"codespan\">shadowColor</code>,<code class=\"codespan\">shadowOffsetX</code>, <code class=\"codespan\">shadowOffsetY</code> to set shadow to component.</p>\n<p>For example:</p>\n<pre><code class=\"lang-js\">{\n    shadowColor: &#39;rgba(0, 0, 0, 0.5)&#39;,\n    shadowBlur: 10\n}\n</code></pre>\n",
    "uiControl": {
      "type": "number",
      "default": "",
      "min": "0",
      "step": "0.5"
    }
  },
  "emphasis.moveHandleStyle.shadowColor": {
    "desc": "\n\n<p>Shadow color. Support same format as <code class=\"codespan\">color</code>.</p>\n",
    "uiControl": {
      "type": "color",
      "default": ""
    }
  },
  "emphasis.moveHandleStyle.shadowOffsetX": {
    "desc": "\n\n<p>Offset distance on the horizontal direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.moveHandleStyle.shadowOffsetY": {
    "desc": "\n\n<p>Offset distance on the vertical direction of shadow.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "0",
      "step": "0.5"
    }
  },
  "emphasis.moveHandleStyle.opacity": {
    "desc": "\n\n<p>Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.</p>\n",
    "uiControl": {
      "type": "number",
      "default": "1",
      "min": "0",
      "max": "1",
      "step": "0.01"
    }
  }
}