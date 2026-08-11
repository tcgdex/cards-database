import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Pidgeot",
		'fr-fr': "Roucarnage",
		'de-de': "Tauboss"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		18,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Pidgeotto",
		'fr-fr': "Roucoups",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mirror Move",
				'fr-fr': "Mimique",
				'de-de': "Spiegeltrick"
			},
			effect: {
				'en-us': "If Pidgeot was damaged by an attack during your opponent's last turn, this attack does the same amount of damage done to Pidgeot to the Defending Pokémon.",
				'fr-fr': "Si une attaque a infligé des dégâts à Roucarnage lors du dernier tour de votre adversaire, cette attaque inflige le même nombre de dégâts au Pokémon Défenseur.",
				'de-de': "Wenn Tauboss im letzten Zug deines Gegners durch einen Angriff Schaden zugefügt wurde, fügt dieser Angriff dem Verteidigenden Pokémon die gleiche Anzahl Schadenspunkte, die Tauboss zugefügt wurde, zu."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Whirlwind",
				'fr-fr': "Cyclone",
				'de-de': "Wirbelwind"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		'en-us': "By flapping its wings with all its might, PIDGEOT can make a gust of wind capable of bending tall trees.",
	},

	thirdParty: {
		cardmarket: 277788,
		tcgplayer: 88033
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
