var json_data = [
  {name: 'goodboy', age: 16, level: 50, exp: 1306},
  {name: 'unpit', age: 15, level: 66, exp: 1470},
  {name: 'becody', age: 23, level: 46, exp: 1630},
  {name: 'ch1324', age: 20, level: 78, exp: 1540},
];

var chart = c3.generate({
    bindto: "#chart",
    data: {
      json: json_data,
      keys: {
        x: 'name',
        value: ['age', 'level'],
      },
      type: 'bar',
      colors: {
        age: '#ff0000',
        level: '#ffff00',
      },
    },
    axis: {
      x: {
        type: 'category'
      }
    }
});