var op; //выбранный оператор
  function func() {
    var result;
    var number1 = Number(document.getElementById("number1").value);
    var number2 = Number(document.getElementById("number2").value);
    switch (op){
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        if (number2) {
          result = number1 / number2;
        } else {
          result = 'бесконечность';
        }
        if(number2 === 0){
            result = 'неделимое';
        }
        break;
    default:
        if(number1 === 0, number2 === 0){
            result = '1';
        } else{
        result = '2';
        }
    }
    document.getElementById("result").innerHTML = result;
  }