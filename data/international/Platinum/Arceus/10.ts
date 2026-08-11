import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Tangrowth",
		'de-de': "Tangoloss"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [465],
	
	hp: 110,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Tangela"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Guard",
				'de-de': "Floraschild"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Tangrowth by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der Tangoloss durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swallow Up",
				'de-de': "Runterschlucken"
			},
			effect: {
				'en-us': "Before doing damage, count the remaining HP of the Defending Pokémon and Tangrowth. If the Defending Pokémon has fewer remaining HP than Tangrowth's, this attack does 120 damage instead.",
				'de-de': "Bevor der Schaden zugefügt wird, vergleiche die verbliebenen KP des Verteidigenden Pokémon und Tangoloss. Wenn das Verteidigende Pokémon weniger verbliebene KP hat als Tangoloss, fügt dieser Angriff 120 Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its arms are made of plants that bind themselves to things. They grow back right away if cut."
	},

	variants: [		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89753,
				cardmarket: 278882
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125056
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278882,
				tcgplayer: 89753
			}
		},
	],

}

export default card
