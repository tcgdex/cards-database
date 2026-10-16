import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2017'

const card: Card = {
	dexId: [
		25,
	],
	set: Set,
	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu"
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Lightning",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Wave",
				fr: "Cage-Éclair",
				de: "Donnerwelle"
			},
			effect: {
				en: "Flip a coin, If heads your opponent's active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
				de: "Elektroball"
			},
			damage: "50",
		},
	],

	illustrator: "kirisAki",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 301847,
				tcgplayer: 152685
			}
		}
	]
}

export default card

