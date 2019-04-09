document.getElementById("generate").addEventListener("click", genPass, true);

function genPass() {
  var size = parseInt(document.getElementById("size").value);
  
  let checkBoxes = [];
  
  if (document.getElementById("smallLeters").checked) checkboxes.push('smallLetters');
  if (document.getElementById("capitalLetters").checked) checkboxes.push('capitalLetters');
  if (document.getElementById("numbers").checked) checkboxes.push('numbers');
  if (document.getElementById("specialCharacters").checked) checkboxes.push('specialCharacters');
  if (document.getElementById("recommended").checked) checkboxes.push('recommended');

  var output = [];
  
  if (checkBoxes.length < 1) {
    console.log('select at least one checkbox');
    return;
  }

  const charMap = {
    smallletters: [97, 122],
    capitalLetters: [65, 90],
    numbers: [30, 39],
    specialChars: [42, 46]
  }

  const getRandom = (max, min=0) => {
    return (Math.floor(Math.random() * (max - min)) + min);
  }

  checkBoxes.forEach(checkbox => {
    const charMinMax = charMap[checkbox];
    // Algorithm for generation
  });
}
