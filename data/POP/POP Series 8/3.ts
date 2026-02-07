import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Luxray",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		405,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Luxio",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Fang",
			},
			effect: {
				en: "As long as Luxray is your Active Pokémon, any damage done by an opponent’s attack is reduced by 10 (before applying Weakness and Resistance).",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder",
			},
			effect: {
				en: "Flip a coin. If tails, Luxray does 40 damage to itself.",
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		en: "When its eyes gleam gold, it can spot hiding prey–even those taking shelter behind a wall."
	},

	retreat: 1,

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'holo', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 278404,
		tcgplayer: 86948
	}
}

export default card
