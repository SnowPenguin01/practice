class Method {

    submit = function(){
        let result = document.getElementById("amount");
        let amount = result.value;
        let check1 = document.querySelector('.button-switch__checkbox').value;
        let check2 = document.querySelector('.checkbox-block_check').value;
        alert("Ваша заявка в размере " + amount + " рублей успешно отправлена!\n"
              + "С обеспечением: " + check1 + "\n"
              + "Акция: " + check2 + "\n");
        result.value = "";
    }

    getResponse = async function() {
        let response = await fetch('http://new.energobank.su/local/ajax/calculator.php?PID=15373');
        let result = await JSON.parse(response);
        let underNumber = result[sum][min_value];
        
        document.querySelector(".form-text").value = underNumber;
        
    }
  }

  
  Method().getResponse();
  Method().submit();



document.querySelector('#amountRange').oninput = () => {
    console.log(document.querySelector('#amountRange').value);
    document.querySelector('#amount').value = document.querySelector('#amountRange').value;
}

document.querySelector('.button-switch__checkbox').addEventListener('click', () => {
    let with1 = "Да";
    let withOut = "Нет";
    if (document.querySelector('.button-switch__checkbox').checked){
        document.querySelector('.button-switch__checkbox').value = withOut;
    }
    else{
        document.querySelector('.button-switch__checkbox').value = with1;
    }
});

document.querySelector('.checkbox-block_check').addEventListener('click', () => {
    let with2 = "Да";
    let withOut = "Нет";
    if (document.querySelector('.checkbox-block_check').checked){
        document.querySelector('.checkbox-block_check').value = with2;
    }
    else{
        document.querySelector('.checkbox-block_check').value = withOut;
    }
});

document.querySelector('#amountRange').addEventListener('input', () => {
    let sumNumberRange = document.querySelector('#amountRange').value;
    let showSumNumber = new Intl.NumberFormat('ru-RU', {
        style: "currency",
        currency: 'RUB'
    }).format(sumNumberRange);

    document.querySelector('#amount').value = showSumNumber;
});
