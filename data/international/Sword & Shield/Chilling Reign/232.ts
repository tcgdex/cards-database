import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

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

	rarity: "Secret Rare",
	category: "Energy",
	energyType: "Normal",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 567340,
				tcgplayer: 241879
			}
		},
	],
}

export default card
