import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Electrode",
		'fr-fr': "Électrode",
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Lightning Ball",
				'fr-fr': "Boule Éclair",
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electroblast",
				'fr-fr': "Électro-Explosion",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It explodes in response to even minor stimuli. It is feared, with the nickname of \"The Bomb Ball.\"",
	},

	thirdParty: {
		cardmarket: 394782,
		tcgplayer: 197666
	}
}

export default card
