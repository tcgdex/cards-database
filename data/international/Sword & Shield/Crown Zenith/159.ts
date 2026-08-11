import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Metal Energy",
		'fr-fr': "Énergie Métal",
		'es-es': "Energía Metálica",
		'it-it': "Energia Metallo",
		'pt-br': "Energia de Metal",
		'de-de': "Metall-Energie"
	},

	rarity: "Ultra Rare",
	category: "Energy",
	energyType: "Normal",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691878,
				tcgplayer: 478104
			}
		},
	],
}

export default card
