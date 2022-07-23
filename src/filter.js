const filterWords = ['starcraft', 'warcraft', 'game', 'pc', 'phone', 'beer'];

const actualNeeds = filterWords.filter(actual => actual.length < 7 );
console.log(actualNeeds);