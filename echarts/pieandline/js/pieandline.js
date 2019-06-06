function pieInit() {
    var dom = document.getElementById("pie");
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        // var data = genData();
        var data = setData();
        option = {
            title : {
                text: '',
                subtext: '',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 130,
                bottom: 20,
                data: data.legendData,

                selected: data.selected
            },
            series : [
                {
                    type: 'pie',
                    radius : '55%',
                    center: ['40%', '50%'],
                    data: data.seriesData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            //color: '#ffff33'
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                }
            ]
        };

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }

        function setData() {
            var legendData = [];
            var seriesData = [];
            var selected = {};
            var data = getData();
            // console.log(data);
            for (var i = 0; i < data.length; i++) {
                legendData.push(data[i].name);
                seriesData.push({
                    name: data[i].name,
                    value: data[i].value,
                    itemStyle: {
                        color: data[i].color
                    },
                    label: {
                        normal: {
                            position: 'inner',
                            show : false
                        }
                    }
                    });
            }
            return {
                legendData: legendData,
                seriesData: seriesData,
                selected: selected
            };
        }

        // 获取后台数据
        function getData() {
            var dataList = [
                {
                    name: 'apple',
                    value: '40',
                    color: '#00cc00'
                },{
                    name: 'banana',
                    value: '20',
                    color: '#003399'
                },{
                    name: 'pear',
                    value: '10',
                    color: '#993399 '
                },{
                    name: 'orange',
                    value: '20',
                    color: '#990033'
                },{
                    name: 'lemon',
                    value: '10',
                    color: '#ccff00'
                }
            ]
            return dataList;
        }
}


// 折线图初始化
function lineInit() {
    var dom = document.getElementById("line");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        color : ['#FF8C00'],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            textStyle : {
                color : '#999',
            },
            data: ['01月', '02月', '03月', '04月', '05月', '06月']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [100, 160, 300, 320, 600, 650],
            type: 'line',
            areaStyle: {}
        }]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}