import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Bewear",
		fr: "Chelours"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson"
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
			damage: 90,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Throw",
				fr: "Grand Lancer"
			},
			effect: {
				en: "Flip a coin. If heads, discard your opponent’s Active Pokémon and all attached cards.",
				fr: "Lancez une pièce. Si c’est face, défaussez le Pokémon Actif de votre adversaire et toutes les cartes attachées."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 140,
	types: ["Colorless"]
}

export default card
