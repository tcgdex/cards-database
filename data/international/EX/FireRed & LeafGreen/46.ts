import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte",
		'de-de': "Quaputzi"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		61,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Poliwag",
		'fr-fr': "Ptitard"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Stream",
				'fr-fr': "Courant d'énergie",
				'de-de': "Energiestrom"
			},
			effect: {
				'en-us': "Search your discard pile for a basic Energy card and attach it to Poliwhirl.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie de base et attachez-la à Têtarte.",
				'de-de': "Durchsuche deinen Ablagestapel nach einer Basis- Energiekarte und lege sie an Quaputzi an."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Bubble",
				'fr-fr': "Écume",
				'de-de': "Blubber"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276222,
				tcgplayer: 88265
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276222,
				tcgplayer: 88265
			},
		},
	],
}

export default card
