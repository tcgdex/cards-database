import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Shuckle",
		fr: "Caratroc"
	},
	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Fighting",
	],




	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Deck Distiller",
				fr: "Distillateur de Deck"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent’s deck.",
				fr: "Lancez une pièce jusqu’à obtenir un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				fr: "Jet-Pierres"
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
