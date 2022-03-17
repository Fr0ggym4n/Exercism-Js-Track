//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  const rainDrops = {
    3: "Pling",
    5: "Plang",
    7: "Plong"
  };
  let result = "";

  number % 3 === 0 ? result += rainDrops[3] : "";
  number % 5 === 0 ? result += rainDrops[5] : "";
  number % 7 === 0 ? result += rainDrops[7] : "";

  return result !== "" ? result : number.toString();
};
