function fact(){
    var num  = 5;
    var fact = 1;
    for(var i = 1;i<=num;i++){
        fact *= i;
    }
    console.log(fact);
    alert(fact);
}