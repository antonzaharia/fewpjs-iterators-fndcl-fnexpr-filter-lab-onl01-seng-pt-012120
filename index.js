// Code your solution here
function findMatching(drivers, string){
  let matching = drivers.filter(name => {
    return name.toUpperCase() === string.toUpperCase()
  })
  return matching;
};
function fuzzyMatch(drivers, string){
    let matchingDrivers = drivers.filter(name => {
      let firstLetter = name.split("")[0];
      return firstLetter.toUpperCase() === letter.toUpperCase()
    })
    return matchingDrivers;
};
