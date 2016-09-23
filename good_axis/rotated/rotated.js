var chart = c3.generate({
    bindto: "#chart",
    data: {
        columns: [
            ['멋진애', 30, 20, 40,30]
        ],
        type : 'bar'
    },
    axis:{
        rotated: true
    }
});
