import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Heracross",
		fr: "Scarhino",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		214,
	],
	hp: 120,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Powerful Friends",
				fr: "Force de l’Amitié",
			},
			effect: {
				en: "If you have any Stage 2 Pokémon on your Bench, this attack does 90 more damage.",
				fr: "Si vous avez au moins un Pokémon de Niveau 2 sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
