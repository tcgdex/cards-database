import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor",
		'de-de': "Ultrigaria"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [70],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Bellsprout",
		'fr-fr': "Chétiflor"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Growth",
				'fr-fr': "Croissance",
				'de-de': "Growth"
			},
			effect: {
				'en-us': "Attach up to 2 Grass Energy cards from your hand to Weepinbell.",
				'fr-fr': "Si c'est face, vous pouvez attacher jusqu'à 2 cartes Énergies  de votre main à Boustiflor.",
				'de-de': "Attach up to 2  Energy cards from your hand to Weepinbell."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Double Razor Leaf",
				'fr-fr': "Double tranch'herb",
				'de-de': "Double Razor Leaf"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 30 damage times the number of heads."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 90551,
				cardmarket: 275138
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90551,
				cardmarket: 275138
			}
		},
	]
}

export default card
