import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'de-de': "Pummeluff"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [39],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Doubleslap",
				'fr-fr': "Torgnoles",
				'de-de': "Doubleslap"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rest",
				'fr-fr': "Repos",
				'de-de': "Rest"
			},
			effect: {
				'en-us': "Remove all Special Conditions and 3 damage counters from Jigglypuff (all if there are less than 3). Jigglypuff is now Asleep.",
				'fr-fr': "Retirez à Rondoudou tous ses États Spéciaux ainsi que 3 marqueurs de dégât (si Rondoudou a moins de dégâts que cela, retirez-les lui tous). Rondoudou est maintenant Endormi.",
				'de-de': "Remove all Special Conditions and 3 damage counters from Jigglypuff (all if there are less than 3). Jigglypuff is now Asleep."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275818,
				tcgplayer: 86314
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275818,
				tcgplayer: 86314
			}
		},
	],

}

export default card
