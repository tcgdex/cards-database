import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-26",
	localId: 26,

	// Card informations
	name: {
		en: "Kingler",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 99,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/26/high",
		},
	},

	evolveFrom: {
		en: "Krabby",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Salt Water",
		},
		text: {
			en: "Search your deck for up to 2 Water Energy cards and attach them to Kingler. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Pump",
		},
		text: {
			en: "Does 30 damage plus 20 more damage for each basic Energy attached to Kingler but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
