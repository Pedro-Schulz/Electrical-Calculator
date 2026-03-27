import { consumoEnergia } from "./consumoEnergia.js";
import { leiOhm } from "./leiOhm.js";
import { conversao } from "./conversao.js";
import { resistores } from "./resistores.js";

document.getElementById("btnConsumo").addEventListener("click", (e) => { consumoEnergia(); e.target.blur(); });
document.getElementById("btnLeiOhm").addEventListener("click", (e) => { leiOhm(); e.target.blur(); });
document.getElementById("btnConversao").addEventListener("click", (e) => { conversao(); e.target.blur(); });
document.getElementById("btnResistores").addEventListener("click", (e) => { resistores(); e.target.blur(); });