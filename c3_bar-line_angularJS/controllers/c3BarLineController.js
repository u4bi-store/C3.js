app.controller('c3BarLineController', c3BarLineController);

function c3BarLineController($scope) {
    var tick=0;

    $scope.chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: [
                ['data1', 60, 200, 100, 150, 150, 140],
                ['data2', 60, 200, 100, 150, 150, 140]
            ],
            names: {
                data1: 'goodman'
            },
            type : 'bar',
            //order: 'desc',
            colors: {
                data1: '#ff0000'
            },
            //hide: ['data1'],
            onclick: function (d, element) {
                alert(' d : '+d+'\n element : '+element+'\n d.id : '+d.id);
            },
            labels: {
                format: {
                    // v : 벨류값/ id 아디값 / i 데이터 벨류 순번값 / j데이터 순번값
                    data1: function (v, id, i, j){
                        var result =i;
                        //var result =j;
                        return result+'임';
                    },
                    data2: function (v, id, i, j){
                        //var result =i;
                        var result =j;
                        return result+'임';
                    }
                }
            }
        },
        bar: {
            width:{
                ratio: 0.3
            }
        },
        grid: {
            y: {
                lines: [
                    {value:120, text: 'line 1'},
                    {value:140, text: 'line 2'},
                ]
            }
        },
        axis: {
            //rotated: true,
            x: {
                //show: false
                type: 'category',
                categories: ['fg', 'pc','ps','sr','cm'],
                padding: {
                    //left: 2
                },
                height: 0, // 0 ~
                //extent: [0,2]
                label: 'X Axis',
                //show: false=
            },
            y:{
                max: 150,
                min: 60,
                label: 'Y Axis',
                inner: true,
                //inverted: true
                //center: 0
            }
        },
        regions: [
            {axis: 'x', end: 6, class: 'regionX'} // @ region.css : .c3-region.regionX {fill: red;}
        ],
        legend: {
            //hide: ['data1']
            position: 'right' // bottom right inset
        },
        point: {
             show: false
        }
        /*subchart: {
            show: true
        }*/
    });
}

/* @data.type

line
spline
step
area
area-spline
area-step
bar
scatter
pie
donut
gauge
*/