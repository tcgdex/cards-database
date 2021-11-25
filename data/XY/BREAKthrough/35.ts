import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "M Glalie EX",
		fr: "M-Oniglali EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		362,
	],

	hp: 220,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Glalie-EX",
		fr: "Oniglali-EX",
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cryo Mouth",
				fr: "Cryo Bouche",
			},
			effect: {
				en: "If this Pokémon has 10 or more damage counters on it, this attack does 150 more damage.",
				fr: "Si ce Pokémon a 10 marqueurs de dégâts ou plus, cette attaque inflige 150 dégâts supplémentaires.",
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "EX"
}

export default card
