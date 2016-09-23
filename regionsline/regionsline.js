var chart = c3.generate({
    bindto: "#chart",
    data: {
       columns: [
            ['멋진애', 30, 100,150, 170, 200, 230],
            ['안멋진애', 50, 120,200]
        ],
        regions: {
            '멋진애': [{'start':0, 'end':1, 'style':'dashed'},{'start':3}],
            '안멋진애': [{'end':1}]
        } /* regions

            멋진애 0부터 1지점 점선
                쉬고 3부터 다시 점선
            안멋진애 점선 디폴트에서 1지점에 끝냄 */
    }
});
