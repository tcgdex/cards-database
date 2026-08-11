import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou",
		'de-de': "Kleinstein"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [74],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Knuckle Punch",
				'fr-fr': "Coud'phalange",
				'de-de': "Knöchelhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Focus Fist",
				'fr-fr': "Poing concentré",
				'de-de': "Fokussierfaust"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	retreat: 2,

	description: {
		'en-us': "At rest, it looks just like a rock. Carelessly stepping on it will make it swing its fists angrily."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85692,
				cardmarket: 278796
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278796,
				tcgplayer: 85692
			}
		},
	],

}

export default card
