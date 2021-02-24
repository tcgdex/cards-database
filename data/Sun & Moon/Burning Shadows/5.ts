import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Ortide",
	},
	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		44,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stinky Scent",
				fr: "Parfum Nauséabond",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch’Herbe",
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
