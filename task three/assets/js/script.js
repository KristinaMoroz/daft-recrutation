var submitButton = document.querySelector(".form__button");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var input = document.querySelector(".form__input");
    var filterQuery = input.value.toLowerCase();
    var tableElements = document.querySelectorAll("td");

    tableElements.forEach(function(event) {
        var tElement = event.innerHTML;

        if(tElement.toLowerCase().indexOf(filterQuery) > -1){ 
            event.style.display = '';
        }else{
            event.style.display = 'none';
        }
    });
});




