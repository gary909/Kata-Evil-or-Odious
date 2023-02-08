function evil(n) {
    let binary = n.toString(2);
    let count = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") {
        count++;
        }
    }
    if (count % 2 === 0) {
        return "It's Evil!";
    } else {
        return "It's Odious!";
    }
}

console.log(evil(1)); // "It's Odious!"
console.log(evil(2)); // "It's Odious!"
console.log(evil(3)); // "It's Evil!"
