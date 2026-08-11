import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fire Energy",
		'fr-fr': "Énergie Feu",
		'es-es': "Energía Fuego",
		'it-it': "Energia Fuoco",
		'pt-br': "Energia de Fogo",
		'de-de': "Feuer-Energie"
	},

	rarity: "Secret Rare",
	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 583048,
				tcgplayer: 253289
			}
		},
	],
}

export default card
