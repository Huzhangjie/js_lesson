
// function foo() {
    // for(var i =0; i < 3; i++) {
    //     // var j = i+1;
    //     (function(j) {
    //         setTimeout(() => {
    //             console.log("i=" + j);
    //         }, j * 1000);
    //     })(i)
       
        
    // }
    // console.log(j + "hhh")
// }
// setTimeout(() => {
//     foo();
// }, 500);


{
    // foo();
    // function foo(){
    //     console.log(1)
    // }
    // foo()
    
    // function foo() {
    //     console.log(2)
    // }


}

// function foo() {
//     console.log(a)
// }

// function bar () {
//     var a = 3
//     function foo() {
//         console.log(a)
//     }
//     foo()
// }

// var obj = {
//     id: "awesome",
//     cool: function coolFn() {
//         console.log(this.id)
//     }
// }
// obj.cool()
// setTimeout(obj.cool, 500);

// function identify() {
//     return this.name.toUpperCase()
// }

// var me = {
//     name: "huzj"
// }
// console.log(identify.call(me))

// let [x='a',y='b'] = [,null]
// console.log(x,y)

let {foo} = {foo: 'aaa', bar: 'bbb'}
console.log(foo)