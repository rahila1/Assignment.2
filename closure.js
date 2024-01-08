//---complete memory share---//
function myFunc(){
    let name = "Labo";
    // let showFunc="Rahi";
    function showFunc() 
    {
        
        console.log(name);
        
    }
    return showFunc;
}
let bigFunc  = myFunc(); bigFunc();


    