// Code your solution here
function findMatching(drivers, string){
  let matching = drivers.filter(name => {
    return name.toUpperCase() == string.toUpperCase()
  })
  return matching;
};
