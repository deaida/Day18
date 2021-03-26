// Only change code below this line
function myGenerator() {
    yield* insidegenerator1();
    yield* insideGenerator2();
    yield* insidegenerator3();
}
    function* insidegenerator1(){
        for (i=1; i<=5; i++){
            x=i;
            yield x;
        }
      
    }
    function* insideGenerator2(){
       for (i=10; i<=15; i++){
        x=i;
        yield x;
       }
    
    function* insidegenerator3(){
       for (i=6; i<=8; i++){
        x=i;
        yield x;
       }
      
    

    var iterator= myGenerator();

    fifteenArray= [];
    for (i=0; i<x; i++){
        fifteen.push(iterator.next().value)
    }
console.log(fifteenArray.join('#, ') + "!")
    // Only change code above this line
    module.exports = {fifteenArray, myGenerator}