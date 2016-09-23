var chart = c3.generate({
    bindto: "#chart",
    data: {
       columns: [
            ['멋진애', 60, 80,150],
            ['안멋진애', 25, 50,75]
        ],
        types: {
            '멋진애': 'step',
            '안멋진애': 'area-step'
        }
    }
});
