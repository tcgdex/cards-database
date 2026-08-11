import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'de-de': "Glutexo"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scary Face",
				'fr-fr': "Grimace",
				'de-de': "Grimasse"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer ou battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" kann das Verteidigende Pokémon im nächsten Zug deines Gegners weder angreifen noch sich zurückziehen."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flame Tail",
				'fr-fr': "Queue de flammes",
				'de-de': "Flammenschweif"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277334,
		tcgplayer: 84230
	},

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

