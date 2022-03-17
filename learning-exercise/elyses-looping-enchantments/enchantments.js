// @ts-nocheck

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let count = 0;
  stack.forEach(counted => counted === card ? count += 1 : 0)
  return count;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let counter = 0;
  for (const num of stack){
    if (type) {
      num % 2 === 0 ? counter += 1 : 0;
    } else {
      num % 2 !== 0 ? counter += 1 : 0;
    }
  }
  return counter;
}
