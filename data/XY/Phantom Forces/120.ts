import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "M Manectric EX",
		fr: "M-Élecsprint EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 210,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Manectric-EX",
		fr: "Élecsprint-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Turbo Bolt",
			},
			effect: {
				en: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	suffix: "EX",
	retreat: 0
}

export default card
