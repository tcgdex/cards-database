import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fighting Energy",
		'fr-fr': "Énergie Combat",
		'es-es': "Energía Lucha",
		'it-it': "Energia Lotta",
		'pt-br': "Energia de Luta",
		'de-de': "Kampf-Energie"
	},

	rarity: "Common",
	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297235,
				tcgplayer: 152819
			}
		},
	],

}

export default card