function idGenerator(){
    let ids = 0
    function add(){
        return ids += 1
    }
    return add
}
const idGen = idGenerator()
console.log(idGen())
console.log(idGen())
console.log(idGen())
