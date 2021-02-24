import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Bayleef",
		fr: "Macronium",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		153,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Chikorita",
		fr: "Germignon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Soothing Scent",
				fr: "Senteur Apaisante",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch’Herbe",
			},

			damage: 50,

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
