import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Luxray",
		fr: "Luxray"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Luxio",
		fr: "Luxio"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Raid",
				fr: "Razzia Obscure"
			},
			effect: {
				en: "If this Pokémon evolved from Luxio during this turn, this attack does 100 more damage.",
				fr: "Si ce Pokémon a évolué de Luxio pendant ce tour, cette attaque inflige 100 dégâts supplémentaires."
			},
			damage: "60+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Head Bolt",
				fr: "Éclair Frontal"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 160,
	types: ["Lightning"],
	regulationMark: "D"
}

export default card
