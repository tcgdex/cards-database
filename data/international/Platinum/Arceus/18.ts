import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Glalie",
		'de-de': "Firnontor"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [362],
	
	hp: 90,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Snorunt"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wreck",
				'de-de': "Abreißen"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 20 damage plus 50 more damage. Discard that Stadium card.",
				'de-de': "Wenn sich eine Stadion-Karte im Spiel befindet, fügt dieser Angriff 20 Schadenspunkte plus 50 weitere Schadenspunkte zu. Lege danach die Stadion-Karte auf den Ablagestapel."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Avalanche",
				'de-de': "Lawine"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It prevents prey from escaping by instantaneously freezing moisture in the air."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85756,
				cardmarket: 278890
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278890,
				tcgplayer: 85756
			}
		},
	],

}

export default card
