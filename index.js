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
  
  const getMinMaxFromArr = (arr) => {
    return [
      arr.reduce((acc, new)) => {
        return (acc[0] <= new[0]) ? [acc[0], 0] : [new[0], 0];
      })[0],
      arr.reduce((acc, new)) => {
        return (acc[1] >= new[1]) ? [0, acc[1]] : [0, new[1]];
      })[1]
    ];
  }
  
  const minMaxes = [];
  checkBoxes.forEach(check => {
    minMaxes.forEach(charMap[check]);
  })

  do {
    const minMax = getMinMaxFromArr(minMaxes);
    const char = getRandom(minMax[0], minMax[1]);
    
    const inRange = minMaxes.filter((minmax) => {return (char >= minmax[0] && char <= minmax[1])}).length > 0;
    if (inRange) output.push(String.fromCharCode(Math.floor(char)));
  }
  while (output.length < size)
    
  document.getElementById("output_text").innerText = "Your Password is: " + output.join("");
}
