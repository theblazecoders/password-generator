document.getElementById("generate").addEventListener("click", genPass, true);

function genPass() {
  var size = parseInt($("#size").val());
  
  let checkBoxes = [];
  
  if ($('.checkbox[name="recommended"]').prop('checked')) {
    $('.checkbox[name!="recommended"]').attr('disabled', 'disabled');
    checkboxes.push('specialcharacters');
    checkboxes.push('numbers');
    checkboxes.push('smallletters');
    checkboxes.push('capitalletters');
  }
  else {
    $('.checkbox').each(() => {
      if ($(this).prop('checked')) checkboxes.push($(this).attr('name').toLowerCase());
    })
  }
  
  var output = [];
  
  if (checkBoxes.length < 1) {
    console.log('select at least one checkbox');
    return;
  }

  const charMap = {
    smallletters: [97, 122],
    capitalletters: [65, 90],
    numbers: [30, 39],
    specialcharacters: [42, 46]
  }

  const getRandom = (max, min=0) => {
    return (Math.floor(Math.random() * (max - min)) + min);
  }
  
  const getMinMaxFromArr = (arr) => {
    return [
      arr.reduce((acc, new) => {
        return (acc[0] <= new[0]) ? [acc[0], 0] : [new[0], 0];
      })[0],
      arr.reduce((acc, new) => {
        return (acc[1] >= new[1]) ? [0, acc[1]] : [0, new[1]];
      })[1]
    ];
  }
  
  const minMaxes = [];
  checkBoxes.forEach(check => {
    minMaxes.forEach(charMap[check]);
  })

  do {
    const charRange = minMaxes[Math.floor(getRandom(minMaxes.length))];

    const char = getRandom(charRange[0], charRange[1]);

    output.push(String.fromCharCode(Math.floor(char)))
  }
  while (output.length < size)
    
  document.getElementById("output_text").innerText = "Your Password is: " + output.join("");
}
