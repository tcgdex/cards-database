import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Beldum",
		'fr-fr': "Terhal",
		'de-de': "Tanhel"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		374,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flip Over",
				'fr-fr': "Faire ressort",
				'de-de': "Flip Over"
			},
			effect: {
				'en-us': "Beldum does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
				'fr-fr': "Terhal s'inflige 10 dégâts. Vous ne pouvez pas appliquer la Faiblesse et la Résistance à ces dégâts.",
				'de-de': "Beldrum does 10 damage to itself, and don't apply Weakness and resistance to this damage."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83785,
				cardmarket: 276458
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 83785,
				cardmarket: 276458
			},
		},
	],

}

export default card
