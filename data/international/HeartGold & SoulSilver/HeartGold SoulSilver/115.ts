import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Grass Energy",
		'fr-fr': "Énergie Plante",
		'de-de': "Pflanzenenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	hp: 0,

	types: [
		"Grass"
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279087,
				tcgplayer: 85879
			}
		},
	],

}

export default card
