import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
		'de-de': "Draschel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [372],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Bagon",
		'fr-fr': "Draby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scrunch",
				'fr-fr': "Compresse",
				'de-de': "Scrunch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Shelgon during your opponent's next turn. (Any other effects of attacks still happen.)",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Drackhaus lors du prochain tour de votre adversaire. (Tous les autres effets sont appliqués.)",
				'de-de': "Flip a coin. If heads, prevent all damage done to Shelgon during your opponent's next turn. (Any other effects of attacks still happen.)"
			},

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Rolling Attack",
				'fr-fr': "Attaque qui roule",
				'de-de': "Rolling Attack"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Fire",
			value: "-30"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89122,
				cardmarket: 275897
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89122,
				cardmarket: 275897
			},
		},
	],

}

export default card
