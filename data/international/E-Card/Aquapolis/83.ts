import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol",
		'de-de': "Hoppspross"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [187],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Lightweight",
				'fr-fr': "Poids-plume",
				'de-de': "Leichtgewicht"
			},
			effect: {
				'en-us': "You pay Colorless less to retreat Hoppip for each Grass Energy attached to it.",
				'fr-fr': "Vous payez  de moins pour faire battre Granivol en retraite pour chaque Énergie  qui lui est attachée.",
				'de-de': "Für jede an Hoppspross angelegte -Energie zahlst du  weniger, wenn du es zurückziehst."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Careless Tackle",
				'fr-fr': "Plaquage imprudent",
				'de-de': "Unvorsichtiger Tackle"
			},
			effect: {
				'en-us': "Hoppip does 10 damage to itself.",
				'fr-fr': "Granivol s'inflige 30 dégâts.",
				'de-de': "Hoppspross fügt sich selber 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86178,
				cardmarket: 275157
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86178,
				cardmarket: 275157
			}
		},
	]
}

export default card
