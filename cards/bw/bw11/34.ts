import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-34",
	localId: 34,

	// Card informations
	name: {
		en: "Prinplup",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 394,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/34/high",
		},
	},

	evolveFrom: {
		en: "Piplup",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Splash",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
