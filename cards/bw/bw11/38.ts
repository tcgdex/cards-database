import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-38",
	localId: 38,

	// Card informations
	name: {
		en: "Dewott",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 502,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/38/high",
		},
	},

	evolveFrom: {
		en: "Oshawott",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Tail",
		},
		text: {
			en: "Flip a coin for each Water Energy attached to this Pokémon. This attack does 10 more damage for each heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
