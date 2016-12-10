var json_data = [
  {name: 'goodboy', age: 16, level: 50, exp: 1306},
  {name: 'unpit', age: 15, level: 66, exp: 1470},
  {name: 'becody', age: 23, level: 46, exp: 1630},
  {name: 'ch1324', age: 20, level: 78, exp: 1540},
]; /*json을 파써해서 객체화로 만듬*/

var chart = c3.generate({
    bindto: "#chart",
    data: {
      json: json_data, /* json 형태로 주입*/
      keys: {
        x: 'name', /* axis내 x값에 name 주입*/
        value: ['age', 'level'], /* 차트상 표기될 데이터 정보들*/
      },
      type: 'bar', /* 형태는 bar 형태로 정의*/
      colors: {
        age: '#ff0000', /* 데이터별 색상 정의*/
        level: '#ffff00', /**/
      },
    },
    axis: {
      x: { /* axis내 x값의 타입은 카테고리형태로 정의하*/
        type: 'category' /* 즉 x벨류에 이미 주입되어진 name표기함*/
      }
    }
});