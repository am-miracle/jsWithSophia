
// Task:
// Write a program that prints to the console:
// 1. Author's details (name, bio etc) and tittle of the book
// 2. Your fav paragraph/quote from the book#
// 3. The name of the book and what you learnt
// 4. To solve number 3 , try two solutions a. concatenation b. embed var with ``
// Submission:
// 1. initialize git in the project
// 2. push to github
// 3. mail the repo link to me sophieoyiza@gmaail.com
// sophieoyiza@gmail.com     
// Ibrahim.shittu@liveclasses.institute

let authorName = "Sarah Ladipo Manyika";
let bio = "She's from Nigeria and has lived in Kenya, France and England";
let favoriteParagraph = `"One could begin with the dust, the heat and the purple bougainvillea. One might even begin with the smell of rotting mangoes tossed by the side of the road where flies hummed and green-bellied lizards bobbed their orange heads while loitering in the sun."`;
let bookName = "Independence";
let aboutBook = "A lyrical and moving story of unfulfilled love fraught with the weight of history, race and geography and intertwined with questions of belonging, aging, faith and family secrets";


console.log(authorName);
console.log(bio);
console.log(favoriteParagraph);
console.log(bookName);
console.log(aboutBook);


// concatenation
let solution = bookName + " is" + " " + aboutBook;
console.log(solution);

// var
let solutions = `${bookName} is ${aboutBook}`;
console.log(solutions);


