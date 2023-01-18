function  submit(){
    let result = document.getElementById("amount");
    let amount = result.value;
    alert("Ваша заявка в размере " + amount + " рублей успешно отправлена!");
    result.value = "";
}

document.querySelector('#amountRange').oninput = () => {
    console.log(document.querySelector('#amountRange').value);
    document.querySelector('#amount').value = document.querySelector('#amountRange').value;
}