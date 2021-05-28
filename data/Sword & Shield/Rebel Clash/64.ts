import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Heliolisk",
		fr: "Iguolta"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Eerie Impulse",
				fr: "Ondes Étranges"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from 1 of your opponent’s Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie de l’un des Pokémon de votre adversaire."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder",
				fr: "Fatal-Foudre"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 30 dégâts."
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
	hp: 110,
	types: ["Lightning"],
	regulationMark: "D"
}

export default card
