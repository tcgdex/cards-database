import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

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

	rarity: "Secret Rare",
	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 574295,
				tcgplayer: 246812
			}
		},
	],
}

export default card
