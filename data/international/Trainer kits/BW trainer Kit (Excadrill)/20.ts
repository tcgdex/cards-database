import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Excadrill).ts'

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

	rarity: "None",
	category: "Energy",
	energyType: "Normal",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280067,
				tcgplayer: 98680
			}
		},
	],

}

export default card
