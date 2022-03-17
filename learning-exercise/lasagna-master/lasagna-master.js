/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

// 1 Lasagna status

export function cookingStatus(remainingTime) {
    if (remainingTime === 0) {
        return "Lasagna is done.";
    } else if (!remainingTime) {
        return "You forgot to set the timer.";
    } else {
        return "Not done, please wait.";
    }
}

// 2 Estimate time

export function preparationTime(layers, timeToPrepare = 2) {
    return layers.length * timeToPrepare;
}


// 3 Compute the amounts of noodles and sauce needed

export function quantities(layers) {
    return {
        noodles: layers.filter(noodles => noodles === 'noodles').length * 50,
        sauce: layers.filter(sauce => sauce === 'sauce').length * 0.2 
    }
}

// 4 Add the secret ingredient

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

// 5 Scale the recipe

export function scaleRecipe(recipe, numberOfPortion) {
    const onePortion = {...recipe};
    for (const index in onePortion) {
        if (onePortion.hasOwnProperty(index)) {
            onePortion[index] *= numberOfPortion / 2;
        }
    };
    return onePortion;
}