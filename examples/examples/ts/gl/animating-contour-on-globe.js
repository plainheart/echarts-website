/*
title: Animating Contour on Globe
category: globe
titleCN: Animating Contour on Globe
videoStart: 2000
videoEnd: 6000
*/

var config = {
  color: '#c0101a',
  levels: 1,
  intensity: 4,
  threshold: 0.01
};

var canvas = document.createElement('canvas');
canvas.width = 4096;
canvas.height = 2048;
context = canvas.getContext('2d');

context.lineWidth = 0.5;
context.strokeStyle = config.color;
context.fillStyle = config.color;
context.shadowColor = config.color;

$.when(
  $.getScript('https://unpkg.com/d3-array@2.8.0/dist/d3-array.js'),
  $.getScript(
    'https://unpkg.com/d3-contour@2.0.0/dist/d3-contour.js'
  ),
  $.getScript('https://unpkg.com/d3-geo@2.0.1/dist/d3-geo.js'),
  $.getScript('https://unpkg.com/d3-timer@2.0.0/dist/d3-timer.js')
).done(function () {
  image(ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg').then(
    function (image) {
      var m = image.height,
        n = image.width,
        values = new Array(n * m),
        contours = d3.contours().size([n, m]).smooth(true),
        projection = d3.geoIdentity().scale(canvas.width / n),
        path = d3.geoPath(projection, context);

      //   StackBlur.R(image, 5);

      for (var j = 0, k = 0; j < m; ++j) {
        for (var i = 0; i < n; ++i, ++k) {
          values[k] = image.data[k << 2] / 255;
        }
      }

      var opt = {
        image: canvas
      };

      var results = [];
      function update(threshold, levels) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        var thresholds = [];
        for (var i = 0; i < levels; i++) {
          thresholds.push((threshold + (1 / levels) * i) % 1);
        }
        results = contours.thresholds(thresholds)(values);
        redraw();
      }

      function redraw() {
        results.forEach(function (d, idx) {
          context.beginPath();
          path(d);
          context.globalAlpha = 1;
          context.stroke();
          if (idx > (config.levels / 5) * 3) {
            context.globalAlpha = 0.01;
            context.fill();
          }
        });
        opt.onupdate();
      }
      d3.timer(function (t) {
        var threshold = (t % 10000) / 10000;
        update(threshold, 1);
      });

      initCharts(opt);

      update(config.threshold, config.levels);
    }
  );

  function image(url) {
    return new Promise(function (resolve) {
      var image = new Image();
      image.src = url;
      image.crossOrigin = 'Anonymous';
      image.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = image.width / 8;
        canvas.height = image.height / 8;
        var context = canvas.getContext('2d');
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(context.getImageData(0, 0, canvas.width, canvas.height));
      };
    });
  }

  function initCharts(opt) {
    var contourChart = echarts.init(document.createElement('canvas'), null, {
      width: 4096,
      height: 2048
    });

    var img = new echarts.graphic.Image({
      style: {
        image: opt.image,
        x: -1,
        y: -1,
        width: opt.image.width + 2,
        height: opt.image.height + 2
      }
    });
    contourChart.getZr().add(img);

    opt.onupdate = function () {
      img.dirty();
    };

    myChart.setOption({
      backgroundColor: '#000',
      globe: {
        environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',

        heightTexture:
          ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',

        displacementScale: 0.05,
        displacementQuality: 'high',

        baseColor: '#000',

        shading: 'realistic',
        realisticMaterial: {
          roughness: 0.2,
          metalness: 0
        },

        postEffect: {
          enable: true,
          depthOfField: {
            // enable: true
          }
        },
        light: {
          ambient: {
            intensity: 0
          },
          main: {
            intensity: 0.1,
            shadow: false
          },
          ambientCubemap: {
            texture: ROOT_PATH + '/data-gl/asset/lake.hdr',
            exposure: 1,
            diffuseIntensity: 0.5,
            specularIntensity: 2
          }
        },
        viewControl: {
          autoRotate: false
        },

        layers: [
          {
            type: 'blend',
            blendTo: 'emission',
            texture: contourChart,
            intensity: config.intensity
          }
        ]
      }
    });
  }
});
