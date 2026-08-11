import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Zoroark).ts'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Darkness Energy",
		'fr-fr': "Énergie Obscurité",
		'es-es': "Energía Oscura",
		'it-it': "Energia Oscurità",
		'pt-br': "Energia Noturna",
		'de-de': "Finsternis-Energie"
	},

	rarity: "None",
	category: "Energy",
	energyType: "Normal",
	types: [
		"Darkness"
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280083,
				tcgplayer: 98721
			}
		},
	],

}

export default card
