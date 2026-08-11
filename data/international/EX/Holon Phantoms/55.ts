import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Whiscash",
		'fr-fr': "Barbicha",
		'de-de': "Welsar"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		340,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Barboach",
		'fr-fr': "Barloche"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pebble Hurl",
				'fr-fr': "Jet de galet",
				'de-de': "Kieselschleuderer"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "Der Schaden dieses Angriffs wird durch die Resistenz des Verteidigenden Pokémon nicht verringert."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Earthquake",
				'fr-fr': "Séisme",
				'de-de': "Erdbeben"
			},
			effect: {
				'en-us': "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de votre Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277025,
		tcgplayer: 90576
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
