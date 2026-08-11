import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Scizor E4",
		'fr-fr': "Cizayox  Niv. 49",
		'de-de': "Scherox 4"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [212],
	hp: 80,
	types: [
		"Grass"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Cut",
				'fr-fr': "Coupe",
				'de-de': "Zerschneider"
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
				'en-us': "Crushing Blow",
				'fr-fr': "Coup écrasant",
				'de-de': "Brechschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278622,
				tcgplayer: 88966
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278622,
				tcgplayer: 88966
			}
		},
	],

}

export default card
