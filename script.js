const lib = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

  // write your code here
	let count = 0;
const numberOfBooksRead = () => {
  // write your code here
    for(let i in lib){
      if(lib[i].readingStatus === true)
      count++;
    }
    return count;
};
};

// Do not change the code below

alert(numberOfBooksRead());
