import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Psychic Energy",
		'fr-fr': "Énergie Psy",
		'de-de': "Psychoenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	hp: 0,

	types: [
		"Psychic"
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279091,
				tcgplayer: 88424
			}
		},
	],

}

export default card
