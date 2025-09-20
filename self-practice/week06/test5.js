function outerFucntion(a){
    function add(b){
        return a+b
    }
    return add
}


const addFive = outerFucntion(5)
console.log(addFive(3))

const addTen = outerFucntion(10)
console.log(addTen(2))