window.__EC_DOC_option_gl_series_surface = {
  "name": {
    "desc": "<p>Series name used for displaying in <a href=\"/echarts-website/zh/option.html#tooltip\" target=\"_blank\">tooltip</a> and filtering with <a href=\"/echarts-website/zh/option.html#legend\" target=\"_blank\">legend</a>, or updating data and configuration with <code class=\"codespan\">setOption</code>.</p>\n"
  },
  "coordinateSystem": {
    "desc": "<p>The coordinate used in the series, whose options are:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;cartesian3D&#39;</code></p>\n<p>  Use a 3D rectangular coordinate (also known as Cartesian coordinate), with <a href=\"#series-.xAxisIndex\">xAxisIndex</a> and <a href=\"#series-.yAxisIndex\">yAxisIndex</a> to assign the corresponding axis component.</p>\n</li>\n</ul>\n"
  },
  "grid3DIndex": {
    "desc": "<p>Use the index of the <a href=\"#grid3D\">grid3D</a> component. The first <a href=\"#grid3D\">grid3D</a> component is used by default.</p>\n"
  },
  "parametric": {
    "desc": "<p>Whether it is a parametric surface.</p>\n"
  },
  "wireframe": {
    "desc": "<p>The wireframe of the surface.</p>\n"
  },
  "wireframe.show": {
    "desc": "<p>Whether to display wireframe. Default is Display.</p>\n"
  },
  "wireframe.lineStyle": {
    "desc": "<p>The style of the wireframe.</p>\n"
  },
  "wireframe.lineStyle.color": {
    "desc": "<p>The color of the line. </p>\n<p>In addition to color strings, RGBA values represented by arrays are supported, for example:</p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "wireframe.lineStyle.opacity": {
    "desc": "<p>The opacity of the line.</p>\n"
  },
  "wireframe.lineStyle.width": {
    "desc": "<p>The width of the line.</p>\n"
  },
  "equation": {
    "desc": "<p>The function expression of the surface. If you need to display a function surface, you can set the function expression by <a href=\"#series-surface.equation\">equation</a> without setting <a href=\"#series-surface.data\">data</a>. For example, the ripple effect can be simulated by the following function.</p>\n<pre><code class=\"lang-js\">equation: {\n    x: {\n        step: 0.1,\n        min: -3,\n        max: 3,\n    },\n    y: {\n        step: 0.1,\n        min: -3,\n        max: 3,\n    },\n    z: function (x, y) {\n        return Math.sin(x * x + y * y) * x / 3.14\n    }\n}\n</code></pre>\n"
  },
  "equation.x": {
    "desc": "<p>Independent variable x.</p>\n"
  },
  "equation.x.step": {
    "desc": "<p>The step size of x.</p>\n"
  },
  "equation.x.min": {
    "desc": "<p>The minimum value of x.</p>\n"
  },
  "equation.x.max": {
    "desc": "<p>The maximum value of x.</p>\n"
  },
  "equation.y": {
    "desc": "<p>The independent variable y.</p>\n"
  },
  "equation.y.step": {
    "desc": "<p>The step size of x.</p>\n"
  },
  "equation.y.min": {
    "desc": "<p>The minimum value of y.</p>\n"
  },
  "equation.y.max": {
    "desc": "<p>The maximum value of y.</p>\n"
  },
  "equation.z": {
    "desc": "<p>The dependent variable z.</p>\n<p>z is a function for <a href=\"#series-surface.equation.x\">x</a>, <a href=\"#series-surface.equation.y\">y</a>.</p>\n<pre><code class=\"lang-js\">(x: number, y: number) =&gt; number\n</code></pre>\n"
  },
  "parametricEquation": {
    "desc": "<p>The [parameter equation] of the surface (<a href=\"https://zh.wikipedia.org/wiki/%E5%8F%83%E6%95%B8%E6%96%B9%E7%A8%8B)\" target=\"_blank\">https://zh.wikipedia.org/wiki/%E5%8F%83%E6%95%B8%E6%96%B9%E7%A8%8B)</a>. When <a href=\"#series-surface.data\">data</a> is not set, the parameter parameter equation can be declared by <a href=\"#series-surface.equation\">parametricEquation</a>. Valid when <a href=\"#series-surface\">parametric</a> is <code class=\"codespan\">true</code>.</p>\n<p>The parametric equations is <a href=\"#series-surface.parametricEquation.x\">x</a>, <a href=\"#series-surface.parametricEquation.y\">y</a>, <a href=\"#series-surface.parametricEquation.z\">z</a> about the equations of the parameters <a href=\"#series-surface.parametricEquation.u\">u</a>, <a href=\"#series-surface.parametricEquation.v\">v</a>.</p>\n<p>The following parametric equation is to plot the parametric surface of a similar metal part in the previous figure:</p>\n<pre><code class=\"lang-js\">var aa = 0.4;\nvar r = 1 - aa * aa;\nvar w = sqrt(r);\n...\nparametricEquation: {\n    u: {\n        min: -13.2,\n        max: 13.2,\n        step: 0.5\n    },\n    v: {\n        min: -37.4,\n        max: 37.4,\n        step: 0.5\n    },\n    x: function (u, v) {\n        var denom = aa * (pow(w * cosh(aa * u), 2) + aa * pow(sin(w * v), 2))\n        return -u + (2 * r * cosh(aa * u) * sinh(aa * u) / denom);\n    },\n    y: function (u, v) {\n        var denom = aa * (pow(w * cosh(aa * u), 2) + aa * pow(sin(w * v), 2))\n        return 2 * w * cosh(aa * u) * (-(w * cos(v) * cos(w * v)) - (sin(v) * sin(w * v))) / denom;\n    },\n    z: function (u, v) {\n        var denom = aa * (pow(w * cosh(aa * u), 2) + aa * pow(sin(w * v), 2))\n        return  2 * w * cosh(aa * u) * (-(w * sin(v) * cos(w * v)) + (cos(v) * sin(w * v))) / denom\n    }\n}\n</code></pre>\n"
  },
  "parametricEquation.u": {
    "desc": "<p>The argument u.</p>\n"
  },
  "parametricEquation.u.step": {
    "desc": "<p>The step size of u.</p>\n"
  },
  "parametricEquation.u.min": {
    "desc": "<p>The minimum value of u.</p>\n"
  },
  "parametricEquation.u.max": {
    "desc": "<p>The maximum value of u.</p>\n"
  },
  "parametricEquation.v": {
    "desc": "<p>Independent variable v.</p>\n"
  },
  "parametricEquation.v.step": {
    "desc": "<p>The step size of v.</p>\n"
  },
  "parametricEquation.v.min": {
    "desc": "<p>The minimum value of v.</p>\n"
  },
  "parametricEquation.v.max": {
    "desc": "<p>The maximum value of v.</p>\n"
  },
  "parametricEquation.x": {
    "desc": "<p>x is a function for <a href=\"#series-surface.equation.u\">u</a>, <a href=\"#series-surface.equation.v\">v</a>.</p>\n<pre><code class=\"lang-js\">(u: number, v: number) =&gt; number\n</code></pre>\n"
  },
  "parametricEquation.y": {
    "desc": "<p>y is a function for <a href=\"#series-surface.equation.u\">u</a>, <a href=\"#series-surface.equation.v\">v</a>.</p>\n<pre><code class=\"lang-js\">(u: number, v: number) =&gt; number\n</code></pre>\n"
  },
  "parametricEquation.z": {
    "desc": "<p>z is a function for <a href=\"#series-surface.equation.u\">u</a>, <a href=\"#series-surface.equation.v\">v</a>.</p>\n<pre><code class=\"lang-js\">(u: number, v: number) =&gt; number\n</code></pre>\n"
  },
  "itemStyle": {
    "desc": "<p>The color, opacity, and other styles of the surface.</p>\n"
  },
  "itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "data": {
    "desc": "<p>The data array of the surface.</p>\n<p>The data is an array of linear stores containing multiply <code class=\"codespan\">X vertices</code> by <code class=\"codespan\">Y vertices</code> data. A 5 x 5 surface has a total of 25 vertices, and the index of the data in the array is as follows</p>\n<p><img width=\"400\" height=\"auto\" src=\"documents/asset/gl/img/surface-index.png\"></p>\n<p>The data used in the above figure:</p>\n<pre><code class=\"lang-js\">data: [\n    [-1,-1,0],[-0.5,-1,0],[0,-1,0],[0.5,-1,0],[1,-1,0],\n    [-1,-0.5,0],[-0.5,-0.5,1],[0,-0.5,0],[0.5,-0.5,-1],[1,-0.5,0],\n    [-1,0,0],[-0.5,0,0],[0,0,0],[0.5,0,0],[1,0,0],\n    [-1,0.5,0],[-0.5,0.5,-1],[0,0.5,0],[0.5,0.5,1],[1,0.5,0],\n    [-1,1,0],[-0.5,1,0],[0,1,0],[0.5,1,0],[1,1,0]\n]\n</code></pre>\n<p>Each item is <code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">z</code>.</p>\n<p>For the parametric equation, each item needs to store five data, namely <code class=\"codespan\">x</code>, <code class=\"codespan\">y</code>, <code class=\"codespan\">z</code> and the parameters <code class=\"codespan\">u</code>, <code class=\"codespan\">v</code>. The index of the data is in the order of <code class=\"codespan\">u</code>, <code class=\"codespan\">v</code>. For example the following data:</p>\n<pre><code class=\"lang-js\">data: [\n    // v is 0, u is from -3.14 to 3.13\n    [0,0,1,-3.14,0],[0,0,1,-1.57,0],[0,0,1,0,0],[0,0,1,1.57,0],[0,0,1,3.14,0],\n    // v is 1.57, u is from -3.14 to 3.13\n    [0,-1,0,-3.14,1.57],[-1,0,0,-1.57,1.57],[0,1,0,0,1.57],[1,0,0,1.57,1.57],[0,-1,0,3.14,1.57],\n    // v is 3.14, u is from -3.14 to 3.13\n    [0,0,-1,-3.14,3.14],[0,0,-1,-1.57,3.14],[0,0,-1,0,3.14],[0,0,-1,1.57,3.14],[0,0,-1,3.14,3.14]]\n]\n</code></pre>\n<p>More likely, we need to assign name to each data item, in which case each item should be an object:</p>\n<pre><code class=\"lang-js\">[{\n    // name of date item\n    name: &#39;data1&#39;,\n    // value of date item is 8\n    value: [12, 14, 10]\n}, {\n    name: &#39;data2&#39;,\n    value: 20\n}]\n</code></pre>\n<p>Each data item can be further customized:</p>\n<pre><code class=\"lang-js\">[{\n    name: &#39;data1&#39;,\n    value: [12, 14, 10]\n}, {\n    // name of data item\n    name: &#39;data2&#39;,\n    value : [34, 50, 15],\n    // user-defined special itemStyle that only useful for this data item\n    itemStyle:{}\n}]\n</code></pre>\n"
  },
  "data.name": {
    "desc": "<p>The name of the data item.</p>\n"
  },
  "data.value": {
    "desc": "<p>Data item value.</p>\n"
  },
  "data.itemStyle": {
    "desc": "<p>The style setting for a single data item.</p>\n"
  },
  "data.itemStyle.color": {
    "desc": "<p>The color of the graphic. </p>\n<pre><code class=\"lang-js\">// pure white\n[1, 1, 1, 1]\n</code></pre>\n<p>When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.</p>\n"
  },
  "data.itemStyle.opacity": {
    "desc": "<p>The opacity of the graphic.</p>\n"
  },
  "shading": {
    "desc": "<p>The coloring effect of 3D graphics in surface. The following three coloring methods are supported in echarts-gl:</p>\n<ul>\n<li><p><code class=\"codespan\">&#39;color&#39;</code>\nOnly display colors, not affected by other factors such as lighting.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;lambert&#39;</code>\nThrough the classic [lambert] coloring, can express the light and dark that the light shows.</p>\n</li>\n<li><p><code class=\"codespan\">&#39;realistic&#39;</code>\nRealistic rendering, combined with <a href=\"#globe.light.ambientCubemap\">light.ambientCubemap</a> and <a href=\"#globe.postEffect\">postEffect</a>, can improve the quality and texture of the display. [Physical Based Rendering (PBR)] (<a href=\"https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/\" target=\"_blank\">https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/</a>) is used in ECharts GL to represent realistic materials.</p>\n</li>\n</ul>\n"
  },
  "realisticMaterial": {
    "desc": "<p>The configuration item of the realistic material is valid when <a href=\"#series-surface.shading\">shading</a> is <code class=\"codespan\">&#39;realistic&#39;</code>.</p>\n"
  },
  "realisticMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "realisticMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "realisticMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "realisticMaterial.roughness": {
    "desc": "<p>The <code class=\"codespan\">roughness</code> attribute is used to indicate the roughness of the material, <code class=\"codespan\">0</code> is completely smooth, <code class=\"codespan\">1</code> is completely rough, and the middle value is between the two.</p>\n<p>The following images show the effect of <code class=\"codespan\">roughness</code> in <a href=\"#globe\"><code class=\"codespan\">globe</code></a> <code class=\"codespan\">0.2</code> (smooth) and <code class=\"codespan\">0.8</code> (rough).</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-gloss.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-rough.png\"></p>\n<p>When you want to express more complex materials. You can set <code class=\"codespan\">roughness</code> directly to the texture that stores the roughness with each pixel as follows.</p>\n<p><img width=\"300\" height=\"300\" src=\"documents/asset/gl/img/roughness.png\"></p>\n<p>The more white the color in the texture, the larger the value and the rougher it is. You can get texture resources of different materials from resource websites such as [<a href=\"http://freepbr.com/]\" target=\"_blank\">http://freepbr.com/]</a> (<a href=\"http://freepbr.com/)\" target=\"_blank\">http://freepbr.com/)</a>. You can also generate it yourself using other tools.</p>\n"
  },
  "realisticMaterial.metalness": {
    "desc": "<p>The <code class=\"codespan\">metalness</code> attribute is used to indicate whether the material is metal or non-metal, <code class=\"codespan\">0</code> is non-metallic, <code class=\"codespan\">1</code> is metal, and the middle value is between the two. Usually set to <code class=\"codespan\">0</code> and <code class=\"codespan\">1</code> to meet most of the scenes.</p>\n<p>The picture below show the difference between `metal&#39; and &#39;0&#39; in <a href=\"#globe\">globe</a>.</p>\n<p><img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-metal.png\">\n<img width=\"auto\" height=\"280\" src=\"documents/asset/gl/img/globe-non-metal.png\"></p>\n<p>As with <a href=\"#series-surface.realisticMaterial.roughness\">roughness</a> you can set <code class=\"codespan\">metalness</code> directly to the metal texture.</p>\n"
  },
  "realisticMaterial.roughnessAdjust": {
    "desc": "<p>Roughness adjustment is useful when using roughness map. The overall roughness of the texture can be adjusted. The default is <code class=\"codespan\">0.5</code>, <code class=\"codespan\">0</code> is completely smooth, <code class=\"codespan\">1</code> is completely rough.</p>\n"
  },
  "realisticMaterial.metalnessAdjust": {
    "desc": "<p>Metalness adjustment is useful when using metalness maps. The overall metallicity of the texture can be adjusted. The default is <code class=\"codespan\">0.5</code>, <code class=\"codespan\">0</code> is non-metal, <code class=\"codespan\">1</code> is metal.</p>\n"
  },
  "realisticMaterial.normalTexture": {
    "desc": "<p>Normal map of material details.</p>\n<p>Using normal maps, you can still display rich shades of detail on the surface of the object with fewer vertices.</p>\n"
  },
  "lambertMaterial": {
    "desc": "<p>The configuration item of the lambert material is valid when <a href=\"#series-surface.shading\">shading</a> is <code class=\"codespan\">&#39;lambert&#39;</code>.</p>\n"
  },
  "lambertMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "lambertMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "lambertMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "colorMaterial": {
    "desc": "<p>The color material related configuration item is valid when <a href=\"#series-surface.shading\">shading</a> is <code class=\"codespan\">&#39;color&#39;</code>.</p>\n"
  },
  "colorMaterial.detailTexture": {
    "desc": "<p>The texture map of the material detail.</p>\n"
  },
  "colorMaterial.textureTiling": {
    "desc": "<p>Tiles the texture map of the material detail. The default is <code class=\"codespan\">1</code>, which means that the stretch is filled. When greater than <code class=\"codespan\">1</code>, the number indicates how many times the texture is tiled.</p>\n<p><strong>Note:</strong>  The use of tiling requires the <code class=\"codespan\">detail texture</code> height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.</p>\n"
  },
  "colorMaterial.textureOffset": {
    "desc": "<p>The displacement of the texture detail texture.</p>\n"
  },
  "zlevel": {
    "desc": "<p>The layer in which the component is located.</p>\n<p><code class=\"codespan\">zlevel</code> is used to make layers with Canvas. Graphical elements with different <code class=\"codespan\">zlevel</code> values will be placed in different Canvases, which is a common optimization technique. We can put those frequently changed elements (like those with animations) to a separate <code class=\"codespan\">zlevel</code>. Notice that too many Canvases will increase memory cost, and should be used carefully on mobile phones to avoid the crash.</p>\n<p>Canvases with bigger <code class=\"codespan\">zlevel</code> will be placed on Canvases with smaller <code class=\"codespan\">zlevel</code>.</p>\n<p><strong>Note:</strong> The layers of the components in echarts-gl need to be separated from the layers of the components in echarts. The same <code class=\"codespan\">zlevel</code> cannot be used for both WebGL and Canvas drawing at the same time.</p>\n"
  },
  "silent": {
    "desc": "<p>Whether the graph doesn`t respond and triggers a mouse event. The default is false, which is to respond to and trigger mouse events.</p>\n"
  },
  "animation": {
    "desc": "<p>Whether to enable animation.</p>\n"
  },
  "animationDurationUpdate": {
    "desc": "<p>The duration time for update the transition animation.</p>\n"
  },
  "animationEasingUpdate": {
    "desc": "<p>The easing effect for update transition animation.</p>\n"
  }
}