import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Lightning Energy",
		'fr-fr': "Énergie Electrik",
		'es-es': "Energía Rayo",
		'it-it': "Energia Lampo",
		'pt-br': "Energia de Raios",
		'de-de': "Elektro-Energie"
	},

	rarity: "Secret Rare",
	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 574293,
				tcgplayer: 246810
			}
		},
	],
}

export default card
