// เริ่มเขียนโค้ดตรงนี้ 
function printStar(star) {
    let result =""
   for(let i = 1 ;i<=star;i++){
    let row = ''
    for(let j = 1 ;j<=i;j++){
        row+= '*' + ' '
    }
    result += row + "\n";
   }
   return result
}
console.log(printStar(5));