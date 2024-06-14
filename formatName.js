function formatName(name) {
  let trimmedName = name.trim();

  let nameParts = trimmedName.split(' ');

let formattedParts = [];

for (let i = 0; i < nameParts.length; i++) {

    let part = nameParts[i];

    let firstChar = part.charAt(0).toUpperCase();

    let restOfPart = part.slice(1).toLowerCase();

    let formattedPart = firstChar + restOfPart;

    formattedParts.push(formattedPart);
}

let formattedName = formattedParts.join(' ');
  return formattedName;
}
console.log(formatName("  bolu blue   "));
