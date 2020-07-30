// Code your solution here
function findMatching(drivers, string){
  let matching = drivers.filter(name => {
    return name == string
  })
  return matching;
};
