import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Pansear",
		fr: "Flamajou",
	},

	illustrator: "sui",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		513,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-Griffe",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "This Pokémon lives in caves with volcanoes. The fire within the tuft on its head can reach 600 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 290104
	}
}

export default card
