import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Cascoon",
		fr: "Blindalys",
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		268,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-Venin",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Defense",
				fr: "Mur de Fer",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
