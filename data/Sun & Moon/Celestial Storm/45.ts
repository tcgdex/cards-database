import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Regice",
		fr: "Regice",
	},
	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		378,
	],
	hp: 120,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Icy Barrier",
				fr: "Barrière Glaciale",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Stadium cards from their hand.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Stade de sa main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent Glace",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
