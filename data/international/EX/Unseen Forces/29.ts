import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Lugia",
		'fr-fr': "Lugia",
		'de-de': "Lugia"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aeroblast",
				'fr-fr': "Aeroblast",
				'de-de': "Aeroblast"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				'de-de': "Flip 2 coins. This attack does 20 damage plus 20 more damage for each heads."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86906,
				cardmarket: 276675
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86906,
				cardmarket: 276675
			},
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 97708,
			},
		},
		{
			type: "normal",
			stamp: ["pokemon-rocks-america"],
			thirdParty: {
				tcgplayer: 221299,
			},
		}
	],
}

export default card
