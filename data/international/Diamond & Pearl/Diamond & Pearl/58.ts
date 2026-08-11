import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf",
		'de-de': "Pliprin"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		394,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Piplup",
		'fr-fr': "Tiplouf",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Aqua Shower",
				'fr-fr': "Aqua-douche",
				'de-de': "Aquadusche"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Brine",
				'fr-fr': "Saumure",
				'de-de': "Lake"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs de dégât. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

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
		'en-us': "It lives alone, away from others. Apparently, every one of them believes it is the most important.",
	},

	thirdParty: {
		cardmarket: 277557,
		tcgplayer: 88368
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["akira-miyazaki"]
		},
		{
			type: "normal",
			stamp: ["dylan-lefavour"]
		}
	]
}

export default card
