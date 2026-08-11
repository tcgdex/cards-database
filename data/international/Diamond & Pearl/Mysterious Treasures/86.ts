import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Kricketot",
		'fr-fr': "Crikzik",
		'de-de': "Zirpurze"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		401,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Basis-Pokémon-Karte und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sling",
				'fr-fr': "Lance-pierres",
				'de-de': "Schleudern"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It shakes its head back to front, causing its antennae to hit each other and sound like a xylophone.",
		'fr-fr': "Quand il bascule sa tête d'avant en arrière, ses antennes se heurtent dans un son de xylophone."
	},

	thirdParty: {
		cardmarket: 277715,
		tcgplayer: 86527
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["countdown-calendar"]
		}
	]
}

export default card
