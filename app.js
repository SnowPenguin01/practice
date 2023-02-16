class test {
    constructor(){

        document.querySelector('#amountYears').addEventListener('input', () => {
            let resultYears = document.querySelector('#amountYears').value + ' мес.';
            console.log(document.querySelector('#amountYears').value);
            document.querySelector('#amountYear').value = resultYears;
        });

        document.querySelector('#amountRange').addEventListener('input', () => {
            let resultSumNumber = document.querySelector('#amountRange').value;
            console.log(document.querySelector('#amountRange').value);
            document.querySelector('#amount').value = resultSumNumber;
        });
        
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

        let Sum = document.querySelector('#amountRange').value;
        let Years = document.querySelector('#amountYears').value;
        let percent = 16.5 / 12 / 100;
        let isn = Math.pow(1 + percent, Years);
        let rr = Math.ceil(Sum * percent * (isn/(isn - 1))) + ' ₽/мес.';
        document.querySelector('.content-title').textContent = rr;
    }   

    submit(){
        document.querySelector(".button-to-send").addEventListener('click', () => {
            let result = document.getElementById("amount");
            let amount = result.value;
            let check1 = document.querySelector('.button-switch__checkbox').value;
            let check2 = document.querySelector('.checkbox-block_check').value;
            alert("Ваша заявка в размере " + amount + " рублей успешно отправлена!\n"
                  + "С обеспечением: " + check1 + "\n"
                  + "Акция: " + check2 + "\n");
            result.value = "";
        });
    }

    async getResponse(){
        let response = await fetch('http://new.energobank.su/local/ajax/calculator.php?PID=15373');
        let result = await response.json();
        
        //console.log('result', result);
        let creditNumberMin = result.sum.min_value + ' ₽';
        let creditNumberMax = result.sum.max_value + ' ₽';
        let creditDataMin = result.term.min_value + ' мес.';
        let creditDataMax = (result.term.max_value / 12) + ' лет';
        
        document.querySelector(".credit-number__min").innerHTML = creditNumberMin;
        document.querySelector(".credit-number__max").innerHTML = creditNumberMax;
        document.querySelector(".credit-data__min").innerHTML = creditDataMin;
        document.querySelector(".credit-data__max").innerHTML = creditDataMax;
    }
}


let test1 = new test();
test1.getResponse();
test1.submit();
