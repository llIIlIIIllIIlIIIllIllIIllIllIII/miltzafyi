function split(textElement) {
    var textContent = textElement.textContent;

    textElement.textContent = '';
    [...textContent].forEach((char) => {
        var span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char; 
        span.classList.add("topbar-obesk");
        textElement.appendChild(span);
    });
}

function shuffle(array) {
  let currentIndex = array.length;
  var newArray = [...array];

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];
  }
  return newArray;
}

function aizoaizowhoisnande(element) {
    var count = 1;
    var shuffledChildren = shuffle(element.children);
    [...shuffledChildren].forEach((child) => {
        count += 1
        setTimeout(() => {
            child.classList.toggle('topbar-obesk');
            child.classList.toggle('topbar-cousinly');
        }, 100 * count);
    });
}

setTimeout(() => {
    aizoaizowhoisnande(textElement);
}, 1000);