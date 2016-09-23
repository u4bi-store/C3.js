var chart = c3.generate({
    bindto: "#chart",
    data: {
       columns: [
            ['멋진애', 60, 80],
            ['안멋진애', 25, 50,75],
            ['어중간한애', 30,20]
        ],
        types: {
            '멋진애': 'area',
            '안멋진애': 'area-spline',
            '어중간한애': 'area-spline'
        }
    }
});
