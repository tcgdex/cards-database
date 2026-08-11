import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Psychic Energy",
		'fr-fr': "Énergie Psy",
		'es-es': "Energía Psíquica",
		'it-it': "Energia Psiche",
		'pt-br': "Energia Psíquica",
		'de-de': "Psycho-Energie"
	},

	rarity: "Ultra Rare",
	category: "Energy",
	energyType: "Normal",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691875,
				tcgplayer: 478113
			}
		},
	],
}

export default card
