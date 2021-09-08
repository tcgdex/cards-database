import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Venonat",
		fr: "Mimitoss",
	},
	illustrator: "Hideaki Hakozaki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		48,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leech Life",
				fr: "Vampirisme",
			},
			effect: {
				en: "Remove from Venomat the number of damage counters equal to the damage you did to the Definding Pokémon.",
				fr: "Retirez à Mimitoss un nombre de marqueurs de dégât équivalant aux dégâts que vous avez infligés au Pokémon Défenseur.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
