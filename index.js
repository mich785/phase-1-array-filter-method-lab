const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers,nameToFind) {
   const matchingDrivers = drivers.filter(driver => driver.toLowerCase() == nameToFind.toLowerCase());
     return matchingDrivers;
}

function fuzzyMatch(drivers,nameToFind){
  const matchingDrivers = drivers.filter(function(driver){
    return driver.startsWith(nameToFind);
  });
  return matchingDrivers;
}

function matchName(drivers,nameToFind){
  const matchingDrivers= drivers.filter(driver => driver.name === nameToFind);
  return matchingDrivers;
}


