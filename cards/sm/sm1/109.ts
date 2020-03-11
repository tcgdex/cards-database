import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-109",
	localId: 109,

	// Card informations
	name: {
		en: "Yungoos",
		fr: "Manglouton",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 734,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/109/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/109/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
