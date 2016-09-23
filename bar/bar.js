var chart = c3.generate({
    bindto: "#chart",
    data: {
       columns: [
            ['멋진애', 60,50],
            ['안멋진애', 25,30],
            ['어중간한애', 30,40]
        ],
        type: 'bar'
    },
    bar:{
        width:{
            ratio: 0.5
        }
    }
});
