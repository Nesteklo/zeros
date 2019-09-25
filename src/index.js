module.exports = function zeros(expression) {
  expression = expression.replace(/\*/g, '');
  var count_2 = 0;
  var count_5 = 0;
  var j = 0;
  for(let i=0; i<expression.length; i++){
    if (expression[i]=='!'){
      var number = Number(expression.slice(0+j, i));

      if (expression[i+1]!='!'){
        j=i+1;
        var number_temp = number;
        while ((number_temp/5) >= 1) {         
          count_5 = count_5 + Math.floor(number_temp / 5);  
          number_temp = number_temp/5;
        }
        number_temp = number;
        while ((number_temp/2) >= 1) {         
          count_2 = count_2 + Math.floor(number_temp / 2);  
          number_temp = number_temp/2;
        }
      }

      if (expression[i+1]=='!'){
        i++;
        j=i+1;
        var number_temp = number;
        var count_2_temp = 0;
        if((number_temp/2)%1==0){
          while ((number_temp/2) >= 1) {         
            count_2_temp = count_2_temp + number_temp / 2;  
            number_temp = number_temp/2;
          }
        }
        number_temp = number;
        var count_5_temp = 0;
        if(((number_temp/2)%1!=0)||((number_temp/5)%1==0)){  
          while ((number_temp/5) >= 1) {         
            count_5_temp = count_5_temp + Math.ceil(number_temp / 5);  
            number_temp = number_temp/5;
          }
        }
        count_5_temp = Math.ceil(count_5_temp/2);
        count_5 = count_5+count_5_temp;
        count_2 = count_2 + count_2_temp;
      }
    }
  }
  var result = Math.min(count_5, count_2);
  return result;
}
