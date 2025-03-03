/*
title: Aggregate Morphing Between Scatter and Pie
category: custom
titleCN: 聚合分割形变（散点图 - 饼图）
difficulty: 9
*/


var PIE_COLORS = [
    '#e06343', '#37a354', '#b55dba', '#b5bd48', '#8378EA', '#96BFFF'
];
var ANIMATION_DURATION_UPDATE = 1500;

var RAW_DATA = [[1425139200000,34,0.13,2,"MD","ZD","P0"],[1425225600000,28,0.71,1.5,"MB","ZD","P1"],[1425312000000,23,0.9,2.8,"MA","ZC","P2"],[1425398400000,21,0.58,6,"MB","ZC","P3"],[1425484800000,14,0.1,1.6,"MC","ZA","P4"],[1425571200000,21,0.6,7.7,"MC","ZA","P5"],[1425657600000,23,0.31,2.6,"MC","ZC","P6"],[1425744000000,34,0.74,2.4,"MD","ZE","P7"],[1425830400000,14,0.59,2.3,"MB","ZD","P8"],[1425916800000,18,0.85,5.1,"MB","ZB","P9"],[1426003200000,36,0.96,1.2,"MC","ZC","P10"],[1426089600000,18,0.28,2.5,"MA","ZC","P11"],[1426176000000,20,0.62,6,"MB","ZD","P12"],[1426262400000,32,0.79,1.7,"MB","ZA","P13"],[1426348800000,17,0.58,4.4,"MD","ZB","P14"],[1426435200000,23,0.77,3,"MB","ZA","P15"],[1426521600000,39,0.87,4.6,"MC","ZA","P16"],[1426608000000,15,0.7,6,"MB","ZC","P17"],[1426694400000,21,0.94,2.7,"MB","ZD","P18"],[1426780800000,28,0.48,4.5,"MC","ZC","P19"],[1426867200000,31,0.49,9.8,"MA","ZC","P20"],[1426953600000,27,0.87,7.7,"MB","ZB","P21"],[1427040000000,27,0.82,5.5,"MC","ZB","P22"],[1427126400000,11,0.53,2.7,"MD","ZC","P23"],[1427212800000,13,0.7,7.6,"MB","ZD","P24"],[1427299200000,39,0.99,4.8,"MB","ZD","P25"],[1427385600000,32,0.91,2.1,"MB","ZE","P26"],[1427472000000,20,0.97,5,"MB","ZA","P27"],[1427558400000,36,0.01,8.9,"MB","ZD","P28"],[1427644800000,22,0.08,9.2,"MB","ZE","P29"],[1427731200000,21,0.36,3.1,"MD","ZC","P30"],[1427817600000,11,0.15,5.8,"MD","ZB","P31"],[1427904000000,39,0.02,1.4,"MC","ZD","P32"],[1427990400000,20,0.86,8.7,"MB","ZD","P33"],[1428076800000,23,0.24,7.2,"MD","ZB","P34"],[1428163200000,12,0.06,2,"MD","ZB","P35"],[1428249600000,36,0.42,8.2,"MA","ZB","P36"],[1428336000000,17,0.48,7.5,"MB","ZC","P37"],[1428422400000,19,0.12,6.6,"MB","ZB","P38"],[1428508800000,39,0.58,3.1,"MC","ZE","P39"],[1428595200000,10,0.18,6.6,"MC","ZD","P40"],[1428681600000,22,0.28,2.1,"MB","ZE","P41"],[1428768000000,27,0.33,1.9,"MC","ZB","P42"],[1428854400000,37,0.46,9.4,"MD","ZE","P43"],[1428940800000,18,0.96,5.5,"MB","ZA","P44"],[1429027200000,11,0.61,8.2,"MD","ZC","P45"],[1429113600000,15,0.88,4.6,"MD","ZA","P46"],[1429200000000,38,0.89,7.2,"MD","ZC","P47"],[1429286400000,20,0.39,5.4,"MB","ZB","P48"],[1429372800000,30,0.71,5.5,"MA","ZA","P49"]];



$.when(
    $.getScript('https://unpkg.com/echarts-simple-transform@1.0.0/dist/ecSimpleTransform.min.js')
).done(function () {

    init();

    var currentIsPie = false;
    setScatterOption();

    setInterval(function () {
        if (currentIsPie) {
            currentIsPie = false;
            setScatterOption();
        }
        else {
            currentIsPie = true;
            setPieOption();
        }
    }, 3000);

});



