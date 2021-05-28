import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Toucannon",
		fr: "Bazoucan"
	},

	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Trumbeak",
		fr: "Piclairon"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Cutoff",
				fr: "Coupure d’Énergie"
			},
			effect: {
				en: "Discard an Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire."
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Loop Cannon",
				fr: "Canon Cyclique"
			},
			effect: {
				en: "Put 2 Energy attached to this Pokémon into your hand.",
				fr: "Ajoutez à votre main 2 Énergies attachées à ce Pokémon."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
