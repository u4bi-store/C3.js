var chart = c3.generate({
    bindto: "#chart",
    data: {
        columns: [
            ['멋진애', 30, 20, 40,30]
        ]
    },
    axis:{
        x:{
            type:'category',
            categories:['u4bi_1','u4bi_2','u4bi_3','u4bi_4']
        }
    }
});
