// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { brotliDecompressSync } from "zlib";

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let countBirds = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    countBirds += birdsPerDay[i];
  }
  return countBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let indexOfWeek = 0;
  let countBirds = 0;
  if (week > 1) {
    for (let i = 1; i < week; i++) {
      indexOfWeek += 7;
    }
  }
  let endOfWeek = indexOfWeek + 7;
  for (let i = indexOfWeek; i < endOfWeek; i++) {
    countBirds += birdsPerDay[i];
  }
  return countBirds;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    i % 2 === 0 ? birdsPerDay[i] += 1 : birdsPerDay[i]; 
  }
  return birdsPerDay;
}
