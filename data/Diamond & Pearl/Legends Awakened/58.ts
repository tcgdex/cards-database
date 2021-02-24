import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		171,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Chinchou",
		fr: "Lampi",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strong Current",
				fr: "Courant fort",
			},
			effect: {
				en: "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon.",
				fr: "Déplacez une carte Énergie attachée au Pokémon Défenseur sur un autre des Pokémon de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
