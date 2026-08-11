import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Hitmonchan",
		'fr-fr': "Tygnon",
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bullet Punch",
				'fr-fr': "Pisto-Poing",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mach Cross",
				'fr-fr': "Passage Éclair",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The arm-twisting punches it throws pulverize even concrete. It rests after three minutes of fighting.",
	},

	thirdParty: {
		cardmarket: 288486,
		tcgplayer: 113706
	}
}

export default card
