document.getElementById("generate").addEventListener("click", myFunction, true);

function myFunction() {

    var size = parseInt(document.getElementById("size").value);

    var smallLetters = document.getElementById("smallLetters1").checked;

    var capitalLetters = document.getElementById("capitalLetters1").checked;

    var numbers = document.getElementById("numbers1").checked;

    var specialCharacters = document.getElementById("specialCharacters1").checked;

    var recommended = document.getElementById("recommended1").checked;

    var output = [];

    var r;

    if (recommended == true){

        for (var i = 0; i < size; i++) {

            while (1) {

                r = Math.floor((Math.random() * (127)));

                if ((r >= 32 && r <= 47) || (r >= 58 && r <= 64) || (r >= 91 && r <= 96) || (r >= 123 && r <= 126) || (r >= 48 && r <= 57) || (r >= 65 && r >= 90) || (r >= 97 && r <= 122)) {

                    output[i] = String.fromCharCode(r);

                    console.log(output[i]);

                    break;

                }

            }

        }

    }

    if (smallLetters == true && numbers == false && specialCharacters == false && capitalLetters == false && recommended == false) {

        for (var i = 0; i < size; i++) {


            var value = Math.floor((Math.random() * (122 - 97))) + 97;

            console.log(value);

            output[i] = String.fromCharCode(value);


        }

    } else if (smallLetters == false && numbers == true && specialCharacters == false && capitalLetters == false && recommended == false) {

        for (var i = 0; i < size; i++) {


            var value = Math.floor((Math.random() * (57 - 48))) + 48;

            console.log(value);

            output[i] = String.fromCharCode(value);


        }

    } else if (smallLetters == false && numbers == false && specialCharacters == true && capitalLetters == false && recommended == false) {

        for (var i = 0; i <= size; i++) {

            while (1) {

                r = Math.floor((Math.random() * (127)));

                if ((r >= 32 && r <= 47) || (r >= 58 && r <= 64) || (r >= 91 && r <= 96) || (r >= 123 && r <= 126)) {

                    output[i] = String.fromCharCode(r);

                    console.log(r);

                    break;

                }

            }

        }

    } else if (smallLetters == false && numbers == false && specialCharacters == false && capitalLetters == false && recommended == true) {

        for (var i = 0; i < size; i++) {

            while (1) {

                r = Math.floor((Math.random() * (127)));

                if ((r >= 32 && r <= 47) || (r >= 58 && r <= 64) || (r >= 91 && r <= 96) || (r >= 123 && r <= 126) || (r >= 48 && r <= 57) || (r >= 65 && r >= 90) || (r >= 97 && r <= 122)) {

                    output[i] = String.fromCharCode(r);

                    console.log(output[i]);

                    break;

                }

            }

        }


    } else if (smallLetters == false && numbers == false && specialCharacters == false && capitalLetters == true && recommended == false) {

        for (var i = 0; i < size; i++) {


            var value = Math.floor((Math.random() * (90 - 65))) + 65;

            console.log(value);

            output[i] = String.fromCharCode(value);


        }

    }else if(smallLetters == true && numbers == true && specialCharacters == false && capitalLetters == false && recommended == false){


        for (var i = 0; i < size; i++) {

            while (1) {

                r = Math.floor((Math.random() * (127)));

                if ( (r >= 97 && r <= 122 ) || (r >= 48 && r <= 57) ) {

                    output[i] = String.fromCharCode(r);

                    console.log(output[i]);

                    break;

                }

            }

        }

    }else if(smallLetters == true && numbers == false && specialCharacters == true && capitalLetters == false && recommended == false){


        for (var i = 0; i < size; i++) {

            while (1) {

                r = Math.floor((Math.random() * (127)));

                if ( (r >= 97 && r <= 122 ) || (r >= 32 && r <= 47) || (r >= 58 && r <= 64) || (r >= 91 && r <= 96) || (r >= 123 && r <= 126)) {

                    output[i] = String.fromCharCode(r);

                    console.log(output[i]);

                    break;

                }

            }

        }

    }else if(smallLetters == true && numbers == false && specialCharacters == false && capitalLetters == true && recommended == false){


        for (var i = 0; i < size; i++) {

            while (1) {

                r = Math.floor((Math.random() * (127)));

                if ( (r >= 97 && r <= 122 ) || (r >= 65 && r <= 90)) {

                    output[i] = String.fromCharCode(r);

                    console.log(output[i]);

                    break;

                }

            }

        }

    }else if(smallLetters == false && numbers == true && specialCharacters == true && capitalLetters == false && recommended == false){


        for (var i = 0; i < size; i++) {

            while (1) {

                r = Math.floor((Math.random() * (127)));

                if ((r >= 32 && r <= 47) || (r >= 58 && r <= 64) || (r >= 91 && r <= 96) || (r >= 123 && r <= 126) || (r >= 48 && r <= 57) ) {

                    output[i] = String.fromCharCode(r);

                    console.log(output[i]);

                    break;

                }

            }

        }

    }else if(smallLetters == false && numbers == true && specialCharacters == false && capitalLetters == true && recommended == false){


        for (var i = 0; i < size; i++) {

            while (1) {

                r = Math.floor((Math.random() * (127)));

                if ( (r >= 65 && r <= 90) || (r >= 48 && r <= 57) ) {

                    output[i] = String.fromCharCode(r);

                    console.log(output[i]);

                    break;

                }

            }

        }

    }else if(smallLetters == false && numbers == false && specialCharacters == true && capitalLetters == true && recommended == false){


        for (var i = 0; i < size; i++) {

            while (1) {

                r = Math.floor((Math.random() * (127)));

                if ( (r >= 65 && r <= 90) || (r >= 32 && r <= 47) || (r >= 58 && r <= 64) || (r >= 91 && r <= 96) || (r >= 123 && r <= 126) ) {

                    output[i] = String.fromCharCode(r);

                    console.log(output[i]);

                    break;

                }

            }

        }

    }else if(smallLetters == true && numbers == true && specialCharacters == true && capitalLetters == false && recommended == false){


        for (var i = 0; i < size; i++) {

            while (1) {

                r = Math.floor((Math.random() * (127)));

                if ( (r >= 48 && r <= 57) || (r >= 97 && r <= 122) || (r >= 32 && r <= 47) || (r >= 58 && r <= 64) || (r >= 91 && r <= 96) || (r >= 123 && r <= 126) ) {

                    output[i] = String.fromCharCode(r);

                    console.log(output[i]);

                    break;

                }

            }

        }

    }else if(smallLetters == true && numbers == false && specialCharacters == true && capitalLetters == true && recommended == false){


        for (var i = 0; i < size; i++) {

            while (1) {

                r = Math.floor((Math.random() * (127)));

                if ( (r >= 65 && r <= 90) || (r >= 97 && r <= 122) || (r >= 32 && r <= 47) || (r >= 58 && r <= 64) || (r >= 91 && r <= 96) || (r >= 123 && r <= 126) ) {

                    output[i] = String.fromCharCode(r);

                    console.log(output[i]);

                    break;

                }

            }

        }

    }else if(smallLetters == false && numbers == true && specialCharacters == true && capitalLetters == true && recommended == false){


        for (var i = 0; i < size; i++) {

            while (1) {

                r = Math.floor((Math.random() * (127)));

                if ( (r >= 65 && r <= 90) || (r >= 48 && r <= 57) || (r >= 32 && r <= 47) || (r >= 58 && r <= 64) || (r >= 91 && r <= 96) || (r >= 123 && r <= 126) ) {

                    output[i] = String.fromCharCode(r);

                    console.log(output[i]);

                    break;

                }

            }

        }

    }else if(smallLetters == true && numbers == true && specialCharacters == false && capitalLetters == true && recommended == false){


        for (var i = 0; i < size; i++) {

            while (1) {

                r = Math.floor((Math.random() * (127)));

                if ( (r >= 65 && r <= 90) || (r >= 48 && r <= 57) || (r >= 97 && r <= 122)) {

                    output[i] = String.fromCharCode(r);

                    console.log(output[i]);

                    break;

                }

            }

        }

    }else if(smallLetters == false && numbers == false && specialCharacters == false && capitalLetters == false && recommended == false){

        alert("Please Select at least one check box");

    }

    document.getElementById("output_text").innerText = "Your Password is: " + output.join("");

}