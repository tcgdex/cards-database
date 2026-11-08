import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

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

	rarity: "Secret Rare",
	category: "Energy",
	energyType: "Normal",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 567339,
				tcgplayer: 241878
			}
		},
	],
}

export default card
