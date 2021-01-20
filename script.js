// YYMMDDXXXX


const id = "0052291100";

console.log(nidIsValid(id));


function nidIsValid (id) {

    let year = Number(id.slice(0,2));
    let month = Number(id.slice(2,4)) % 50;   // and normalize
    let day = Number(id.slice(4,6));
    let code = Number(id.slice(-4));
    let leap = false;

    //format

    if (id.length !== 10 || Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day) || Number.isNaN(code)) return false;

    //code

    if(code % 11 !== 0) return false;

    //year + set leap flag

    (year <= 20) ? year = 2000 + year : year = 1900 + year;
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) leap = true;

    //month / day

    if (month > 12) return false;
    if (day > 31) return false;

    switch (month) {
        case 1: if(day > 31) return false;
        case 2: 
            if((leap === true && day > 29) || (leap === false && day > 28)) return false;
        case 3: if(day > 31) return false;
        case 4: if(day > 30) return false;
        case 5: if(day > 31) return false;
        case 6: if(day > 30) return false;
        case 7: if(day > 31) return false;
        case 8: if(day > 31) return false;
        case 9: if(day > 30) return false;
        case 10: if(day > 31) return false;
        case 11: if(day > 30) return false;
        case 12: if(day > 31) return false;
    }

    return true;
}

