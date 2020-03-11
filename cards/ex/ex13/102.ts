import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-102",
	localId: 102,

	// Card informations
	name: {
		en: "Gyarados Star δ",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Growth",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, search your discard pile for a basic Energy card and attach it to Gyarados Star.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "All-out Blast",
		},
		text: {
			en: "Discard cards from the top of your deck until you have 1 card left. This attack does 50 damage plus 20 more damage for each Energy card you discarded in this way.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
