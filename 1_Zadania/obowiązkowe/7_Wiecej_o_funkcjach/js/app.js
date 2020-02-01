//deklaracja pierwszej metody
function jeden() {

    //deklaracja zmiennej1 oraz przypisanie jej wartości
    var zmienna1 = 1;

    //deklaracja drugiej metody
    function dwa() {

        //wypisanie w konsoli zmiennej
        console.log(zmienna1);

        //deklaracja zmiennej2 oraz przypisanie jej wartości
        var zmienna2 = 3;
    }

    //wywołanie drugiej funkcji
    dwa();

    //próba logowania zmienna2, pokaze sie błąd undefined
    //nie jest tutaj dostępna
    console.log(zmienna2)
}

//wywołanie funkcji pierwszej
jeden()