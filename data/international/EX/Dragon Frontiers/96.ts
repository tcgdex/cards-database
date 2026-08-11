import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Latios ex δ",
		'fr-fr': "Latios ex δ",
		'de-de': "Latios ex"
	},

	suffix: "ex",
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Link Wing",
				'fr-fr': "Chaîne d'aile",
				'de-de': "Verbindende Schwinge"
			},
			effect: {
				'en-us': "The Retreat Cost for each of your Latias, Latias ex, Latios, and Latios ex is 0.",
				'fr-fr': "Le Coût de retraite de chacun de vos Latias, Latias ex, Latios et Latios ex est de 0.",
				'de-de': "Jedes Latias, Latias ex, Latios und Latios ex das du im Spiel hast, hat Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Barrier",
				'fr-fr': "Barrière de glace",
				'de-de': "Eisbarriere"
			},
			effect: {
				'en-us': "Prevent all effects of an attack, including damage, done to Latios ex by your opponent's Pokémon-ex during your opponent's next turn.",
				'fr-fr': "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Latios ex par les Pokémon-ex de votre adversaire lors de son prochain tour.",
				'de-de': "Verhindere alle Effekte von Angriffen inklusive Schaden, die Latios ex von gegnerischen Pokémon-ex während des nächsten Zuges deines Gegners zugefügt werden."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Splash",
				'fr-fr': "Hydro-éclaboussure",
				'de-de': "Hydroplatscher"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277301
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
