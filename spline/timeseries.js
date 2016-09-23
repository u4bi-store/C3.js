var chart = c3.generate({
    bindto: "#chart",
    data: {
        columns: [
            ['멋진놈', 30, 200, 100,50],
            ['안멋진놈', 130, 340, 200,90]
        ],
        type: 'spline'
    }
});
