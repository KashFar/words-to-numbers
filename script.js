const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
const teens = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

for (var i = 1; i <= 1000; i++){
    if ( i <= 10){
        document.write(ones[i] + "<br>") 
        
        } else if (i < 20){
            document.write(teens[i-11] + "<br>")

        } else {
        var digits = String(i); // constructor string, so we can chop it up into seperate characters. (cant with a number)
        
        if (i <100 ){
        var ten = Number (digits [0])   // then extract idex and convert back to a number
        var one = Number (digits [1])
        document.write(tens[ten] + " " + ones[one] + "<br/>")

        } else if (i < 1000) {
            var hundreds = Number (digits [0])
            var ten = Number (digits [1])
            var one = Number (digits [2])
            document.write(ones[hundreds]+" hundred"+ " " + tens[ten] + " " + ones[one] + "<br/>")

        } else {
            document.write('one thousand')
        }
    }
}



