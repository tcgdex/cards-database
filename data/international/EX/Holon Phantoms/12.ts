import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Latios δ",
		'fr-fr': "Latios δ",
		'de-de': "Latios"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dual Aura (Duaru oora)",
				'fr-fr': "Double aura",
				'de-de': "Doppel-Aura"
			},
			effect: {
				'en-us': "As long as you have Latias or Latias ex in play, each player's Evolved Pokémon (excluding Pokémon-ex) can't use any Poké-Bodies.",
				'fr-fr': "Tant que vous avez Latias ou Latias ex en jeu, les Pokémon Évolués de chaque joueur (Pokémon-ex exclus) ne peuvent pas utiliser de Poké-Bodies.",
				'de-de': "Solange du Latias oder Latias ex im Spiel hast, können die entwickelten Pokémon beider Spieler (außer Pokémon ex) keine Poké-Body benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dive",
				'fr-fr': "Plongée",
				'de-de': "Taucher"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Blast",
				'fr-fr': "Explosion aquatique",
				'de-de': "Wasserschuss"
			},
			effect: {
				'en-us': "Discard a Water Energy attached to Latios.",
				'fr-fr': "Défaussez une Énergie  attachée à Latios.",
				'de-de': "Lege eine -Energiekarte, die an Latios angelegt ist, auf deinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276982
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
	]
}

export default card
