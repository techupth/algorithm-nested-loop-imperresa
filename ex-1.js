// เริ่มเขียนโค้ดตรงนี้ 
function printPattern(num) {
    let result = ""
   for (let i = 1; i <= num; i++) {
    let row = ''
    for(let j =1 ;j<=i;j++){
        row += j + ' '
    }
    result += row + "\n";
   }
   return result
}

console.log(printPattern(5));