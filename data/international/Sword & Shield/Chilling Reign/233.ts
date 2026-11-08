import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fighting Energy",
		'fr-fr': "Énergie Combat",
		'es-es': "Energía Lucha",
		'it-it': "Energia Combattimento",
		'pt-br': "Energia de Luta",
		'de-de': "Kampf-Energie"
	},

	rarity: "Secret Rare",
	category: "Energy",
	energyType: "Normal",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 567341,
				tcgplayer: 241880
			}
		},
	],
}

export default card
