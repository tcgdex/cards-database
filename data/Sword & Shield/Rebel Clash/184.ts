import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Sandaconda V",
		fr: "Dunaconda V"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Sand Eater",
				fr: "Sablivore"
			},
			effect: {
				en: "Attach a Fighting Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie Fighting de votre pile de défausse à ce Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sand Breath",
				fr: "Souffle Sableux"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon."
			},
			damage: 220,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 220,
	types: ["Fighting"]
}

export default card
