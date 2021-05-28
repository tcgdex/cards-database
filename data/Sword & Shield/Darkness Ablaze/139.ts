import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Ursaring",
		fr: "Ursaring"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Teddiursa",
		fr: "Teddiursa"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer Arm",
				fr: "Marto-Poing"
			},
			effect: {
				en: "Discard the top card of your opponent’s deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire."
			},
			damage: 70,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch’Griffe"
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

	retreat: 3,
	regulationMark: "D"
}

export default card
