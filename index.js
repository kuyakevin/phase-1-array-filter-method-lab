// Code your solution here
const findMatching = (drivers, query) => {
    return drivers.filter(name => name.toLowerCase().indexOf(query.toLowerCase()) !==-1)
}

const fuzzyMatch = (drivers, query) => {
    return drivers.filter(name => name.startsWith(query)) 
}

const matchName = (drivers, querty) => {
    return drivers.filter(names => names.name === querty)
}