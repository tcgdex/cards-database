import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Psychic Energy",
		'fr-fr': "Énergie Psy",
		'es-es': "Energía Psíquica",
		'it-it': "Energia Psico",
		'pt-br': "Energia Psíquica",
		'de-de': "Psycho-Energie"
	},

	rarity: "Common",
	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297249,
				tcgplayer: 152858
			}
		},
	],

}

export default card