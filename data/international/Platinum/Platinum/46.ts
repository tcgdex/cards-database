import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Cranidos",
		'fr-fr': "Kranidos",
		'de-de': "Koknodon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [408],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Skull Fossil",
		'fr-fr': "Fossile crâne"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Rock Smash",
				'fr-fr': "Éclate-roc",
				'de-de': "Rock Smash"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Knock Over",
				'fr-fr': "Culbute",
				'de-de': "Knock Over"
			},
			effect: {
				'en-us': "You may discard any Stadium card in play.",
				'fr-fr': "Vous pouvez défausser n'importe quelle carte Stade en jeu.",
				'de-de': "You may discard any Stadium card in play."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A lifelong jungle dweller from 100 million years ago, it would snap obstructing trees with head butts."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84460,
				cardmarket: 278467
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278467,
				tcgplayer: 84460
			}
		}
	],

}

export default card
