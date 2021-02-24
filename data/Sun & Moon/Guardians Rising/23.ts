import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool",
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		72,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sludge Shock",
				fr: "Choc Détritus",
			},
			effect: {
				en: "The Defending Pokémon can't be healed during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas être soigné pendant le prochain tour de votre adversaire.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
