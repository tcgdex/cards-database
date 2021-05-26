import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Incineroar V",
		fr: "Félinferno V"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 220,
	types: [
		"Fire",
	],




	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Grand Flame",
				fr: "Flamme Colossale"
			},
			effect: {
				en: "Attach up to 2 Fire Energy cards from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez jusqu’à 2 cartes Énergie Fire de votre pile de défausse à l’un de vos Pokémon de Banc."
			},
			damage: 90,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare Blitzer",
				fr: "Dynamiteur"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 30 dégâts."
			},
			damage: 220,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
