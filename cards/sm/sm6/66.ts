import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-66",
	localId: 66,

	// Card informations
	name: {
		en: "Binacle",
		fr: "Opermine",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 688,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/66/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/66/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Allotment",
			fr: "Attribution",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
