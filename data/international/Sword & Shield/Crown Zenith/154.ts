import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Water Energy",
		'fr-fr': "Énergie Eau",
		'es-es': "Energía Agua",
		'it-it': "Energia Acqua",
		'pt-br': "Energia de Água",
		'de-de': "Wasser-Energie"
	},

	rarity: "Ultra Rare",
	category: "Energy",
	energyType: "Normal",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691873,
				tcgplayer: 478112
			}
		},
	],
}

export default card
