var chart = c3.generate({
    bindto: "#chart",
    data: {
       columns: [
            ['멋진애', 60],
            ['안멋진애', 25]
        ],
        type: 'pie'
    }
});
