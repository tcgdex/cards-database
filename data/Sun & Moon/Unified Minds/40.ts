import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Lumineon",
		fr: "Luminéon",
	},
	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		457,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Finneon",
		fr: "Écayon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Neon Trickery",
				fr: "Supercherie Néon",
			},
			effect: {
				en: "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
				fr: "Vous pouvez déplacer une Énergie du Pokémon Actif de votre adversaire vers l’un de ses Pokémon de Banc.",
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





}

export default card
