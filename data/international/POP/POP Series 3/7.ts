import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Combusken",
		fr: "Galifeu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [256],

	hp: 70,

	types: [
		"Fire"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-flamme"
			},
			effect: {
				en: "Discard a Fire Energy attached to Combusken.",
				fr: "Défaussez une Énergie  attachée à Galifeu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,
	
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84405,
				cardmarket: 277455
			},
		},
	],

}

export default card
