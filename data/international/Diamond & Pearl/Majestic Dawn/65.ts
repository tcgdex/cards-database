import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Glameow",
		'fr-fr': "Chaglam",
		'de-de': "Charmian"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	dexId: [
		431,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	effect: {
		'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
		'fr-fr': "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
	},

	attacks: [
		{
			name: {
				'de-de': "Familienruf",
				'fr-fr': "Appel à la famille",
			},
			effect: {
				'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon-Karte und lege sie auf diene Bank. Mische dein Deck danach.",
				'fr-fr': "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				'de-de': "Reißklaue",
				'fr-fr': "Griffe déchirante",
			},
			damage: 10,
			effect: {
				'de-de': "Wirf 1 Münze. Bei 'Kopf' entferne 1 Energie, die an das Verteidigende Pokémon angelegt ist, und lege sie auf den Ablagestapel deines Gegners.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
		},
	],

	description: {
		'en-us': "With its sharp glare, it puts foes in a mild hypnotic state. It is a very fickle Pokémon.",
	},

	thirdParty: {
		cardmarket: 278114,
		tcgplayer: 85760
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
