import { Card } from '../../../interfaces'
import Set from '../Pokémon Rumble'

const card: Card = {
	name: {
		en: "Pikachu"
	},

	illustrator: undefined,
	rarity: "None",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [37, 129],

	dexId: [25],

	hp: 60,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Volt Tackle"
			},
			effect: {
				en: "Pikachu does 10 damage to itself."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278848,
				tcgplayer: 88096
			},
		}
	]
}

export default card
