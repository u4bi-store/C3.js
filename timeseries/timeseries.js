var chart = c3.generate({
    bindto: "#chart",
    data: {
        x: 'abb',
        columns: [
            ['abb', '2013-01-01', '2013-01-02', '2013-01-03'],
            ['멋진놈', 30, 200, 100],
            ['안멋진놈', 130, 340, 200]
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        }
    }
});
