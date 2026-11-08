import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Shuckle",
		'de-de': "Pottrott"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [213],

	hp: 30,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Vase Body",
				'de-de': "Vasenkörper"
			},
			effect: {
				'en-us': "All damage done by attacks to Shuckle is reduced by 20 (after applying Weakness and Resistance).",
				'de-de': "Jeder Schaden, der Pottrott durch Angriffe zugefügt wird, wird um 20 reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				'en-us': "Poisonous Saliva",
				'de-de': "Giftiger Speichel"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'de-de': "Das verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89189,
				cardmarket: 275354
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89189,
				cardmarket: 275354
			},
		},
	],
}

export default card
