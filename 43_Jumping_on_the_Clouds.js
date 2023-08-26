/* function jumpingOnClouds(c) {
    var countJump = 0
    var currentPosition = 0
    while (currentPosition < c.length -1) {
        if (c[currentPosition + 2] !== 1) { 
            countJump++;
            currentPosition += 2; 
          } else {
            countJump++;
            currentPosition += 1; 
          }
    }
    return countJump
} */

function jumpingOnClouds(c) {
    if (currentPosition < c.length - 1) {
        if (c[currentPosition + 2] !== 1) {
            countJump = countJump + 2
            return 
        }
    }
}

c = [0, 1, 0, 0, 0, 1, 0]
console.log(jumpingOnClouds(c))

for (var i = 1; i <= 5; i++) {
    console.log("From For " + i)
}

function plusOne(n) {
    if (n <= 5) {
        console.log("From Plus " + n)
        return plusOne(n + 1)
    }
}

var n = 1
plusOne(n)