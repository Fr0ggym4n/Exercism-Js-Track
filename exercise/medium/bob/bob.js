//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let checkMessage = message.trim();
  console.log(checkMessage);
  if (checkMessage.endsWith('?') && !/[a-z]/.test(checkMessage) && /[A-Z]/.test(checkMessage)) {
    return "Calm down, I know what I'm doing!";
  } else if (checkMessage.endsWith('?')) {
    return "Sure."
  } else if (!/[a-z]/.test(checkMessage) && /[A-Z]/.test(checkMessage)) {
    return "Whoa, chill out!";
  } else if (!checkMessage && !/[a-zA-Z0-9]/.test(checkMessage)) {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }

}