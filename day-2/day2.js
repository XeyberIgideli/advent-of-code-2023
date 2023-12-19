import fs from 'fs'

const text = fs.readFileSync('./day2.txt').toString()
const cubes = ['green','red', 'blue']
let obj = {} 
let totalSum = 0
let newobj = {}

for(let line of text.split('\r\n') ) {
    let splitted = line.split(':')
    let gameId = splitted[0]
    obj[gameId] = {}
    let pured = splitted[1].split(';') 
    pured.map((el,i) => { 
        obj[gameId][i+1] = {}  
        const slarray = el.trim().split(', ')  
        slarray.forEach(pair => {
            const [value,color] = pair.split(' ')
           obj[gameId][i+1][color] = 0
           obj[gameId][i+1][color] += +value
            cubes.map(cube => {
                if(!Object.keys(obj[gameId][i+1]).includes(cube)) {
                    obj[gameId][i+1][cube] = 0
                }
            }) 
        }) 
    }) 
} 

for(let [key,value] of Object.entries(obj)) {
    const keyleng = Object.keys(value).length  
    newobj[key + '-' + keyleng] = []

    for(let [key2,value2] of Object.entries(value)) {
        if(value2.red <= 12 && value2.green <= 13 && value2.blue <= 14) {
            newobj[key + '-' + keyleng].push(key2)   
             }
    }  
}
 
for(let [key,value] of Object.entries(newobj)) {
    let id = key.split(' ')[1].split('-')[0]
    let length = key.split(' ')[1].split('-')[1]

    if(value.length === +length) {
       totalSum += +id
    }
}
console.log(totalSum)


// Part 2

for(let line of text.split('\r\n') ) {
     let splitted = line.split(':')
     let gameId = splitted[0]
     obj[gameId] = {}
     cubes.map(cube => {
        obj[gameId][cube] = []
     })
     let pured = splitted[1].split(';') 
     pured.map(item => {  
        const slarray = item.trim().split(', ')  
        slarray.forEach(pair => {
            const [value,color] = pair.split(' ')
            obj[gameId][color].push(+value)
        })
     })

    } 
    
for(let [key,value] of Object.entries(obj)) { 
     for(let [key2,value2] of Object.entries(value)) {
      value2 = Math.max(...value2)
      obj[key][key2] = value2
    }   

    obj[key] = Object.values(value).reduce((a,b) => a * b, 1)
    totalSum += obj[key]
}

 console.log(totalSum)
