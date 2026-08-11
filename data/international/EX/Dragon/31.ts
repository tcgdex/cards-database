import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Grovyle",
		'fr-fr': "Massko",
		'de-de': "Reptain"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [253],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Treecko",
		'fr-fr': "Arcko"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Fury Cutter",
				'fr-fr': "Taillade",
				'de-de': "Fury Cutter"
			},
			effect: {
				'en-us': "Flip 4 coins. If all of them are heads, this attack does 10 damage plus 60 more damage. If not, this attack does 10 damage plus 10 more damage for each heads.",
				'fr-fr': "Lancez quatre pièces. Si ce sont quatre faces, cette attaque inflige 10 dégâts plus 60 dégâts supplémentaires. Sinon, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires multipliés par le nombre de faces.",
				'de-de': "Flip 4 coins. If all of them are heads, this attack does 10 damage plus 60 more damage. If not, this attack does 10 damage plus 10 more damage for each heads."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85937,
				cardmarket: 275908
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85937,
				cardmarket: 275908
			},
		},
	],

}

export default card
