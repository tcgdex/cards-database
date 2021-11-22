import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "M Ampharos EX",
		fr: "M-Pharamp-EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 220,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Ampharos-EX",
		fr: "Pharamp-EX",
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Exavolt",
				fr: "Exavolt",
			},
			effect: {
				en: "You may do 50 more damage and leave your opponent's Active Pokémon Paralyzed. If you do, this Pokémon does 30 damage to itself.",
				fr: "Vous pouvez infliger 50 dégâts supplémentaires et laisser le Pokémon Actif de votre adversaire Paralysé. Dans ce cas, ce Pokémon s'inflige 30 dégâts.",
			},
			damage: "120+",

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

	retreat: 3,
	suffix: "EX"
}

export default card
