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
				cardmarket: 280073,
				tcgplayer: 98679
			}
		},
	],

}

export default card
