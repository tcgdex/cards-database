import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Cherrim",
		'de-de': "Kinoso"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [421],
	
	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Cherubi"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Cloudy Sky",
				'de-de': "Bedeckter Himmel"
			},
			effect: {
				'en-us': "If any of your Grass Pokémon or Fire Pokémon would be damaged by an attack, reduce that damage by 10 (after applying Weakness and Resistance).",
				'de-de': "Schaden, der deinen - oder -Pokémon durch Angriffe zugefügt würde, wird um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Worry Seed",
				'de-de': "Sorgensamen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
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

	description: {
		'en-us': "If it senses strong sunlight, it opens its folded petals to absorb the sun's rays with its whole body."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84255,
				cardmarket: 278887
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278887,
				tcgplayer: 84255
			}
		},
	],

}

export default card
