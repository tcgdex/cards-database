import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Helioptile",
		fr: "Galvaran"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Jolt",
				fr: "Secousse Tonnerre"
			},
			effect: {
				en: "This Pokémon also does 10 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 10 dégâts."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 70,
	types: ["Lightning"],
	regulationMark: "D"
}

export default card
