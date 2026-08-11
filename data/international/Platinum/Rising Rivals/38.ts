import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Alakazam E4",
		'fr-fr': "Alakazam  Niv. 56",
		'de-de': "Simsala 4"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [65],
	hp: 80,
	types: [
		"Psychic"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Recover",
				'fr-fr': "Soin",
				'de-de': "Genesung"
			},
			effect: {
				'en-us': "Discard a Psychic Energy attached to Alakazam E4 and remove 4 damage counters from Alakazam E4.",
				'fr-fr': "Défaussez une carte Énergie Psychic attachée à Alakazam  et retirez-lui 4 marqueurs de dégât.",
				'de-de': "Lege 1 an Simsala 4 angelegte -Energie auf deinen Ablagestapel und entferne 4 Schadensmarken von Simsala 4."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mysterious Beam",
				'fr-fr': "Rayon mystérieux",
				'de-de': "Seltsamer Strahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278612,
				tcgplayer: 83503
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278612,
				tcgplayer: 83503
			}
		},
	],

}

export default card
