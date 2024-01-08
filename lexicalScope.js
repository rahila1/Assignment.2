
//---In lexical scoping the inner function access the the valuse of outer function OR can be declared the variable name of parent function---//

function outer(){
    let userName = "Rahila"
    function inner(){
        console.log("inner", userName);
    }
    inner()
}
outer()
// console.log("outer" , userName);