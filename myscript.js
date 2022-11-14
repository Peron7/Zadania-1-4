function handleCalculatorForm(form){

    let toDisplay = form.inputbox.value;
    document.getElementById("calcResult").innerHTML = calculate(toDisplay, "+-/*");
}

function handlePalindromeForm(form){

    let formValue = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(formValue);
}



function calculate(var1, var2){
    var1 = parseInt(l1.value);
    var2 = parseInt(l2.value);
    let dodawanie;
    let odejmowanie;
    let mnoz;
    let dziel;
    dodawanie = var1 + var2;
    odejmowanie = var1 - var2;
    mnoz = var1 * var2;
    dziel= var1 / var2;

    if(document.getElementById('dodawanie').checked == true) {   
       return var1+" + "+var2+" = "+ dodawanie;   
    } else if(document.getElementById('odejmowanie').checked == true){
        return var1+" - "+var2+" = "+ odejmowanie; 
    } else if(document.getElementById('mnozenie').checked == true){
        return var1+" * "+var2+" = "+ mnoz; 
    } else if(document.getElementById('dzielenie').checked == true){
        return var1+" / "+var2+" = "+ dziel; 
    }else if(document.getElementById('logarytm').checked == true){
        var n = var1;
        return "Log<sub>2</sub>"+var1+" = "+Log2n(n);
    }else if(document.getElementById('potega').checked == true){
    var liczba = var1;
    var potega = var2;
    return var1+"<sup>"+var2+"</sup> = "+pow(liczba, potega);
    }else if(document.getElementById('silnia').checked == true){
        var a = var1;
        return (a + "! = " + silnia(a));
    }

}

function Log2n(n)
{
    return (n > 1) ? 1 + Log2n(n / 2) : 0;
}

function pow (liczba,potega){
    if (potega == 0){
        return 1;
        }
    var temp = liczba;
    for (i = 0; i < potega - 1; i++){
        liczba = liczba * temp;
    }
    return liczba;
}

function silnia(a){

    if(a > 1){
        return a * silnia(a - 1);
    }else{
        return 1;
    }

}

function palindrome(s1){
    s1 = slow1.value;
    let slowo1 = [];
    let slowo2 = [];
    let slowo3 = [];

    slowo1 = s1.split('');
    slowo2 = s1.split('').reverse();

    if(JSON.stringify(slowo1)==JSON.stringify(slowo2)){
        return s1+" jest palindromem!";
    }else if(s1.length === 0){
        return "Musisz wpisać jakieś słowo! ok?";
    }else{
        return s1+" nie jest palindormem!"
    }

}



    function bblSort(arr){
    
        for(var i = 0; i < arr.length; i++){

          for(var j = 0; j < ( arr.length - i -1 ); j++){

            if(arr[j] > arr[j+1]){
               
              var temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j+1] = temp
            }
          }
        }
        return arr;
       }

    function scndLast(arr1){
        arr1 = bblSort(arr1);
        return arr1[arr1.length - 2];
    }
    console.log(scndLast(["maslo", "masl", "mas", "ma", "m"]))



    function rekurencja(a, b){
        
        console.log(a);
        let x = a + 1;
        if(x <= b){
            rekurencja(x,b)
        }else{
            return;
        }
    }
    console.log(rekurencja(2,6));


    function BINARY_SEARCH(list, start, stop, search){
        list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        start = 1;
        stop = 30;
        search = 15.5;

        if(start > stop) return false;
        
        let q = (start + stop) / 2;

        if(list[q] == search) return true;
        
        if(list[q] > search) return BINARY_SEARCH(list,start,q-1,search)

        if(list[q] < search)
        return BINARY_SEARCH(list,q+1,stop,search);
        else
        return "Brak elementu w ciągu"
    }
    console.log(BINARY_SEARCH())