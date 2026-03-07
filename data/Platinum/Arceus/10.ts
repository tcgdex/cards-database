import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Tangrowth",
		de: "Tangoloss"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		465,
	],
	
	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Tangela",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Guard",
				de: "Floraschild"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Tangrowth by attacks is reduced by 20 (after applying Weakness and Resistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der Tangoloss durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				en: "Swallow Up",
				de: "Runterschlucken"
			},
			effect: {
				en: "Before doing damage, count the remaining HP of the Defending Pokémon and Tangrowth. If the Defending Pokémon has fewer remaining HP than Tangrowth's, this attack does 120 damage instead.",
				de: "Bevor der Schaden zugefügt wird, vergleiche die verbliebenen KP des Verteidigenden Pokémon und Tangoloss. Wenn das Verteidigende Pokémon weniger verbliebene KP hat als Tangoloss, fügt dieser Angriff 120 Schadenspunkte zu."
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

	thirdParty: {
		cardmarket: 278882,
		tcgplayer: 89753
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
