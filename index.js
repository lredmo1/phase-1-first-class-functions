// function aFunction() {
//     console.log("Hi");
// }

function receivesAFunction(aFunction) {
    aFunction();
}


receivesAFunction(aFunction);

function aNamedFunction() {

}
function returnsANamedFunction() {
    return aNamedFunction;
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("I did it!");
    }
}