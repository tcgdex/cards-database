import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Lickitung δ",
		fr: "Excelangue δ ESPÈCES DELTA"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		108,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lap Up",
				fr: "Gober"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Delta Mind",
				fr: "Esprit Delta"
			},
			effect: {
				en: "Put 1 damage counter on 1 of your opponent's Pokémon. If that Pokémon has δ on its card, put 3 damage counters instead.",
				fr: "Placez 1 marqueur de dégât sur 1 des Pokémon de votre adversaire. Si ce Pokémon possède le symbole δ, placez 3 marqueurs de dégât au lieu d'1."
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
