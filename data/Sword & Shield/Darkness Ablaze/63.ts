import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Toxtricity",
		fr: "Salarsen"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Toxel",
		fr: "Toxizap"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Risk Taker",
				fr: "Tête Brûlée"
			},
			effect: {
				en: "Flip a coin. If heads, discard the top 5 cards of your opponent’s deck. If tails, discard the top 5 cards of your deck.",
				fr: "Lancez une pièce. Si c’est face, défaussez les 5 cartes du dessus du deck de votre adversaire. Si c’est pile, défaussez les 5 cartes du dessus de votre deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Jolt",
				fr: "Secousse Tonnerre"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 30 dégâts."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
