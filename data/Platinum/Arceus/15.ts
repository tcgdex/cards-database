import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Cherrim",
		de: "Kinoso"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		421,
	],
	
	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Cherubi",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cloudy Sky",
				de: "Bedeckter Himmel"
			},
			effect: {
				en: "If any of your Grass Pokémon or Fire Pokémon would be damaged by an attack, reduce that damage by 10 (after applying Weakness and Resistance).",
				de: "Schaden, der deinen - oder -Pokémon durch Angriffe zugefügt würde, wird um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Worry Seed",
				de: "Sorgensamen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 30,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278887,
		tcgplayer: 84255
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
