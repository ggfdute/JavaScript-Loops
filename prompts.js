function prompt1() {
    for(i = 10; i <= 20; i++){
        console.log(i);
    }
}

function prompt2() {
    for(i = 40; i >= 0; i--){
        console.log(i);
    }
}

function prompt3() {
    for(i = 0; i <= 20; i += 2){
        console.log(i);
    }
}

function prompt4() {
    for(i = -15; i <= 15; i++){
        console.log(i);
    }
}

function prompt5() {
    let answer = 0;

    for(i = 20; i < 30; i += 2){
    }

    answer = answer + i;
    console.log(answer);
}

function prompt6() {
    for(i = 0; i <= 30; i++){
        if(i % 2 == 0){
            console.log(i + " is an even number.");
        } else{
            console.log(i + " is an odd number.");
        }
    }
}

function prompt7() {
    for(var i = 0; i <= 10; i++){
        var result = 9 * i;
        console.log(result);
    }
}

function prompt8() {
    let i = 0;
    
    do{
        i += 2;
        console.log(i);
    } while(i < 20);
}

function prompt9() {
    let i = 4;

    while(i < 20){
        i++;
        console.log(i);
    }
}

function prompt10() {
    let i = 21;

    while(i > 0){
        i--;
        console.log(i);
    }
}

function prompt11() {
    let i;

    while(i !== '8'){
        i = prompt("Whats the magic number?");
    }
}

function prompt12() {
    let result = '';
    let i = 0;

    do {
    i++;
    result = result + i;
    } while (i < 5);

    console.log(result);
}
