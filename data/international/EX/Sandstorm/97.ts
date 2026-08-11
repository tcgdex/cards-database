import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Kabutops ex",
		'fr-fr': "Kabutops ex",
		'de-de': "Kabutops ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [141],

	hp: 150,

	stage: "Stage2",
	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Kabuto",
		'fr-fr': "Kabuto"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hydrocutter",
				'fr-fr': "Hydro-lame",
				'de-de': "Hydrocutter"
			},
			effect: {
				'en-us': "Flip a number of coins equal to the amount of Energy attached to Kabutops ex. This attack does 40 damage times the number of heads. You can't flip more than 3 coins in this way.",
				'fr-fr': "Lancez autant de pièces qu'il y a de cartes Énergie attachées à Kabutops ex. Cette attaque inflige 40 dégâts multipliés par le nombre de face. Vous ne pouvez pas lancer plus de trois pièces.",
				'de-de': "Flip a number of coins equal to the amout of Enegry attached to Kabutops ex. This attack does 40 damage times the number of heads. You can't flip more than 3 coins in this way."
			},
			damage: "40×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Drain",
				'fr-fr': "Spirale épuisante",
				'de-de': "Spiral Drain"
			},
			effect: {
				'en-us': "Remove 2 damage counter from Kabutops ex (remove 1 if there is only 1).",
				'fr-fr': "Retirez à Kabutops deux marqueurs de dégât (ou un s'il n'y en a qu'un).",
				'de-de': "Remove 2 damage counters from Kabutops ex (remove 1 if there is only 1)."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86402,
				cardmarket: 275874
			}
		},
	]
}

export default card
