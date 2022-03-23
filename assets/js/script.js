import { random } from "lodash";

let r = random(0, 100);
document.querySelector("p").innerHTML = `J'ai utilisé la fonction random() de 
la librairie lodash, pour générer le chiffre <strong>${r}</strong>. Sympa!`