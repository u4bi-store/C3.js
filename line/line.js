var chart = c3.generate({
    bindto: "#chart",
    data: {
        columns: [
            ['멋진애', 30, 200, 100, 400, 150, 250],
            ['안멋진애', 50, 20, 10, 40, 15, 25]
        ]
    }
});
