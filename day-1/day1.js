import fs from 'fs'

// Part - 1
let total = 0
let input = fs.readFileSync('./input.txt', 'utf-8').toString().split('\n') 
input.map(line => {
    const nums = Array.from(line).filter(char => !isNaN(char))
    if(nums.length > 0) {
        total += Number(nums[0] + nums[nums.length -1])
    }
}) 
console.log(total)

// Part - 2


const numobj = {
one: 'o1e',
two: 't2o',
three: 't3e',
four: 'f4r',
five: 'f5e',
six: 's6x',
seven: 's7n',
eight: 'e8t',
nine: 'n9e'
}; 

function change(word) { 
  for (let [key, value] of Object.entries(numobj)) {
        if (word.includes(key)) { 
          word = word.replaceAll(key, value) 
    } 
  }  
  if(isNaN(Number(word))) {
  }
  	return word
  
}
let obj = {}
let sum = 0

input.map((item) => { 
  let changed = typeof item === 'number' ? String(item) : change(item) 
 	if(changed) {
    obj[changed] = []
   	      
   	for(let i =0; i <= changed.length; i++){  
      
   	    if(!isNaN(changed[i])) {
   	            obj[changed].push(changed[i])
   	       }
   	    }
    
   	   obj[changed] = [obj[changed][0] + obj[changed][obj[changed].length - 1]  ]
   	 
   	   sum += obj[changed].reduce((acc, num) => Number((acc += num)), 0); 
  } 
}); 

console.log(sum)

 
