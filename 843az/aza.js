const user = {
    name: 'Iskandar',
    surname: 'Xasanov',
    age: 22,
    status: true,
    visa: ['Canada', 'USA', 'South Korea'],
    fullname: function() {
        return this.name + ' ' + this.surname
    }
}

let passport =  {
    serries: "AC",
    number: 1231546444,
    date: {
        get: "2015",
        to: "2025"
    }
}
//1
let as = Object.assign(user,passport)
console.log(as)

//2 
let obj = Object.keys(user)
console.log(obj)

//3
let arr = [
    'NAme'
]
let arr2 = [
    'kartoshka'
]
let arr3 = arr.concat(arr2);
console.log(arr3)

//4
let arra = ["", "", String, 'fdsffss', [], null, {}, undefined];

let filteredArr = arra.filter(item => (typeof item === "string" && !item) || !item)
                  
console.log(filteredArr)