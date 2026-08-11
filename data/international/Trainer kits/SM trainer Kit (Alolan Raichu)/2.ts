import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Alolan Raichu)'

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

	rarity: "Common",
	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297233,
				tcgplayer: 152852
			}
		},
	],

}

export default card