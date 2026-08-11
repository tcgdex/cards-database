import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Nidoran♀ δ",
		'fr-fr': "Nidoran ♀ δ",
		'de-de': "Nidoran W"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		29,
	],
	hp: 40,
	types: [
		"Metal",
	],

	stage: "Basic",


	

	retreat: 1,


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Whip",
				'fr-fr': "Mouvemend'keu",
				'de-de': "Rutenschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" kann das Verteidigende Pokémon im nächsten Zug deines Gegners nicht angreifen"
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
