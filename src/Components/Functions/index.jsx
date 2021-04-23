const matchSpace = /\W/g;
const matchWords = /\w+/g;

export function charactersWithSpace(string) {
  return string.length;
}

export function characters(string) {
  return string.replace(matchSpace, "").length;
}

export function words(string) {
  let result = [...string.matchAll(matchWords)];
  return result.length;
}
