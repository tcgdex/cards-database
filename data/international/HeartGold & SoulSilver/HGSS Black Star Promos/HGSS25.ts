import { Card } from 'models/database/card'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Hitmonlee",
		'fr-fr': "Kicklee"
	},
	illustrator: "Kouki Saitou",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [106],
	hp: 80,
	types: [
		"Fighting"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Kick",
				'fr-fr': "Koud'pied"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "High Jump Kick",
				'fr-fr': "Pied voltige"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "If it starts kicking repeatedly, both legs will stretch even longer to strike a fleeing foe."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275601,
				tcgplayer: 86109
			}
		},
	],

}

export default card
