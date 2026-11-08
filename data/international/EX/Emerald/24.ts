import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Claydol",
		'fr-fr': "Kaorine",
		'de-de': "Lepumentas"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		344,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Levitate",
				'fr-fr': "Lévitation",
				'de-de': "Levitate"
			},
			effect: {
				'en-us': "As long as Claydol has any Energy attached to it, the Retreat Cost for Claydol is 0.",
				'fr-fr': "Tant que Kaorine possède une Énergie, son Coût de retraite est de 0.",
				'de-de': "As long as Claydol has any Energy attached to it, the Retreat Cost for Claydol is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Smash",
				'fr-fr': "Éclate-roc",
				'de-de': "Rock Smash"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 30 damage plus 10 more damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 84335,
		cardmarket: 276535
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84335,
				cardmarket: 276535
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 84335,
				cardmarket: 276535
			},
		}
	],
}

export default card
