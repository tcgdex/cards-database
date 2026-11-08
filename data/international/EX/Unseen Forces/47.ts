import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Shuckle",
		'fr-fr': "Caratroc",
		'de-de': "Pottrott"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		213,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Extra Tight",
				'fr-fr': "Super serré",
				'de-de': "Extra-tight"
			},
			effect: {
				'en-us': "Prevent all damage done to Shuckle by attacks from your opponent's Pokémon-ex.",
				'fr-fr': "Prévenez tous les dégâts infligés à Caratroc par des attaques du Pokémon-ex de votre adversaire.",
				'de-de': "Prevent all damage done to Shuckle by attacks from your opponent's Pokémon-ex."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Toxic",
				'fr-fr': "Toxik",
				'de-de': "Toxic"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
				'de-de': "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89190,
				cardmarket: 276693
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89190,
				cardmarket: 276693
			},
		}
	],
}

export default card
