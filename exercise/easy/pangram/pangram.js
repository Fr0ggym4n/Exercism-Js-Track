//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string) => {
  const pangramRegex = /([a-z])(?!.*\1)/ig;
  return (string.match(pangramRegex) || []).length === 26;
};
