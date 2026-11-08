import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Seaking",
		'fr-fr': "Poissoroy",
		'de-de': "Golking"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		119,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Goldeen",
		'fr-fr': "Poissirène"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Rising Lunge",
				'fr-fr': "Botte secrète",
				'de-de': "Rising Lunge"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si c'est pile, cette attaque inflige 10 dégâts.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Horn Swipe",
				'fr-fr': "Koud'korne",
				'de-de': "Horn Swipe"
			},
			effect: {
				'en-us': "Flip 2 coins. If both are heads, this attack does 20 damage plus 40 more damage. If 1 or both are tails, this attack does 20 damage.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 faces, cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires. Si vous obtenez au moins 1 pile, cette attaque inflige 20 dégâts.",
				'de-de': "Flip 2 coins. If both are heads, this attack does 20 damage plus 40 more damage. If 1 or both of them are tails, this attack does 20 damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Using its horn, it bores holes in riverbed boulders, making nests to prevent its eggs from washing away.",
		'fr-fr': "À l'aide de sa corne, il perce des trous dans les rochers situés au fond des rivières, afin d'y faire un nid pour éviter que ses œufs soient emportés par le courant."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274623,
				tcgplayer: 89022
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274623,
				tcgplayer: 89022
			}
		}
	]
}

export default card

