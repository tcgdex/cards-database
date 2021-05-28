import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Snorlax VMAX",
		fr: "Ronflex VMAX",
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 340,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Snorlax V",
		fr: "Ronflex-V",
	},

	stage: "VMAX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "G-Max Fall",
				fr: "Chute G-Max",
			},
			effect: {
				en: "This attack does 30 more damage for each of your Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