function init() {

    echarts.registerTransform(ecSimpleTransform.aggregate);

    var baseOption = {
        dataset: [{
            id: 'raw_dataset',
            dimensions: ['DATE', 'COUNT', 'PRICE', 'WEIGHT', 'M_TAG', 'Z_TAG', 'ID'],
            source: RAW_DATA
        }, {
            id: 'mTagSum_dataset',
            fromDatasetId: 'raw_dataset',
            transform: {
                type: 'ecSimpleTransform:aggregate',
                config: {
                    resultDimensions: [
                        { from: 'COUNT', method: 'sum' },
                        { from: 'PRICE', method: 'sum' },
                        { from: 'WEIGHT', method: 'sum' },
                        { from: 'M_TAG' }
                    ],
                    groupBy: 'M_TAG'
                }
            }
        }],
        tooltip: {}
    };

    myChart.setOption(baseOption, { lazyUpdate: true });
}

function setScatterOption() {
    var option = {
        grid: {
            containLabel: true
        },
        xAxis: {
            name: 'PRICE'
        },
        yAxis: {
            name: 'COUNT'
        },
        series: {
            type: 'custom',
            coordinateSystem: 'cartesian2d',
            animationDurationUpdate: ANIMATION_DURATION_UPDATE,
            datasetId: 'raw_dataset',
            encode: {
                itemName: 'ID',
                x: 'PRICE',
                y: 'COUNT',
                tooltip: ['PRICE', 'COUNT', 'WEIGHT']
            },
            renderItem: function (params, api) {
                var pos = api.coord([
                    api.value('PRICE'),
                    api.value('COUNT')
                ]);
                return {
                    type: 'circle',
                    morph: true,
                    shape: {
                        cx: pos[0],
                        cy: pos[1],
                        r: 10
                    },
                    style: {
                        fill: '#5470c6'
                    },
                    transition: ['shape', 'style']
                };
            }
        }
    };

    myChart.setOption(option, {
        replaceMerge: ['xAxis', 'yAxis'],
        transition: {
            from: { seriesIndex: 0, dimension: 'M_TAG' },
            to: { seriesIndex: 0, dimension: 'M_TAG' }
        }
    });
}

function setPieOption() {
    var option = {
        series: {
            type: 'custom',
            coordinateSystem: 'none',
            animationDurationUpdate: ANIMATION_DURATION_UPDATE,
            datasetId: 'mTagSum_dataset',
            encode: {
                itemName: 'ID',
                value: 'COUNT',
                tooltip: ['PRICE', 'COUNT', 'WEIGHT']
            },
            renderItem: function (params, api) {
                var context = params.context;
                if (!context.layout) {
                    context.layout = true;
                    var totalValue = 0;
                    for (var i = 0; i < params.dataInsideLength; i++) {
                        totalValue += api.value('COUNT', i);
                    }
                    var angles = [];
                    var colors = [];
                    var currentAngle = -Math.PI / 2;
                    for (var i = 0; i < params.dataInsideLength; i++) {
                        colors.push(PIE_COLORS[i]);
                        var angle = api.value('COUNT', i) / totalValue * Math.PI * 2;
                        angles.push([currentAngle, angle + currentAngle - 0.01]);
                        currentAngle += angle;
                    }
                    context.angles = angles;
                    context.colors = colors;
                }

                var width = myChart.getWidth();
                var height = myChart.getHeight();
                return {
                    type: 'sector',
                    morph: true,
                    shape: {
                        cx: width / 2,
                        cy: height / 2,
                        r: Math.min(width, height) / 3,
                        r0: Math.min(width, height) / 5,
                        startAngle: context.angles[params.dataIndex][0],
                        endAngle: context.angles[params.dataIndex][1],
                        clockwise: true
                    },
                    style: {
                        fill: context.colors[params.dataIndex]
                    },
                    transition: ['shape', 'style']
                };
            }
        }
    };

    myChart.setOption(option, {
        replaceMerge: ['xAxis', 'yAxis', 'visualMap'],
        transition: {
            from: { seriesIndex: 0, dimension: 'M_TAG' },
            to: { seriesIndex: 0, dimension: 'M_TAG' }
        }
    });
}
