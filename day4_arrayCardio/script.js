const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

console.log("it's working");

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

function filterByYear(inventorsArray, birthYear) {
  let century = birthYear.toString().substring(0, 2);
  const bornInCentury = inventorsArray.filter((inventor) => {
    let inventorBirthYear = inventor.year.toString();
    let inventorBirthCentury = inventorBirthYear.substring(0, 2);
    return inventorBirthCentury == century;
  });
  console.log("1", bornInCentury);
  return bornInCentury;
}

filterByYear(inventors, 1589);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

function theirNames(array) {
  const namesAndSur = array.map((inventor) => {
    let jointNames = inventor.first + " " + inventor.last;
    return jointNames;
  });
  console.log("2", namesAndSur);
  return namesAndSur;
}

theirNames(inventors);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

function sortByAge(array) {
  const inventors2 = array.map((inventor) => inventor);
  // const groupByAge = inventors2.sort((a, b) => a.year - b.year);
  // console.log(groupByAge);
  const groupByAge = inventors2.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log("3", groupByAge);
  return groupByAge;
}

sortByAge(inventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

function totalYears(array) {
  const totalLived = array.reduce((acc, inventor) => {
    return acc + (inventor.passed - inventor.year);
  }, 0);
  console.log("4", totalLived);
  return totalLived;
}

totalYears(inventors);

// 5. Sort the inventors by years lived

function sortByYearsLived(array) {
  const oldestInventors = array.sort((a, b) => {
    const inventor1 = a.passed - a.year;
    const inventor2 = b.passed - b.year;
    return inventor1 > inventor2 ? -1 : 1;
  });
  console.log("5", oldestInventors);
  return oldestInventors;
}

sortByYearsLived(inventors);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name

function sortByLastName(array) {
  const listByName = array.sort((current, previous) => {
    const currentItem = current.split(", ");
    const previousItem = previous.split(", ");

    const cLast = currentItem[0];
    const pLast = previousItem[0];

    // const [cLast, cFirst] = current.split(", ");
    // const [pLast, pFirst] = previous.split(", ");
    return cLast > pLast ? 1 : -1;
  });

  console.log("7", listByName);
  return listByName;
}

sortByLastName(people);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

function sortQuant(array) {
  const sortedQuants = array.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});
  console.log("8", sortedQuants);
  return sortedQuants;
}

sortQuant(data);

//9. sort test

const sortArray = [5, 7, 8, 2, 3, 4, 9, 0, 10, 14, 5];

function sortTestIncrease(array) {
  const sortedIncrease = array.sort((a, b) => {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedIncrease;
}

console.log(sortTestIncrease(sortArray));
