function ArrayChallenge(strArr) {
  const n = parseInt(strArr[0]);
  let totalGas = 0;
  let currentGas = 0;
  let start = 0;

  for (let i = 1; i <= n; i++) {
    const [g, c] = strArr[i].split(":").map((x) => parseInt(x));
    totalGas += g - c;
    currentGas += g - c;
    if (currentGas < 0) {
      start = i;
      currentGas = 0;
    }
  }

  if (totalGas < 0) {
    return "impossible";
  } else {
    return start + 1;
  }
}

const result = ArrayChallenge(['4', '0:1', '1:1', '1:2', '3:1']);
console.log(result);