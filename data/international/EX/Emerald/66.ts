import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
		'de-de': "Spoink"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		325,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lunge",
				'fr-fr': "Coup rapide",
				'de-de': "Lunge"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 89474,
		cardmarket: 276577
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89474,
				cardmarket: 276577
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89474,
				cardmarket: 276577
			},
		}
	],
}

export default card
