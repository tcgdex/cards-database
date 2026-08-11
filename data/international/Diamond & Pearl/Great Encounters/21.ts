import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass",
		'de-de': "Lapras"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Carry In",
				'fr-fr': "Importer",
				'de-de': "Hereintragen"
			},
			effect: {
				'en-us': "Search your deck for a Pokémon Tool card, a Supporter card, and a basic Energy card, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte Outil Pokémon, une carte Supporter et une carte Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Pokémon-Ausrüstungs-, 1 Unterstützer- und 1 Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse vague",
				'de-de': "Wellenplatscher"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It loves crossing the sea with people and Pokémon on its back. It understands human speech.",
	},

	thirdParty: {
		cardmarket: 277923,
		tcgplayer: 86618
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
