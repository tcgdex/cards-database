import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-76",
	localId: 76,

	// Card informations
	name: {
		en: "Reuniclus",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 579,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/76/high",
		},
	},

	evolveFrom: {
		en: "Duosion",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kyoko Umemoto",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Future Sight",
		},
		text: {
			en: "Look at the top 5 cards of your deck and put them back on top of your deck in any order.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Net Force",
		},
		text: {
			en: "Does 40 damage times the number of Reuniclus you have in play.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
