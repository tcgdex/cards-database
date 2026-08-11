import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Piloswine",
		'de-de': "Keifel"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [221],

	hp: 90,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Swinub",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Freezing Breath",
				'de-de': "Eisiger Atem"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt. Bei 'Zahl' schläft das verteidigende Pokémon jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Trample",
				'de-de': "Niederschlagen"
			},
			effect: {
				'en-us': "For each Benched Pokémon (yours and your opponent's), flip a coin. If heads, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'de-de': "Wirf für jedes Pokémon auf der Bank (auf deiner und der deines Gegners) eine Münze. Bei 'Kopf' fügt dieser Angriff jedem Pokémon 20 Schadenspunkte zu. (Wende keine Schwäche oder Resistenz bei Pokémon auf der Bank an.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 88113,
				cardmarket: 275233
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88113,
				cardmarket: 275233
			},
		},
	],
}

export default card
