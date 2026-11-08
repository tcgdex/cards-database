import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Grass Energy",
		'fr-fr': "Énergie Plante",
		'es-es': "Energía Planta",
		'it-it': "Energia Erba",
		'pt-br': "Energia de Grama",
		'de-de': "Pflanze-Energie"
	},

	rarity: "Secret Rare",
	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 583047,
				tcgplayer: 253287
			}
		},
	],
}

export default card
