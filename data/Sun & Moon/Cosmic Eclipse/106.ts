import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Nosepass",
		fr: "Tarinor",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		299,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Draw Toward",
				fr: "Attirance",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Zap Cannon",
				fr: "Élecanon",
			},
			effect: {
				en: "This Pokémon can't use Zap Cannon during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
