import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lightning Energy",
		'fr-fr': "Énergie Électrique",
		'es-es': "Energía Rayo",
		'it-it': "Energia Lampo",
		'pt-br': "Energia de Raios",
		'de-de': "Elektro-Energie"
	},

	rarity: "Ultra Rare",
	category: "Energy",
	energyType: "Normal",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691874,
				tcgplayer: 478111
			}
		},
	],
}

export default card
