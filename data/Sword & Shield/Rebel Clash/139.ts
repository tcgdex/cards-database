import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Zacian",
		fr: "Zacian"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Energy Stream",
				fr: "Courant d’Énergie"
			},
			effect: {
				en: "Attach a Metal Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie Metal de votre pile de défausse à ce Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Smashing Edge",
				fr: "Tranchant Fracassant"
			},
			effect: {
				en: "Flip a coin. If tails, discard 2 Energy from this Pokémon.",
				fr: "Lancez une pièce. Si c’est pile, défaussez 2 Énergies de ce Pokémon."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 120,
	types: ["Metal"]
}

export default card
