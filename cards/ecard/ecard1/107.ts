import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-107",
	localId: 107,

	// Card informations
	name: {
		en: "Dratini",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 147,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.WATER,
			Type.LIGHTNING
		],
		name: {
			en: "Dragon Smash",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
	}],







	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
