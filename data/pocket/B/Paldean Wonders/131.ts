import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		'en-us': "Electric Generator",
		'fr-fr': "Générateur Électrique",
		'es-es': "Generador Eléctrico",
		'it-it': "Generatore di Elettricità",
		'pt-br': "Gerador Elétrico",
		'de-de': "Elektrischer Generator"
	},
	
	illustrator: "Toyste Beach",
	rarity: "Crown",
	category: "Trainer",

	effect: {
		'en-us': "Flip a coin. If heads, take a Lightning Energy from your Energy Zone and attach it to 1 of your Benched Lightning Pokémon.",
	},

	trainerType: "Item",
}

export default card