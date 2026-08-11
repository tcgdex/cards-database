import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Staravia",
		'fr-fr': "Etourvol",
		'de-de': "Staravia"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [397],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Starly",
		'fr-fr': "Etourmi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Peck",
				'fr-fr': "Double picpic",
				'de-de': "Doppelschnabel"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Air Crash",
				'fr-fr': "Crash aérien",
				'de-de': "Absturz"
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
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "Recognizing their own weakness, they always live in a group. When alone, a Staravia cries noisily."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89517,
				cardmarket: 278776
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278776,
				tcgplayer: 89517
			}
		},
	],

}

export default card
