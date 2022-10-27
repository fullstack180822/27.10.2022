
const name = 'itay';
const age = 18;

const list_numbers = [1,5,9,-10]
const list_names = ['avi', 'danny','moshe']
list_names[0] += ' cohen'
const list_combines = ['avi', 1, 'danny','moshe', [1,2,3], {name: 'danny'}]


const my_details = { 'name': 'itay', age: 18, hobbies : ['chess', 'tennis']}
console.log(my_details)

my_details.run()


// **etgar
//const my_details = { 'name': 'itay', age: 18, hobbies : ['chess', 'tennis'] ,
                        //run: function () {console.log('i am running') } }
//console.log(my_details)
//my_details.run()
// *********************************

for (e in my_details) {
    console.log(`${e}: ${my_details[e]}`)
}
const prop = 'name'
console.log(my_details[prop])
console.log(my_details['name'])
//console.log(my_details['name'])
const obj = { }
obj.name = 'danny'
obj.name += ' shovevany'

const key1 = ['name', 'height', 'weight', 'kid_ages']
const values = ['moshe', 1.80, 95, [4, 7, 12]]
const new_obj = {}
for (let i = 0; i < key1.length; i++) {
    new_obj [ key1[i] ] = values[i]
}
console.log(new_obj)
delete new_obj['weight']



