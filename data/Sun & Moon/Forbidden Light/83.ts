import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Flabébé",
		fr: "Flabébé",
	},
	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		669,
	],
	hp: 30,
	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Evolutionary Advantage",
				fr: "Avantage Évolutif",
			},
			effect: {
				en: "If you go second, this Pokémon can evolve during your first turn.",
				fr: "Si vous jouez en second, ce Pokémon peut évoluer pendant votre premier tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
