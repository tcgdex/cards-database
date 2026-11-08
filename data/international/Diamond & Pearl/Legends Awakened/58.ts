import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'de-de': "Lanturn"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Chinchou",
		'fr-fr': "Lampi",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strong Current",
				'fr-fr': "Courant fort",
				'de-de': "Starke Strömung"
			},
			effect: {
				'en-us': "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon.",
				'fr-fr': "Déplacez une carte Énergie attachée au Pokémon Défenseur sur un autre des Pokémon de votre adversaire.",
				'de-de': "Entferne 1 an das Verteidigende Pokémon angelegte Energiekarte und lege sie an 1 anderes Pokémon deines Gegners an."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Konfustrahl"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Lanturn's light can shine up from great depths. It is nicknamed \"The Deep-Sea Star.\"",
		'fr-fr': "La lumière de LANTURN surgit des profondeurs. On le surnomme \"étoile des profondeurs\"."
	},

	thirdParty: {
		cardmarket: 278207,
		tcgplayer: 86608
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
