const cleanString = /[\ \n]/g;

export function charactersWithSpace(string) {
  return string.length;
}
export function characters(string) {
  return string.replace(cleanString, "").length;
}
export function words(string) {
  return string.split(" ").length;
}
