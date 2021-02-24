import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Croagunk",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		453,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ghastly Sound",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Supporter cards from his or her hand during his or her next turn.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Finger Poke",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],





}

export default card
