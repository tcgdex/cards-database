import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Flygon ex δ",
		'fr-fr': "Libegon ex δ",
		'de-de': "Libelldra ex"
	},

	suffix: "ex",
	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		330,
	],

	hp: 150,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sand Damage",
				'fr-fr': "Sable Volant",
				'de-de': "Sandsturm"
			},
			effect: {
				'en-us': "As long as Flygon ex is your Active Pokémon, put 1 damage counter on each of your opponent's Benched Basic Pokémon between turns. You can't use more than 1 Sand Damage Poké-Body between turns.",
				'fr-fr': "Tant que Libegon ex est votre Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon de base sur le Banc de votre adversaire entre deux tours. Vous ne pouvez pas utiliser plus d'1 Poké-Body Sable Volant entre deux tours.",
				'de-de': "Solange Libelldra ex dein Aktives Pokémon ist, lege nach dem Zug jedes Spielers je 1 Schadensmarke auf alle Basis-Pokémon auf der Bank deines Gegners. Du kannst nicht mehr als 1 Sandsturm Poké-Body pro Zug einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Pulse",
				'fr-fr': "Vibration psy",
				'de-de': "Psychopuls"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des marqueurs de dégât. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt allen gegnerischen Pokémon auf der Bank, auf denen schon mindestens 1 Schadensmarke liegt, 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277297
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["jun-hasebe"]
		},
	]
}

export default card
