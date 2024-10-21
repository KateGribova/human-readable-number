function Units(number){
    switch(number){
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
    }
}

function Dozen(number){
    switch(number){
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
    }
}

function Decimal(number){
    switch(number){
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
    }
}

module.exports = function toReadable (number) {
    switch (String(number).length){
        case 1:
            return Units(number);

        case 2:
            if (number >= 10 && number <= 19){
                return Decimal(number);
            }
            
            else{
                let dozen = Number(String(number).slice(0, -1));
                
                if (number % 10 === 0)
                    return Dozen(dozen);
                else
                    return (Dozen(dozen) + " " + Units(number%10));
            }

        
        case 3:
            let hundred = Number(String(number).slice(0, -2));

            if (number % 100 === 0)
                return Units(hundred) + " hundred";

            else{
                let residue = number % 100;
                if (residue < 10)
                    return Units(hundred) + " hundred " + Units(residue % 10);
                else if (residue < 20)
                    return Units(hundred) + " hundred " + Decimal(residue);
                else if(residue % 10 === 0)
                    return Units(hundred) + " hundred " + Dozen(Number(String(residue).slice(0, -1)));
                else
                    return Units(hundred) + " hundred " + Dozen(Number(String(residue).slice(0, -1))) + " " + Units(number%10);
            }

    }
}
