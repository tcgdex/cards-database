import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "M Mewtwo EX",
		fr: "M-Mewtwo EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 210,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Mewtwo-EX",
		fr: "Mewtwo-EX",
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Infinity",
				fr: "Infinité Psy",
			},
			effect: {
				en: "This attack does 30 more damage times the amount of Energy attached to both Active Pokémon. This attack's damage isn't affected by Weakness.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d'Énergies attachées aux deux Pokémon Actifs. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	suffix: "EX"
}

export default card
