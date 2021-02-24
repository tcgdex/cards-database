import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Drifloon",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		425,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Blowing Wind",
			},
			effect: {
				en: "Flip a coin. If heads, put 1 of your Benched Pokémon and all cards attached to on top of your deck. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Ominous Wind",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused and can't retreat during your opponent's next turn.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],




}

export default card
