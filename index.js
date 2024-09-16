function writeCards(names, event) {
    let thank = [];
    for(let i = 0; i < names.length; i++){
        thank.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thank
}

function countDown(number){
    for (let i = number; i >= 0 ; i--){
        console.log(i)
    }
}