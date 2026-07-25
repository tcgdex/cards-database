import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Geodude",
		fr: "Racaillou",
		de: "Kleinstein"
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
				en: "Knuckle Punch",
				fr: "Coud'phalange",
				de: "Knöchelhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Focus Fist",
				fr: "Poing concentré",
				de: "Fokussierfaust"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
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
		en: "At rest, it looks just like a rock. Carelessly stepping on it will make it swing its fists angrily."
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
