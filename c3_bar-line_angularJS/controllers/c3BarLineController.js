app.controller('c3BarLineController', c3BarLineController);

function c3BarLineController($scope) {
    var tick=0;

    $scope.chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 200],
                ['data2', 30, 200, 100, 400, 150, 200]
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
                lines: [{value:300}]
            }
        }
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