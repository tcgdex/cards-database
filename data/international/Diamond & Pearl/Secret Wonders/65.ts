import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol",
		'de-de': "Hubelupf"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		188,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Cotton Balloon",
				'fr-fr': "Ballon de coton",
				'de-de': "Baumwollballon"
			},
			effect: {
				'en-us': "If Skiploom has any Grass Energy attached to it, any damage done to Skiploom by attacks from your opponent's Evolved Pokémon is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Si Floravol possède de l'Énergie Grass, tous dégâts qui lui sont infligés par des attaques de Pokémon Évolués de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Solange an Hubelupf mindestens 1 -Energie angelegt ist, wird aller Schaden, der Hubelupf von Angriffen von entwickelten Pokémon deines Gegners um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "U-turn",
				'fr-fr': "Demi-tour",
				'de-de': "Kehrtwende"
			},
			effect: {
				'en-us': "Switch Skiploom with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Floravol avec 1 des Pokémon de votre Banc.",
				'de-de': "Tausche Hubelupf gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		'en-us': "It blooms when the weather warms. It floats in the sky to soak up as much sunlight as possible.",
	},

	thirdParty: {
		cardmarket: 277818,
		tcgplayer: 89256
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
			stamp: ["yuka-furusawa"]
		}
	]
}

export default card
