import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		59,
	],
	hp: 140,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Grand Flame",
				fr: "Flamme Colossale",
			},
			effect: {
				en: "Attach 2 Fire Energy cards from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez 2 cartes Énergie Fire de votre pile de défausse à l’un de vos Pokémon de Banc.",
			},
			damage: 120,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Heat Tackle",
				fr: "Charge Énergétique",
			},
			effect: {
				en: "This Pokémon does 50 damage to itself.",
				fr: "Ce Pokémon s’inflige 50 dégâts.",
			},
			damage: 190,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
