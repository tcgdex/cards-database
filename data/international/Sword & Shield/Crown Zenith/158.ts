import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Darkness Energy",
		'fr-fr': "Énergie Obscurité",
		'es-es': "Energía Oscura",
		'it-it': "Energia Oscurità",
		'pt-br': "Energia Noturna",
		'de-de': "Finsternis-Energie"
	},

	rarity: "Ultra Rare",
	category: "Energy",
	energyType: "Normal",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691877,
				tcgplayer: 478108
			}
		},
	],
}

export default card
