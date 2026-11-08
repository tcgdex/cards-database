import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Reshiram",
		'fr-fr': "Reshiram",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		643,
	],

	hp: 120,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Repeater Blaze",
				'fr-fr': "Multi-Brasier"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un coté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When Reshiram's tail flares, the heat energy moves the atmosphere and changes the world's weather.",
	},

	thirdParty: {
		cardmarket: 289797
	}
}

export default card
