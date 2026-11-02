import { Card } from '../../../interfaces'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		en: "Gyarados"
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [121],

	dexId: [130],

	hp: 130,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Magikarp"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thrash Tackle"
			},
			effect: {
				en: "Gyarados does 20 damage to itself."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278847,
				tcgplayer: 87775
			},
		}
	]
}

export default card
