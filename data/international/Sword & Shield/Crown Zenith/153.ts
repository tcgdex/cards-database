import { Card } from "models/database/card"
import Set from "../Crown Zenith"

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

	rarity: "Ultra Rare",
	category: "Energy",
	energyType: "Normal",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691872,
				tcgplayer: 478115
			}
		},
	],
}

export default card
