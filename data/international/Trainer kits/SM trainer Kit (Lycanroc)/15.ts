import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [731],
	set: Set,

	name: {
		'en-us': "Pikipek",
		'fr-fr': "Picassaut",
		'es-es': "Pikipek",
		'it-it': "Pikipek",
		'pt-br': "Pikipek",
		'de-de': "Peppeck"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: [
		"Colorless"
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rock Smash"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage."
			},
			damage: "10+"
		},
	],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297246,
				tcgplayer: 152836
			}
		},
	],

}

export default card