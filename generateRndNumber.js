function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Example usage
  let randomNum = getRandomNumber(1, 100);
  console.log(randomNum);
  