import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Latias δ",
		'fr-fr': "Latias δ",
		'de-de': "Latias"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		380,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dual Aura",
				'fr-fr': "Double aura",
				'de-de': "Doppel-Aura"
			},
			effect: {
				'en-us': "As long as you have Latios or Latios ex in play, each player's Evolved Pokémon (excluding Pokémon-ex) can't use any Poké-Bodies.",
				'fr-fr': "Tant que vous avez Latios ou Latios ex en jeu, les Pokémon Évolués de chaque joueur (Pokémon-ex exclus) ne peuvent pas utiliser de Poké-Bodies.",
				'de-de': "Solange du Latios oder Latios ex im Spiel hast, können die entwickelten Pokémon beider Spieler (außer Pokémon ex) keine Poké-Body benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spearhead",
				'fr-fr': "Meneur",
				'de-de': "Speerspitze"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Griffe de dragon",
				'de-de': "Drachenklaue"
			},

			damage: 40,

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
			type: "Psychic",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276981
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
